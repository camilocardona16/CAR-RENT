import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CardComponent } from './card/card.component';
import { MaterialModuleModule } from '../shared/material/material-module/material-module.module';



@NgModule({
  declarations: [
    CarsListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialModuleModule
  ],
  exports:[
    CarsListComponent
  ]
})
export class ComponentsModule { }
