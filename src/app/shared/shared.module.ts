import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardDetailComponent } from './modals/card-detail/card-detail.component';
import { MaterialModuleModule } from './material/material-module/material-module.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    CardDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    CardDetailComponent,
    MaterialModuleModule
  ]
})
export class SharedModule { }
