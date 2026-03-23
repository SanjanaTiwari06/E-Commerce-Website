
// import { data } from "react-router-dom";
// import { CREATE_SETTING, DELETE_SETTING, GET_SETTING, UPDATE_SETTING } from "../Constant";

// export function CreateSetting(){
//     return {
//         type:CREATE_SETTING,
//         payload:data
//     }}



// export function GetSetting(){
//     return {
//         type:GET_SETTING,
        
//     }
// }


// export function UpdateSetting(){
//     return {
//         type:UPDATE_SETTING,
//         payload:data
//     }
// }



// export function DeleteSetting(){
//     return {
//         type:DELETE_SETTING,
//         payload:data
//     }
// }

import { CREATE_SETTING, DELETE_SETTING, GET_SETTING, UPDATE_SETTING } from "../Constant";

export function CreateSetting(data) {
    return {
        type: CREATE_SETTING,
        payload: data   // ✅ component ka poora data
    }
}

export function GetSetting() {
    return {
        type: GET_SETTING
    }
}

export function UpdateSetting(data) {
    return {
        type: UPDATE_SETTING,
        payload: data   // ✅ FormData / object
    }
}
// export const UpdateSetting = (data) => async (dispatch) => {
//   let response = await UpdateRecord("setting", data)
//   dispatch({ type: "UPDATE_SETTING", payload: response })
// }

export function DeleteSetting(id) {
    return {
        type: DELETE_SETTING,
        payload: { id }
    }
}
