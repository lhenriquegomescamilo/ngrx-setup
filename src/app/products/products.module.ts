import {NgModule} from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { ListDisplayComponent } from './containers/list-display.component';
import {ProductsRoutingModule} from './products-routing.module';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [ProductsRoutingModule, CommonModule],
  exports: [],
  declarations: [ListDisplayComponent, ListComponent],
  providers: [],
})
export class ProductsModule {
}
