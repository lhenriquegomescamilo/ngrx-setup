import {createReducer, on} from '@ngrx/store';
import {ProductsActions} from '../actions';
import {Product} from '../models/Product';

export const productsFeatureKey = 'prodcuts';

export interface State {
  searchValue?: string;
  products?: Product[];
}

export const initialState: State = {
  searchValue: ''
};

export const reducer = createReducer(
  initialState,
  on(ProductsActions.search, (state, {query}) => ({...state, searchValue: query})),
  on(ProductsActions.searchSuccess, (state, {products}) => ({...state, products})),
);
