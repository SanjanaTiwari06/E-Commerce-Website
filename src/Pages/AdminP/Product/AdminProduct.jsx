/* eslint-disable react-hooks/exhaustive-deps */


import React, { useEffect, useState } from 'react'
import Hero from '../../../components/Hero'
import AdmiinSideBar from '../../../components/AdminC/AdminSideBar'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetProduct, DeleteProduct } from '../../../Redux/ActionCreators/ProductActionCreators'
import { DELETE_BRAND, DELETE_PRODUCT } from '../../../Redux/Constant'



import $ from 'jquery';
import 'datatables.net';



import AdminSideBar from '../../../components/AdminC/AdminSideBar'



function AdminProduct() {
  let ProductStateData = useSelector(state => state.ProductStateData)
  let Dispatch = useDispatch()

  let navigate = useNavigate()
  function editRecord(id) {
    navigate(`/Admin/Product/Edit/${id}`)
  }

  let [search, setSearch] = useState("")

  let [data, setdata] = useState([])

  async function deleteRecord(id) {
    if (window.confirm("Are you sure that you want to delete this record!!!")) {
      Dispatch({
        type: DELETE_PRODUCT,
        payload: { id }
      })
    }

  }

  useEffect(() => {
    let time = (() => {
      Dispatch(GetProduct())
      if (ProductStateData.length)
        setdata(ProductStateData)

      let time = setTimeout(() => {
        $('#myTable').DataTable()
      }, 500)
      return time
    })()
    return () => clearTimeout(time)
  }, [ProductStateData.length])

  return (
    <>


      <div className="container-fluid my-3">
        <div className="row g-4">   {/* g-0 important */}

          {/* Sidebar */}
          <div className="col-12 col-md-3 sidebar">
            <AdmiinSideBar />
          </div>

          {/* Sub Content */}
          <div className="col-12 col-md-9 main-content text-center">
            <h5 className="text-light p-2" style={{ background: "#ae1c9a" }}>
              Product-catagory <Link to='/Admin/Product/Create'><i className='bi bi-plus fs-1 float-end text-light'></i></Link>
            </h5>
            <div className="table-responsive">
              <div className="row my-3">
                <div className="col-md-4 ms-auto">
                  <input
                    type="text"
                    placeholder="Search category..."
                    className="form-control My-Border"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <table className='table table-bordered table-striped table-hover align-middle text-center'>
                <thead className='th' style={{ background: "#AE1C9A" }}>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Pic</th>
                    <th>Status</th>
                    <th>Maincatagory</th>
                    <th>Subcatagory</th>
                    <th>Brand</th>
                    <th>colour</th>
                    <th>Size</th>
                    <th>Baseprize</th>
                    <th>Discount</th>
                    <th>Finalprize</th>
                    <th>Stock</th>
                    <th>Stockquantity</th>
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    .filter(item =>
                      item.name && item.name.toLowerCase().includes(search.toLowerCase())
                    )

                    .map(item => {

                      return <tr key={item.id}>
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                        
                        <th>
                          <div style={{width:"300px"}}>{
                            item?.pic?.map((p,index)=>{
                             return <Link key={index} to={`${import.meta.env.VITE_APP_IMAGE_SERVER}${p}`} target='_blank'>
                             <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${p}`} height={100} width={100}  alt="" className='p-1' />
                             </Link>
                            })}
                          </div>
                        </th>

                        <th>{item.status ? "Active" : "Inactive"}</th>
                        
                        <th>{item.maincatagory}</th>
                        <th>{item.subcatagory} </th>
                        <th>{item.brand}</th>
                        <th>{item.color.join(",")}</th>
                        <th>{item.size.join(",")}</th>
                        <th>&#8377;{item.baseprize}</th>
                        <th>{item.discount}</th>
                        <th>&#8377;{item.finalprize}</th>
                        <th>{item.stock ?"In Stock":"Out of Stock"}</th>
                        <th>{item.stockquantity}</th>
                        
                        <th><button onClick={() => { deleteRecord(item.id) }}><i className='bi bi-trash text-danger'></i></button></th>
                        <th>
                            <button className="btn btn-sm" onClick={() => editRecord(item.id)}>
                            <i className='bi bi-pencil-square text-primary fs-3'></i>
                          </button>
                        </th>
                      </tr>
                    })
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div style={{ height: 100 }}></div>
      </div>
    </>
  )
}

export default AdminProduct    