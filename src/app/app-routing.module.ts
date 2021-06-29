import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ShowStudentComponent } from './show-student/show-student.component';

const routes: Routes = [  {
  path:"registration-form", component:RegistrationFormComponent
},
{
  path:"show-student",component:ShowStudentComponent
}]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
