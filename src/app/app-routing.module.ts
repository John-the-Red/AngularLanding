import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Product/Product.component';
import { MainComponent } from './Main/Main.component';
const routes: Routes = [
  {path:'home',component:MainComponent},
  {path:'product',component:ProductComponent},
  {path:'',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
