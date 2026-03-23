import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero";
import { useNavigate } from "react-router-dom";

export default function AddressPage() {

  const navigate = useNavigate();

  const [savedAddresses, setSavedAddresses] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pin: ""
  });

  // ✅ LOAD SAVED ADDRESSES
  useEffect(() => {
    async function loadAddresses() {
      const userid = localStorage.getItem("id");
      let res = await fetch(`http://localhost:8000/user/${userid}`);
      let user = await res.json();
      setSavedAddresses(user.address || []);
    }
    loadAddresses();
  }, []);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  // ✅ SAVE NEW ADDRESS
  async function saveAddress(data) {

    const userid = localStorage.getItem("id");

    let response = await fetch(`http://localhost:8000/user/${userid}`);
    let user = await response.json();

    let address = user.address || [];
    address.push(data);

    await fetch(`http://localhost:8000/user/${userid}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...user,
        address: address
      })
    });

    alert("✅ Address Saved Successfully");
    navigate("/checkout");
  }

  function handleSubmit(e) {
    e.preventDefault();
    saveAddress(form);
  }

  // ✅ SELECT OLD ADDRESS
  function selectAddress(item) {
    navigate("/checkout", { state: { selectedAddress: item } });
  }

  return (
    <>
      <Hero title="Address" />

      <div className="container my-5">

     
        {savedAddresses.length > 0 && (
          <div className="mb-5">

            <h4 className="mb-3">Saved Addresses</h4>

            <div className="table">
              <table className="table table-bordered table-striped table-hover align-middle text-center">
                <thead className='My-Color'>
                  <tr>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>Select</th>
                  </tr>
                </thead>

                <tbody>
                  {savedAddresses.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>
                        {item.phone} <br />
                        {item.email}
                      </td>
                      <td>
                        {item.address}, {item.city}, {item.state} - {item.pin}
                      </td>
                      <td>
                        <button
                          className="btn My-Color text-light btn-sm"
                          onClick={() => selectAddress(item)}
                        >
                          Deliver Here
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        )}

        
        <div className="row justify-content-center">

          <div className="col-lg-6">

            <div className="card shadow p-4">

              <h4 className="mb-4 text-center">Add New Address</h4>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label>Name</label>
                  <input type="text" name="name" className="form-control" required onChange={handleChange}/>
                </div>

                <div className="mb-3">
                  <label>Email</label>
                  <input type="email" name="email" className="form-control" required onChange={handleChange}/>
                </div>

                <div className="mb-3">
                  <label>Phone</label>
                  <input type="number" name="phone" className="form-control" required onChange={handleChange}/>
                </div>

                <div className="mb-3">
                  <label>Full Address</label>
                  <textarea name="address" className="form-control" rows="3" required onChange={handleChange}></textarea>
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label>City</label>
                    <input type="text" name="city" className="form-control" required onChange={handleChange}/>
                  </div>

                  <div className="col-md-4 mb-3">
                    <label>State</label>
                    <input type="text" name="state" className="form-control" required onChange={handleChange}/>
                  </div>

                  <div className="col-md-4 mb-3">
                    <label>PIN Code</label>
                    <input type="number" name="pin" className="form-control" required onChange={handleChange}/>
                  </div>
                </div>

                <button className="shop-btn btn-primary w-100 mt-3">
                  Save Address
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}