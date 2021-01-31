import {createAction, props} from '@ngrx/store';

export const typeIntTheSearch = createAction('[Layout] Type in the searc', props<{searchValue: string}>());
