import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CarInterface } from '../interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private _http:HttpClient) { }

  getCarsData(){
      return  this._http.get<CarInterface[]>(environment.baseUrl)
  }
  getCarDetail(id:number){
      return this._http.get<CarInterface[]>(environment.baseUrl)
  }
}
