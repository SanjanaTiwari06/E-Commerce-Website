import { data } from "react-router-dom";
import { CREATE_FEATURE, DELETE_FEATURE, GET_FEATURE, UPDATE_FEATURE } from "../Constant";

export function CreateFeature(){
    return {
        type:CREATE_FEATURE,
        payload:data
    }
}

export function GetFeature(){
    return {
        type:GET_FEATURE,
        
    }
}

export function UpdateFeature(){
    return {
        type:UPDATE_FEATURE,
        payload:data
    }
}

export function DeleteFeature(){
    return {
        type:DELETE_FEATURE,
        payload:data
    }
}