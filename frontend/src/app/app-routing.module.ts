import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

export const routes: Routes = [
  // {path:'',redirectTo:'',pathMatch:'full'},
  {path:'',component:UserAuthComponent},
  // {path:'home',component:UserAuthComponent},
  {path:'department',component:DepartmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
