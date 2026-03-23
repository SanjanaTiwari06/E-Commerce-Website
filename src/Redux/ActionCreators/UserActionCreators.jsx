import { CREATE_WISHLIST, DELETE_WISHLIST, GET_WISHLIST, UPDATE_WISHLIST } from "../Constant.jsx"

export function CreateUser(data) {
    return {
        type: CREATE_WISHLIST,
        payload: data
    }
}

export function GetUser() {
    return {
        type: GET_WISHLIST
    }
}

export function UpdateUser(data) {
    return {
        type: UPDATE_WISHLIST,
        payload: data
    }
}

export function DeleteUser(data) {
    return {
        type: DELETE_WISHLIST,
        payload: data
    }
}