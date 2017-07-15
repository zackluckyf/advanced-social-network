# Social Network


Project utilizing Angular, Express, Node, Typescript, SCSS, Webpack, Redux, Angular Universal, Angular HMR, Karma, Jasmine, Protractor, Travis CI, and Heroku to create a server side rendering of a feature rich social networking site. Development environment feels great with HMR, TypeScript, and Travis CI making changes is easy, safe, and blazing fast. Initial load time is extremely quick taking advantage of aot, redux, an on push change detection strategy, and Angular Universal to create a fantastic user experience. Continuous Deployment setup with Heroku ensures software can be released reliably at any time.


[![Build](https://travis-ci.org/zackluckyf/advanced-social-network.svg?branch=master)](https://travis-ci.org/zackluckyf/advanced-social-network)
[![Heroku](http://zack-social-network.herokuapp.com/?app=zack-social-network&root=projects.html)]
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Dependency Status](https://david-dm.org/boennemann/badges.svg)](https://david-dm.org/boennemann/badges)
[![DevDependency Status](https://david-dm.org/boennemann/badges/dev-status.svg)](https://david-dm.org/boennemann/badges#info=devDependencies)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

[RoadMap](#roadmap)

[Getting Started](#getting-started)

[Prerequisites](#prerequisites)

[Installing](#installing)

[Running the tests](#running-the-tests)

[Deployment](#deployment)

[Authors](#authors)

[License](#license)

[Acknowledgments](#acknowledgments)

## RoadMap

* <strike>Set up Travis CI</strike>

* <strike>Get Heroku working</strike>

* <strike>Get Heroku working with Travis</strike>

* <strike>Only deploy passing builds to Heroku from Travis</strike>

* Detailed walkthrough on setup and deploy in README.md

* Look into StrongLoop as a process manager for the node server

* Research and use a reverse proxy

* Start working on some basic api methods, use try-catch

* Setup HTTPS on Heroku

* Enforce HTTPS only

* UI for dashboard page

* UI for profile page

* Registration

* Authentication/Login

* Posts

* Like Button

* Chat

* Pictures

* User Search

* Friends List/Add and Remove Friends

* Video Chat

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples:
Node, npm, angular cli -g, etc.
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

Before pushing always run `npm run all-tests` and fix everything before pushing to not break the build

## Angular cli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `npm run hmr` for a dev server with hot module replacement.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Test Environment

Run `npm run prod` to build the project and launch the server. 

## Running The Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

Run `ng lint` to lint the code.

Run `npm run all-tests` to run all three of the above.

## Deployment

Add additional notes about how to deploy this on a live system

heroku config:set NPM_CONFIG_PRODUCTION=false helps with heroku

## Authors

* **Zack Fanning** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

TBD
