import React from 'react'
import { Link } from 'react-router-dom'

export default function PricingSection() {
    return (
        <>
            {/* <!-- pricing section start --> */}
            <section className="pricing-area pt-100 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center">
                            <div className="section-header mb-80">
                                <h4 className="sub-heading sub-heading__2 mb-25">
                                    <span><img src="/images/shape/heading-shape-3.png" className="mr-10" alt="" /></span>
                                    Pricing Packages
                                    <span><img src="/images/shape/heading-shape-4.png" className="ml-10" alt="" /></span>
                                </h4>
                                <h2 className="section-title section-title__2">Smart Embroidery Digitizing Pricing Plans</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-none-30 justify-content-center">
                        <div className="col-xl-4 col-lg-6 mt-30">
                            <div className="pricing-item">
                                <div className="pricing-item__head">
                                    <h2 className="heading-title">Vector Conversion</h2>
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
                        <div className="col-xl-4 col-lg-6 mt-30">
                            <div className="pricing-item">
                                <div className="pricing-item__head">
                                    <h2 className="heading-title">Embroidery Digitizing</h2>
                                    <h4 className="sub-heading-title"></h4>
                                </div>
                                <ul className="pricing-item__lists">
                                    <li>Text Name (LC / Cap) - $10</li>
                                    <li>LC / Cap Design (under 10k stitches) - $15</li>
                                    <li>Medium Size Design - $20</li>
                                    <li>Jacket Front (under 40k stitches) Min - $30</li>
                                    <li>Jacket (up to 100k stitches) - $75</li>
                                    <select className='pricing-selected'>
                                        <option className='selected'>Select Threads</option>
                                        <option>Staple</option>
                                        <option>Polyester</option>
                                        <option>Chenille</option>
                                    </select>
                                    <li>Free Quote</li>
                                </ul>
                                <Link to="/pricing" className="price-btn">
                                    <span className="icon"><i className="far fa-arrow-right"></i></span>
                                   Request Quote Button
                               </Link>
                            </div>
                        </div>
                       {/* <div className="col-xl-4 col-lg-6 mt-30">
                            <div className="pricing-item">
                                <div className="pricing-item__head">
                                    <h2 className="heading-title">Custom Patches</h2>
                                    <h4 className="sub-heading-title"></h4>
                                </div>
                                <ul className="pricing-item__lists mb-4">
                                <select className='pricing-selected'>
                                        <option className='selected'>Select Type</option>
                                        <option>Embroidered</option>
                                        <option>Chenille</option>
                                        <option>Woven</option>
                                        <option>PVC</option>
                                        <option>Printed</option>
                                        <option>Leather</option>
                                        <option>Combined</option>
                                    </select>
                                    <select className='pricing-selected mt-3'>
                                        <option className='selected'>Select thread</option>
                                        <option>Simple thread</option>
                                        <option>Multi thread</option>
                                        <option>Metallic thread</option>
                                    </select>
                                    <select className='pricing-selected mt-3'>
                                        <option className='selected'>Select Backing</option>
                                        <option>Iron On</option>
                                        <option>Velcro</option>
                                        <option>Sew-On</option>
                                        <option>Adhesive</option>
                                        <option>Plastic</option>
                                        <option>No Backing</option>
                                    </select>
                                    <select className='pricing-selected mt-3'>
                                        <option className='selected'>Select Border</option>
                                        <option>Hot Cut Border</option>
                                        <option>Merrowed Border</option>
                                        <option>Satin Stitch Border</option>
                                    </select>
                                    <select className='pricing-selected mt-3'>
                                        <option className='selected'>Additional Colors</option>
                                        <option>15¢</option>
                                    </select>
                                    <li>Free Shipping</li>
                                    <li>Free Samples</li>
                                </ul>
                                <Link to="/pricing" className="price-btn mt-4">
                                    <span className="icon"><i className="far fa-arrow-right"></i></span>
                                   Request Quote Button
                               </Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            {/* <!-- pricing section end -->    */}
        </>
    )
}
