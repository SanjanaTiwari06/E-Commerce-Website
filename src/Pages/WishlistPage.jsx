import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetWishlist, DeleteWishlist } from "../Redux/ActionCreators/WishlistActionCreators";
import { Link } from "react-router-dom";

export default function WishlistPage() {
  const dispatch = useDispatch();
  const wishlist = useSelector(
  state => state.WishlistStateData
);

  useEffect(() => {
    dispatch(GetWishlist());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">My Wishlist</h2>

      <div className="row">
        {wishlist && wishlist.length > 0 ? (
          wishlist.map((item,index) => (
                           <div key={index} className="col-lg-3 col-md-6 mt-5">
                             <div className="product-wrapper " data-aos="fade-right" data-aos-duration="100">
                               <div className="product-img">
                                 <img src={item?.image ?`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.image}`
                                 :"https://via.placeholder.com/300"} style={{objectFit:"cover"}}/>
                                 <div className="product-cart-items">
                                   <Link to={`/shop?br=${item.brand}`} className="cart cart-item">
                                     <span className=' My-Color text-light p-3 rounded-pill'>
                                       {item?.brand}
                                     </span>
                                   </Link>
                                   <a href="#!" className="My-Color text-light favourite cart-item  p-3 rounded-pill">
                                     <span>
                                       {item?.discount}% Off
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
                                     <span className="price-cut">&#8377;{item?.baseprize}</span>
                                     <span className="new-price">&#8377;{item?.finalprize}</span>
                                   </div>
                                 </div>
                               </div>
                               <div className="product-cart-btn">
                                 <Link  onClick={() => dispatch(DeleteWishlist({ id: item.id }))} className="product-btn">Remove to Wishlist</Link>
            
                               </div>
                             </div>
                           </div>
                         )
          ))
         : (
          <h5 className="text-center">Wishlist is Empty</h5>
        )}
      </div>
       <div style={{height:"100px"}}></div>

    </div>
  );
}