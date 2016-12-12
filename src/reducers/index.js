/**
 * Created by thanak on 12/11/16.
 */
export default function counter(state=0,action) {
    switch (action.type){
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1
        default:
            return state
    }
}