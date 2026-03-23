import React from 'react'
import Hero from '../components/Hero'

function ErrorPage() {
  return (
    <>
    <Hero title='page not found'/>
    <section className="blog error-blog  footer-padding">
        <div className="container">
            <div className="blog-bradcrum">
                <span><a href="index.html">Home</a></span>
                <span className="devider">/</span>
                <span><a href="#">404 Not Found</a></span>
            </div>
            <div className="blog-item">
                <div className="error-img">
                    <img src="./assets/images/homepage-one/404-error.webp" alt="404-error"/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ErrorPage