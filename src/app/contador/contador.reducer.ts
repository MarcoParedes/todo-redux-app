import { Action, createReducer, on} from "@ngrx/store";
import { decrement, increment, multiplicar, dividir, reset } from "src/app/contador/contador.actions";

// export function contadorReducer(state: number = 10, action: Action) {
//     switch (action.type) {
//         case increment.type:
//             return state + 1;
//         case decrement.type:
//             return state -1;
    
//         default:
//             return state;
//     }
// }

export const initialState = 20;

const _counterReducer = createReducer(initialState,
    on(increment, state => state + 1),
    on(decrement, state => state - 1),
    on(multiplicar, (state, { numero }) => state * numero),
    on(dividir, (state, { numero }) => state / numero),
    on(reset, state => state = initialState)
);

export function contadorReducer(state, action) {
    return _counterReducer(state, action);
}
