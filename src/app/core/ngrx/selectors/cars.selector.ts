import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as carListReducer from "../reducers/cars.reducer";

export const getCarsState = createFeatureSelector<carListReducer.CarListState>('carsList')

export const getLoadingCars = createSelector(
    getCarsState,
    (state:carListReducer.CarListState)=> state.loading
)

export const getCars = createSelector(
    getCarsState,
    (state:carListReducer.CarListState)=> state.cars
)