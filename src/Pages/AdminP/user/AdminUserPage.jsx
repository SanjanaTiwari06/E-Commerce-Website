/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.min.css";

import AdminSideBar from "../../../Components/AdminC/AdminSideBar";

import {
  GetUser,
  DeleteUser,
  UpdateUser,
} from "../../../Redux/ActionCreators/UserActionCreators";

export default function AdminUserPage() {

  const dispatch = useDispatch();
  const UserStateData = useSelector((state) => state.UserStateData || []);

  const [data, setData] = useState([]);

  // DELETE USER
  function deleteRecord(id) {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(DeleteUser({ id }));
      setData(data.filter((item) => item.id !== id));
    }
  }

  // CHANGE STATUS
  function updateRecord(id) {
    if (window.confirm("Change user status?")) {
      let item = data.find((x) => x.id === id);

      dispatch(UpdateUser({ ...item, status: !item.status }));

      setData(
        data.map((x) =>
          x.id === id ? { ...x, status: !x.status } : x
        )
      );
    }
  }

  // GET USERS
  useEffect(() => {
    dispatch(GetUser());
  }, []);

  // SET DATA
  useEffect(() => {
    if (UserStateData.length) {
      setData(UserStateData);
    }

    let time = setTimeout(() => {
      $("#myTable").DataTable({
        destroy: true,
      });
    }, 500);

    return () => clearTimeout(time);
  }, [UserStateData.length]);

  return (
    <>
      <div className="container-fluid my-3">
        <div className="row g-4">

          {/* Sidebar */}
          <div className="col-12 col-md-3">
            <AdminSideBar />
          </div>

          {/* Main Content */}
          <div className="col-12 col-md-9">

            <h5 className="text-light p-2" style={{ background: "#ae1c9a" }}>
              Users
              <Link to="/Admin/User/Create">
                <i className="bi bi-plus fs-1 float-end text-light"></i>
              </Link>
            </h5>

            <div className="table-responsive">

              <table
                id="myTable"
                className="table table-bordered table-striped table-hover align-middle text-center"
              >

                <thead style={{ background: "#AE1C9A" }} className="text-light">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((item) => {
                    return (
                      <tr key={item.id}>

                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.role}</td>

                        <td
                          style={{ cursor: "pointer" }}
                          onClick={() => updateRecord(item.id)}
                        >
                          {item.status ? "Active" : "Inactive"}
                        </td>

                        {/* DELETE */}
                        <td>
                          <button
                            className="btn btn-sm"
                            onClick={() => deleteRecord(item.id)}
                          >
                            <i className="bi bi-trash text-danger fs-4"></i>
                          </button>
                        </td>

                        {/* EDIT */}
                        <td>
                          <Link
                            to={`/Admin/Update/${item.id}`}
                            className="btn btn-sm"
                          >
                            <i className="bi bi-pencil-square text-primary fs-4"></i>
                          </Link>
                        </td>

                      </tr>
                    );
                  })}
                </tbody>

              </table>
            </div>
          </div>
        </div>

        <div style={{ height: 100 }}></div>

      </div>
    </>
  );
}