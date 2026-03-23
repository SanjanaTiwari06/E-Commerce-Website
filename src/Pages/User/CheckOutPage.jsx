import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {

  const navigate = useNavigate();

  const [user, setUser] = useState({ address: [] });

  const [selected, setSelected] = useState({
    deliveryAddress: {},
    paymentMode: "COD",
  });

  const cart = useSelector((state) => state.CartStateData) || [];

  const subtotal = cart.reduce((total, item) => {
    if (!item) return total;
    return total + ((item.finalprize || 0) * (item.qty || 1));
  }, 0);

  
  useEffect(() => {
    async function getUser() {
      let response = await fetch(
        `${import.meta.env.VITE_APP_BACKEND_SERVER}/user/${localStorage.getItem("id")}`
      );

      let data = await response.json();

      setUser({
        ...data,
        address: data?.address || [],
      });

      if (data?.address?.length) {
        setSelected((prev) => ({
          ...prev,
          deliveryAddress: data.address[0],
        }));
      }
    }

    getUser();
  }, []);

  // ✅ PLACE ORDER
  async function placeOrder() {

    if (!selected?.deliveryAddress?.address) {
      alert("Please select delivery address");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    const orderData = {
      user: localStorage.getItem("id"),
      products: cart,
      total: subtotal,
      paymentMode: selected.paymentMode,
      paymentStatus: selected.paymentMode === "COD" ? "Pending" : "Paid",
      orderStatus: "Placed",
      deliveryAddress: selected.deliveryAddress,
      date: new Date()
    };

    try {

      await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData)
      });

      alert("✅ Order Placed Successfully");

      navigate("/OrderConfirmation");

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  }

  return (
    <>
      <Hero title="Place Your Order" />

      <section className="checkout footer-padding">

        <div className="container">

          <div className="row gy-5">

            {/* LEFT SIDE */}
            <div className="col-lg-6">

              <h4 className="mb-4">Billing Details</h4>

              {user?.address?.length > 0 ? (
                user.address.map((item, index) => (
                  <div
                    key={index}
                    className="card p-4 mb-3"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setSelected({
                        ...selected,
                        deliveryAddress: item,
                      })
                    }
                  >
                    <div className="position-relative">

                      <div className="position-absolute top-0 end-0">
                        {selected?.deliveryAddress?.address === item.address ? (
                          <i className="fs-3 bi bi-check"></i>
                        ) : null}
                      </div>

                      <p><b>Name</b> &nbsp;&nbsp; {item.name}</p>

                      <p>
                        <b>Contact</b> &nbsp;&nbsp;
                        {item.email}, {item.phone}
                      </p>

                      <p>
                        <b>Address</b> &nbsp;&nbsp; {item.address}
                        <br />
                        {item.pin}, {item.city}, {item.state}
                      </p>

                    </div>
                  </div>
                ))
              ) : (
                <div className="alert alert-warning">
                  No Address Found
                </div>
              )}

              {/* PAYMENT MODE */}
              <h4 className="mt-4 mb-3">Payment Mode</h4>

              <div
                className="card p-3 mb-2 position-relative"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setSelected({
                    ...selected,
                    paymentMode: "COD",
                  })
                }
              >
                Cash On Delivery
                <div className="position-absolute top-0 end-0 p-2">
                  {selected.paymentMode === "COD" && (
                    <i className="fs-3 bi bi-check"></i>
                  )}
                </div>
              </div>

              <div
                className="card p-3 position-relative"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setSelected({
                    ...selected,
                    paymentMode: "Online",
                  })
                }
              >
                Net Banking/Card/UPI
                <div className="position-absolute top-0 end-0 p-2">
                  {selected.paymentMode === "Online" && (
                    <i className="fs-3 bi bi-check"></i>
                  )}
                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-6">

              <table className="table border">
                <thead style={{ background: "#f3e5f5" }}>
                  <tr>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>

                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td>{item?.name}</td>
                      <td>₹{item?.finalprize}</td>
                      <td>{item?.qty || 1}</td>
                      <td>₹{(item?.finalprize || 0) * (item?.qty || 1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table className="table border">
                <tbody>
                  <tr>
                    <th>Subtotal Amount</th>
                    <td>₹{subtotal}</td>
                  </tr>
                  <tr>
                    <th>Shipping Amount</th>
                    <td>₹0</td>
                  </tr>
                  <tr>
                    <th>Total Amount</th>
                    <td>₹{subtotal}</td>
                  </tr>
                </tbody>
              </table>

              <button className="shop-btn"onClick={placeOrder}>
                Place Order
              </button>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}