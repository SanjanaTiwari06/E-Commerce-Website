/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { GetFAQ } from "../Redux/ActionCreators/FAQActionCreators";

function FAQpage() {
    const dispatch = useDispatch();
    const faqs = useSelector((state) => state.FAQStateData);

    useEffect(() => {
        dispatch(GetFAQ());
    }, []);

    return (
        <>
            <Hero title="FAQs" />

            <section className="faq product footer-padding">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion accordion accordion-flush"id="faqAccordion">
                                <h5>Frequently Asked Questions</h5>
                                {faqs && faqs.filter((item) => item.status === true).map((item, index) => (
                                            <div className="faq-item accordion-item" key={item.id}>
                                                <h2 className="accordion-header">
                                                    <button
                                                        className="faq-button accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#faq-collapse-${index}`}>
                                                        <span className="faq-heading"> {item.Question}</span>
                                                        <i className="bi bi-plus fs-1"></i>
                                                    </button>
                                                </h2>           
                                                   <div
                                                    id={`faq-collapse-${index}`}
                                                    className="accordion-collapse collapse"
                                                    data-bs-parent="#faqAccordion">
                                                   <div className="accordion-body">
                                                        <h5 className="paragraph">
                                                            {item.Answer}
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                            </div>
                        </div>     
                            {/* y right wala h */}
                        <div className="col-lg-6">
                            <div className="question-section login-section">
                                <div className="review-form">
                                    <h5 className="comment-title">Have Any Question</h5>

                                    <div className="account-inner-form">
                                        <div className="review-form-name">
                                            <label className="form-label">Name*</label>
                                            <input type="text"className="form-control" placeholder="Your Name"/></div>
                                        

                                        <div className="review-form-name">
                                            <label className="form-label">Email*</label>
                                            <input type="email"  className="form-control"placeholder="user@gmail.com"  />
                                        </div> 
                                               
                                                
                                          
                                        

                                        <div className="review-form-name">
                                            <label className="form-label">Subject*</label>
                                            <input  type="text" className="form-control"placeholder="Subject" />
                                        </div>
                                    </div>

                                    <div className="review-textarea">
                                        <label className="form-label">Message*</label>
                                        <textarea className="form-control" rows="4"placeholder="Write Message..........."></textarea>
                                    </div>

                                    <div className="login-btn mt-3">
                                        <button className="shop-btn">Send Now </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                       

                    </div>
                </div>
            </section>
        </>
    );
}

export default FAQpage;
