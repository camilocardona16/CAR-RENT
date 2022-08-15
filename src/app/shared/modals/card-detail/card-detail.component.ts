import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CarInterface } from 'src/app/core/interfaces/car.interface';
import { CarsService } from 'src/app/core/services/cars.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  detail?:CarInterface
  loading = false

  constructor(
    private _dialogRef:MatDialogRef<CardDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number,
    private _carsSvc:CarsService
  ) { 
    this.getDetail()
  }

  ngOnInit(): void {
  }

  async getDetail(){
    try {
      this.loading = true
      const response = await  this._carsSvc.getCarDetail(this.id).toPromise()
      this.detail = response.find(cars => cars.id === this.id )
      this.loading = false
    } catch (error) {
      this.loading=false
      console.log(error);
      Swal.fire("error","ha ocurrido un error al cargar la data","error")
    }
    
  }

}
