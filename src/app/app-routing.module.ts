import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetUsersComponent } from './get-users/get-users.component';

const routes: Routes = [{
  path : '' , redirectTo : '/test', pathMatch : 'full'
},{
  path : 'test' , component : GetUsersComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
