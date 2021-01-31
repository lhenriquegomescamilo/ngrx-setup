import {Injectable} from '@angular/core';
import {GoogleBooksService} from '../services/google-books.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {Product} from '../models/Product';
import {of} from 'rxjs';
import {ProductsActions} from '../actions/index';
import {LayoutActions} from '../../shared/layout/actions';

@Injectable()
export class ProductsEffectsService {

  readonly typeIntTheSearch = createEffect(() =>
    this.actions$.pipe(
      ofType(LayoutActions.typeIntTheSearch),
      tap(value => console.log('passsing here', value)),
      map(({searchValue}) => ProductsActions.search({query: searchValue}))
    )
  );

  readonly search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.search),
      switchMap(({query}) => {
        return this.googleService.searchProducts(query).pipe(
          tap((products: Product[]) => console.log('products', products)),
          map((products: Product[]) => ProductsActions.searchSuccess({products})),
          catchError((error) => of(ProductsActions.searchFailure({errorMsg: error.message})))
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly googleService: GoogleBooksService
  ) {
  }
}
