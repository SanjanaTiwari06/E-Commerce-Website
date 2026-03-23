import { CREATE_CHECKOUT, DELETE_CHECKOUT, GET_CHECKOUT, UPDATE_CHECKOUT } from "../Constant.jsx"

export function CreateCheckout(data) {
    return {
        type: CREATE_CHECKOUT,
        payload: data
    }
}

export function GetCheckout() {
    return {
        type: GET_CHECKOUT
    }
}

export function UpdateCheckout(data) {
    return {
        type: UPDATE_CHECKOUT,
        payload: data
    }
}

export function DeleteCheckout(data) {
    return {
        type: DELETE_CHECKOUT,
        payload: data
    }
}