import { NgModule, isDevMode } from '@angular/core';

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { provideReduxForms } from '@angular-redux/form';

// Redux ecosystem stuff.
import { createLogger } from 'redux-logger';

// The top-level reducers and epics that make up our app's logic.
import { IAppState } from './models';

import { initialState } from './reducers';

import { rootReducer } from './combined.reducers';

@NgModule({
  imports: [NgReduxModule, NgReduxRouterModule]
})
export class StoreModule {
  constructor(
    public store: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter,
  ) {
    // Tell Redux about our reducers. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    if(isDevMode()){
      store.configureStore(
        rootReducer,
        initialState,
        [ createLogger() ], 
        devTools.isEnabled() ? [ devTools.enhancer() ] : []);
    } else {
      store.configureStore(rootReducer, initialState);
    }

    // Enable syncing of Angular router state with our Redux store.
    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }

    // Enable syncing of Angular form state with our Redux store.
    provideReduxForms(store);
  }
}
