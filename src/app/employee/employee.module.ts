import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { AditEmployeeComponent } from './adit-employee/adit-employee.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    AditEmployeeComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
