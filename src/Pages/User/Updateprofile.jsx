
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function UpdateProfile({ setOption }) {

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    phone: ""
  });

  const [user, setUser] = useState({});

  function getInputData(e) {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  async function postData(e) {
    e.preventDefault();

    let response = await fetch(
      `${import.meta.env.VITE_APP_BACKEND_SERVER}/user/${localStorage.getItem("id")}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...user, ...data }),
      }
    );

    response = await response.json();

    if (response) {
      toast("Profile Updated Successfully ✅");

      localStorage.setItem("name", data.name);
      localStorage.setItem("username", data.username);

      setOption("profile");
    }
  }

  useEffect(() => {
    (async () => {
      let response = await fetch(
        `${import.meta.env.VITE_APP_BACKEND_SERVER}/user/${localStorage.getItem("id")}`
      );

      response = await response.json();

      if (response) {
        setUser(response);

        setData({
          name: response.name || "",
          username: response.username || "",
          email: response.email || "",
          phone: response.phone || "",
        });
      }
    })();
  }, []);

  return (
    <>
      <div className="container">

        <h4 className="mb-4">Update Profile</h4>

        <form onSubmit={postData}>

          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={getInputData}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>User Name</label>
            <input
              type="text"
              name="username"
              value={data.username}
              onChange={getInputData}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={getInputData}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={data.phone}
              onChange={getInputData}
              className="form-control"
            />
          </div>

          <button className="shop-btn w-100">
            Update Profile
          </button>

        </form>

      </div>

      <ToastContainer />

      <div style={{ height: "300px" }}></div>
    </>
  );
}