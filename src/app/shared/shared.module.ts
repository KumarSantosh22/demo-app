import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponentComponent } from './components/demo-component/demo-component.component';
import { StarsDirective } from './directives/stars.directive';
import { PascalCaseDirective } from './pipes/pascal-case.directive';



@NgModule({
  declarations: [
    DemoComponentComponent,
    StarsDirective,
    PascalCaseDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
