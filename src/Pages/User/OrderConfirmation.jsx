import React from 'react'
import Hero from '../../Components/Hero'
import { Link } from 'react-router-dom'

export default function OrderConfirmation() {
    return (
        <>
            <Hero title="Order Has Been Placed" />
            <section className="footer-padding">
                <div className="container my-5">
                    <div className=" p-5 text-center">
                        <h3>Thank You</h3>
                        <h4>Your Order Has Been Placed</h4>
                        <h5>Your Can Track Your Orders In Profile Section</h5>

                        <div className="btn-group">
                            <Link to="/shop" style={{ width: 250 }} className='shop-btn rounded-end'>Shop More</Link>
                            <Link to="/profile" style={{ width: 250 }} className='shop-btn rounded-start'>Profile</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}