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
var expressWs = require('express-ws')

const app = express();
// express websocket initialization
expressWs(app);

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../dist/server/main.bundle');
const api = require('./routes/api');
const PORT = process.env.PORT || 4000;
const DIST_FOLDER = path.join(process.cwd(), 'dist');
var models = require('../models').getModels();
var passport = require('passport');

enableProdMode();

const whitelist = [ 
  'https://zack-social-network.herokuapp.com',
  'http://localhost:4000', // uncomment for dev
  'http://localhost:4200' // uncomment for dev
];

const corsOptions = {
  origin: (origin, callback) => {
    // have to add !origin for when it isnt a CORS request
    // otherwise it blocks on same server and stuff like postman I would assume
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error(`${origin} not allowed by CORS`));
    }
  }
};


const template = fs.readFileSync(path.join(DIST_FOLDER, 'browser', 'index.html')).toString();

// Middleware
app.use(helmet());
app.use(cors(corsOptions));
app.enable('trust proxy');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(compression());
app.options('*', cors());


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

// Setup websocket + example needs re worked using the database + convept of the 3 different properties
app.ws('/api/messaging', (ws, req) => {
  ws.on('message', msg => {
    console.log('message received node')
    ws.send(JSON.stringify(
      { 
        conversations: [
          {
            conversationalPartner: 'Zack',
            mostRecentMessage: new Date(2017, 6, 21),
            messages: [
              {
                date: new Date(2016, 8, 30),
                message: 'Hi',
                name: 'Zack'
              },
              {
                date: new Date(2017, 6, 21),
                message: 'Hey Cutie',
                name: 'Rachael'
              }
            ]
          },
          {
            conversationalPartner: 'Rachael',
            mostRecentMessage: new Date(2017, 7, 23, 21, 40),
            messages: [
              {
                date: new Date(2017, 7, 21),
                message: 'I love you',
                name: 'Rachael'
              },
              {
                date: new Date(2017, 7, 23, 21, 40),
                message: 'You are the best',
                name: 'Rachael'
              }
            ]
          }
        ],
      notifications: [],
      friendRequests: []
    }));
  });
})
// Set our api routes
app.use('/api', api);



app.get('*.*', express.static(path.join(DIST_FOLDER, 'browser')));

app.get('*', (req, res) => {
  res.render('index', { req });
});

// setup generic error handling
app.use((err, req, res, next) => {
  console.error(err);
  if (!err.statusCode) {
    err.statusCode = 500; // Sets a generic server error status code if none is part of the err
  } 
  // handle sequelize errors especially validation errors, not the best way to check but oh well
  if(err.name && err.name.includes('Sequelize')){
    err.message = err.errors[0].message
  }
  res.status(err.statusCode).json({ message: err.message });
});

models.sequelize.sync().then(() => {
  app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
  })
})