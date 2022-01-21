import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: 'employee',
    component:EmployeeDetailsComponent
  },
  {
    path: 'department',
    component:DepartmentDetailsComponent
  },
  {
    path: 'addemployee',
    component:AddEmployeeComponent
  },
  {
    path: 'employeeupdate/:id',
    component: UpdateEmployeeComponent
  },
  {
    path: 'adddepartment',
    component: AddDepartmentComponent
  },
  {
    path: 'departmentupdate/:id',
    component: UpdateDepartmentComponent
  },
  {
    path: 'mainpage',
    component: MainPageComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }