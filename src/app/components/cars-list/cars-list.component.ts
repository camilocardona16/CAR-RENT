import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CarInterface } from 'src/app/core/interfaces/car.interface';
import { requestCarsList } from 'src/app/core/ngrx/actions/cars.actions';
import { getCars, getLoadingCars } from 'src/app/core/ngrx/selectors/cars.selector';
import { CardDetailComponent } from 'src/app/shared/modals/card-detail/card-detail.component';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit, OnDestroy {

  carsList$ =  this._store.pipe(select(getCars))
  carLoading$ = this._store.pipe(select(getLoadingCars))
  carList:CarInterface[]=[]
  search=''
  subs:Subscription = new Subscription()

  constructor(
    private dialog: MatDialog,
    private _store:Store
  ) { }

  ngOnInit(): void {
    this.subs = this.carsList$.subscribe(cars=> this.carList = cars)
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  openDialog(event:any){
    const dialogRef = this.dialog.open(CardDetailComponent,{
      width: '60vw', 
      height:'auto', 
      maxWidth: '100vw',
      maxHeight: '100vh',
      disableClose: true,
      data: event
    });
  }

  searchInput(){
    this._store.dispatch(requestCarsList({search:this.search}))
  }
}
