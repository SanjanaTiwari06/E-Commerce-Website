import { data } from "react-router-dom";
import { CREATE_FAQ, DELETE_FAQ, GET_FAQ, UPDATE_FAQ } from "../Constant";

export function CreateFAQ(){
    return {
        type:CREATE_FAQ,
        payload:data
    }
}

export function GetFAQ(){
    return {
        type:GET_FAQ,
        
    }
}

export function UpdateFAQ(){
    return {
        type:UPDATE_FAQ,
        payload:data
    }
}

export function DeleteFAQ(){
    return {
        type:DELETE_FAQ,
        payload:data
    }
}