import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app-server.module.ngfactory';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

const compression = require('compression');

const api = require('./routes/api');
const PORT = 4000;

enableProdMode();

const app = express();

// Middleware

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Compression setup
app.use(compression());

// maybe only for heroku? more research needed
function forceSsl (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    return next();
};

if(process.env.NODE_ENV === 'production' || process.env.HEROKU){
  app.use(forceSsl);
}

// set variables

// set port variable
app.set('port', (process.env.PORT || PORT));

// Set our api routes
app.use('/api', api);

let template = readFileSync(join(__dirname, '..', 'dist', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url };

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src')

app.get('*.*', express.static(join(__dirname, '..', 'dist')));

app.get('/*', (req, res) => {
  res.render('index', { req });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});