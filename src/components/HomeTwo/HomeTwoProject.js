import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeTwoProject() {
    return (
        <>
            {/* <!-- project section start --> */}
            <div className="project-area project-area__2 pt-80 pb-80" style={{paddingTop:'100px'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center">
                            <div className="section-header mb-65">
                                <h4 className="sub-heading sub-heading__2 mb-15">
                                    <span><img src="/images/shape/heading-shape-3.png" className="mr-5" alt=""/></span>
                                    Project showcase
                                    <span><img src="/images/shape/heading-shape-4.png" className="ml-5" alt=""/></span>
                                </h4>
                                <h2 className="section-title section-title__2">REcent projects</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row project-row mt-none-30">
                        <div className="col-xl-5 col-lg-6 col-md-6 d-flex align-self-stretch mt-30">
                        <div className="row mt-none-30">
                        <div className="col-xl-12 col-md-6 col-lg-12 mt-30">
                            <div className="project-item">
                                        <div className="project-item__thumb">
                                            <img src="/images/Portfolio/LineArt/CPO47369-art-swagg.jpg" alt=""/>
                                        </div>
                                        <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                            <Link to="/services/line-art" className="project-item__link"><i
                                                className="far fa-arrow-right"></i></Link>
                                            <div className="project-item__content">
                                                <h5 className="project-item__subtitle"><span>//</span> Book Print</h5>
                                                <h4 className="project-item__title">Line Art</h4>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-xl-12 col-md-6 col-lg-12 mt-30">
                            <div className="project-item">
                                        <div className="project-item__thumb">
                                            <img src="/images/Portfolio/VectorConversion/SV1598-cougar head vector logo.png" alt=""/>
                                        </div>
                                        <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                            <Link to="/services/vector-conversion" className="project-item__link"><i
                                                className="far fa-arrow-right"></i></Link>
                                            <div className="project-item__content">
                                                <h5 className="project-item__subtitle"><span>//</span> Book Print</h5>
                                                <h4 className="project-item__title">Vector Conversion</h4>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-7 mt-30">
                            <div className="row mt-none-30">
                                <div className="col-xl-6 col-md-6 col-lg-6 mt-30">
                                    <div className="project-item">
                                        <div className="project-item__thumb">
                                            <img src="/images/Portfolio/Graphic Designing/LogoDesigning/CPO42273-art-BS society.jpg" alt=""/>
                                        </div>
                                        <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                            <Link to="/services/graphic-designing/logo-designing" className="project-item__link"><i
                                                className="far fa-arrow-right"></i></Link>
                                            <div className="project-item__content">
                                                <h5 className="project-item__subtitle"><span>//</span> Book Print</h5>
                                                <h4 className="project-item__title">Logo Designing</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-6 col-lg-6 mt-30">
                                    <div className="project-item">
                                        <div className="project-item__thumb">
                                            <img src="/images/Portfolio/Graphic Designing/PhotoEditing/DO1091-art-123.jpg" alt=""/>
                                        </div>
                                        <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                            <Link to="/services/graphic-designing/photo-editing" className="project-item__link"><i
                                                className="far fa-arrow-right"></i></Link>
                                            <div className="project-item__content">
                                                <h5 className="project-item__subtitle"><span>//</span> Book Print</h5>
                                                <h4 className="project-item__title">Photo Editing</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-md-6 col-lg-12 col-md-12 mt-30">
                                <div className="project-item">
                                <div className="project-item__thumb project-item__thumb--big">
                                    <img src="/images/Portfolio/Embroidery Digitizing/Applique Embroidery Digitizing/DO2853-RBB_FF_APPLIQUE sewout.JPG" alt="" style={{objectFit:'contain'}}/>
                                </div>
                                <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                    <Link to="/services/embroidery-digitizing/applique-embroidery-digitizing" className="project-item__link"><i
                                        className="far fa-arrow-right"></i></Link>
                                    <div className="project-item__content">
                                        <h5 className="project-item__subtitle"><span>//</span> Book Print</h5>
                                        <h4 className="project-item__title">Applique Embroidery Digitizing</h4>
                                    </div>
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- project section end -->    */}
        </>
    )
}
