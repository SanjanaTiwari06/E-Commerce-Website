import { data } from "react-router-dom";
import { CREATE_SUBCATAGORY, DELETE_SUBCATAGORY, GET_SUBCATAGORY, UPDATE_SUBCATAGORY } from "../Constant";

export function CreateSubCatagory(){
    return {
        type:CREATE_SUBCATAGORY,
        payload:data
    }
}

export function GetSubCatagory(){
    return {
        type:GET_SUBCATAGORY,
        
    }
}

export function UpdateSubCatagory(){
    return {
        type:UPDATE_SUBCATAGORY,
        payload:data
    }
}

export function DeleteSubCatagory(){
    return {
        type:DELETE_SUBCATAGORY,
        payload:data
    }
}