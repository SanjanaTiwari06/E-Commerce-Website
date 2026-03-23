import { data } from "react-router-dom";
import { CREATE_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, UPDATE_PRODUCT } from "../Constant";

export function CreateProduct(){
    return {
        type:CREATE_PRODUCT,
        payload:data
    }
}

export function GetProduct(){
    return {
        type:GET_PRODUCT,
        
    }
}

export function UpdateProduct(){
    return {
        type:UPDATE_PRODUCT,
        payload:data
    }
}

export function DeleteProduct(){
    return {
        type:DELETE_PRODUCT,
        payload:data
    }
}