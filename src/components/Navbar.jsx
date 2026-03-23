/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GetSubCatagory } from '../Redux/ActionCreators/SubCatagoryActionCreators'
import { GetMainCatagory } from '../Redux/ActionCreators/MainCatagoryActionCreators'
import { GetBrand } from '../Redux/ActionCreators/BrandActionCreators'
import { useDispatch } from 'react-redux';
import { useSelector  } from 'react-redux';





function Navbar() {
    let MainCatagoryStateData = useSelector(state => state.MainCatagoryStateData)
    let SubCatagoryStateData = useSelector(state => state.SubCatagoryStateData)
    let BrandStateData = useSelector(state => state.BrandStateData)
    let dispatch = useDispatch()
    let [showDropDown, setShowDropDown] = useState(false);
    let navigate = useNavigate()

    function logout (){
        localStorage.clear()
        navigate("/login")
    }

    // const toggleMenu = () => {
    //     setMenuOpen(!menuOpen);
    // }
    //     const toggleMenu = () => {
    //     const menu = document.getElementById("subMenu");
    //     menu.classList.toggle("open");
    // };

    let [showsearchModal, setshowsearchModal] = useState(false)


     useEffect(()=>{
             (()=>dispatch(GetMainCatagory()))()
         },[])
         useEffect(()=>{
                 (()=>dispatch(GetSubCatagory()))()
             },[])
             useEffect(()=>{
                     (()=>dispatch(GetBrand()))()
                 },[])

                 
    return (
        <>

            <header id="header" className="header">
                <div className="header-top-section">
                    <div className="container">
                        <div className="header-top">
                            <div className="header-contact d-none d-lg-block ">
                                <Link to={import.meta.env.VITE_APP_FACEBOOK} target='_blank' rel='noreferrer'><span className="contact-number me-4"><i className='bi bi-facebook fs-2'></i></span></Link>
                                <Link to={import.meta.env.VITE_APP_INSTAGRAM} target='_blank' rel='noreferrer'><span className="contact-number me-4"><i className='bi bi-instagram fs-2'></i></span></Link>
                                <Link to={import.meta.env.VITE_APP_TWITTER} target='_blank' rel='noreferrer'><span className="contact-number me-4"><i className='bi bi-twitter fs-2'></i></span></Link>
                                <Link to={import.meta.env.VITE_APP_LINKEDIN} target='_blank' rel='noreferrer'><span className="contact-number me-4"><i className='bi bi-linkedin fs-2'></i></span></Link>
                                <Link to={import.meta.env.VITE_APP_YOUTUBE} target='_blank' rel='noreferrer'><span className="contact-number  me-4"><i className='bi bi-youtube fs-2'></i></span></Link>
                            </div>
                            <div className="header-contact d-none d-lg-block">

                                <Link to={import.meta.env.VITE_APP_MAP1} target='_blank' rel='noreferrer'><span className="contact-number  me-4"><i className='bi bi-geo-alt fs-2 me-2'></i><span className='d-none d-lg-inline-block '>{import.meta.env.VITE_APP_ADRESS}</span></span></Link>
                                <Link to={`mailto:${import.meta.env.VITE_APP_EMAIL}`} target='_blank' rel='noreferrer'><span className="contact-number  me-4"><i className='bi bi-envelope fs-2 me-2'></i><span className='d-none d-lg-inline-block '>{import.meta.env.VITE_APP_EMAIL}</span></span></Link>
                                <Link to={`tel:${import.meta.env.VITE_APP_PHONE}`} target='_blank' rel='noreferrer'><span className="contact-number  me-4"><i className='bi bi-person-rolodex fs-2 me-2'></i><span className='d-none d-lg-inline-block '>{import.meta.env.VITE_APP_PHONE}</span></span></Link>
                                <Link to={`https://wa.me/${import.meta.env.VITE_APP_WHATSAPP}`} target='_blank' rel='noreferrer'><span className="contact-number  me-4"><i className='bi bi-whatsapp fs-2 me-2'></i><span className='d-none d-lg-inline-block '>{import.meta.env.VITE_APP_WHATSAPP}</span></span></Link>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-center-section d-none d-lg-block">
                    <div className="container">
                        <div className="header-center">
                            <div className="logo">
                                <Link to='/'>
                                    <img src="\public\images\logos\logo.png " alt={import.meta.env.VITE_APP_SITE} height={100} />
                                </Link>
                            </div>
                            <div className="header-cart-items">
                                <div className="header-search">
                                    <button className="header-search-btn" onClick={() => setshowsearchModal(true)}>
                                        <span>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.9708 16.4151C12.5227 17.4021 10.9758 17.9723 9.27353 18.0062C5.58462 18.0802 2.75802 16.483 1.05056 13.1945C-1.76315 7.77253 1.33485 1.37571 7.25086 0.167548C12.2281 -0.848249 17.2053 2.87895 17.7198 7.98579C17.9182 9.95558 17.5566 11.7939 16.5852 13.5061C16.4512 13.742 16.483 13.8725 16.6651 14.0553C18.2412 15.6386 19.8112 17.2272 21.3735 18.8244C22.1826 19.6513 22.2058 20.7559 21.456 21.4932C20.7697 22.1678 19.7047 22.1747 18.9764 21.4793C18.3623 20.8917 17.7774 20.2737 17.1796 19.6688C16.118 18.5929 15.0564 17.5153 13.9708 16.4151ZM2.89545 9.0364C2.91692 12.4172 5.59664 15.1164 8.91967 15.1042C12.2384 15.092 14.9138 12.3493 14.8889 8.98505C14.864 5.63213 12.1826 2.92508 8.89047 2.92857C5.58204 2.93118 2.87397 5.68958 2.89545 9.0364Z"
                                                    fill="black" />
                                            </svg>
                                        </span>
                                    </button>
                                    <div className={`modal-wrapper search ${showsearchModal ? 'active' : ''}`}>
                                        <div className="anywhere-away"></div>


                                        <div className="modal-main">
                                            <div className="wrapper-close-btn" onClick={() => setshowsearchModal(false)}>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        strokeWidth="1.5" stroke="red" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            d="M6 18L18 6M6 6l12 12" ></path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="wrapper-main">
                                                <div className="search-section">
                                                    <input type="text" placeholder="Search Products........." />
                                                    <div className="divider"></div>
                                                    <button type="button" >All Categories</button>
                                                    <a href="#" className="shop-btn">Search</a>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>

                                <div className="header-favourite">
                                    <Link to="/Wishlist" className="cart-item">
                                        <span>
                                            <i className='bi bi-heart '></i>
                                        </span>
                                        <span className="cart-text">
                                            Wishlist
                                        </span>
                                    </Link>
                                </div>

                                <div className="header-cart ">
                                    <Link to="/Cart" className="cart-item">
                                        <span>
                                            <i className='bi bi-cart fs-2 '></i>
                                        </span>
                                        <span className="cart-text">
                                            Cart
                                        </span>
                                    </Link>
                                   
                                </div>
                                <div className="header-user">
                                    <Link to='/Profile'>
                                        <span>
                                            <i className=' bi bi-person fs-2'></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="mobile-menu d-block d-lg-none" />
                <div className="mobile-menu-header d-flex justify-content-between align-items-center d-block d-lg-none">
                    <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"
                        aria-controls="offcanvasWithBothOptions">
                        <span>
                            <i className='bi bi-list fs-2'></i>
                        </span>
                    </button>
                    <Link to='/' className="mobile-header-logo me-2 " >
                        <img src="/public/images/logos/logo.png" alt={import.meta.env_VITE_APP_SITE} style={{ height: '60px' }} />
                    </Link>

                    <Link to="/Profile?option=Wishlist" className="header-cart wish-list-item">
                        <span>
                            <i className='bi bi-heart fs-2 '></i>
                        </span>
                    </Link >
                    <Link to="/Cart" className="header-cart cart-item me-5 ">
                        <span>
                            <i className='bi bi-cart fs-2 '></i>
                        </span>
                    </Link >

                </div>

                <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions">

                    <div className="offcanvas-body">
                        <div className="header-top">
                            <div className="header-cart ">
                                <Link to="/Profile?option=Wishlist" className="header-cart wish-list-item">
                                    <span>
                                        <i className='bi bi-heart fs-2 '></i>
                                    </span>
                                </Link >
                                <Link to="/Cart" className="header-cart cart-item me-5 ">
                                    <span>
                                        <i className='bi bi-cart fs-2 '></i>
                                    </span>
                                </Link >

                            </div>
                            <div className="shop-btn">
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">

                                </button>
                            </div>
                        </div>
                        <div className="header-input">
                            <input type="text" placeholder="Search...." />
                            <span>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.9708 16.4151C12.5227 17.4021 10.9758 17.9723 9.27353 18.0062C5.58462 18.0802 2.75802 16.483 1.05056 13.1945C-1.76315 7.77253 1.33485 1.37571 7.25086 0.167548C12.2281 -0.848249 17.2053 2.87895 17.7198 7.98579C17.9182 9.95558 17.5566 11.7939 16.5852 13.5061C16.4512 13.742 16.483 13.8725 16.6651 14.0553C18.2412 15.6386 19.8112 17.2272 21.3735 18.8244C22.1826 19.6513 22.2058 20.7559 21.456 21.4932C20.7697 22.1678 19.7047 22.1747 18.9764 21.4793C18.3623 20.8917 17.7774 20.2737 17.1796 19.6688C16.118 18.5929 15.0564 17.5153 13.9708 16.4151ZM2.89545 9.0364C2.91692 12.4172 5.59664 15.1164 8.91967 15.1042C12.2384 15.092 14.9138 12.3493 14.8889 8.98505C14.864 5.63213 12.1826 2.92508 8.89047 2.92857C5.58204 2.93118 2.87397 5.68958 2.89545 9.0364Z"
                                        fill="black"></path>
                                </svg>
                            </span>
                        </div>

                        <div className="category-dropdown">
                            <ul className="category-list">


                                <li className="category-list-item">
                                    <Link to='/'>
                                        <div className="dropdown-item d-flex justify-content-between align-items-center">
                                            <div className="dropdown-list-item d-flex">

                                                <span className="dropdown-text">
                                                    Home
                                                </span>
                                            </div>
                                            <div className="drop-down-list-icon">
                                                <span>
                                                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="1.5" y="0.818359" width="5.78538" height="1.28564"
                                                            transform="rotate(45 1.5 0.818359)" />
                                                        <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                                            transform="rotate(135 5.58984 4.90918)" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>


                                <li className="category-list-item">
                                    <Link to='/Shop'>
                                        <div className="dropdown-item d-flex justify-content-between align-items-center">
                                            <div className="dropdown-list-item ">

                                                <span className="dropdown-text">
                                                    Shop
                                                </span>
                                            </div>
                                            <div className="drop-down-list-icon">
                                                <span>
                                                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="1.5" y="0.818359" width="5.78538" height="1.28564"
                                                            transform="rotate(45 1.5 0.818359)" />
                                                        <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                                            transform="rotate(135 5.58984 4.90918)" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>

                                <li className="category-list-item">
                                    <Link to='/About'>
                                        <div className="dropdown-item d-flex justify-content-between align-items-center">
                                            <div className="dropdown-list-item d-flex">

                                                <span className="dropdown-text">
                                                    About
                                                </span>
                                            </div>
                                            <div className="drop-down-list-icon">
                                                <span>
                                                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="1.5" y="0.818359" width="5.78538" height="1.28564"
                                                            transform="rotate(45 1.5 0.818359)" />
                                                        <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                                            transform="rotate(135 5.58984 4.90918)" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="category-list-item">
                                    <Link to='/Testimonial'>
                                        <div className="dropdown-item d-flex justify-content-between align-items-center">
                                            <div className="dropdown-list-item d-flex">

                                                <span className="dropdown-text">
                                                    Testimonial
                                                </span>
                                            </div>
                                            <div className="drop-down-list-icon">
                                                <span>
                                                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="1.5" y="0.818359" width="5.78538" height="1.28564"
                                                            transform="rotate(45 1.5 0.818359)" />
                                                        <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                                            transform="rotate(135 5.58984 4.90918)" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="category-list-item">
                                    <Link to='/features'>
                                        <div className="dropdown-item d-flex justify-content-between align-items-center">
                                            <div className="dropdown-list-item d-flex">

                                                <span className="dropdown-text">
                                                    Features
                                                </span>
                                            </div>
                                            <div className="drop-down-list-icon">
                                                <span>
                                                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="1.5" y="0.818359" width="5.78538" height="1.28564"
                                                            transform="rotate(45 1.5 0.818359)" />
                                                        <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                                            transform="rotate(135 5.58984 4.90918)" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="category-list-item">
                                    <Link to='/FAQ'>
                                        <div className="dropdown-item d-flex justify-content-between align-items-center">
                                            <div className="dropdown-list-item d-flex">

                                                <span className="dropdown-text">
                                                    FaQ
                                                </span>
                                            </div>
                                            <div className="drop-down-list-icon">
                                                <span>
                                                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="1.5" y="0.818359" width="5.78538" height="1.28564"
                                                            transform="rotate(45 1.5 0.818359)" />
                                                        <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                                            transform="rotate(135 5.58984 4.90918)" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>

                                <li className="category-list-item">
                                    <Link to='/ContactUs'>
                                        <div className="dropdown-item d-flex justify-content-between align-items-center">
                                            <div className="dropdown-list-item d-flex">

                                                <span className="dropdown-text">
                                                    Contact
                                                </span>
                                            </div>
                                            <div className="drop-down-list-icon">
                                                <span>
                                                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="1.5" y="0.818359" width="5.78538" height="1.28564"
                                                            transform="rotate(45 1.5 0.818359)" />
                                                        <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                                            transform="rotate(135 5.58984 4.90918)" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="category-list-item">
                                    <Link to='/Profile'>
                                        <div className="dropdown-item d-flex justify-content-between align-items-center">
                                            <div className="dropdown-list-item d-flex">

                                                <span className="dropdown-text">
                                                    Profile
                                                </span>
                                            </div>
                                            <div className="drop-down-list-icon">
                                                <span>
                                                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="1.5" y="0.818359" width="5.78538" height="1.28564"
                                                            transform="rotate(45 1.5 0.818359)" />
                                                        <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                                            transform="rotate(135 5.58984 4.90918)" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>


                                <li className="category-list-item">
                                    <Link to='/Login'>
                                        <div className="dropdown-item d-flex justify-content-between align-items-center">
                                            <div className="dropdown-list-item d-flex">

                                                <span className="dropdown-text">
                                                    Login
                                                </span>
                                            </div>
                                            <div className="drop-down-list-icon">
                                                <span>
                                                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="1.5" y="0.818359" width="5.78538" height="1.28564"
                                                            transform="rotate(45 1.5 0.818359)" />
                                                        <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                                            transform="rotate(135 5.58984 4.90918)" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>


                <div className="header-bottom d-lg-block d-none">
                    <div className="container d-lg-block d-none">
                        <div className="header-nav">
                            <div className="category-menu-section position-relative">
                                <div className={`empty position-fixed ${showDropDown ? 'active' : ''}`} onClick={() => setShowDropDown(!showDropDown)}></div>
                                <button className="dropdown-btn" onClick={() => setShowDropDown(!showDropDown)}>
                                    <span className="dropdown-icon" >
                                        <i className={`bi ${showDropDown ? 'bi-x' : 'bi-list'} fs-2 text-light`}></i>
                                    </span>
                                    <span className="list-text ">
                                        All Categories
                                    </span>
                                </button>
                                <div className={`category-dropdown position-absolute ${showDropDown ? 'open-dropdown' : ''}`} id="subMenu">

                                    <ul className="category-list">
                                       {
                                        MainCatagoryStateData.filter(x=>x.status).map(item=>{
                                             return <li className="category-list-item" key={item.id}>
                                            <Link to={`/shop/?mc=${item.name}`}>
                                                <div className="dropdown-item">
                                                    <div className="dropdown-list-item">
                                                        <span className="dropdown-img">
                                                            <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`}
                                                                alt="dress" />
                                                        </span>
                                                        <span className="dropdown-text">
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                    <div className="drop-down-list-icon">
                                                        <span>
                                                           <i className='bi bi-chevron-right'></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        })
                                        
                                       }
                                       {
                                        SubCatagoryStateData.filter(x=>x.status).map(item=>{
                                             return <li className="category-list-item" key={item.id}>
                                            <Link to={`/shop/?sc=${item.name}`}>
                                                <div className="dropdown-item">
                                                    <div className="dropdown-list-item">
                                                        <span className="dropdown-img">
                                                            <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`}
                                                                alt="dress" />
                                                        </span>
                                                        <span className="dropdown-text">
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                    <div className="drop-down-list-icon">
                                                        <span>
                                                           <i className='bi bi-chevron-right'></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        })
                                        
                                       }
                                       {
                                        BrandStateData.filter(x=>x.status).map(item=>{
                                             return <li className="category-list-item" key={item.id}>
                                            <Link to={`/shop/?br=${item.name}`}>
                                                <div className="dropdown-item">
                                                    <div className="dropdown-list-item">
                                                        <span className="dropdown-img">
                                                            <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`}
                                                                alt="dress" />
                                                        </span>
                                                        <span className="dropdown-text">
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                    <div className="drop-down-list-icon">
                                                        <span>
                                                           <i className='bi bi-chevron-right'></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        })
                                        
                                       }
                                       
                                    </ul>
                                </div>
                            </div>
                            <div className="header-nav-menu">
                                <ul className="menu-list">
                                    <li>
                                        <Link to="/">
                                            <span className="list-text">Home</span>
                                        </Link>
                                    </li>
                                    <li className="mega-menu">
                                        <Link to="/shop">
                                            <span className="list-text">Shop</span>
                                            <span>
                                                <i className='bi bi-plus text-light'></i>
                                            </span>
                                        </Link>
                                        <div className="shop-menu">
                                            <div className="menu-wrapper">
                                                <div className="menu-list">
                                                    <h5 className="menu-title">Maincatagory</h5>
                                                    <ul>
                                                       {
                                                        MainCatagoryStateData?.filter(x=>x.status)?.map(item=>{
                                                            return <li key={item.id}><Link to={`/shop?mc=${item.name}`}>{item.name}</Link></li>
                                                        })
                                                       }
                                                        
                                                    </ul>
                                                </div>
                                                <div className="menu-list">
                                                    <h5 className="menu-title">SubCatagory</h5>
                                                    <ul>
                                                        {
                                                        SubCatagoryStateData?.filter(x=>x.status)?.map(item=>{
                                                            return <li key={item.id}><Link to={`/shop?sc=${item.name}`}>{item.name}</Link></li>
                                                        })
                                                       }
                                                    </ul>
                                                </div>
                                                <div className="menu-list">
                                                    <h5 className="menu-title">Brand</h5>
                                                    <ul>
                                                        {
                                                        BrandStateData?.filter(x=>x.status)?.slice(0,5)?.map(item=>{
                                                            return <li key={item.id}><Link to={`/shop?br=${item.name}`}>{item.name}</Link></li>
                                                        })
                                                       }
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="shop-menu-img">
                                                <img src="/public/images/banner11.jpg" alt="img" />
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <Link to="/About">
                                            <span className="list-text">About</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/Features">
                                            <span className="list-text">Features</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/Testimonial">
                                            <span className="list-text">Testimonial</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Admin">
                                            <span className="list-text">Admin</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/FAQ">
                                            <span className="list-text">FAQ</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/ContactUs">
                                            <span className="list-text">Contact</span>
                                        </Link>
                                    </li>
                                       {
                                        localStorage.getItem("login")?
                                        <li>
                                        <Link to="/Profile">
                                            <span className="list-text">{localStorage.getItem("name")}</span>
                                            <ul className="header-sub-menu">
                                                <li><Link to="/profile">Profile</Link></li>
                                                {localStorage.getItem("role")!=="Buyer"? <li><Link to="/Admin">Admin DashBoard</Link></li>:null}
                                                <li><Link to="/profile?option=Orders">Orders</Link></li>
                                                 <li><Link to="/profile?option=Wishlist">Wishlist</Link></li>
                                                <li><Link to="/Cart">Cart</Link></li>
                                                <li><button className='' onClick={logout}>Log-Out</button></li>

                                            </ul>
                                        </Link >
                                    </li>:
                                    <li>
                                        <Link to="/login">
                                            <span className="list-text">Login</span>
                                        </Link>
                                    </li>
                                   }
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
