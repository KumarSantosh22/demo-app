import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { AditEmployeeComponent } from './adit-employee/adit-employee.component';
import { HomeComponent } from './home/home.component';
import { DirectivesModule, GridTableModule } from 'cocoon-pilot';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeesComponent,
    AditEmployeeComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    GridTableModule,
    DirectivesModule
  ]
})
export class EmployeeModule { }
