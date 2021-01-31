import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-display',
  template: `
    <p>
      <app-list></app-list>
    </p>
  `,
  styles: []
})
export class ListDisplayComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
