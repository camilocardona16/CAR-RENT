import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardDetailComponent } from 'src/app/shared/modals/card-detail/card-detail.component';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
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
}
