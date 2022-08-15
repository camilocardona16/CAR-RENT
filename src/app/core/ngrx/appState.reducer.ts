import { ActionReducerMap } from "@ngrx/store";
import { carListReducer, CarListState } from "./reducers/cars.reducer";

export interface AppState{
    carsList: CarListState
}

export const appReducers : ActionReducerMap<AppState> = {
    carsList: carListReducer
}