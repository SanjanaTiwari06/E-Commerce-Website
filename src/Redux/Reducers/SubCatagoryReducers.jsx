import { CREATE_SUBCATAGORY_RED, DELETE_SUBCATAGORY_RED, GET_SUBCATAGORY_RED, UPDATE_SUBCATAGORY_RED } from '../Constant'
export default function SUBCATAGORYCatagoryReducers(state = [] ,action){
switch (action.type) {
    case CREATE_SUBCATAGORY_RED:
        return [...state,action.payload]
    case GET_SUBCATAGORY_RED:
        return action.payload
    case UPDATE_SUBCATAGORY_RED: {
        let index = state.findIndex(x=>x.id===action.payload.id)
        state[index] = {...action.payload}
        return state
    }

    case DELETE_SUBCATAGORY_RED:
        return state.filter(x=>x.id !==action.payload.id)

    default: 
        return state
}
}