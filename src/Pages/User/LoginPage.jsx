
import React, { useState } from 'react'
import FormValidator from '../../Validators/FormValidator'
import { Link, useNavigate } from 'react-router-dom'



function SignUp() {

    let [data, setdata] = useState({

        username: "",
        password: ""
    })

    let [errormsg, seterrormsg] = useState({
        username: "",
        password: ""
    })

    let navigate = useNavigate()

    let getInputData = (e) => {
        let { name, value } = e.target
        setdata({ ...data, [name]: value })

    }

    let postData = async (e) => {
        e.preventDefault()
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user`, {
            method: 'GET',
            headers: {
                "content-type": "Application/json"
            }

        })
        response = await response.json()

        let item = response.find(x => x.username?.toLocaleLowerCase() === data.username.toLocaleLowerCase() || x.email?.toLocaleLowerCase() === data.username.toLocaleLowerCase())
        if (item && item.password === data.password) {
            localStorage.setItem("login", true)
            localStorage.setItem("name", item.name)
            localStorage.setItem("username", item.username)
            localStorage.setItem("id", item.id)
            localStorage.setItem("role", item.role)
            if(item.role === "Buyer")
            navigate("/profile")
        else 
            navigate("/admin")
        }

        else {
            seterrormsg({
                username: "Invalid username",
                password: "Invalid password"
            })
        }


    }

    return (
        <>

            <section className="login account footer-padding">
                <div className="container">
                    <div className="login-section account-section">
                        <div className="bg-light p-5 my-5 rounded" style={{ width: "800px" }} >
                            <h5 className="comment-title">Login to your Account</h5>
                            <form onSubmit={postData}>
                                <div className="row mt-5">


                                    <div className="col-12 mb-3">
                                        <label className='fs-4'>User-Name:</label>
                                        <input type="text" name='username' placeholder='Enter User-Name' onChange={getInputData} className={`form-control mt-3 fs-4 ${errormsg.username ? 'border-danger' : 'My-Border'}`} style={{ height: '40px' }} />
                                        {errormsg.username ? <p className='text-danger'>{errormsg.username}</p> : null}
                                    </div>



                                    <div className="col-md-12 mb-5">
                                        <label className='fs-4'>Password:</label>
                                        <input type="password" name='password' placeholder="s123@999" onChange={getInputData} className={`form-control mt-3 fs-4 ${errormsg.password ? 'border-danger' : 'My-Border'}`} style={{ height: '40px' }} />
                                        {errormsg.password ? <p className='text-danger'>{errormsg.password}</p> : null}
                                    </div>



                                </div>

                                {/* <div className="review-form-name checkbox">
                        <div className="checkbox-item">
                            <input type="checkbox"/>
                            <p className="remember">
                                I agree all terms and condition in <span className="inner-text">ShopUs.</span></p>
                        </div>
                    </div> */}
                                <div className="login-btn text-center">
                                    <button type='submit' className="shop-btn" style={{ width: "400px" }}>Login</button>
                                </div>
                            </form>
                            <div className='d-flex justify-content-between'>
                                <span className="fs-4" >Forgot Password <Link>Click to Reset</Link></span>
                                <span className="fs-4" >Don't have account <Link to="/SignUp">Create</Link></span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp