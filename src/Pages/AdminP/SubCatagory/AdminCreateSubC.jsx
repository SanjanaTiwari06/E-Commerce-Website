
/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react'
import Hero from '../../../components/Hero'
import AdminSideBar from '../../../Components/AdminC/AdminSideBar'
import { Await, Link, useNavigate } from 'react-router-dom'
import FormValidator from '../../../Validators/FormValidator'
import PicValidator from '../../../Validators/PicValidator'


function AdminCreateSubC() {
    let [data, setdata] = useState({
        name: "",
        pic: "",
        status: true
    })

    let [subcatagorydata,setsubcatagorydata] = useState([])

    let [errormsg, seterrormsg] = useState({
        name: "Name Feild is mandatory",
        pic: "image Feild is mandatory"
    })

    let [Show, setShow] = useState(false)
    let navigate = useNavigate()

    function getInput(e) {
        let name = e.target.name
        let value = name === "pic" ? "subcatagory/" + e.target.files[0].name : e.target.value
        setdata({ ...data, [name]: name === "status" ? (value === "1" ? true : false) : value })
        seterrormsg({ ...errormsg, [name]: name === "pic" ? PicValidator(e) : FormValidator(e) })
    }

    useEffect(()=>{
        (async()=>{
           let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/subcatagory`, {
                    method: "GET",
                    headers: {
                        "content-type": "application/json"
                        //  "authorization":"your auth key"
                    },
                })
                response= await response.json()
                setsubcatagorydata(response)
      })()
    
    },[])
    // function getInput(e) {
    //     let name = e.target.name

    //     if (name === "pic") {
    //         let file = e.target.files[0]

    //         setdata({ ...data, pic: file })

    //         let error = PicValidator(e)
    //         seterrormsg({ ...errormsg, pic: error })

    //         setShow(true)
    //     } 
    //     else {
    //         let value = e.target.value
    //         setdata({ ...data, [name]: value })

    //         if (name === "name") {
    //             seterrormsg({
    //                 ...errormsg,
    //                 name: value ? "" : "Name Field is mandatory"
    //             })
    //         }
    //     }
    // }


    async function PostData(e) {
        e.preventDefault()
        let error = Object.values(errormsg).find(x => x !== "")
        if (error)
            setShow(true)
        else {
            let item = subcatagorydata.find(x=>x.name.toLocaleLowerCase()===data.name.toLocaleLowerCase())
            if(item){
                seterrormsg({...errormsg, name:"NameCatagory with this name is already exist...!!!"})
                setShow(true)
                return
            }

            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/subcatagory`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                    //  "authorization":"your auth key"
                },
                body: JSON.stringify({ ...data })
            })
            response = await response.json()
            navigate('/Admin/SubCatagory')
        }
    }
    return (
        <>


            <div className="container-fluid my-3">
                <div className="row g-4">   {/* g-0 important */}

                    {/* Sidebar */}
                    <div className="col-12 col-md-3 sidebar">
                        <AdminSideBar />
                    </div>

                    {/* Main Content */}
                    <div className="col-12 col-md-9 main-content ">
                        <h5 className="text-light p-3 text-center" style={{ background: "#ae1c9a" }}>
                            Create-Sub-catagory <Link to='/Admin/SubCatagory'> <i className='bi bi-arrow-left fs-1 float-end text-light'></i></Link>
                        </h5>
                        <form onSubmit={PostData}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <input type="text" name='name' placeholder='SubCatagory Name' onChange={getInput} className={`form-control mt-3 fs-4 ${Show && errormsg.name ? 'border-danger' : 'My-Border'}`} style={{ height: '40px' }} />
                                    {Show && errormsg.name ? <p className='text-danger'>{errormsg.name}</p> : null}
                                </div>
                                <div className="col-md-6 mb-2">
                                    <input type="file" name='pic' placeholder='SubCatagory Name' onChange={getInput} className={`form-control mt-3 fs-4 ${Show && errormsg.pic ? 'border-danger' : 'My-Border'}`} style={{ height: '40px' }} />
                                    {Show && errormsg.pic ? <p className='text-danger'>{errormsg.pic}</p> : null}
                                </div>
                                <div className="col-md-6 mb-5">
                                    <select name="status" onChange={getInput} className="form-select My-Border mt-3" style={{ height: '40px' }}>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                                <div clpic="col-12">
                                    <button className='btn w-100 My-Border btn-primary btn-lg My-Color text-light h-20'>Create</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ height: 100 }}></div>
        </>
    )
}
 

export default AdminCreateSubC