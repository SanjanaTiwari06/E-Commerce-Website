
import React, { useEffect, useState } from 'react'
import Hero from '../../../components/Hero'
import AdminSideBar from '../../../components/AdminC/AdminSideBar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import FormValidator from '../../../Validators/FormValidator'
import PicValidator from '../../../Validators/PicValidator'

function AdminEditFeature() {

  let { id } = useParams()
  let navigate = useNavigate()

  let [data, setdata] = useState({
    name: "",
    pic: "",
    status: true
  })

  let [errormsg, seterrormsg] = useState({
    name: "",
    pic: ""
  })

  let [Show, setShow] = useState(false)

  // 🔹 Load single category data
  useEffect(() => {
    (async () => {
      let response = await fetch(
        `${import.meta.env.VITE_APP_BACKEND_SERVER}/feature/${id}`
      )
      response = await response.json()
      setdata(response)
    })()
  }, [id])

  // 🔹 Input handler
  function getInput(e) {
    let name = e.target.name
    let value =
      name === "pic"
        ? "feature/" + e.target.files[0].name
        : e.target.value

    setdata({
      ...data,
      [name]: name === "status" ? (value === "1" ? true : false) : value
    })

    seterrormsg({
      ...errormsg,
      [name]: name === "pic" ? PicValidator(e) : FormValidator(e)
    })
  }

  // 🔹 Update record
  async function UpdateData(e) {
    e.preventDefault()

    let error = Object.values(errormsg).find(x => x !== "")
    if (error) {
      setShow(true)
      return
    }

    await fetch(
      `${import.meta.env.VITE_APP_BACKEND_SERVER}/feature/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      }
    )

    navigate('/Admin/Feature')
  }

  return (
    <>
      <div className="container-fluid my-3">
        <div className="row g-4">

          {/* Sidebar */}
          <div className="col-12 col-md-3 sidebar">
            <AdminSideBar />
          </div>

          {/* Main Content */}
          <div className="col-12 col-md-9 main-content">
            <h5 className="text-light p-3 text-center" style={{ background: "#ae1c9a" }}>
              Edit Feature
              <Link to="/Admin/Brand">
                <i className="bi bi-arrow-left fs-1 float-end text-light"></i>
              </Link>
            </h5>

            <form onSubmit={UpdateData}>
              <div className="row">

                {/* Name */}
                <div className="col-12 mb-3">
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={getInput}
                    placeholder="Brand Name"
                    className={`form-control fs-4 ${Show && errormsg.name ? 'border-danger' : 'My-Border'}`}
                  />
                  {Show && errormsg.name && (
                    <p className="text-danger">{errormsg.name}</p>
                  )}
                </div>

                <div className="col-12 mb-3">
                <textarea
                  type="text"
                  name="ShortDescription"
                  value={data.ShortDescription}
                  onChange={getInput}
                  placeholder="Brand Name"
                  className={`form-control fs-4 ${Show && errormsg.ShortDescription ? 'border-danger' : 'My-Border'}`}
                />
                {Show && errormsg.ShortDescription && (
                  <p className="text-danger">{errormsg.ShortDescription}</p>
                )}
              </div>

              {/* Pic */}
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="icon"
                  onChange={getInput}
                  className={`form-control fs-4 ${Show && errormsg.icon ? 'border-danger' : 'My-Border'}`}
                />
                {Show && errormsg.icon && (
                  <p className="text-danger">{errormsg.icon}</p>
                )}
              </div>

              {/* Status */}
              <div className="col-md-6 mb-4">
                <select
                  name="status"
                  value={data.status ? "1" : "0"}
                  onChange={getInput}
                  className="form-select My-Border"
                >
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>

              {/* Button */}
              <div className="col-12">
                <button className="btn btn-primary btn-lg w-100">
                  Update Feature
                </button>
              </div>

          </div>
        </form>

      </div>
    </div >
      </div >

    <div style={{ height: 100 }}></div>
    </>
  )
}

export default AdminEditFeature
