import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';

export const routes: Routes = [
  // {path:'',redirectTo:'',pathMatch:'full'},
  {path:'home',component:AppComponent},
  {path:'department',component:DepartmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
