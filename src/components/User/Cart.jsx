

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCart, DeleteCart, UpdateCart } from "../../Redux/ActionCreators/CartActionCreators";
import { Link } from "react-router-dom";

export default function Cart() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCart());
  }, [dispatch]);

  const cart = useSelector((state) => state.CartStateData) || [];

  // SAFE SUBTOTAL
  const subtotal = cart.reduce((total, item) => {
    if (!item) return total;
    return total + ((item.finalprize || 0) * (item.qty || 1));
  }, 0);


  // INCREASE QTY
  function increaseQty(item) {

    if (!item) return;

    if (item.stockQuantity && (item.qty || 1) >= item.stockQuantity) {
      alert("Stock limit reached");
      return;
    }

    dispatch(UpdateCart({
      ...item,
      qty: (item.qty || 1) + 1
    }));
  }


  // DECREASE QTY
  function decreaseQty(item) {

    if (!item) return;

    if ((item.qty || 1) > 1) {
      dispatch(UpdateCart({
        ...item,
        qty: (item.qty || 1) - 1
      }));
    }

  }

  return (

    <div className="container my-5">

      <h2 className="text-center mb-5">Manage Your Cart</h2>

      {cart.length === 0 ? (
        <h4 className="text-center">Cart is Empty</h4>
      ) : (

        <div className="row">

          {/* CART TABLE */}

          <div className="col-lg-8">

            <table className="table table-bordered align-middle">

              <thead className="table-light">

                <tr>
                  <th>Product</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>

              </thead>

              <tbody>

                {cart?.map((item) => {

                  if (!item) return null;

                  return (

                    <tr key={item.id}>

                      {/* PRODUCT */}

                      <td>

                        <Link
                          to={`/product/${item.id}`}
                          className="d-flex align-items-center gap-3 text-dark text-decoration-none"
                        >

                          <img
                            src={
                              item?.image
                                ? `${import.meta.env.VITE_APP_IMAGE_SERVER}${item.image}`
                                : "https://via.placeholder.com/80"
                            }
                            width="70"
                            height="70"
                            style={{ objectFit: "cover" }}
                          />

                          <span>{item?.name}</span>

                        </Link>

                      </td>

                      {/* BRAND */}

                      <td>{item?.brand}</td>


                      {/* PRICE */}

                      <td>₹{item?.finalprize}</td>


                      {/* QUANTITY */}

                      <td>

                        <div className="d-flex align-items-center justify-content-center border rounded">

                          <button
                            className="btn btn-light"
                            onClick={() => decreaseQty(item)}
                          >
                            -
                          </button>

                          <span className="px-3 fw-bold">
                            {item?.qty || 1}
                          </span>

                          <button
                            className="btn btn-light"
                            onClick={() => increaseQty(item)}
                          >
                            +
                          </button>

                        </div>

                      </td>


                      {/* TOTAL */}

                      <td className="fw-bold">
                        ₹{(item?.finalprize || 0) * (item?.qty || 1)}
                      </td>


                      {/* REMOVE */}

                      <td>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => dispatch(DeleteCart({ id: item.id }))}
                        >
                          X
                        </button>

                      </td>

                    </tr>

                  );

                })}

              </tbody>

            </table>

          </div>


          {/* SUMMARY */}

          <div className="col-lg-4">

            <div className="border rounded p-4 shadow-sm">

              <h5 className="mb-4">Cart Summary</h5>

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>₹0</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold mb-4">
                <span>Total</span>
                <span>₹{subtotal}</span>
              </div>

              <Link to="/checkout" className="text-decoration-none">
                <button className="shop-btn w-100">
                  Proceed To Checkout
                </button>
              </Link>
            </div>

          </div>

        </div>

      )}

      <div style={{ height: "200px" }}></div>

    </div>

  );
}