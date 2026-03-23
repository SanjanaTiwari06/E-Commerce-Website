import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import FormValidator from '../../Validators/FormValidator'

export default function ChangePassword() {

    let [user, setUser] = useState({})
    let [data, setData] = useState({
        oldPassword: '',
        password: '',
        cpassword: ''
    })

    let [errorMessage, setErrorMessage] = useState("")
    let [show, setShow] = useState(false)


    function getInputData(e) {
        let { name, value } = e.target
        setShow(false)

        setData({
            ...data,
            [name]: value
        })

        if (name === "password")
            setErrorMessage(FormValidator(e))
    }


    async function postData(e) {
        e.preventDefault()

        let id = localStorage.getItem("userid")

        if (!id) {
            toast.error("User not logged in")
            return
        }

        if (errorMessage)
            setShow(true)

        else if (user.password !== data.oldPassword) {
            setErrorMessage("Please Enter Your Correct Current Password")
            setShow(true)
        }

        else if (user.password === data.password) {
            setErrorMessage("Old Password and New Password Can Not Be Same")
            setShow(true)
        }

        else if (data.password !== data.cpassword) {
            setErrorMessage("Password and Confirm Password Doesn't Match")
            setShow(true)
        }

        else {

            await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    ...user,
                    password: data.password
                })
            })

            setUser({
                ...user,
                password: data.password
            })

            toast.success("Your Password Has Been Updated!!!")
        }
    }



    useEffect(() => {

        async function getUser() {

            let id = localStorage.getItem("userid")

            if (!id) return

            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user/${id}`)

            if (response.ok) {
                response = await response.json()
                setUser(response)
            }
        }

        getUser()

    }, [])



    return (
        <>
            <div className="row align-items-center">

                <div className="col-lg-6">

                    {show && errorMessage ?
                        <p className='text-danger text-center'>{errorMessage}</p>
                        : null}

                    <div className="form-section">

                        <form onSubmit={postData}>

                            <div className="currentpass mb-3">
                                <label className="form-label">Current Password*</label>

                                <input
                                    type="password"
                                    name="oldPassword"
                                    onChange={getInputData}
                                    className={`form-control ${show && errorMessage ? 'border-danger' : 'myborder'}`}
                                    placeholder="******"
                                />
                            </div>


                            <div className="password mb-3">
                                <label className="form-label">New Password*</label>

                                <input
                                    type="password"
                                    name="password"
                                    onChange={getInputData}
                                    className={`form-control ${show && errorMessage ? 'border-danger' : 'myborder'}`}
                                    placeholder="******"
                                />
                            </div>


                            <div className="re-password mb-3">
                                <label className="form-label">Confirm Password*</label>

                                <input
                                    type="password"
                                    name="cpassword"
                                    onChange={getInputData}
                                    className={`form-control ${show && errorMessage ? 'border-danger' : 'myborder'}`}
                                    placeholder="******"
                                />
                            </div>


                            <div className="form-btn">
                                <button type='submit' className="shop-btn w-100">
                                    Update Password
                                </button>
                            </div>

                        </form>

                    </div>

                </div>


                <div className="col-lg-6">
                    <div className="reset-img text-end">
                        <img src="/images/lock.webp" alt="reset" />
                    </div>
                </div>

            </div>

            <ToastContainer />
        </>
    )
}