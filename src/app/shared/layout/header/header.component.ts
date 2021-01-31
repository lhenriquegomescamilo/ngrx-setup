import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as fromLayout from '../reducers/layout.reducer';
import {LayoutActions} from '../actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  readonly search$ = new FormControl();
  private readonly onDestroy$ = new Subject();

  constructor(
    private readonly store: Store<fromLayout.State>
  ) {
  }

  ngOnInit(): void {
    this.onChangeDetectionFieldSearch();
  }

  private onChangeDetectionFieldSearch(): void {
    this.search$.valueChanges
      .pipe(
        takeUntil(this.onDestroy$),
        tap((query: string) => this.search(query))
      )
      .subscribe(value => console.log('value', value));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private search(query: string): void {
    this.store.dispatch(LayoutActions.typeIntTheSearch({searchValue: query}))
  }
}
