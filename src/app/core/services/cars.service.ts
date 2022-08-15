import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarInterface } from '../interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private _http:HttpClient) { }

  getCarsData(){
      return  this._http.get<CarInterface[]>("../../assets/files/cars.json")
  }
  getCarDetail(id:number){
      return this._http.get<CarInterface[]>("../../assets/files/cars.json")
  }
}
