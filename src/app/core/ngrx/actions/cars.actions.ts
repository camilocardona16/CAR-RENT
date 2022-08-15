import { createAction, props } from "@ngrx/store"
import { CarInterface } from "../../interfaces/car.interface"

// laoding data cars list
export const requestCarsList = createAction('[REQUEST_CARS_LIST] Loading data...',props<{search?:string}>())
export const requestCarsListSuccess = createAction('[REQUEST_CARS_LIST]  Data loading success',props<{cars:CarInterface[]}>())
export const requestCarsListError = createAction('[REQUEST_CARS_LIST]  Data loading error ')

// update any car
export const editCar = createAction('[EDIT_CAR] Editing car',props<{car:CarInterface}>())