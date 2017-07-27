let Sequelize = require('sequelize');

const CONNECTIONSTRING = process.env.DATABASE_URL;

let models = {};
let sequelize;

function getModels (force = false) {
  if (Object.keys(models).length && !force) {
    return models;
  }

  let config = {
    database: 'social_network',
    username: 'zackfanning',
    password: 'password',
    options: {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 25,
            min: 0,
            idle: 10000
        }
    }
  }

  if(process.env.HEROKU){
      sequelize = new Sequelize(CONNECTIONSTRING, {
          dialect: 'postgres'
      });
  } else { 
    sequelize = new Sequelize(config.database, config.username, config.password, config.options);
  }

  sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been successfully established');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

  let modules = [
    require('./users.js')
  ];

  // Initialize models
  modules.forEach((module) => {
    const model = module(sequelize, Sequelize, config);
    models[model.name] = model;
  });

  // Apply associations
  Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
  });

  models.sequelize = sequelize;
  models.Sequelize = Sequelize;

  return models;
}

module.exports = {
  getModels: getModels
};
