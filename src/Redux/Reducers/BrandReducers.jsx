import { CREATE_BRAND_RED, DELETE_BRAND_RED, GET_BRAND_RED, UPDATE_BRAND_RED } from '../Constant'
export default function BrandReducers(state = [] ,action){
switch (action.type) {
    case CREATE_BRAND_RED:
        return [...state,action.payload]
    case GET_BRAND_RED:
        return action.payload
    case UPDATE_BRAND_RED: {
        let index = state.findIndex(x=>x.id===action.payload.id)
        state[index] = {...action.payload}
        return state
    }

    case DELETE_BRAND_RED:
        return state.filter(x=>x.id !==action.payload.id)

    default: 
        return state
}
}