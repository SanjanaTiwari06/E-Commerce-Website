import { all } from "redux-saga/effects";
import MaincatagorySaga from "./MainCatagorySaga";
import SubCatagorySaga from "./SubCatagorySaga";
import BrandSaga from "./BrandSaga";
import ProductSaga from "./ProductSaga";
import FeatureSaga from "./FeatureSaga";
import FAQSaga from "./FAQSaga";
import SettingSaga from "./SettingSaga";
import CartSaga from "./CartSaga";
import WishlistSaga from "./WishlistSaga";


export default function* RootSaga(){
    yield all([
        MaincatagorySaga(),
        SubCatagorySaga(),
        BrandSaga(),
        ProductSaga(),
        FAQSaga(),
        FeatureSaga(),
        SettingSaga(),
        CartSaga(),
        WishlistSaga(),
    ])
}