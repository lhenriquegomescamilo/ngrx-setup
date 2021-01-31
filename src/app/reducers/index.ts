import {InjectionToken} from '@angular/core';
import {Action, ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import * as fromLayout from '../shared/layout/reducers/layout.reducer';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  [fromLayout.layoutFeatureKey]: fromLayout.State;
  router: fromRouter.RouterReducerState<any>;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>('Root reducers token', {
  factory: () => ({
    [fromLayout.layoutFeatureKey]: fromLayout.reducer,
    router: fromRouter.routerReducer,
  }),
});

export const selectLayoutState = createFeatureSelector<State, fromLayout.State>(
  fromLayout.layoutFeatureKey
);

export const selectSearchProduct = createSelector(
  selectLayoutState,
  fromLayout.searchForProduct
);
