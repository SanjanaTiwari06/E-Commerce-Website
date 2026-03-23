import { data } from "react-router-dom";
import { CREATE_MAINCATAGORY, DELETE_MAINCATAGORY, GET_MAINCATAGORY, UPDATE_MAINCATAGORY } from "../Constant";

export function CreateMainCatagory(){
    return {
        type:CREATE_MAINCATAGORY,
        payload:data
    }
}

export function GetMainCatagory(){
    return {
        type:GET_MAINCATAGORY,
        
    }
}

export function UpdateMainCatagory(){
    return {
        type:UPDATE_MAINCATAGORY,
        payload:data
    }
}

export function DeleteMainCatagory(){
    return {
        type:DELETE_MAINCATAGORY,
        payload:data
    }
}