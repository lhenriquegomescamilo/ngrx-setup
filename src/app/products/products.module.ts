import {NgModule} from '@angular/core';
import {ListComponent} from './components/list/list.component';
import {ListDisplayComponent} from './containers/list-display.component';
import {ProductsRoutingModule} from './products-routing.module';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffectsService} from './effects/products.effects';


@NgModule({
  imports: [ProductsRoutingModule, CommonModule, EffectsModule.forFeature([ProductsEffectsService])],
  exports: [],
  declarations: [ListDisplayComponent, ListComponent],
  providers: [],
})
export class ProductsModule {
}
