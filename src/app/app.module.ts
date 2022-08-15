import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './core/ngrx/appState.reducer';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // modulos
    SharedModule,
    ComponentsModule,
    BrowserAnimationsModule,

    // ngrx
    StoreModule.forRoot(appReducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
