import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeOneCTA() {
    return (
        <>
            {/* <!-- cta section start --> */}
            <section className="cta-area theme-bg pt-105 pb-115">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="section-header">
                                <h2 className="section-title section-title__white">Need Design Solution <br/>
                                    For your Brand</h2>
                            </div>
                        </div>
                        <div className="col-xl-4 text-right">
                            <div className="cta-right">
                                <p>Extra Support</p>
                                <Link to="/contact" className="site-btn site-btn__s3">
                                    <span className="icon"><i className="far fa-arrow-right"></i></span>
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- cta section end -->    */}
        </>
    )
}
