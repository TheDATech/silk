import React from 'react'

export default function AboutSection() {
    return (
        <>
            {/* <!-- about section start --> */}
            <section className="about-area pt-100 pb-100">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-5">
                            <div className="about__bg about__bg--2 mt-75">
                                <div className="big-thumb">
                                    <img src="/images/About-Us/470x507(2).png" alt="" />
                                </div>
                                <div className="mid-thumb position-absulate">
                                    <img src="/images/About-Us/271x222 (4).png" alt="" />
                                </div>
                                <div className="small-thumb position-absulate">
                                    <img src="/images/About-Us/230x144(2).png" alt="" />
                                </div>
                                <span className="circle-shape position-absulate"><img src="/images/shape/border-shape-2.png" alt="" /></span>
                                <span className="patternt-shape position-absulate"><img src="/images/shape/about-shape-1.png" alt="" /></span>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="section-header section-header__2 mb-40">
                                <h4 className="sub-heading sub-heading__2 mb-10">About Us <span><img
                                    src="/images/shape/heading-shape-4.png" className="ml-10" alt="" /></span></h4>
                                <h2 className="section-title section-title__2 mb-30">Silk Digitizing Embroidery Services with Passion since 2012</h2>
                                <p>Silk Digitizing, a Division of Digitize4Life LLC, has been dedicated to serving the embroidery digitizing and vectorizing industry since 2012. Our team comprises professional digitizers and designers committed to delivering exceptional results with the quickest turnaround time of 5 to 10 hours.</p>
                            </div>
                            <div className="row mt-none-40">
                                <div className="col-xl-6 mt-40">
                                    <div className="ab__box">
                                        <div className="ab__box--head">
                                            <div className="icon">
                                                <img src="/images/icons/ab-1.png" alt="" />
                                            </div>
                                            <h4 className="title">Get the <br />
                                                Most Definitely</h4>
                                        </div>
                                        <p>We're committed to providing you with the most definitive solutions for your embroidery and vectorizing needs.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 mt-40">
                                    <div className="ab__box">
                                        <div className="ab__box--head">
                                            <div className="icon icon__2">
                                                <img src="/images/icons/ab-2.png" alt="" />
                                            </div>
                                            <h4 className="title">Fast and <br />
                                                quality service</h4>
                                        </div>
                                        <p>Our streamlined processes and dedicated team guarantee quick turnaround times without compromising on quality.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- about section end --> */}
        </>
    )
}
