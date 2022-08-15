import {Action, createReducer, on } from "@ngrx/store";
import { CarInterface } from "../../interfaces/car.interface";
import * as actions from "../actions/cars.actions";

export interface CarListState{
    cars:CarInterface[]
    loaded:boolean
    loading:boolean
    error:boolean
} 

const initialState:CarListState = {
    cars: [],
    loaded: false,
    loading: false,
    error: false
}

const _carListReducer = createReducer(initialState,
    on(actions.requestCarsList,state =>({...state,loading:true})),
    on(actions.requestCarsListSuccess,(state,{cars}) =>({
        ...state,
        cars,
        loading:false,
        loaded:true,
        error:false
    })),
    on(actions.requestCarsListError,state =>({
        ...state,
        loading:true,
        loaded:false,
        error:false
    })),
)

export function carListReducer(state:any,action:any){
    return _carListReducer(state,action)
}
