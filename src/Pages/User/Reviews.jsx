
/* eslint-disable no-unused-vars */
// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import { getTestimonial } from "../../Redux/ActionCreators/TestimonialActionCreators"
// import { Link } from 'react-router-dom'
// export default function Reviews() {
//     let [reviews, setReviews] = useState([])

//     let TestimonialStateData = useSelector(state => state.TestimonialStateData)
//     let dispatch = useDispatch()

//     function getStar(star) {
//         if (star === 5)
//             return <><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i></>
//         else if (star === 4)
//             return <><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star text-warning'></i></>
//         else if (star === 3)
//             return <><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star text-warning'></i><i className='bi bi-star text-warning'></i></>
//         else if (star === 2)
//             return <><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star text-warning'></i><i className='bi bi-star text-warning'></i><i className='bi bi-star text-warning'></i></>
//         else
//             return <><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star text-warning'></i><i className='bi bi-star text-warning'></i><i className='bi bi-star text-warning'></i><i className='bi bi-star text-warning'></i></>
//     }

//     useEffect(() => {
//         (() => {
//             dispatch(getTestimonial())
//             if (TestimonialStateData.length) {
//                 setReviews(TestimonialStateData.filter(x => x.user === localStorage.getItem("userid")))
//             }
//         })()
//     }, [TestimonialStateData.length])
//     return (
//         <div className="top-selling-section">
//             <div className="row g-5">
//                 {
//                     reviews.map(item => {
//                         return <div className="col-md-6" key={item.id}>
//                             <div className="card p-3">
//                                 <h5 className='fs-5'>{new Date(item.date).toDateString()}</h5>
//                                 <Link to={`/product/${item.product}`} className='fs-3'>{item.pname}({getStar(item.star)})</Link>
//                                 <p>{item.message}</p>
//                             </div>
//                         </div>
//                     })
//                 }
//             </div>
//         </div>
//     )
// }
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Reviews() {
  const [reviews, setReviews] = useState([]);   // important: default empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


   function getStar(star) {
        if (star === 5)
            return <><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i></>
        else if (star === 4)
            return <><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star text-warning'></i></>
        else if (star === 3)
            return <><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star text-warning'></i><i className='bi bi-star text-warning'></i></>
        else if (star === 2)
            return <><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star text-warning'></i><i className='bi bi-star text-warning'></i><i className='bi bi-star text-warning'></i></>
        else
            return <><i className='bi bi-star-fill text-warning'></i><i className='bi bi-star text-warning'></i><i className='bi bi-star text-warning'></i><i className='bi bi-star text-warning'></i><i className='bi bi-star text-warning'></i></>
    }

  // Fetch Reviews
  useEffect(() => {
    fetch("http://localhost:8000/testimonial")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch reviews");
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Delete Review
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8000/testimonial/${id}`, {
        method: "DELETE",
      });

      setReviews(reviews.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // Loading State
  if (loading) {
    return <h2>Loading Reviews...</h2>;
  }

  // Error State
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
        <div className="top-selling-section">
            <div className="row g-5">
                {
                    reviews.map(item => {
                        return <div className="col-md-6" key={item.id}>
                            <div className="card p-3">
                                <h5 className='fs-5'>{new Date(item.date).toDateString()}</h5>
                                <Link to={`/product/${item.product}`} className='fs-3'>{item.pname}({getStar(item.star)})</Link>
                                <p>{item.message}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            <div style={{height:"300px"}}></div>
        </div>
    )
}

export default Reviews