/* eslint-disable react-hooks/exhaustive-deps */


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import Hero from "../Components/Hero";
import { GetProduct } from "../Redux/ActionCreators/ProductActionCreators";
import { GetBrand } from "../Redux/ActionCreators/BrandActionCreators";
import { GetMainCatagory } from "../Redux/ActionCreators/MainCatagoryActionCreators";
import { GetSubCatagory } from "../Redux/ActionCreators/SubCatagoryActionCreators";
function ShopPage() {
  let MainCatagoryStateData = useSelector(state => state.MainCatagoryStateData)
  let SubCatagoryStateData = useSelector(state => state.SubCatagoryStateData)
  let BrandStateData = useSelector(state => state.BrandStateData)
const [hoveredId, setHoveredId] = useState(null);



  const dispatch = useDispatch();
  useEffect(() => {
    (() => dispatch(GetMainCatagory()))()
  }, [])
  useEffect(() => {
    (() => dispatch(GetSubCatagory()))()
  }, [])
  useEffect(() => {
    (() => dispatch(GetBrand()))()
  }, [])

  const [searchParams] = useSearchParams();

  const mc = searchParams.get("mc");
  const sc = searchParams.get("sc");
  const br = searchParams.get("br");


  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const ProductStateData = useSelector(
    (state) => state.ProductStateData
  );

  useEffect(() => {
    dispatch(GetProduct());
  }, [dispatch]);

  // Base products
  let products = ProductStateData.filter(
    (item) => item.status === true
  );

  //  Main Category
  if (mc) {
    products = products.filter(
      (item) => item.maincatagory === mc
    );
  }

  // Sub Category
  if (sc) {
    products = products.filter(
      (item) => item.subcatagory === sc
    );
  }

  // Brand 
  if (br) {
    products = products.filter(
      (item) => item.brand === br
    );
  }

  // Search filter
  if (search) {
    products = products.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Price filter
  if (minPrice) {
    products = products.filter(
      (item) => item.finalprize >= minPrice
    );
  }

  if (maxPrice) {
    products = products.filter(
      (item) => item.finalprize <= maxPrice
    );
  }

  return (
    <>
      <Hero title="Shop" />

      <section className="shop-page">
        <div className="container-fluid  overflow-hidden " style={{height:"fit-content"}}>
          <div className="row h-100">
            <div className=" col-lg-3 d-none d-lg-block" >
              <div className="position-sticky top-0 ">
              <div className="shop-sidebar " >
                <h5 className="sidebar-title My-Text ">Main Categories :</h5>

                <ul className="sidebar-menu">
                  {MainCatagoryStateData.filter(x => x.status).map(item => (
                    <li key={item.id}>
                      <Link to={`/shop/?mc=${item.name}`}>
                        {item.name}
                        <i className="bi bi-chevron-right"></i>
                      </Link>
                    </li>
                  ))}

                  <hr />
                      <h5 className="sidebar-title My-Text">Sub Categories :</h5>
                  {SubCatagoryStateData.filter(x => x.status).map(item => (
                    <li key={item.id}>
                      <Link to={`/shop/?sc=${item.name}`}>
                        {item.name}
                        <i className="bi bi-chevron-right"></i>
                      </Link>
                    </li>
                  ))}

                  <hr />
                     <h5 className="sidebar-title My-Text">Brands :</h5>
                  {BrandStateData.filter(x => x.status).map(item => (
                    <li key={item.id}>
                      <Link to={`/shop/?br=${item.name}`}>
                        {item.name}
                        <i className="bi bi-chevron-right"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </div>

            {/* <div className="col-lg-2 ">
              <ul className="category-list">
                <h6 className="fs-1">All Catagories </h6>
                {
                  MainCatagoryStateData.filter(x => x.status).map(item => {
                    return <li className="category-list-item" key={item.id}>
                      <Link to={`/shop/?mc=${item.name}`}>
                        <div className="dropdown-item">
                          <div className="dropdown-list-item">
                            
                            <span className="dropdown-text">
                              {item.name}
                              <i className='bi bi-chevron-right'></i>
                            </span>
                          </div>
                        
                            
                          
                        </div>
                      </Link>
                    </li>
                  })

                }
                {
                  SubCatagoryStateData.filter(x => x.status).map(item => {
                    return <li className="category-list-item" key={item.id}>
                      <Link to={`/shop/?sc=${item.name}`}>
                        <div className="dropdown-item">
                          <div className="dropdown-list-item">
                            
                            <span className="dropdown-text">
                              {item.name}
                              <i className='bi bi-chevron-right'></i>
                            </span>
                          </div>
                          
                        
                        </div>
                      </Link>
                    </li>
                  })

                }
                {
                  BrandStateData.filter(x => x.status).map(item => {
                    return <li className="category-list-item" key={item.id}>
                      <Link to={`/shop/?br=${item.name}`}>
                        <div className="dropdown-item">
                          <div className="dropdown-list-item">
                            
                            <span className="dropdown-text">
                              {item.name}
                              
                               <i className='bi bi-chevron-right'></i>
                              
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  })

                }

              </ul>
            </div> */}

            <div className="col-lg-9 col-md-12 h-100 overflow-auto">
              <div className="filter-box mb-4">
                <div className="row align-items-end">

                  <div className="col-lg-8 col-md-6 mb-2">
                    <label className="form-label fs-4">Search <i className="bi bi-search "></i></label>
                    <input type="text" className="My-Border form-control mb-4 rounded-pill" placeholder="Search product..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ height: 40 }} />
                  </div>


                  <div className=" col-lg-4 col-md-6 mb-2">
                    <label className="form-label">Min Price</label>
                    <input
                      type="number"
                      className="My-Border form-control"
                      placeholder="Min"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <label className="form-label">Max Price</label>
                    <input
                      type="number"
                      className="My-Border form-control"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                  </div>

                </div>
              </div>



              <div className="product-main col-lg-12 ">
                <div className="row">

                  {products.length === 0 && (
                    <h3 className="text-center">
                      No products found
                    </h3>
                  )}

                  {products.map((item) => (

                    // <div className="col-lg-4 col-md-6 col-sm-6 mb-4" key={item.id}>
                    //   <div className="product-card">
                    //     <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic[0]}`} className="w-100" alt={item.name} style={{ height: "250px", objectFit: "cover", }} />
                    //     <div className="product-content text-center mt-2">
                    //       <h5>{item.name}</h5>
                    //       <p className="price"><del>₹{item.baseprize}</del><span className="ms-2"> &#8377;{item.finalprize}</span></p>
                    //       <Link to={`/product/${item.id}`} className="shop-btn">View Product</Link></div>
                    //   </div>
                    // </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 mb-4" key={item.id}>
                      <div className="shop-card product-wrapper">

                <div className="shop-card-img position-relative" style={{ height: 250 }} onMouseEnter={() => setHoveredId(item.id)} onMouseLeave={() => setHoveredId(null)}>
                  <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic[0]}`} alt={item.name} />
                 
                  {hoveredId === item.id && (
                    <div 
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "0.9s ease",
                      }}
                    >
                      <Link className="My-Color text-light"
                        to={`/shop?br=${item.brand}`}
                        style={{padding: "10px 22px",borderRadius: "30px",fontSize: "14px",}}>
                        {item.brand}
                      </Link>
                    </div>
                  )}
                </div>



                        <div className="shop-card-body text-center" style={{ height: 230 }}>
                          <div className="ratings">
                            <i className="bi bi-star-fill text-warning p-1"></i>
                            <i className="bi bi-star-fill text-warning p-1"></i>
                            <i className="bi bi-star-fill text-warning p-1"></i>
                            <i className="bi bi-star-fill text-warning p-1"></i>
                            <i className="bi bi-star-fill text-warning p-1"></i>
                          </div>
                          <p>{item.discount}% Off</p>
                          <h6 className="product-title">{item.name}</h6>

                          <p className="product-price">
                            <del>&#8377;{item.baseprize}</del>
                            <span style={{ color: "#AE1C9A" }}>&#8377;{item.finalprize}</span>
                          </p>

                          <Link to={`/product/${item.id}`} className="shop-btn">
                            View Product
                          </Link>
                        </div>
                        <div className="product-cart-btn">
                          <Link to={`/product/${item.id}`} className="product-btn">Add To Cart</Link>
                        </div>

                      </div>
                    </div>

                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{height:100}}></div>
    </>
  );
}

export default ShopPage;
















