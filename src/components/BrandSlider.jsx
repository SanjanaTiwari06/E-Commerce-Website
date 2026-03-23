
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { GetBrand } from '../Redux/ActionCreators/BrandActionCreators'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function BrandSlider() {
    let BrandStateData = useSelector(state=>state.BrandStateData)
    let dispatch = useDispatch()

    useEffect(()=>{
        (()=>dispatch(GetBrand()))()
    },[])
  return (
    <>
    <section className="product-category p-5">
        <div className="container">
            <div className="section-title">
                <h5 >Our Brands</h5>
                <Link to="/shop" className="view">View All</Link>
            </div>
            <div className="category-section">
                {
                    BrandStateData.map(item=>{
                        return <div className="product-wrapper" data-aos="fade-right" data-aos-duration="100">
                    <div className="wrapper-img">
                        <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} alt="" style={{height:140, width:190}}/>
                    </div>
                    <div className="wrapper-info">
                        <Link to={`/shop?br=${item.name}`} className="wrapper-details">{item.name}</Link>
                    </div>
                </div>
                    })
                }
                </div>
                </div>
    </section>
    </>
  )
}

export default BrandSlider