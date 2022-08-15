import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  constructor(
    private _dialogRef:MatDialogRef<CardDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number,
  ) { 
    console.log(id);
  }

  ngOnInit(): void {
  }

}
