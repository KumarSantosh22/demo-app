import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';
import { AditProductComponent } from './products/adit-product/adit-product.component';
import { HomeComponent } from './home/home.component';
import { GridTableModule, DirectivesModule } from 'cocoon-pilot';
import { DialogModule } from 'primeng/dialog'

@NgModule({
  declarations: [
    ProductsComponent,
    AditProductComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    DialogModule,
    GridTableModule,
    DirectivesModule
  ]
})
export class ProductModule { }
