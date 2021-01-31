import * as fromProducts from './products.reducer';
import * as fromRoot from '../../reducers';
import {Action, combineReducers} from '@ngrx/store';

export const productsModuleFeatureKey = 'productsModule';


export interface ProductState {
  [fromProducts.productsFeatureKey]: fromProducts.State;
}

export interface State extends fromRoot.State {
  [productsModuleFeatureKey]: ProductState;
}

// tslint:disable-next-line:typedef
export function reducers(state: ProductState | undefined, action: Action) {
  return combineReducers({
    [fromProducts.productsFeatureKey]: fromProducts.reducer
  })(state, action);
}
