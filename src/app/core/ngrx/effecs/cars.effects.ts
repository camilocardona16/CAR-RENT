import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { requestCarsList, requestCarsListError, requestCarsListSuccess } from "../actions/cars.actions";
import {catchError, filter, map, mergeMap, tap} from "rxjs/operators"
import { CarsService } from "../../services/cars.service";
import { of } from "rxjs";

@Injectable()
export class CarsEffects{

    constructor(
        private actions$:Actions,
        private _carsService:CarsService){}

    requestCarsList$ = createEffect(
        ()=>{
            return this.actions$.pipe(
                ofType(requestCarsList),
                mergeMap(
                    ({search})=> this._carsService.getCarsData().pipe(
                        tap(cars=>console.log(cars)),
                        map( cars => requestCarsListSuccess({cars:cars.filter(car=>{
                            if(search!=''){
                                if((car.brand+car.model+car.year+car.price).toLocaleLowerCase().includes(search!.toLocaleLowerCase())){
                                    return car
                                }
                                return false
                            }else{
                                return car
                            }
                        })})),
                        catchError(() => of(requestCarsListError()))
                    )
                )
            )
        }
    )
}