import { data } from "react-router-dom";
import { CREATE_BRAND, DELETE_BRAND, GET_BRAND, UPDATE_BRAND } from "../Constant";

export function CreateBrand(){
    return {
        type:CREATE_BRAND,
        payload:data
    }
}

export function GetBrand(){
    return {
        type:GET_BRAND,
        
    }
}

export function UpdateBrand(){
    return {
        type:UPDATE_BRAND,
        payload:data
    }
}

export function DeleteBrand(){
    return {
        type:DELETE_BRAND,
        payload:data
    }
}