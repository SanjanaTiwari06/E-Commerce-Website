import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import Aboutpage from './pages/Aboutpage'
import FeaturesPage from './pages/FeaturesPage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'
import TestimonialPage from './pages/TestimonialPage'
import FAQpage from './pages/FAQpage'
import ContactUspage from './pages/ContactUspage'
import ErrorPage from './pages/ErrorPage'
import PrivacyPolicyPage from './pages/Policies/PrivacyPolicyPage'
import TermsConditionsPage from './pages/Policies/TermsConditionsPage'
import LoginPage from './pages/User/LoginPage'
import Cartpage from './pages/CartPage'
import CheckOutPage from './pages/User/CheckOutPage'
import ProductSlider from './components/ProductSlider'
import AdminPage from './pages/AdminP/AdminPage'

import AdminMainCatagory from './pages/AdminP/MainCatagory/AdminMainCatagory'
import AdminCreateMainC from './pages/AdminP/MainCatagory/AdminCreateMainC'
import AdminEditMainCatagory from './pages/AdminP/MainCatagory/AdminEditMainCatagory'

import AdminSubCatagory from './pages/AdminP/SubCatagory/AdminSubCatagory'
import AdminCreateSubC from './pages/AdminP/SubCatagory/AdminCreateSubC'
import AdminEditSubCatagory from './pages/AdminP/SubCatagory/AdminEditSubCatagory'

import AdminBrand from './pages/AdminP/Brand/AdminBrand'
import AdminCreateBrand from './pages/AdminP/Brand/AdminCreateBrand'
import AdminEditBrand from './pages/AdminP/Brand/AdminEditBrand'

import AdminFeature from './pages/AdminP/Feature/AdminFeature'
import AdminCreateFeature from './pages/AdminP/Feature/AdminCreateFeature'
import AdminEditFeature from './pages/AdminP/Feature/AdminEditFeature'

import AdminFAQ from './pages/AdminP/FAQ/AdminFAQ'
import AdminCreateFAQ from './pages/AdminP/FAQ/AdminCreateFAQ'
import AdminEditFAQ from './pages/AdminP/FAQ/AdminEditFAQ'

import AdminSetting from './pages/AdminP/Setting/AdminSetting'

import AdminProduct from './pages/AdminP/Product/AdminProduct'
import AdminCreateProduct from './pages/AdminP/Product/AdminCreateProduct'
import AdminEditProduct from './pages/AdminP/Product/AdminEditProduct'
import SignUp from './pages/User/SignUp'
import Profile from './pages/User/Profile'
import ChangePassword from './pages/User/ChangePassword'
import WishlistPage from './pages/WishlistPage'
import Adress from './pages/User/Adress'
import Reviews from './pages/User/Reviews'
import Orders from './components/User/Orders'

import AdminUserPage from './pages/AdminP/User/AdminUserPage'
import AdminCreateUserPage from './pages/AdminP/User/AdminCreateUserPage'
import AdminUpdateUserPage from './pages/AdminP/User/AdminUpdateUserPage'
import OrderConfirmation from './pages/User/OrderConfirmation'




function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<Homepage />} />
          <Route path='/About' element={<Aboutpage />} />
          <Route path='/features' element={<FeaturesPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/Testimonial' element={<TestimonialPage />} />
          <Route path='/FAQ' element={<FAQpage />} />
          <Route path='/ContactUs' element={<ContactUspage />} />
          <Route path='/ProductSlideBar' element={<ProductSlider />} />

          <Route path='/*' element={<ErrorPage />} />

          <Route path='/PrivacyPolicy' element={<PrivacyPolicyPage />} />
          <Route path='/TermsConditions' element={<TermsConditionsPage />} />

          <Route path='/SignUp' element={<SignUp/>} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/Cart' element={<Cartpage />} />
          <Route path='/CheckOut' element={<CheckOutPage />} />
          <Route path='/Wishlist' element={<WishlistPage/>}/>
          <Route path= '/Order' element={<Orders/>}/>
          <Route path= '/OrderConfirmation' element={<OrderConfirmation/>}/>
          

          <Route path='/Admin' element={<AdminPage />} />

          <Route path='/Admin/MainCatagory' element={<AdminMainCatagory />} />
          <Route path='/Admin/MainCatagory/Create' element={<AdminCreateMainC />} />
          <Route path="/Admin/MainCatagory/Edit/:id"element={ <AdminEditMainCatagory/>}/>

          <Route path='/Admin/SubCatagory' element={<AdminSubCatagory />} />
          <Route path='/Admin/SubCatagory/Create' element={<AdminCreateSubC />} />
          <Route path="/Admin/SubCatagory/Edit/:id"element={ <AdminEditSubCatagory/>}/>

           <Route path='/Admin/Brand' element={<AdminBrand />} />
          <Route path='/Admin/Brand/Create' element={<AdminCreateBrand />} />
          <Route path="/Admin/Brand/Edit/:id"element={ <AdminEditBrand/>}/>

        <Route path='/Admin/Feature' element={<AdminFeature/>}/>
        <Route path='/Admin/Feature/Create' element={<AdminCreateFeature />}/>
        <Route path="/Admin/Feature/Edit/:id"element={ <AdminEditFeature/>}/>

        <Route path='/Admin/FAQ' element={<AdminFAQ/>}/>
        <Route path='/Admin/FAQ/Create' element={<AdminCreateFAQ />}/>
        <Route path="/Admin/FAQ/Edit/:id"element={ <AdminEditFAQ/>}/>

        <Route path="/Admin/Setting"element={ <AdminSetting/>}/>

         <Route path='/Admin/Product' element={<AdminProduct/>}/>
        <Route path='/Admin/Product/Create' element={<AdminCreateProduct />}/>
        <Route path="/Admin/Product/Edit/:id" element={ <AdminEditProduct/>}/>

        <Route path='/Admin/User' element={<AdminUserPage/>}/>
        <Route path='/Admin/User/Create' element={<AdminCreateUserPage />}/>
        <Route path="/Admin/User/Edit/:id" element={ <AdminUpdateUserPage/>}/>

        

        <Route path='/ChangePassword' element={<ChangePassword/>}/>
        <Route path='/Address' element={<Adress/>}/>
        <Route path='/Reviews' element={<Reviews/>}/>
        <Route path='/ChangePass' element={<ChangePassword/>}/>



        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App