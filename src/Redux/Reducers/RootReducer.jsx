/* eslint-disable react-refresh/only-export-components */
import { combineReducers } from "@reduxjs/toolkit";
import MainCatagoryReducers from "./MainCatagoryReducers";
import SubCatagoryReducers from "./SubCatagoryReducers";
import BrandReducers from "./BrandReducers";
import ProductReducers from "./ProductReducers";
import FAQReducers from "./FAQReducers";
import SettingReducers from "./SettingReducers";
import FeatureReducers from "./FeatureReducers";
import CartReducers from "./CartReducers";
import WishlistReducers from "./WishlistReducers";

export default combineReducers({
    MainCatagoryStateData: MainCatagoryReducers,
    SubCatagoryStateData: SubCatagoryReducers,
    BrandStateData: BrandReducers,
    ProductStateData: ProductReducers,
    FeatureStateData: FeatureReducers,
    SettingStateData: SettingReducers,
    FAQStateData: FAQReducers,
    CartStateData: CartReducers,
    WishlistStateData: WishlistReducers

})