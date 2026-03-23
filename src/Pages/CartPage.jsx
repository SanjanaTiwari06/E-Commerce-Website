// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GetCart, DeleteCart } from "../Redux/ActionCreators/CartActionCreators";
// import { Link } from "react-router-dom";

// export default function CartPage() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(GetCart());
//   }, [dispatch]);

//   const cart = useSelector((state) => state.CartStateData) || [];

//   return (
//     <div className="container my-5">
//       <h2 className="text-center mb-4">My Cart</h2>

//       {cart.length === 0 ? (
//         <h4 className="text-center">Cart is Empty</h4>
//       ) : (
//         <>
//           <div className="row">
//             {cart.map((item, index) => {
//               return (
//                 <div key={index} className="col-lg-3 col-md-6 mt-5">
//                   <div className="product-wrapper " data-aos="fade-right" data-aos-duration="100">
//                     <div className="product-img">
//                       <img src={item?.image ?`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.image}`
//                       :"https://via.placeholder.com/300"} style={{objectFit:"cover"}}/>
//                       <div className="product-cart-items">
//                         <Link to={`/shop?br=${item.brand}`} className="cart cart-item">
//                           <span className=' My-Color text-light p-3 rounded-pill'>
//                             {item?.brand}
//                           </span>
//                         </Link>
//                         <a href="#!" className="My-Color text-light favourite cart-item  p-3 rounded-pill">
//                           <span>
//                             {item?.discount}% Off
//                           </span>
//                         </a>

//                       </div>
//                     </div>
//                     <div className="product-info">
//                       <div className="ratings ">
//                         <span>
//                           <i className='bi bi-star-fill text-warning p-1'></i>
//                           <i className='bi bi-star-fill text-warning p-1'></i>
//                           <i className='bi bi-star-fill text-warning p-1'></i>
//                           <i className='bi bi-star-fill text-warning p-1'></i>
//                           <i className='bi bi-star-fill text-warning '></i>
//                         </span>
//                       </div>
//                       <div className="product-description">
//                         <Link to={`/product/${item.id}`} className="product-details">{item.name}</Link>
//                         <div className="price">
//                           <span className="price-cut">&#8377;{item?.baseprize}</span>
//                           <span className="new-price">&#8377;{item?.finalprize}</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="product-cart-btn">
//                       <Link  onClick={() => dispatch(DeleteCart({ id: item.id }))} className="product-btn">Remove to Cart</Link>

//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//           </>
//       )}
//       <div style={{height:"100px"}}></div>
//     </div>

//   );
// }

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCart, DeleteCart, UpdateCart } from "../Redux/ActionCreators/CartActionCreators";
import { Link } from "react-router-dom";

export default function CartPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCart());
  }, [dispatch]);

  const cart = useSelector((state) => state.CartStateData) || [];

  // subtotal
  const subtotal = cart.reduce((total, item) => total + (item.finalprize * (item.qty || 1)), 0);


  // increase qty
  function increaseQty(item) {
    dispatch(UpdateCart({
      ...item,
      qty: (item.qty || 1) + 1
    }));
  }

  // decrease qty
  function decreaseQty(item) {
    if ((item.qty || 1) > 1) {
      dispatch(UpdateCart({
        ...item,
        qty: item.qty - 1
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

                {cart.map((item) => (

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

                        <span>{item.name}</span>

                      </Link>

                    </td>


                    {/* BRAND */}

                    <td>{item.brand}</td>


                    {/* PRICE */}

                    <td>₹{item.finalprize}</td>


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
                          {item.qty || 1}
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
                      ₹{item.finalprize * (item.qty || 1)}
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

                ))}

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

              <Link to="/checkout" className="btn btn-primary w-100">
                Proceed To Checkout
              </Link>

            </div>

          </div>

        </div>

      )}

      <div style={{ height: "200px" }}></div>

    </div>
  );
}