import React from 'react'

export default function HomeTwoAbout() {
    return (
        <>
            {/* <!-- about section start --> */}
            <section className="about-area pt-100 pb-100">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-5">
                            <div className="about__bg about__bg--2 mt-75">
                                <div className="big-thumb">
                                    <img src="/images/HomePage/470x507.png" alt="" />
                                </div>
                                <div className="mid-thumb position-absulate">
                                    <img src="/images/HomePage/271x222.png" alt="" />
                                </div>
                                <div className="small-thumb position-absulate">
                                    <img src="/images/HomePage/230x144.png" alt="" />
                                </div>
                                <span className="circle-shape position-absulate"><img src="/images/shape/border-shape-2.png" alt="" /></span>
                                <span className="patternt-shape position-absulate"><img src="/images/shape/about-shape-1.png" alt="" /></span>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="section-header section-header__2 mb-40">
                                <h4 className="sub-heading sub-heading__2 mb-10">About Us <span><img
                                    src="/images/shape/heading-shape-4.png" className="ml-10" alt="" /></span></h4>
                                <h2 className="section-title section-title__2 mb-30">FROM CONCEPT TO CREATION</h2>
                                <p>Welcome to Silk Digitizing, your premier destination for
embroidery digitizing and vector conversion.. We specialize
in transforming designs into stunning embroidered
masterpieces and scalable vectors.</p>
                            </div>
                            <div className="row mt-none-40">
                                <div className="col-xl-6 mt-40">
                                    <div className="ab__box">
                                        <div className="ab__box--head">
                                            <div className="icon">
                                                <img src="/images/icons/ab-1.png" alt="" />
                                            </div>
                                            <h4 className="title">Swift, <br/> Quality Service</h4>
                                        </div>
                                        <p>For top-notch quality and lightning-fast service, choose Silk Digitizing. Elevate your projects with us today!</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 mt-40">
                                    <div className="ab__box">
                                        <div className="ab__box--head">
                                            <div className="icon icon__2">
                                                <img src="/images/icons/ab-2.png" alt="" />
                                            </div>
                                            <h4 className="title">Elevate <br/> Your Projects</h4>
                                        </div>
                                        <p>With a commitment to excellence, we elevate your projects to new heights of quality and precision.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- about section end -->    */}
        </>
    )
}
