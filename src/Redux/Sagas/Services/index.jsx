export async function CreateRecord(collection,payload){
try {
     let response= await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`,{
        method: 'POST',
        headers:{
            "content-Type" : "application/json"
        },
        body: JSON.stringify(payload)
     })
     response= await response.json()
     return response

} catch (error) {
    console.log(`error in API Calling ${error}`)
    return []
}
}

export async function CreateMultipartRecord(collection,payload){
try {
     let response= await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`,{
        method: 'POST',
        headers:{
            
        },
        body: payload
     })
     response= await response.json()
     return response

} catch (error) {
    console.log(`error in API Calling ${error}`)
    return []
}
}


export async function GetRecord(collection){
try {
     let response= await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`,{
        method: 'GET',
        headers:{
            "content-Type" : "application/json"
        },
       
     })
     response= await response.json()
     return response

} catch (error) {
    console.log(`error in API Calling ${error}`)
    return []
}
}

export async function UpdateRecord(collection,payload){
try {
     let response= await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.id}`,{
        method: 'PUT',
        headers:{
            "content-Type" : "application/json"
        },
        body: JSON.stringify(payload)
     })
     response= await response.json()
     return response

} catch (error) {
    console.log(`error in API Calling ${error}`)
    return []
}
}

export async function UpdateMultipartRecord(collection,payload){
try {
     let response= await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.get("id")}`,{
        method: 'PUT',
        headers:{
            
        },
        body: payload
     })
     response= await response.json()
     return response

} catch (error) {
    console.log(`error in API Calling ${error}`)
    return []
}
}

export async function DeleteRecord(collection,payload){
try {
     let response= await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.id}`,{
        method: 'DELETE',
        headers:{
            "content-Type" : "application/json"
        },
     
     })
     response= await response.json()
     return response

} catch (error) {
    console.log(`error in API Calling ${error}`)
    return []
}
}
