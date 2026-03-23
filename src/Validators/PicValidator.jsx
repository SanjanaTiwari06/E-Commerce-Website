import React from 'react'

function PicValidator(e) {
    let files = e.target.files

    if(files.length===1){
        let pic = files[0]
        if(!(pic.type==="image/jpg"||pic.type==="image/jpeg"||pic.type==="image/png"||pic.type==="image/gif"))
            return "invalid pic format please upload a image of type .jpg,.jpeg,.png,.gif"

        else if(pic.size>1048576)
            return "Pic is too heavy,please upload a file upto 1 MB"
        else 
            return ""
    }
    else {
        let errorMsg = []
        Array.from(e.target.files).forEach((pic,index)=>{
             if(!(pic.type==="image/jpg"||pic.type==="image/jpeg"||pic.type==="image/png"||pic.type==="image/gif"))
                errorMsg.push(`invalid pic${index+1} format please upload a image of type .jpg,.jpeg,.png,.gif`)

            else if(pic.size>1048576)
                errorMsg.push(`Pic${index+1} is too heavy,please upload a file upto 1 MB`)
        })
        console.log(errorMsg)
        return errorMsg.length? errorMsg.join("|"):""
    }
}

export default PicValidator