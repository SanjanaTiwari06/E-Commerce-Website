
// import React, { useEffect, useState } from 'react'
// import Hero from '../../../components/Hero'
// import AdminSideBar from '../../../components/AdminC/AdminSideBar'
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import FormValidator from '../../../Validators/FormValidator'
// import PicValidator from '../../../Validators/PicValidator'

// function AdminEditProduct() {

//   let { id } = useParams()
//   let navigate = useNavigate()

//   let [data, setdata] = useState({   
//     name: "",
//     pic: "",
//     status: true
//   })

//   let [errormsg, seterrormsg] = useState({
//     name: "",
//     pic: ""
//   })

//   let [Show, setShow] = useState(false)

//   // 🔹 Load single category data
//   useEffect(() => {
//     (async () => {
//       let response = await fetch(
//         `${import.meta.env.VITE_APP_BACKEND_SERVER}/product/${id}`
//       )
//       response = await response.json()
//       setdata(response)
//     })()
//   }, [id])

//   // 🔹 Input handler
//   function getInput(e) {
//     let name = e.target.name
//     let value =
//       name === "pic"
//         ? "product/" + e.target.files[0].name
//         : e.target.value

//     setdata({
//       ...data,
//       [name]: name === "status" ? (value === "1" ? true : false) : value
//     })

//     seterrormsg({
//       ...errormsg,
//       [name]: name === "pic" ? PicValidator(e) : FormValidator(e)
//     })
//   }

//   // 🔹 Update record
//   async function UpdateData(e) {
//     e.preventDefault()

//     let error = Object.values(errormsg).find(x => x !== "")
//     if (error) {
//       setShow(true)
//       return
//     }

//     await fetch(
//       `${import.meta.env.VITE_APP_BACKEND_SERVER}/product/${id}`,
//       {
//         method: "PUT",
//         headers: {
//           "content-type": "application/json"
//         },
//         body: JSON.stringify(data)
//       }
//     )

//     navigate('/Admin/Product')
//   }

//   return (
//     <>
//       <div className="container-fluid my-3">
//         <div className="row g-4">

//           {/* Sidebar */}
//           <div className="col-12 col-md-3 sidebar">
//             <AdminSideBar />
//           </div>

//           {/* Main Content */}
//           <div className="col-12 col-md-9 main-content">
//             <h5 className="text-light p-3 text-center" style={{ background: "#ae1c9a" }}>
//               Edit Product
//               <Link to="/Admin/Product">
//                 <i className="bi bi-arrow-left fs-1 float-end text-light"></i>
//               </Link>
//             </h5>

//             <form onSubmit={UpdateData}>
//               <div className="row">

//                 {/* Name */}
//                 <div className="col-12 mb-3">
//                   <input
//                     type="text"
//                     name="name"
//                     value={data.name}
//                     onChange={getInput}
//                     placeholder="Product Name"
//                     className={`form-control fs-4 ${Show && errormsg.name ? 'border-danger' : 'My-Border'}`}
//                   />
//                   {Show && errormsg.name && (
//                     <p className="text-danger">{errormsg.name}</p>
//                   )}
//                 </div>

//                 {/* Pic */}
//                 <div className="col-md-6 mb-3">
//                   <input
//                     type="file"
//                     name="pic"
//                     onChange={getInput}
//                     className={`form-control fs-4 ${Show && errormsg.pic ? 'border-danger' : 'My-Border'}`}
//                   />
//                   {Show && errormsg.pic && (
//                     <p className="text-danger">{errormsg.pic}</p>
//                   )}
//                 </div>

//                 {/* Status */}
//                 <div className="col-md-6 mb-4">
//                   <select
//                     name="status"
//                     value={data.status ? "1" : "0"}
//                     onChange={getInput}
//                     className="form-select My-Border"
//                   >
//                     <option value="1">Active</option>
//                     <option value="0">Inactive</option>
//                   </select>
//                 </div>

//                 {/* Button */}
//                 <div className="col-12">
//                   <button className="btn btn-primary btn-lg w-100">
//                     Update Category
//                   </button>
//                 </div>

//               </div>
//             </form>

//           </div>
//         </div>
//       </div>

//       <div style={{ height: 100 }}></div>
//     </>
//   )
// }

// export default AdminEditProduct  



/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import AdminSideBar from '../../../components/AdminC/AdminSideBar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import FormValidator from '../../../Validators/FormValidator'
import PicValidator from '../../../Validators/PicValidator'
import { useDispatch, useSelector } from 'react-redux'
import { GetMainCatagory } from '../../../Redux/ActionCreators/MainCatagoryActionCreators'
import { GetSubCatagory } from '../../../Redux/ActionCreators/SubCatagoryActionCreators'
import { GetBrand } from '../../../Redux/ActionCreators/BrandActionCreators'

let Colours = [
  "Red", "Yellow", "Green", "Blue", "Pink", "Orange", "Magenta",
  "Black", "White", "Brown", "Purple", "Grey"
]

let Size = [
  "XXL", "XL", "L", "M", "SM", "XS", "24", "26", "28", "30", "32", "34",
  "36", "38", "40", "42", "44", "N/A"
]

function AdminEditProduct() {
  let { id } = useParams()
  let navigate = useNavigate()
  let dispatch = useDispatch()

  let MainCatagoryStateData = useSelector(state => state.MainCatagoryStateData)
  let SubCatagoryStateData = useSelector(state => state.SubCatagoryStateData)
  let BrandStateData = useSelector(state => state.BrandStateData)

  let [data, setdata] = useState({
    name: "",
    pic: [],
    maincatagory: "",
    subcatagory: "",
    brand: "",
    baseprize: "",
    discount: "",
    finalprize: "",
    stock: true,
    stockquantity: 0,
    color: [],
    size: [],
    status: true,
    description: ""
  })

  let [errormsg, seterrormsg] = useState({
    name: "",
    pic: "",
    baseprize: "",
    discount: "",
    stockquantity: "",
    color: "",
    size: "",
    description: ""
  })

  let [Show, setShow] = useState(false)

  // 🔹 Load dropdown data
  useEffect(() => {
    dispatch(GetMainCatagory())
    dispatch(GetSubCatagory())
    dispatch(GetBrand())
  }, [])

  // 🔹 Load product by id
  useEffect(() => {
    (async () => {
      let res = await fetch(
        `${import.meta.env.VITE_APP_BACKEND_SERVER}/product/${id}`
      )
      res = await res.json()
      setdata(res)
    })()
  }, [id])

  function getInput(e) {
    let name = e.target.name

    if (name === "pic") {
      let newPics = Array.from(e.target.files).map(
        x => "product/" + x.name
      )

      setdata({
        ...data,
        pic: [...data.pic, ...newPics]   // 👈 merge old + new
      })

      seterrormsg({
        ...errormsg,
        pic: PicValidator(e)
      })
    }
    else {
      let value = e.target.value
      setdata({
        ...data,
        [name]:
          name === "status" || name === "stock"
            ? value === "1"
            : value
      })

      seterrormsg({
        ...errormsg,
        [name]: FormValidator(e)
      })
    }
  }

  function getInputCheckbox(field, value) {
    let arr = [...data[field]]
    if (arr.includes(value))
      arr = arr.filter(x => x !== value)
    else
      arr.push(value)

    setdata({ ...data, [field]: arr })
    seterrormsg({
      ...errormsg,
      [field]: arr.length === 0 ? `Select at least one ${field}` : ""
    })
  }

  async function UpdateData(e) {
    e.preventDefault()

    let error = Object.values(errormsg).find(x => x !== "")
    if (error) {
      setShow(true)
      return
    }

    let bp = parseInt(data.baseprize)
    let d = parseInt(data.discount)
    let sq = parseInt(data.stockquantity)
    let fp = bp - d

    await fetch(
      `${import.meta.env.VITE_APP_BACKEND_SERVER}/product/${id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...data,
          baseprize: bp,
          discount: d,
          stockquantity: sq,
          finalprize: fp
        })
      }
    )

    navigate('/Admin/Product')
  }

  return (
    <>
      <div className="container-fluid my-3">
        <div className="row g-4">
          <div className="col-md-3">
            <AdminSideBar />
          </div>

          <div className="col-md-9">
            <h5 className="text-light p-3 text-center" style={{ background: "#ae1c9a" }}>
              Edit Product
              <Link to="/Admin/Product">
                <i className="bi bi-arrow-left fs-1 float-end text-light"></i>
              </Link>
            </h5>

            <form onSubmit={UpdateData}>
              <div className="row">

                <div className="col-12 mb-3">
                  <label className="fs-4">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={getInput}
                    className="form-control fs-4 My-Border"
                  />
                </div>

                <div className="col-lg-3 mb-3">
                  <label className="fs-4">Main Category</label>
                  <select
                    name="maincatagory"
                    value={data.maincatagory}
                    onChange={getInput}
                    className="form-select fs-4 My-Border"
                  >
                    {MainCatagoryStateData.map(item =>
                      <option key={item.id} value={item.name}>{item.name}</option>
                    )}
                  </select>
                </div>

                <div className="col-lg-3 mb-3">
                  <label className="fs-4">Sub Category</label>
                  <select
                    name="subcatagory"
                    value={data.subcatagory}
                    onChange={getInput}
                    className="form-select fs-4 My-Border"
                  >
                    {SubCatagoryStateData.map(item =>
                      <option key={item.id} value={item.name}>{item.name}</option>
                    )}
                  </select>
                </div>

                <div className="col-lg-3 mb-3">
                  <label className="fs-4">Brand</label>
                  <select
                    name="brand"
                    value={data.brand}
                    onChange={getInput}
                    className="form-select fs-4 My-Border"
                  >
                    {BrandStateData.map(item =>
                      <option key={item.id} value={item.name}>{item.name}</option>
                    )}
                  </select>
                </div>

                <div className="col-lg-3 mb-3">
                  <label className="fs-4">Stock</label>
                  <select
                    name="stock"
                    value={data? "1" : "0"}
                    onChange={getInput}
                    className="form-select fs-4 My-Border"
                  >
                    <option value="1">In Stock</option>
                    <option value="0">Out of Stock</option>
                  </select>
                </div>

                <div className="col-lg-4 mb-3">
                  <label className="fs-4">Base Price</label>
                  <input
                    type="number"
                    name="baseprize"
                    value={data.baseprize}
                    onChange={getInput}
                    className="form-control fs-4 My-Border"
                  />
                </div>

                <div className="col-lg-4 mb-3">
                  <label className="fs-4">Discount</label>
                  <input
                    type="number"
                    name="discount"
                    value={data.discount}
                    onChange={getInput}
                    className="form-control fs-4 My-Border"
                  />
                </div >
                <div className="col-lg-4 mb-3">
                  <label className="fs-4">Pic:</label>

                  <input
                    type="file"
                    name="pic"
                    multiple
                    accept="image/*"
                    onChange={getInput}
                    className="form-control fs-4 My-Border"
                  />

                  {/* Image Preview */}
                  {data.pic && data.pic.length > 0 && (
                    <div className="row mt-3">
                      {data.pic.map((img, index) => (
                        <div
                          key={img + index}
                          className="col-lg-3 col-md-4 col-6 mb-3 text-center"
                        >
                          <img
                            src={`${import.meta.env.VITE_APP_BACKEND_SERVER}/${img}`}
                            alt="product"
                            className="img-fluid rounded border"
                            style={{
                              height: "120px",
                              width: "100%",
                              objectFit: "cover"
                            }}
                          />

                          <button
                            type="button"
                            className="btn btn-sm btn-danger mt-2 w-100"
                            onClick={() =>
                              setdata({
                                ...data,
                                pic: data.pic.filter((_, i) => i !== index)
                              })
                            }
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>


                <div className="col-12 mb-3">
                  <label className="fs-4">Description</label>
                  <textarea
                    name="description"
                    value={data.description}
                    onChange={getInput}
                    className="form-control fs-4 My-Border"
                  />
                </div>

                <div className="col-12">
                  <button className="btn btn-primary btn-lg w-100">
                    Update Product
                  </button>
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

export default AdminEditProduct

