
/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react'
import MainCatagorySlider from '../components/MainCatagorySlider'
import BrandSlider from '../components/BrandSlider'
import ProductSlider from '../components/ProductSlider'
import FlashSel from '../components/FlashSel'
import Aboutpage from './Aboutpage'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GetMainCatagory } from '../Redux/ActionCreators/MainCatagoryActionCreators'
import { GetProduct } from '../Redux/ActionCreators/ProductActionCreators'
import { useDispatch, useSelector } from 'react-redux'
import SubCatagorySlider from '../components/SubCatagorySlider'
import ProductPage from './ProductPage'




function Homepage() {
    

    const MainCatagoryStateData = useSelector(state => state.MaincatagoryStateData)
    const ProductStateData = useSelector(state => state.ProductStateData)
    let dispatch = useDispatch()


    const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 576);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        (() => dispatch(GetMainCatagory()))()
    },[MainCatagoryStateData])

    useEffect(() => {
        (() => dispatch(GetProduct()))()
    },[ProductStateData])

    return (
        <>
            <section id="hero" className="hero" >
                <Swiper
                    className="myswiper"
                    modules={[Navigation, Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}>
                    <SwiperSlide>
                        <div className="hero-slider-one"
                            style={{ position: "relative", height: isMobile ? "400px" : "700px", width: "100%", }}>
                            <img src="/public/images/banner1.jpg" alt="" style={{ width: "100%", height: "100%", }} />

                            <div className="hero-content" >
                                <h5 style={{ color: "white" }}>UP TO <span>70%</span> OFF</h5>

                                <h4 style={{ fontSize: isMobile ? "20px" : "45px", color: "white" }}>
                                    Define your style with our premium men’s wear – where fashion meets comfort
                                </h4>
                                <Link to='/shop?mc=Male' className="shop-btn" style={{
                                    padding: isMobile ? "8px 16px" : "12px 25px",
                                    display: "inline-block",
                                }}>Shop Now</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-slider-two"
                            style={{ position: "relative", height: isMobile ? "400px" : "700px", width: "100%", }}>
                            <img src="/public/images/banner2.jpg" alt="" style={{ width: "100%", height: "100%", }} />

                            <div className="hero-content" >
                                <h5 style={{ color: "white" }}>
                                    UP TO <span >70%</span> OFF

                                </h5>

                                <h4 style={{ fontSize: isMobile ? "20px" : "45px", color: "white" }}>
                                    Elegance that defines you – discover fashion made for every woman
                                </h4>
                                <Link to='/shop?mc=Female' className="shop-btn" style={{
                                    padding: isMobile ? "8px 16px" : "12px 25px",
                                    display: "inline-block",
                                }}>Shop Now</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-slider-three"
                            style={{ position: "relative", height: isMobile ? "400px" : "700px", width: "100%", }}>
                            <img src="/public/images/banner4.jpg" alt="" style={{ width: "100%", height: "100%", }} />

                            <div className="hero-content" >
                                <h5 style={{ color: "white" }}>
                                    UP TO <span>70%</span> OFF</h5>
                                <h4 style={{ fontSize: isMobile ? "20px" : "45px", color: "white" }}>
                                    Cute styles, comfy smiles – fashion made for little ones
                                </h4>
                                <Link to='/shop?mc=Kids' className="shop-btn" style={{
                                    padding: isMobile ? "8px 16px" : "12px 25px",
                                    display: "inline-block",
                                }}>Shop Now</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-slider-three"
                            style={{ position: "relative", height: isMobile ? "400px" : "700px", width: "100%", }}>
                            <img src="/public/images/banner11.jpg" alt="" style={{ width: "100%", height: "100%", }} />

                            <div className="hero-content" >
                                <h5 style={{ color: "white" }}>
                                    UP TO <span className='my Background'>70%</span> OFF</h5>
                                <h4 style={{ fontSize: isMobile ? "20px" : "45px", color: "white" }}>
                                    Stylish furniture that turns your house into a home
                                </h4>
                                <Link to='/shop?mc=Furniture' className="shop-btn" style={{
                                    padding: isMobile ? "8px 16px" : "12px 25px",
                                    display: "inline-block",
                                }}>Shop Now</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-slider-three"
                            style={{ position: "relative", height: isMobile ? "400px" : "700px", width: "100%", }}>
                            <img src="/public/images/banner12.jpg" alt="" style={{ width: "100%", height: "100%", }} />

                            <div className="hero-content" >
                                <h5 style={{ color: "white" }}>
                                    UP TO <span>70%</span> OFF</h5>
                                <h4 style={{ fontSize: isMobile ? "20px" : "45px", color: "white" }}>
                                    Smart technology for a smarter lifestyle
                                </h4>
                                <Link to='/shop?mc=Electronics' className="shop-btn" style={{
                                    padding: isMobile ? "8px 16px" : "12px 25px",
                                    display: "inline-block",
                                }}>Shop Now</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </section>
            <section className="product fashion-style">
                <div className="container">
                    <div className="style-section">
                        <div className="row gy-4 gx-5 gy-lg-0">
                            {
                                ProductStateData.filter(x => x.status)?.slice(0, 4)?.map(item => {
                                    return <div className="col-lg-6" key={item.id}>
                                        <div className="product-wrapper wrapper-one" data-aos="fade-right">
                                            <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic[0]}`} alt="" className='h-100 w-100' style={{objectFit:'cover'}}/>
                                            <div className="wrapper-info position-absolute" style={{top:"30%" ,left:40}}>
                                                <span className="wrapper-subtitle">{item.brand}</span>
                                                <h4 className="wrapper-details">Get <span style={{color:"#AE1C9A"}}>{item.discount}%</span> Off
                                                    <h4 className="wrapper-details">{item.name}
                                                    <span className="wrapper-inner-title"><del>&#8377;{item.baseprize}</del>&#8377;{item.finalprize}</span>
                                                </h4>
                                                </h4>
                                                <Link to={`/product/${item.id}`} className="shop-btn">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </section>
            
           
            <MainCatagorySlider />
            <SubCatagorySlider/>
            <BrandSlider />
            <ProductSlider />
            <Aboutpage />
            <FlashSel maincatagory={MainCatagoryStateData}    products={ProductStateData}/>

        </>
    )
}

export default Homepage