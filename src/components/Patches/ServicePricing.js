import React from 'react'
import { Link } from 'react-router-dom'

export default function ServicePricing() {
    return (
        <>
            {/* <!-- pricing section start --> */}
            <section className="pricing-area pricing-area__2 pt-70 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center">
                            <div className="section-header mb-80">
                                <h4 className="sub-heading sub-heading__2 mb-25">
                                    <span><img src="/images/shape/heading-shape-3.png" className="mr-10" alt="" /></span>
                                    affordable price
                                    <span><img src="/images/shape/heading-shape-4.png" className="ml-10" alt="" /></span>
                                </h4>
                                <h2 className="section-title section-title__2">Pricing Package</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-none-30 justify-content-center">
                        <div className="col-xl-4 col-lg-6 mt-30">
                            <div className="pricing-item">
                                <div className="pricing-item__head">
                                    <h2 className="heading-title">Custom Patches</h2>
                                    <h4 className="sub-heading-title"></h4>
                                </div>
                                <ul className="pricing-item__lists">
                                    <li>Simple vector - $15</li>
                                    <li>Medium vector - $20</li>
                                    <li>Complex vector - $60</li>
                                    <li>Free Color Separation</li>
                                    <li>Free Quote</li>
                                </ul>
                                <Link to="/pricing" className="price-btn">
                                    <span className="icon"><i className="far fa-arrow-right"></i></span>
                                    Request Quote Button
                               </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- pricing section end -->    */}
        </>
    )
}
