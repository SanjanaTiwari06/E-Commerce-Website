/* eslint-disable react-hooks/exhaustive-deps */
                          fetch
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Hero from '../../../components/Hero'
import AdminSideBar from '../../../components/AdminC/AdminSideBar'
import { Await, Link, useNavigate } from 'react-router-dom'
import FormValidator from '../../../Validators/FormValidator'
import PicValidator from '../../../Validators/PicValidator'
import { CreateProduct } from '../../../Redux/ActionCreators/ProductActionCreators'
import { GetMainCatagory } from '../../../Redux/ActionCreators/MainCatagoryActionCreators'
import { GetSubCatagory } from '../../../Redux/ActionCreators/SubCatagoryActionCreators'
import { GetBrand } from '../../../Redux/ActionCreators/BrandActionCreators'
import { useDispatch, useSelector } from 'react-redux'                                                                              
let Colours = [
    "Red", "Yellow", "Green", "Blue", "Pink", "Orange", "Magenta", "Black", "White", "Brown", "Purple", "Grey",
]                                            

let Size = [
    "XXL", "XL", "L", "M", "SM", "XS", "24", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "N/A"
]
function AdminCreateProduct() {
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
        description:""
    })
    let productdata = useSelector(state => state.ProductStateData)

    let MainCatagoryStateData = useSelector(state => state.MainCatagoryStateData)
    let SubCatagoryStateData = useSelector(state => state.SubCatagoryStateData)
    let BrandStateData = useSelector(state => state.BrandStateData)

    let dispatch = useDispatch()

    let [errormsg, seterrormsg] = useState({
        // maincatagory: "Maincatagory Feild is mandatory",
        // brand:"Brand Feild is mandatory",
        // finalprize:"This Feild is mandatory",
        name: "Name Feild is mandatory",
        pic: "Pic Feild is mandatory",
        size: "Please select Atleast one size",
        color: "Please select Atleast one colour",
        baseprize: "BasePrize Feild is mandatory",
        discount: "Discount Feild is mandatory",
        stockquantity: "StockQuantity Feild is mandatory",
        description:"description is mandatory"
    })
    let [Show, setShow] = useState(false)
    let navigate = useNavigate()

    function getInput(e) {
        let name = e.target.name
        let value = name === "pic" ? Array.from(e.target.files).map(x => "product/" + x.name) : e.target.value
        setdata({ ...data, [name]: (name === "status" || name === "stock") ? (value === "1" ? true : false) : value })
        seterrormsg({ ...errormsg, [name]: name === "pic" ? PicValidator(e) : FormValidator(e) })
    }
    function getInputCheckbox(field, value) {
        let arr = field === 'color' ? data.color : data.size
        if (arr.includes(value))
            arr = arr.filter(x => x !== value)
        else
            arr.push(value)
        seterrormsg({ ...errormsg, [field]: arr.length === 0 ? `Please Select Atleast One ${field}` : "" })
        setdata({ ...data, [field]: arr })
    }


    useEffect(() => {
        (() => {
            dispatch(GetMainCatagory())
        })()

    }, [MainCatagoryStateData.length])

    useEffect(() => {
        (() => {
            dispatch(GetSubCatagory())
        })()

    }, [SubCatagoryStateData.length])
    useEffect(() => {
        (() => {
            dispatch(GetBrand())
        })()

    }, [BrandStateData.length])


    async function PostData(e) {
        e.preventDefault()
        let error = Object.values(errormsg).find(x => x !== "")
        if (error)
            setShow(true)
        else {
            let bp = parseInt(data.baseprize)
            let d = parseInt(data.discount)
            let sq = parseInt(data.stockquantity)
            let fp = parseInt(bp - d)
            dispatch(CreateProduct({
                ...data,
                'maincatagory': data.maincatagory ? data.maincatagory : MainCatagoryStateData[0].name,
                'subcatagory': data.subcatagory ? data.subcatagory : SubCatagoryStateData[0].name,
                'brand': data.brand ? data.brand : BrandStateData[0].name,
                'baseprize' : bp,
                'discount':d,
                'stockquantity':sq,
                'finalprize':fp,
                'description': data.description
            }))

            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/product`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                    //  "authorization":"your auth key"
                },
                body: JSON.stringify({ ...data,
                    finalprize: fp,
                
                })

            })
            response = await response.json()
            navigate('/Admin/Product')
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
                            Create-Product <Link to='/Admin/Product'> <i className='bi bi-arrow-left fs-1 float-end text-light'></i></Link>
                        </h5>
                        <form onSubmit={PostData}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label className='fs-4 mt-3'>Name:</label>
                                    <input type="text" name='name' placeholder='Product Name' onChange={getInput} className={`form-control  fs-4 ${Show && errormsg.name ? 'border-danger' : 'My-Border'}`} style={{ height: '40px' }} />
                                    {Show && errormsg.name ? <p className='text-danger'>{errormsg.name}</p> : null}
                                </div>

                                <div className="col-lg-3 mb-3 mt-3">
                                    <label className='fs-4'>MainCatagory:</label>
                                    <select name="maincatagory" onChange={getInput} className='form-select fs-4 My-Border'>
                                        {
                                            MainCatagoryStateData.filter(x => x.status).map(item => {
                                                return <option key={item.id} value={item.name}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 mb-3 mt-3">
                                    <label className='fs-4'>SubCatagory:</label>
                                    <select name="subcatagory" onChange={getInput} className='form-select fs-4 My-Border'>
                                        {
                                            SubCatagoryStateData.filter(x => x.status).map(item => {
                                                return <option key={item.id} value={item.name}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 mb-3 mt-3">
                                    <label className='fs-4'>Brand:</label>
                                    <select name="brand" onChange={getInput} className='form-select fs-4 My-Border'>
                                        {
                                            BrandStateData.filter(x => x.status).map(item => {
                                                return <option key={item.id}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 mb-3 mt-3">
                                    <label className='fs-4'>Stock:</label>
                                    <select name="stock" onChange={getInput} className='form-select fs-4 My-Border'>

                                        <option value="1">In Stock</option>
                                        <option value="0">Out of Stock</option>

                                    </select>
                                </div>
                                <div className="col-lg-6 md-6 mb-2 mt-3">
                                    <label className='fs-4'>Base Prize:</label>
                                    <input type="number" name='baseprize' placeholder='Base-Prize' onChange={getInput} className={`form-control  fs-4 ${Show && errormsg.baseprize ? 'border-danger' : 'My-Border'}`} style={{ height: '40px' }} />
                                    {Show && errormsg.baseprize ? <p className='text-danger'>{errormsg.baseprize}</p> : null}
                                </div>
                                <div className="col-lg-6 md-6 mb-2 mt-3">
                                    <label className='fs-4'>Discount:</label>
                                    <input type="number" name='discount' placeholder='Base-Prize' onChange={getInput} className={`form-control  fs-4 ${Show && errormsg.discount ? 'border-danger' : 'My-Border'}`} style={{ height: '40px' }} />
                                    {Show && errormsg.discount ? <p className='text-danger'>{errormsg.discount}</p> : null}
                                </div>

                                <div className="col-12 mb-3 mt-3">
                                    <label className='fs-4'>Colours:</label>
                                    <div className='My-Border row p-2 rounded'>
                                        {Colours.map((item, index) => {
                                            return <div key={index} className='col-lg-2 md-3 sm-4 col-6'>
                                                <input type="checkbox" name={item} onChange={() => getInputCheckbox('color', item)} checked={data.color.includes(item)} />
                                                <label className='ms-3 fs-4'>{item}</label>
                                            </div>
                                        })}
                                    </div>
                                    {Show && errormsg.color ? <p className='text-danger'>{errormsg.color}</p> : null}
                                </div>

                                <div className="col-12 mb-3 mt-3">
                                    <label className='fs-4'>Size:</label>
                                    <div className='My-Border row p-2 rounded'>
                                        {Size.map((item, index) => {
                                            return <div key={index} className='col-lg-2 md-3 sm-4 col-6'>
                                                <input type="checkbox" name={item} onChange={() => getInputCheckbox('size', item)} checked={data.size.includes(item)} />
                                                <label className='ms-3 fs-4'>{item}</label>
                                            </div>
                                        })}
                                    </div>
                                    {Show && errormsg.size ? <p className='text-danger'>{errormsg.size}</p> : null}
                                </div>

                                <div className="col-lg-4 md-6 mb-2 mt-3">
                                    <label className='fs-4'>Pic:</label>
                                    <input type="file" name='pic' multiple placeholder='Product Name' onChange={getInput} className={`form-control  fs-4 ${Show && errormsg.pic ? 'border-danger' : 'My-Border'}`} style={{ height: '40px' }} />
                                    {Show && errormsg.pic ? <p className='text-danger'>{errormsg.pic}</p> : null}
                                </div>
                                <div className="col-lg-4 md-6 mb-5 mt-3">                                                               
                                    <label className='fs-4'>Status:</label>
                                    <select name="status" onChange={getInput} className="form-select My-Border " style={{ height: '40px' }}>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 md-6 mb-2 mt-3">
                                    <label className='fs-4'>Stock-Quantity:</label>
                                    <input type="number" name='stockquantity' placeholder='Stock-Quantity' onChange={getInput} className={`form-control  fs-4 ${Show && errormsg.stockquantity ? 'border-danger' : 'My-Border'}`} style={{ height: '40px' }} />
                                    {Show && errormsg.stockquantity ? <p className='text-danger'>{errormsg.stockquantity}</p> : null}
                                </div>
                                <div className="col-12 mb-3">
                                    <label className='fs-4'>Description:</label>
                                    <textarea type="text" name='description' placeholder='Description...' onChange={getInput} className='form-control fs-4 My-Border' style={{ height: '100px' }} />
                                    {Show && errormsg.description ? <p className='text-danger'>{errormsg.description}</p> : null}
                                </div>
                                <div clpic="col-12" >
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


export default AdminCreateProduct 