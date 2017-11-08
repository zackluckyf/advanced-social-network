import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../dist/server/main.bundle');
const api = require('./routes/api');
const PORT = process.env.PORT || 4000;
const DIST_FOLDER = path.join(process.cwd(), 'dist');
var models = require('../models').getModels();
var passport = require('passport');

enableProdMode();

const whitelist = [ 
  'https://zack-social-network.herokuapp.com/',
  'http://localhost:4000',
  'http://localhost:4200'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      console.log(origin);
      callback(null, true);
    } else {
      console.log(origin);
      callback(new Error('Not allowed by CORS'));
    }
  }
};

const app = express();

const template = fs.readFileSync(path.join(DIST_FOLDER, 'browser', 'index.html')).toString();

// cors middleware lines are an issue currently

// Middleware
app.use(helmet());
// app.use(cors(corsOptions));
app.enable('trust proxy');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(compression());
// app.options('*', cors());


// maybe only for heroku? more research needed
let forceSsl = (req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    return next();
};

if(process.env.NODE_ENV === 'production' || process.env.HEROKU){
  app.use(forceSsl);
}

app.set('port', (PORT));

// Set up Angular routing
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', path.join(DIST_FOLDER, 'browser'));

// Set our api routes
app.use('/api', api);

app.get('*.*', express.static(path.join(DIST_FOLDER, 'browser')));

app.get('*', (req, res) => {
  res.render('index', { req });
});

models.sequelize.sync().then(() => {
  app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
  })
})