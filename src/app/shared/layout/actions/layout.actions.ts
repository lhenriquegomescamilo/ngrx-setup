import {createAction, props} from '@ngrx/store';

export const typeIntTheSearch = createAction('[Layout] Search for product', props<{ searchValue: string }>());
