import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeOneNews() {
    return (
        <>
            {/* <!-- news section start --> */}
            <section className="news-area grey-bg pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="section-header mb-80">
                                <h4 className="sub-heading mb-10">Recent Articles</h4>
                                <h2 className="section-title">Pixen News Room</h2>
                            </div>
                        </div>
                        <div className="col-xl-5 text-right news-right">
                            <Link to="/news" className="inline-btn"><span className="icon"><i className="far fa-arrow-right"></i></span>
                                Go to blog</Link>
                        </div>
                    </div>
                    <div className="row mt-none-30">
                        <div className="col-xl-4 col-lg-6 mt-30">
                            <article className="post-box">
                                <div className="post-box__thumb">
                                    <img src="/images/news/news-1.jpeg" alt=""/>
                                    <span className="post-box__cat">Megazine</span>
                                </div>
                                <div className="post-box__content text-center">
                                    <Link to="news-details" className="date-author">By Admin / 12 September</Link>
                                    <h4 className="post-box__title">
                                        <Link to="/news-details">Fermentum metu fringilla
                                            convallis primis</Link>
                                    </h4>
                                    <Link to="/news-details" className="inline-btn">
                                        <span className="icon"><i className="far fa-arrow-right"></i></span>
                                        continue Reading
                                    </Link>
                                </div>
                            </article>
                        </div>
                        <div className="col-xl-4 col-lg-6 mt-30">
                            <article className="post-box">
                                <div className="post-box__thumb">
                                    <img src="/images/news/news-2.jpeg" alt=""/>
                                    <span className="post-box__cat">Megazine</span>
                                </div>
                                <div className="post-box__content text-center">
                                    <Link to="/news-details" className="date-author">By Admin / 12 September</Link>
                                    <h4 className="post-box__title">
                                        <Link to="/news-details">Fermentum metu fringilla
                                            convallis primis</Link>
                                    </h4>
                                    <Link to="news-details" className="inline-btn">
                                        <span className="icon"><i className="far fa-arrow-right"></i></span>
                                        continue Reading
                                    </Link>
                                </div>
                            </article>
                        </div>
                        <div className="col-xl-4 col-lg-6 mt-30">
                            <article className="post-box">
                                <div className="post-box__thumb">
                                    <img src="/images/news/news-3.jpeg" alt=""/>
                                    <span className="post-box__cat">Megazine</span>
                                </div>
                                <div className="post-box__content text-center">
                                    <Link to="/news-details" className="date-author">By Admin / 12 September</Link>
                                    <h4 className="post-box__title">
                                        <Link to="/news-details">Fermentum metu fringilla
                                            convallis primis</Link>
                                    </h4>
                                    <Link to="/news-details" className="inline-btn">
                                        <span className="icon"><i className="far fa-arrow-right"></i></span>
                                        continue Reading
                                    </Link>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- news section end -->    */}
        </>
    )
}
