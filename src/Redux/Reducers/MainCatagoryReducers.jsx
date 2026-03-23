import { CREATE_MAINCATAGORY_RED, DELETE_MAINCATAGORY_RED, GET_MAINCATAGORY_RED, UPDATE_MAINCATAGORY_RED } from '../Constant'
export default function MainCatagoryReducers(state = [] ,action){
switch (action.type) {
    case CREATE_MAINCATAGORY_RED:
        return [...state,action.payload]
    case GET_MAINCATAGORY_RED:
        return action.payload
    case UPDATE_MAINCATAGORY_RED: {
        let index = state.findIndex(x=>x.id===action.payload.id)
        state[index] = {...action.payload}
        return state
    }

    case DELETE_MAINCATAGORY_RED:
        return state.filter(x=>x.id !==action.payload.id)

    default: 
        return state
}
}