/* eslint-disable no-unused-vars */

/* eslint-disable react-hooks/exhaustive-deps */


import React, { useEffect, useState } from 'react'

import AdmiinSideBar from '../../../components/AdminC/AdminSideBar'

import { useDispatch, useSelector } from 'react-redux'
import { GetSetting, DeleteSetting, UpdateSetting, CreateSetting } from '../../../Redux/ActionCreators/SettingActionCreators'
import { DELETE_SETTING } from '../../../Redux/Constant'
import { ToastContainer, toast } from 'react-toastify'



function AdminSetting() {
  let [search, setSearch] = useState("")

  let [data, setdata] = useState({

    map1: "",
    map2: "",
    sitename: "",
    logotop: "",
    logobottom: "",
    address: "",
    phone: "",
    whatsapp: "",
    pivacypolicy: "",
    termconditions: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkdin: "",
    youtube: "",



  })

  function PostData(e) {
    e.preventDefault()
    if (settingstatedata.length)
      dispatch(UpdateSetting({ ...data, id: settingstatedata[0].id }))
    else
      dispatch(CreateSetting({ ...data }))

    toast("Website Setting data has been Updated...!!!")

  }
  //   function PostData(e) {
  //   e.preventDefault()

  //   dispatch(
  //     UpdateSetting({
  //       ...data,
  //       id: 1  
  //     })
  //   )

  //   toast("Website Setting Updated Successfully!")
  // }




  async function deleteRecord(id) {
    if (window.confirm("Are you sure that you want to delete this record!!!")) {
      dispatch({
        type: DELETE_SETTING,
        payload: { id }
      })
    }

  }

  // let [settingstatedata, setSettingstatedata] =useState()
  let settingstatedata = useSelector(state => state.settingstatedata || [])
  let dispatch = useDispatch()


  useEffect(() => {
    dispatch(GetSetting())
    if (settingstatedata.length) {
      setdata({ ...data, ...settingstatedata[0] })
    }
  }, [settingstatedata.length])

  function handleChange(e) {
    const { name, value } = e.target
    setdata(prev => ({
      ...prev,
      [name]: value
    }))
  }


  function getInputdata(e) {
    let name = e.target.name
    let value = (name === "logotop" || name === "logobottom") ? 'logo/' + e.target.files[0].name : e.target.value
    setdata({ ...data, [name]: name === "status" ? (value === "1" ? true : false) : value })
  }

  return (
    <>

      <ToastContainer />
      <div className="container-fluid my-3">
        <div className="row g-4">   {/* g-0 important */}


          <div className="col-12 col-md-3 sidebar">
            <AdmiinSideBar />
          </div>
          <div className="col-12 col-md-9 main-content text-center">
            <h5 className="text-light p-2" style={{ background: "#ae1c9a" }}>
              Setting
            </h5>
            <form onSubmit={PostData}>
              <div className="row mt-2 mb-3" >
                <div className="col-12">
                  <label className='map1 fs-4 d-flex justify-content-start'>Map1:</label>
                  <input type="text" onChange={handleChange} name='map1' value={data.map1} placeholder='Google Map1' className='form-control fs-4 My-Border ' />
                </div>
              </div>
              <div className="row mt-2 mb-3" >
                <div className="col-12">
                  <label className='map2 fs-4 d-flex justify-content-start'>Map2:</label>
                  <input type="text" onChange={handleChange} name='map2' value={data.map2} placeholder='Google Map1' className='form-control fs-4 My-Border' />
                </div>
              </div>
              <div className="row " >
                <div className="col-12 col-lg-4 mb-3">
                  <label className=' fs-4 d-flex justify-content-start'>Site-Name:</label>
                  <input type="text" onChange={handleChange} name='sitename' value={data.sitename} placeholder='Site-Name' className='form-control fs-4 My-Border' />
                </div>



                <div className="col-12  col-lg-4 mb-3">
                  <label className=' fs-4 d-flex justify-content-start'>Logo-Top:</label>
                  <input type="file" name='logotop' className='form-control fs-4 My-Border'
                    onChange={getInputdata}

                  />
                </div>



                <div className="col-12 col-lg-4 mb-3">
                  <label className=' fs-4 d-flex justify-content-start'>Logo-Bottom:</label>
                  <input type="file" name='logobottom' className='form-control fs-4 My-Border'
                    onChange={getInputdata}
                  />
                </div>
              </div>
              <div className="row " >
                <div className="col-12 col-lg-4 mb-3">
                  <label className=' fs-4 d-flex justify-content-start'>Phone:</label>
                  <input type="number" onChange={handleChange} name='phone' value={data.phone} placeholder='phone' className='form-control fs-4 My-Border' />
                </div>


                <div className="col-12 col-lg-4 mb-3">
                  <label className=' fs-4 d-flex justify-content-start'>Whatsapp:</label>
                  <input type="text" onChange={handleChange} name='whatsapp' value={data.whatsapp} placeholder='whatsapp' className='form-control fs-4 My-Border' />
                </div>


                <div className="col-12 col-lg-4 mb-3">
                  <label className=' fs-4 d-flex justify-content-start'>E-mail Address:</label>
                  <input type="e-mail" onChange={handleChange} name='address' value={data.address} placeholder='E-mail Address:' className='form-control fs-4 My-Border' />
                </div>
              </div>
              <div className="row  mb-3 " >
                <div className="col-12">
                  <label className=' fs-4 d-flex justify-content-start'>Privacy-Policy:</label>
                  <textarea type="text" onChange={handleChange} name='pivacypolicy' value={data.pivacypolicy} placeholder='Privacy-Policy' className='form-control fs-4 My-Border' style={{ height: "100px" }} />
                </div>
              </div>
              <div className="row  mb-3 " >
                <div className="col-12">
                  <label className=' fs-4 d-flex justify-content-start'>Terms & Conditions:</label>
                  <textarea type="text" onChange={handleChange} name='termconditions' value={data.termconditions} placeholder='Terms & Condition' className='form-control fs-4 My-Border' style={{ height: "100px" }} />
                </div>
              </div>

              <div className="row  mb-3 lg-4" >
                <div className="col-12">
                  <label className=' fs-4 d-flex justify-content-start'>Facebook:</label>
                  <input type="url" onChange={handleChange} name='facebook' value={data.facebook} placeholder='Facebook' className='form-control fs-4 My-Border' />
                </div>
              </div>
              <div className="row  mb-3 lg-4" >
                <div className="col-12">
                  <label className=' fs-4 d-flex justify-content-start'>Instagram:</label>
                  <input type="url" onChange={handleChange} name='instagram' value={data.instagram} placeholder='Instagram' className='form-control fs-4 My-Border' />
                </div>
              </div>
              <div className="row  mb-3 lg-4" >
                <div className="col-12">
                  <label className=' fs-4 d-flex justify-content-start'>Linkedin:</label>
                  <input type="url" onChange={handleChange} name='linkdin' value={data.linkdin} placeholder='Linkedin' className='form-control fs-4 My-Border' />
                </div>
              </div>
              <div className="row  mb-3 lg-4" >
                <div className="col-12">
                  <label className=' fs-4 d-flex justify-content-start'>Twitter:</label>
                  <input type="url" onChange={handleChange} name='twitter' value={data.twitter} placeholder='Twitter' className='form-control fs-4 My-Border' />
                </div>
              </div>
              <div className="row mb-3 lg-4" >
                <div className="col-12">
                  <label className=' fs-4 d-flex justify-content-start'>Youtube:</label>
                  <input type="url" onChange={handleChange} name='youtube' value={data.youtube} placeholder='youtube' className='form-control fs-4 My-Border' />
                </div>
              </div>
              {/* <div className="row mt-4">
                <div className="col-12 text-start">
                  <button type="submit" className="btn My-Color  fs-4">
                    Save Settings
                  </button>
                </div>
              </div> */}
              <div clpic="col-12">
                <button className='btn w-100 My-Border btn-primary btn-lg My-Color text-light h-20'>Save Settings</button>
              </div>

            </form>
          </div>
        </div>
        <div style={{ height: 100 }}></div>
      </div>
    </>
  )
}

export default AdminSetting