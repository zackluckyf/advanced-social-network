# Social Network


Project utilizing Angular, Node, Express, PostgreSQL, Sequelize, Typescript, SCSS, Webpack, Redux, Angular Universal, Angular HMR,  Travis CI, and Heroku to create a server side rendering of a feature rich social networking site. Development environment with HMR, TypeScript, and Angular CLI making changes is blazing fast, easy, and safe. Initial load time is extremely quick taking advantage of AOT, code minification, and Angular Universal to create a fantastic user experience. Continuous integration to continuous deployment pipeline setup where successful builds with tests on Travis CI are deployed to Heroku. 


[![Build](https://travis-ci.org/zackluckyf/advanced-social-network.svg?branch=master)](https://travis-ci.org/zackluckyf/advanced-social-network)
[![Heroku](https://heroku-badge.herokuapp.com/?app=zack-social-network)](https://zack-social-network.herokuapp.com)
[![Dependency Status](https://david-dm.org/zackluckyf/advanced-social-network.svg)](https://david-dm.org/zackluckyf/badges)
[![DevDependency Status](https://david-dm.org/zackluckyf/advanced-social-network/dev-status.svg)](https://david-dm.org/zackluckyf/badges#info=devDependencies)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://opensource.org/licenses/mit-license.php) 

[Roadmap](#roadmap)

[Getting Started](#getting-started)

[Prerequisites](#prerequisites)

[Installing](#installing)

[Development Server](#development-server)

[Build](#build)

[Documentation](#documentation)

[Test Environment](#test-environment)

[Running the tests](#running-the-tests)

[Continuous Integration](#continuous-integration)

[Continuous Deployment](#continuous-deployment)

[Authors](#authors)

[License](#license)

[Acknowledgments](#acknowledgments)

## Roadmap

Project Tracking on trello: https://trello.com/advancedsocialnetwork


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Dependencies require Node 6.9.0 or higher, together with NPM 3 or higher.

After getting Node and NPM install the Angular cli

`npm install -g @angular/cli`

In order to view the documentation 

`npm install -g apidoc http-server`

### Installing

Fork and then clone the repository e.g.

`git clone https://github.com/zackluckyf/advanced-social-network.git`

Install the dependencies

`npm install`

## Development Server

Run `npm run prod` and upon completion run in a separate terminal window `ng serve` for a dev server. The app will automatically reload if you change any of the source files.

Run `npm run prod` and upon completion run in a separate terminal window `npm run hmr` for a dev server with hot module replacement.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Documentation

Run `npm run apidoc` to make the api documentation and launch it on port 8080. 

Run `npm run update-documentation` to update the documentation.

If already using that port simply update the documentation and then http-server apidoc/ -p 8004 or whatever port you prefer.

The architecture pattern flows with angular services call node/express rest api endpoints that are in server/routes/ and grouped in subfolders. Those routes call queries in server/queries grouped in the same subfolders which execute queries on the database. 

## Test Environment

Run `npm run prod` to build the project and then build and launch the server. 

## Running The Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Run `npm run all-tests` to run all unit tests and end-to-end tests.

Run `ng lint` to lint the code.

## Continuous Integration

After pushing to github the project is sent to travis to be built and tested.

Travis CI project status https://travis-ci.org/zackluckyf/advanced-social-network

Following successful integrations the project is sent to Heroku for deployment. 

## Continuous Deployment

**Deployments will not work on forked versions** 

Used the heroku cli `heroku config:set NPM_CONFIG_PRODUCTION=false` which makes heroku install dev dependencies.

Added so flag can be flipped in non heroku production and didn't have to move Angular cli to dependencies just for heroku.

Current live heroku app https://zack-social-network.herokuapp.com

Status History http://stats.pingdom.com/zxlxk54zq2uk/3370588

Performance Statistics https://tools.pingdom.com/#!/ezttoB/https://zack-social-network.herokuapp.com

## Authors

* **Zack Fanning** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

TBD
