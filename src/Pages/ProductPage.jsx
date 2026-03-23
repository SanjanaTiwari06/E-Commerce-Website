import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Hero from '../components/Hero'
import ProductSlider from '../components/ProductSlider'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { CreateCart } from "../Redux/ActionCreators/CartActionCreators";
import { CreateWishlist } from "../Redux/ActionCreators/WishlistActionCreators";


function ProductPage() {
  const [selected, setSelected] = useState({
  size: "",
  color: null,
  qty: 1,
});
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const userid = localStorage.getItem("userid")
  const navigate = useNavigate()

  const handleWishlist = (product) => {
     console.log("Wishlist clicked", product);
  setLiked(!liked);

  dispatch(CreateWishlist({
    id: product.id,
      name: product.name,
      brand: product.brand,
      baseprize: product.baseprize,   
      finalprize: product.finalprize, 
      discount: product.discount,     
      price: product.finalprize,
      image: product.pic?.[0] || "",
      qty: selected.qty,
      color: selected.color,
      size: selected.size
  }));
};

const handleAddToCart = (product) => {
  dispatch(
    CreateCart({
      id: product.id,
      user:userid,
      name: product.name,
      brand: product.brand,
      baseprize: product.baseprize,   
      finalprize: product.finalprize, 
      discount: product.discount,     
      price: product.finalprize,
      image: product.pic?.[0] || "",
      qty: selected.qty,
      color: selected.color,
      size: selected.size
    }),
    navigate("/Wishlist")
  );
};

  const { id } = useParams()
 

  const ProductStateData = useSelector(
    state => state.ProductStateData
  )

  const product = ProductStateData.find(
    p => String(p.id) === String(id)
  )

  if (!product) {
    return <h2 style={{ textAlign: 'center' }}>Product not found</h2>                                
  }

  return (
    <>
      <Hero title={product.name} />

      <section className="product product-info ">
        <div className="container  ">
          <div className="product-info-section">
            <div className="row">

            
              <div className="col-md-6">
                <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${product.pic[0]}`} alt={product.name} style={{height:600,width:500,objectFit:"cover"}}
                />
              </div>

            
              <div className="col-md-6 ">
                <div className="product-info-content">
                 
                  <span className="wrapper-subtitle">
                    {product.brand}
                  </span>

                  <h5>{product.name}</h5>
                  
              <div>
              <i className="bi bi-star-fill p-1 fs-5 text-warning"></i>
              <i className="bi bi-star-fill p-1 fs-5 text-warning"></i>
               <i className="bi bi-star-fill p-1 fs-5 text-warning"></i>
                <i className="bi bi-star-fill p-1 fs-5 text-warning"></i>
                 <i className="bi bi-star-fill p-1 fs-5 text-warning"></i>
                 <Link to="/Testimonial"><p>128 Reviews</p></Link>
            </div>

                  <div className="price">
                    <span className="price-cut">
                      &#8377;{product.baseprize}
                    </span>
                    <span className="new-price" style={{color:"#AE1C9A"}}>
                      &#8377;{product.finalprize}
                    </span>
                    
                  </div>
                  <div>
                    <p>{product.discount}% Off</p>
                    </div>

                  <p className="content-paragraph">
                    {product.description || 'The Quality ofthisproduct is so nice'}
                  </p>
                  <div className="col-lg-12" style={{ height: 80 }}>

                  <div className="d-flex align-items-center gap-5 ">
    
                  <div className="d-flex align-items-center justify-content-center">
                   <i  className={`bi ${liked ? "bi-heart-fill My-Text" : "bi-heart"} fs-1`}style={{ cursor: "pointer" }}
                  onClick={() => handleWishlist(product)}></i>
                 </div>
                 <button className="shop-btn w-100"onClick={() => handleAddToCart(product)}> Add to Cart</button>
                </div>
              </div>

                 
                  <div className="product-availability mt-5" style={{marginLeft:"-30"}}>
                    
                    <span>Availability :</span>
                    <span className="inner-text">
                      {product.stock || 0} in stock
                    </span>
                    </div>
                    <p style={{color:"#AE1C9A",marginLeft:"-30"}}> {product.stockquantity} pieces Available</p>
                  <div className='btn-grp mt-4 d-flex gap-1 flex-wrap product-availability' style={{width:"fit-content"}}>
                    {
                      product.color?.map((item,index)=>{
                       return <button key={index} className={`btn btn-light fs-5 My-Border ${selected.color===item?'My-Color text-light' : ''}`} onClick={()=>setSelected({...selected,color:item})}>{item}</button>
                      })
                    }
                  </div>
                   <div className='btn-grp mt-4 d-flex gap-2 flex-wrap product-availability' style={{width:"fit-content"}}>
                    {
                      product.size?.map((item,index)=>{
                       return <button key={index} className={`btn btn-light fs-5 My-Border ${selected.size===item?'My-Color text-light' : ''}`} onClick={()=>setSelected({...selected,size:item})}>{item}</button>
                      })
                    }
                  </div>
              
<div className="mt-4 d-flex align-items-center gap-2 product-availability" style={{width:"fit-content"}}>
  <button className="btn btn-light My-Border fs-4"onClick={() =>setSelected({...selected,qty: selected.qty > 1 ? selected.qty - 1 : 1,})}>−</button>

    <span className="fs-5 fw-semibold" style={{ minWidth: 30, textAlign: "center" }}>{selected.qty}</span>

  <button className="btn btn-light My-Border fs-4"onClick={() =>setSelected({...selected,qty: selected.qty < product.stockquantity ? selected.qty + 1 : selected.qty})}>+</button>
</div>
</div>
              </div>

            </div>
          </div>
        </div>                      
      </section>

      <ProductSlider />
    </>
  )
}

export default ProductPage

// /* eslint-disable react-hooks/exhaustive-deps */

// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";                7000 800
// import { useDispatch, useSelector } from "react-redux";
// import { GetProduct } from "../Redux/ActionCreators/ProductActionCreators";
// import ProductSlider from "../components/ProductSlider";

// function ProductPage() {
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   const ProductStateData = useSelector(
//     (state) => state.ProductStateData
//   );

//   const [product, setProduct] = useState(null);
 

//   useEffect(() => {
//     dispatch(GetProduct());
//   }, []);

//   useEffect(() => {
//     const data = ProductStateData.find(
//       (item) => String(item.id) === String(id)
//     );
//     setProduct(data);
//   }, [ProductStateData, id]);

//   if (!product) {
//     return <h3 className="text-center my-5">Loading...</h3>;
//   }

//   return (
//     <div className="container my-5">
//       <div className="row g-5">

//         {/* ================= LEFT IMAGE SECTION ================= */}
//         <div className="col-lg-6">
//           <div >
//             <img
//               src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${product.pic[0]}`}
//               alt={product.name}
//               style={{
//                 width: "100%",
//                 height: "450px",
//                 objectFit: "cover",
//                 borderRadius: "16px",
//               }}
//             />

          
//             {(<div
               
//               >
//                 <Link
//                   to={`/shop?br=${product.brand}`}
//                   style={{
//                     background: "#000",
//                     color: "#fff",
//                     padding: "12px 26px",
//                     borderRadius: "30px",
//                     textDecoration: "none",
//                     fontWeight: "600",
//                     letterSpacing: "1px",
//                   }}
//                 >
//                   {product.brand}
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* ================= RIGHT INFO SECTION ================= */}
//         <div className="col-lg-6">
//           <h2 style={{ fontWeight: "600", marginBottom: "5px" }}>
//             {product.name}
//           </h2>

//           <p style={{ color: "#777", marginBottom: "10px" }}>
//             Brand: <strong>{product.brand}</strong>
//           </p>

//           {/* Ratings */}
//           <div style={{ marginBottom: "12px" }}>
//             <span style={{ color: "#f5a623", fontSize: "18px" }}>
//               <i className="bi bi-star-fill p-1 fs-4"></i>
//                <i className="bi bi-star-fill p-1 fs-4"></i>
//                 <i className="bi bi-star-fill p-1 fs-4"></i>
//                  <i className="bi bi-star-fill p-1 fs-4"></i>
//                   <i className="bi bi-star-fill p-1 fs-4"></i>
//             </span>
//             <span style={{ marginLeft: "8px", color: "#555" }}>
//               (128 Reviews)
//             </span>
//           </div>

      
//           <div style={{ margin: "20px 0" }}>
//             <p><del>&#8377;{product.baseprize}</del></p>
//             <h5 style={{fontSize: "28px",color:"#AE1C9A"}}>&#8377;{product.finalprize}</h5>

//             <p style={{
//                 color:"#AE1C9A"
//               }}>{product.discount}% OFF</p>
//           </div>

//             <p>{product.description}</p>
//           <div className="d-flex gap-3 my-4">
//             <button className="shop-btn">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// <ProductSlider/>
// export default ProductPage;

