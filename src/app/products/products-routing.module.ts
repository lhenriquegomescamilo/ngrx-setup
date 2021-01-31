import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ListDisplayComponent} from './containers/list-display.component';


const routes: Routes = [
  {
    path: '',
    component: ListDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
