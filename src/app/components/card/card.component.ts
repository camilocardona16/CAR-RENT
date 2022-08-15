import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

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
