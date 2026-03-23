import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

async function getData(setTestimonial) {
  try {
    let response = await fetch(
      `${import.meta.env.VITE_APP_BACKEND_SERVER}/testimonial`
    )
    response = await response.json()

    if (response)
      setTestimonial(response)

  } catch (error) {
    console.log(error)
  }
}

export default function Testimonial() {

  const [testimonial, setTestimonial] = useState([])

  useEffect(() => {
    getData(setTestimonial)
  }, [])

  return (
    <>
      <section className="testimonial-section py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">Customer Reviews</h2>
            <p className="text-muted">What our customers say about us</p>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            loop={testimonial.length > 3}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 }
            }}
          >

            {testimonial?.map((item, index) => (

              <SwiperSlide key={index}>

                <div className="testimonial-card p-4 shadow rounded text-center bg-white">

                  {/* <img
                    src={`/images/${item.image}`}
                    alt={item.name}
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                    style={{ objectFit: "cover" }}
                  /> */}

                  <h5 className="fw-semibold">{item.name}</h5>

                  <div className="mb-2">

                    {[1,2,3,4,5].map((star)=>(
                      <span key={star} style={{color:"#ffc107",fontSize:"18px"}}>
                        {star <= item.rating ? "★" : "☆"}
                      </span>
                    ))}

                  </div>

                  <p className="text-muted">
                    {item.message}
                  </p>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </section>

      <div style={{height:"200px"}}></div>
    </>
  )
}