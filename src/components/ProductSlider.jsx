import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ProductSlider() {


  const ProductStateData = useSelector(
    state => state.ProductStateData
  )


  const products = ProductStateData.filter(
    item => item.status
  )


  if (products.length === 0) {
    return null
  }

  return (
    <section className="product product-slider">
      <div className="container">

        <div className="section-title text-center">
          <h3>Related Products</h3>
        </div>

        <div className="row ">
          {products?.filter(x => x.status).slice(0, 12).map((item, index) => {
            return (
              <div key={index} className="col-lg-3 col-md-6 mt-5">
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


          {/* {products.slice(0, 8).map(item => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              key={item.id}>
              <div className="product-card">

            
                <div className="product-img position-relative ">
                  <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic[0]}`}alt={item.name} style={{height:300, width:500}}  className="img-fluid"/>
                  <p className="position-absolute top-0 start-0 m-2
                  text-white " style={{fontSize:20}}>{item.brand}</p>
                </div>

                <div className="product-content text-center">
                  <p style={{fontSize:20,color:'black'}}>{item.name}</p>

                  <div className="price">
                    <p><del>{item.baseprize}</del></p>
                    <span className="new-price">
                      &#8377;{item.finalprize}
                    </span>
                  </div>

                  <Link to={`/product/${item.id}`}className="shop-btn mt-2">View Product</Link>
                </div>

              </div>
            </div>
          ))} */}

        </div>
      </div>
    </section>
  )
}

export default ProductSlider
