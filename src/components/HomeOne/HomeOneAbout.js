import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeOneAbout() {
    return (
        <>
            {/* <!-- about section start --> */}
            <section className="about-area pt-130 pb-130">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 pr-0">
                            <div className="about__bg" data-tilt data-tilt-perspective="3000">
                                <img src="/images/bg/about-bg-1.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 pl-80">
                            <div className="section-header mb-40">
                                <h4 className="sub-heading mb-10">About Us</h4>
                                <h2 className="section-title mb-35">From Structure
                                    To Conveyance</h2>
                                <p>Libero aliquam eiget rhoncus elit quis mattis tos neque ullco qua praesent interdum orc
                                    torristique aenean at dictumst
                                    velit fames molestie tristique magna sociosqu ine rhoncuis in cubilia magno senectus sociis
                                    tortor enim.</p>
                            </div>
                            <div className="about-lists">
                                <ul>
                                    <li><i className="fa fa-check"></i> Magna cubilia sapien vivamus vestibulum iner consectetuer.
                                    </li>
                                    <li><i className="fa fa-check"></i> Urna faucibus netus Inceptos qu hac sem iaculis lectus.</li>
                                </ul>
                                <Link to="/about" className="site-btn site-btn__s2 mt-55"><span className="icon icon__black"><i
                                    className="far fa-arrow-right"></i></span> Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- about section end -->    */}
        </>
    )
}
