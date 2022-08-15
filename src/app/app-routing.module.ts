import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from './core/enums/route.enum';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path:RoutesEnum.home, component:HomeComponent},
  {path:'**', redirectTo:RoutesEnum.home, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
