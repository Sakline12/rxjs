import { createReducer,on } from "@ngrx/store";
import { initialstate } from "./counter.state";
import { decrement, increment } from "./counter.actions";
import { state } from "@angular/animations";



const _counterReducer= new createReducer(
    initialstate, 
    on(increment, (state)=>

    return {
        ...state,
        counter:state.counter + 1,
    };
}),
on(decrement, (state)=>
{
    return {
        ...state,
        counter:state.counter - 1,
    };
}),

);

export function counterReducer(state: any,action: any){
    return _counterReducer(state,action);
}