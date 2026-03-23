/* eslint-disable no-undef */

import React from 'react'
import { Link } from 'react-router-dom'


function FlashSel({ maincatagory, products }) {
    return (
        <>
            <section className="product flash-sale">
                <div className="container">
                    <div className="section-title">
                        <h5>Flash Sale</h5>
                        <div className="countdown-section">
                            {
                                maincatagory?.filter(x => x.status).map(item => {
                                    return <div className="countdown-items"onClick={()=>setSelected(item.name)} key={item.id}>
                                        <span className='text'>{item.name}</span>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="flash-sale-section">
                        <div className="row g-5">
                            {products?.filter(x => x.status).slice(0, 12).map((item, index) => {
                                return (
                                    <div key={index} className="col-lg-3 col-md-6">
                                        <div className="product-wrapper " data-aos="fade-right" data-aos-duration="100">
                                            <div className="product-img">
                                                <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic[0]}`}
                                                    alt="product-img" style={{ objectFit: "cover" }} />
                                                <div className="product-cart-items">
                                                    <Link to={`/shop?br=${item.brand}`} className="cart cart-item">
                                                        <span className=' My-Color text-light p-3 rounded-pill'>
                                                         {item.brand}
                                                        </span>
                                                    </Link>
                                                    <a href="#!" className="My-Color text-light favourite cart-item  p-3 rounded-pill">
                                                        <span>
                                                            {item.discount}% Off
                                                        </span>
                                                    </a>
                                                    
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="ratings ">
                                                    <span>
                                                        <i className='bi bi-star-fill text-warning p-1'></i>
                                                        <i className='bi bi-star-fill text-warning p-1'></i>
                                                        <i className='bi bi-star-fill text-warning p-1'></i>
                                                        <i className='bi bi-star-fill text-warning p-1'></i>
                                                        <i className='bi bi-star-fill text-warning '></i>
                                                    </span>
                                                </div>
                                                <div className="product-description">
                                                    <Link to={`/product/${item.id}`} className="product-details">{item.name}</Link>
                                                    <div className="price">
                                                        <span className="price-cut">&#8377;{item.baseprize}</span>
                                                        <span className="new-price">&#8377;{item.finalprize}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-cart-btn">
                                                <Link to={`/product/${item.id}`} className="product-btn">Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default FlashSel

