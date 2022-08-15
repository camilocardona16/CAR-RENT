import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarInterface } from 'src/app/core/interfaces/car.interface';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() car!:CarInterface;
  @Output() openDialog = new EventEmitter<number>();


  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDetail(id:number){
    this.openDialog.emit(id)   
  }

}
