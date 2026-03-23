
import React, { useState } from 'react'
import FormValidator from '../../Validators/FormValidator'
import { Link, useNavigate } from 'react-router-dom'


function SignUp() {

    let [data, setdata] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
        role: "Buyer",
        status: true,
    })

    let [errormsg, seterrormsg] = useState({
        name: "Name Feild is Mandatory...!!!",
        username: "User-Name Feild is Mandatory...!!!",
        email: "E-mail Address Feild is Mandatory...!!!",
        phone: "Phone Number Feild is Mandatory...!!!",
        password: "Password Feild is Mandatory...!!!",
        cpassword: "Confirm Password Feild is Mandatory...!!!",
    })

    let [show, setshow] = useState(false)
    let navigate = useNavigate()

    let getInputData = (e) => {
        let { name, value } = e.target
        setdata({ ...data, [name]: value })
        seterrormsg({ ...errormsg, [name]: FormValidator(e) })
    }

    let postData = async (e) => {
        e.preventDefault()
        let error = Object.values(errormsg).find(x => x !== "")
        if (error)
            setshow(true)
        else if(data.password!==data.cpassword){
                setshow(true)
                seterrormsg({...errormsg,password:"Password and Confirm Password doesn't matched"})
            }
        
        else {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user`)
            response = await response.json()

            let item = response.find(x => x.username?.toLocaleLowerCase() === data.username.toLocaleLowerCase() || x.email?.toLocaleLowerCase() === data.email.toLocaleLowerCase())
           
          if(item){
                setshow(true)
            seterrormsg({
                ...errormsg,
                username: item.username?.toLocaleLowerCase() === data.username.toLocaleLowerCase() ? "UserName Already Taken" : "",
                email: item.email?.toLocaleLowerCase() === data.email.toLocaleLowerCase() ? "email Already Taken" : ""
            })}
            else {
                response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user`, {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        name: data.name,
                        username: data.username,
                        phone: data.phone,
                        email: data.email,
                        password: data.password,
                        cpassword:data.cpassword,
                        role: "Buyer",
                        status: true
                    })
                })
                response = await response.json()
                navigate("/login")
            }
        }
    }
    return (
        <>

            <section className="login account footer-padding">
                <div className="container">
                    <div className="login-section account-section">
                        <div className="bg-light p-5 my-5 rounded" style={{ width: "800px" }} >
                            <h5 className="comment-title">Create Account</h5>
                            <form onSubmit={postData}>
                                <div className="row mt-5">
                                    <div className="col-6 mb-3">
                                        <label className='fs-4'>Name:</label>
                                        <input type="text" name='name' placeholder='Enter Full Name' onChange={getInputData} className={`form-control mt-3 fs-4 ${show && errormsg.name ? 'border-danger' : 'My-Border'}`} style={{ height: '40px' }} />
                                        {show && errormsg.name ? <p className='text-danger'>{errormsg.name}</p> : null}
                                    </div>

                                    <div className="col-6 mb-3">
                                        <label className='fs-4'>User-Name:</label>
                                        <input type="text" name='username' placeholder='Enter User-Name' onChange={getInputData} className={`form-control mt-3 fs-4 ${show && errormsg.username ? 'border-danger' : 'My-Border'}`} style={{ height: '40px' }} />
                                        {show && errormsg.username ? <p className='text-danger'>{errormsg.username}</p> : null}
                                    </div>

                                    <div className="col-md-6 mb-2">
                                        <label className='fs-4'>e-mail:</label>
                                        <input type="email" name='email' placeholder="username123@gmail.com" onChange={getInputData} className={`form-control mt-3 fs-4 ${show && errormsg.email ? 'border-danger' : 'My-Border'}`} style={{ height: '40px' }} />
                                        {show && errormsg.email ? <p className='text-danger'>{errormsg.email}</p> : null}
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        <label className='fs-4'>Phone:</label>
                                        <input type="number" name='phone' placeholder="9548****33" onChange={getInputData} className={`form-control mt-3 fs-4 ${show && errormsg.phone ? 'border-danger' : 'My-Border'}`} style={{ height: '40px' }} />
                                        {show && errormsg.phone ? <p className='text-danger'>{errormsg.phone}</p> : null}
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        <label className='fs-4'>Password:</label>
                                        <input type="password" name='password' placeholder="s123@999" onChange={getInputData} className={`form-control mt-3 fs-4 ${show && errormsg.password ? 'border-danger' : 'My-Border'}`} style={{ height: '40px' }} />
                                        {show && errormsg.password ? <p className='text-danger'>{errormsg.password}</p> : null}
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        <label className='fs-4'>Confirm Password:</label>
                                        <input type="password" name='cpassword' placeholder="s123@999" onChange={getInputData} className={`form-control mt-3 fs-4 ${show && errormsg.cpassword ? 'border-danger' : 'My-Border'}`} style={{ height: '40px' }} />
                                        {show && errormsg.cpassword ? <p className='text-danger'>{errormsg.cpassword}</p> : null}
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
                                    <button type='submit' className="shop-btn" style={{ width: "400px" }}>Create an Account</button>
                                    <span className="fs-4 d-flex justify-content-center">Already have an account ?<Link to="/login">Log In</Link></span>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp