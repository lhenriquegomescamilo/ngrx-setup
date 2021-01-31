import {NgModule} from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { ListDisplayComponent } from './containers/list-display.component';
import {ProductsRoutingModule} from './products-routing.module';


@NgModule({
  imports: [ProductsRoutingModule],
  exports: [],
  declarations: [ListDisplayComponent, ListComponent],
  providers: [],
})
export class ProductsModule {
}
