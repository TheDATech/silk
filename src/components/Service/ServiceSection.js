import React from 'react'

export default function ServiceSection() {
    return (
        <>
            {/* <!-- service section start --> */}
            <section className="service-area service-area__2 pt-70 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center">
                            <div className="section-header section-header__white mb-75">
                                <h4 className="sub-heading sub-heading__2 sub-heading__red mb-25">
                                    <span><img src="/images/shape/heading-shape-3.png" className="mr-10" alt="" /></span>
                                    main Services
                                    <span><img src="/images/shape/heading-shape-4.png" className="ml-10" alt="" /></span>
                                </h4>
                                <h2 className="section-title section-title__2 section-title__white">Quality Guaranteed</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-none-50">
                        <div className="col-xl-6 col-lg-6 mt-50">
                            <div className="service-item service-item__2 d-flex">
                                <div className="service-item__icon service-item__icon--noborder service-item__icon--1">
                                    <img src="/images/icons/s-1.png" alt="" />
                                </div>
                                <div className="service-item__content service-item__content--2">
                                    <h4 className="service-item__title">Embroidery Digitizing</h4>
                                    <p>Transforming designs into stitches, crafting beauty with precision and care, embroidery digitizing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mt-50">
                            <div className="service-item service-item__2 d-flex">
                                <div className="service-item__icon service-item__icon--noborder service-item__icon--2">
                                    <img src="/images/icons/s-2.png" alt="" />
                                </div>
                                <div className="service-item__content service-item__content--2">
                                    <h4 className="service-item__title">Vector Conversion</h4>
                                    <p>Converting photos into vectors that are scalable while maintaining accuracy and quality.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mt-50">
                            <div className="service-item service-item__2 d-flex">
                                <div className="service-item__icon service-item__icon--noborder service-item__icon--3">
                                    <img src="/images/icons/s-3.png" alt="" />
                                </div>
                                <div className="service-item__content service-item__content--2">
                                    <h4 className="service-item__title">Graphic Designing</h4>
                                    <p>Graphic design is the art of telling stories through images, a combination of communication and creativity.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mt-50">
                            <div className="service-item service-item__2 d-flex">
                                <div className="service-item__icon service-item__icon--noborder service-item__icon--4">
                                    <img src="/images/icons/s-4.png" alt="" />
                                </div>
                                <div className="service-item__content service-item__content--2">
                                    <h4 className="service-item__title">Line Art</h4>
                                    <p>Line drawings offer minimalist elegance and convey complex ideas with simplicity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- service section end -->    */}
        </>
    )
}
