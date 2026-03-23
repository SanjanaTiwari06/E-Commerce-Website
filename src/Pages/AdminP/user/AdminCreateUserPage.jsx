/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import FormValidator from "../../../Validators/FormValidator";
import AdminSidebar from "../../../Components/AdminC/AdminSideBar";

import {
    GetUser,
    CreateUser,
} from "../../../Redux/ActionCreators/UserActionCreators";

export default function AdminCreateUserPage() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const UserStateData = useSelector((state) => state.UserStateData || []);

    const [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
        role: "Admin",
        status: true,
    });

    const [errorMessage, setErrorMessage] = useState({
        name: "Name Field is Mandatory",
        username: "User Name Field is Mandatory",
        email: "Email Field is Mandatory",
        phone: "Phone Field is Mandatory",
        password: "Password Field is Mandatory",
    });

    const [show, setShow] = useState(false);

    // INPUT HANDLER
    function getInputData(e) {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: name === "status" ? (value === "1" ? true : false) : value,
        });

        setErrorMessage({
            ...errorMessage,
            [name]: FormValidator(e),
        });
    }

    // SUBMIT FORM
    function postData(e) {
        e.preventDefault();

        let error = Object.values(errorMessage).find((x) => x !== "");

        if (error) {
            setShow(true);
        }
        else if (data.password !== data.cpassword) {

            setShow(true);

            setErrorMessage({
                ...errorMessage,
                password: "Password and Confirm Password do not match",
            });

        } else {

            let item = UserStateData.find(
                (x) =>
                    x.username?.toLowerCase() === data.username.toLowerCase() ||
                    x.email?.toLowerCase() === data.email.toLowerCase()
            );

            if (item) {

                setShow(true);

                setErrorMessage({
                    ...errorMessage,
                    username:
                        item.username?.toLowerCase() === data.username.toLowerCase()
                            ? "Username Already Taken"
                            : "",
                    email:
                        item.email?.toLowerCase() === data.email.toLowerCase()
                            ? "Email Already Registered"
                            : "",
                });

            } else {

                dispatch(
                    CreateUser({
                        name: data.name,
                        username: data.username,
                        email: data.email,
                        phone: data.phone,
                        password: data.password,
                        role: data.role,
                        status: data.status,
                    })
                );

                navigate("/admin/user");
            }
        }
    }

    // GET USERS
    useEffect(() => {
        dispatch(GetUser());
    }, []);

    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">

                    {/* Sidebar */}
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>

                    {/* Form */}
                    <div className="col-md-9">

                        <h6 className="mybackground text-light text-center p-2 fs-1 mb-3">
                            Create User
                            <Link to="/admin/user">
                                <i className="bi bi-arrow-left text-light fs-1 float-end"></i>
                            </Link>
                        </h6>

                        <form onSubmit={postData}>
                            <div className="row">

                                {/* NAME */}
                                <div className="col-md-6 mb-3">
                                    <label>Name*</label>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={getInputData}
                                        className={`form-control ${show && errorMessage.name ? "border-danger" : "myborder"
                                            }`}
                                        placeholder="Full Name"
                                    />
                                    {show && errorMessage.name && (
                                        <p className="text-danger">{errorMessage.name}</p>
                                    )}
                                </div>

                                {/* PHONE */}
                                <div className="col-md-6 mb-3">
                                    <label>Phone*</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        onChange={getInputData}
                                        className={`form-control ${show && errorMessage.phone ? "border-danger" : "myborder"
                                            }`}
                                        placeholder="Phone Number"
                                    />
                                    {show && errorMessage.phone && (
                                        <p className="text-danger">{errorMessage.phone}</p>
                                    )}
                                </div>

                                {/* USERNAME */}
                                <div className="col-md-6 mb-3">
                                    <label>User Name*</label>
                                    <input
                                        type="text"
                                        name="username"
                                        onChange={getInputData}
                                        className={`form-control ${show && errorMessage.username
                                                ? "border-danger"
                                                : "myborder"
                                            }`}
                                        placeholder="User Name"
                                    />
                                    {show && errorMessage.username && (
                                        <p className="text-danger">{errorMessage.username}</p>
                                    )}
                                </div>

                                {/* EMAIL */}
                                <div className="col-md-6 mb-3">
                                    <label>Email*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={getInputData}
                                        className={`form-control ${show && errorMessage.email ? "border-danger" : "myborder"
                                            }`}
                                        placeholder="Email Address"
                                    />
                                    {show && errorMessage.email && (
                                        <p className="text-danger">{errorMessage.email}</p>
                                    )}
                                </div>

                                {/* PASSWORD */}
                                <div className="col-md-6 mb-3">
                                    <label>Password*</label>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={getInputData}
                                        className={`form-control ${show && errorMessage.password
                                                ? "border-danger"
                                                : "myborder"
                                            }`}
                                        placeholder="Enter Password"
                                    />
                                    {show && errorMessage.password && (
                                        <p className="text-danger">{errorMessage.password}</p>
                                    )}
                                </div>

                                {/* CONFIRM PASSWORD */}
                                <div className="col-md-6 mb-3">
                                    <label>Confirm Password*</label>
                                    <input
                                        type="password"
                                        name="cpassword"
                                        onChange={getInputData}
                                        className="form-control myborder"
                                        placeholder="Confirm Password"
                                    />
                                </div>

                                {/* ROLE */}
                                <div className="col-md-6 mb-3">
                                    <label>Role*</label>
                                    <select
                                        name="role"
                                        onChange={getInputData}
                                        className="form-select myborder"
                                    >
                                        <option>Admin</option>
                                        <option>Super Admin</option>
                                        <option>Buyer</option>
                                    </select>
                                </div>

                                {/* STATUS */}
                                <div className="col-md-6 mb-3">
                                    <label>Status*</label>
                                    <select
                                        name="status"
                                        onChange={getInputData}
                                        className="form-select myborder"
                                    >
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>

                            </div>

                            <div clpic="col-12">
                                <button className='btn w-100 My-Border btn-primary btn-lg My-Color text-light h-20'>Create</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <div style={{ height: 100 }}></div>
        </>
    );
}