import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeOneService() {
    return (
        <>
         {/* <!-- service section start --> */}
    <section className="service-area pt-125 pb-125">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8 text-center">
                    <div className="section-header mb-75">
                        <h4 className="sub-heading mb-25">
                            <span><img src="/images/shape/heading-shape-1.png" className="mr-10" alt=""/></span>
                            Our Services
                            <span><img src="/images/shape/heading-shape-2.png" className="ml-10" alt=""/></span>
                        </h4>
                        <h2 className="section-title">Flawless Printing</h2>
                    </div>
                </div>
            </div>
            <div className="row mt-none-50">
                <div className="col-xl-6 col-lg-6 mt-50">
                    <div className="service-item d-flex">
                        <div className="service-item__icon service-item__icon--1">
                            <img src="/images/icons/s-1.png" alt=""/>
                        </div>
                        <div className="service-item__content">
                            <h4 className="service-item__title">Banner Printing</h4>
                            <p>Dise duis auctor an cume del enima felise proins parturient port a nostra</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 mt-50">
                    <div className="service-item d-flex">
                        <div className="service-item__icon service-item__icon--2">
                            <img src="/images/icons/s-2.png" alt=""/>
                        </div>
                        <div className="service-item__content">
                            <h4 className="service-item__title">Poster Printing</h4>
                            <p>Dise duis auctor an cume del enima felise proins parturient port a nostra</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 mt-50">
                    <div className="service-item d-flex">
                        <div className="service-item__icon service-item__icon--3">
                            <img src="/images/icons/s-3.png" alt=""/>
                        </div>
                        <div className="service-item__content">
                            <h4 className="service-item__title">Flyer Printing</h4>
                            <p>Dise duis auctor an cume del enima felise proins parturient port a nostra</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 mt-50">
                    <div className="service-item d-flex">
                        <div className="service-item__icon service-item__icon--4">
                            <img src="/images/icons/s-4.png" alt=""/>
                        </div>
                        <div className="service-item__content">
                            <h4 className="service-item__title">Business Card</h4>
                            <p>Dise duis auctor an cume del enima felise proins parturient port a nostra</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-8 text-center">
                    <div className="view-all mt-55">
                        <p>We help take your small business to the next level. <Link to="/service">All Services</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- service section end -->    */}
        </>
    )
}
