import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeTwoHero() {
    return (
        <>
            {/* <!-- hero start --> */}
            <section className="hero__2 bg_img" style={{ "background": "url(/images/banner/1920x900.png)",backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
                <div className="container-fluid">
                    <div className="row justify-content-end">
                        <div className="col-xl-5 custom-col-width justify-content-end col-lg-7">
                            <div className="hero__content hero__content--2 text-center">
                                <div className="hero-icon">
                                    <img src="/images/icons/hero-icon.png" alt="" />
                                </div>
                                <div className="hero-text">
                                    <h1>Digitizing <br />
                                        Made Easier</h1>
                                    <p>Your priority is ours</p>
                                    <Link to="/about" className="site-btn site-btn__2"><span className="icon"><i
                                        className="far fa-arrow-right"></i></span> Read More</Link>
                                </div>
                                <div className="dot-shape"><img src="/images/shape/hero-pattern-2.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-pattern">
                    <img src="/images/shape/hero-pattern-1.png" alt="" />
                </div>
            </section>
            {/* <!-- hero end -->    */}
        </>
    )
}
