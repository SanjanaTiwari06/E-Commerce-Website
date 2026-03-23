import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Orders() {

  const [orders, setOrders] = useState([])
  const navigate = useNavigate()

  const userid = localStorage.getItem("id")

  // LOGIN CHECK
  useEffect(() => {
    if (!userid) {
      navigate("/login")
      return
    }
  }, [userid, navigate])

  // ✅ DIRECT BACKEND FETCH (NO REDUX)
  useEffect(() => {

    async function loadOrders() {
      try {
        const res = await fetch("http://localhost:8000/checkout")
        const data = await res.json()

        const myOrders = data.filter(
          order => String(order.user) === String(userid)
        )

        setOrders(myOrders)
      }
      catch (err) {
        console.log(err)
      }
    }

    loadOrders()

  }, [userid])

  return (
    <div className="container my-4">

      {orders.length === 0 ? (
        <h3 className='text-center'>No Orders Found</h3>
      ) : (
        orders.map((item) => (
          <div className='row mb-5' key={item.id}>

            {/* ORDER DETAILS */}
            <div className="col-md-4">
              <table className='table table-bordered'>
                <tbody>
                  <tr><th>Order Id</th><td>{item.id}</td></tr>
                  <tr><th>Status</th><td>{item.orderStatus}</td></tr>
                  <tr><th>Payment Mode</th><td>{item.paymentMode}</td></tr>
                  <tr><th>Payment Status</th><td>{item.paymentStatus}</td></tr>
                  <tr><th>Total</th><td>₹{item.total}</td></tr>
                  <tr><th>Date</th><td>{new Date(item.date).toLocaleString()}</td></tr>
                </tbody>
              </table>
            </div>

            {/* PRODUCTS */}
            <div className="col-md-8">
              <h5 className='text-center my-3 My-Color text-white p-2'>
                Products In This Order
              </h5>

              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {item?.products?.map((p, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={`http://localhost:8000/${p.image}`}
                          height={70}
                          width={90}
                          alt=""
                        />
                      </td>
                      <td>{p.name}</td>
                      <td>{p.brand}</td>
                      <td>₹{p.price}</td>
                      <td>{p.qty}</td>
                      <td>₹{p.total}</td>
                      <td>
                        <Link
                          to={`/product/${p.product || p.id}`}
                          className='btn My-Color btn-primary'>
                          Buy Again
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        ))
      )}
    </div>
  )
}