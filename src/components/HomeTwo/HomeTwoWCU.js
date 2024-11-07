import React from 'react'

export default function HomeTwoWCU() {
    return (
        <>
            {/* <!-- wcu area start --> */}
            <section className="wcu-area pt-100 pb-100 blue-bg mt-15">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-xl-6">
                            <div className="section-header section-header__white section-header__wcu mb-50">
                                <h4 className="sub-heading sub-heading__2 sub-heading__red mb-15">
                                    why choose us
                                    <span><img src="/images/shape/heading-shape-4.png" className="ml-5" alt=""/></span>
                                </h4>
                                <h2 className="section-title section-title__2 section-title__white mb-30"> CUSTOM EMBROIDERY DIGITIZING</h2>
                                <p>We offer custom embroidery digitizing services,
transforming your artwork into precise digital files for
flawless stitching. Enhance your products with unique,
high-quality embroidery, perfect for branding and
personalization needs.</p>
                            </div>
                            <div className="wcu-box__wrapper">
                                <div className="wcu-box">
                                    <div className="wcu-box__icon">
                                        <img src="/images/icons/w-c-1.png" alt=""/>
                                    </div>
                                    <div className="wcu-box__content">
                                        <h4 className="wcu-box__title">Satisfied Service</h4>
                                        <p>Experience satisfaction beyond expectation with our dedicated service. We prioritize your needs, ensuring that every interaction with us leaves you delighted and fulfilled.</p>
                                    </div>
                                </div>
                                <div className="wcu-box mt-40">
                                    <div className="wcu-box__icon">
                                        <img src="/images/icons/w-c-2.png" alt=""/>
                                    </div>
                                    <div className="wcu-box__content">
                                        <h4 className="wcu-box__title">Free Consultancy</h4>
                                        <p>Gain valuable insights and guidance with our complimentary consultancy services. Our experts are here to assist you every step of the way, providing tailored recommendations to meet your specific requirements.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wcu-shape">
                    <img src="/images/HomePage/755x799.png" alt="" style={{borderRadius:"25px"}}/>
                </div>
            </section>
            {/* <!-- wcu area end -->    */}
        </>
    )
}
