import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromLayout from '../../reducers';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-display',
  template: `
    <p>
      <app-list [searchValue]="searchValue$ | async"></app-list>
    </p>
  `,
  styles: []
})
export class ListDisplayComponent implements OnInit {

  readonly searchValue$: Observable<string> = this.store.pipe(select(fromLayout.selectSearchProduct));

  constructor(
    private readonly store: Store<fromLayout.State>
  ) {
  }

  ngOnInit(): void {
  }

}
