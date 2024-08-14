import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HomeOneTestimonial() {
    return (
        <>
            {/* <!-- testimonial section start --> */}
            <div className="testimonial-area theme-bg  pt-155 pb-155">
                <span className="shape shape__1">
                    <img src="/images/shape/t-line-1.png" alt="" />
                </span>
                <span className="shape shape__2">
                    <img src="/images/shape/t-line-2.png" alt="" />
                </span>
                <div className="container">
                    <Swiper
                        spaceBetween={2}
                        slidesPerView={1}
                        autoplaydisableoninteraction={"false"}
                        loop={true}
                        className="custom-class"
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".custom-prev",
                            nextEl: ".custom-next",
                        }}
                    >
                        <SwiperSlide>
                            <div className="row justify-content-end">
                                <div className="col-xl-7 col-lg-8">
                                    <div className="section-header mb-10">
                                        <h4 className="sub-heading sub-heading__white mb-10">Testimonials</h4>
                                        <h2 className="section-title section-title__white">Customer Feeback</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="testimonial py-5">

                                        <div className="testimonial-item">
                                            <div className="testimonial-item__thumb">
                                                <span className="t-shape">
                                                    <img src="images/shape/border-shape.png" alt="" />
                                                </span>
                                                <div className="author">
                                                    <img src="images/other/author-1.png" alt="" />
                                                </div>
                                                <span className="quote"><img src="/images/icons/t-quote.png" alt="" /></span>
                                            </div>
                                            <div className="testimonial-item__content">
                                                <p>Malesuada imperdiet commodo nostra taciti neque arcu in sem a vivamus tempor ac sem
                                                    convallis ullamcorper
                                                    acer
                                                    enims
                                                    massa massa porta interdum to nullam nis augue done leo ut fermentum senectus eget.
                                                    Metusi lacinia turpis
                                                    potenti in
                                                    aliquet ipsum primis and pede volutpat.Feugiat to hymenaeos facilisis erat morbi
                                                    libero to sociosqu inte
                                                    dum
                                                    justo
                                                    sagittis feugiat astron make facilisis morb.</p>
                                                <h4 className="name mt-40">Micthcel Stark - <span className="designation">CEO, Meghna
                                                    Group</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                         <SwiperSlide>
                            <div className="row justify-content-end">
                                <div className="col-xl-7 col-lg-8">
                                    <div className="section-header mb-10">
                                        <h4 className="sub-heading sub-heading__white mb-10">Testimonials</h4>
                                        <h2 className="section-title section-title__white">Customer Feeback</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="testimonial py-5">

                                        <div className="testimonial-item">
                                            <div className="testimonial-item__thumb">
                                                <span className="t-shape">
                                                    <img src="images/shape/border-shape.png" alt="" />
                                                </span>
                                                <div className="author">
                                                    <img src="images/other/author-1.png" alt="" />
                                                </div>
                                                <span className="quote"><img src="/images/icons/t-quote.png" alt="" /></span>
                                            </div>
                                            <div className="testimonial-item__content">
                                                <p>Malesuada imperdiet commodo nostra taciti neque arcu in sem a vivamus tempor ac sem
                                                    convallis ullamcorper
                                                    acer
                                                    enims
                                                    massa massa porta interdum to nullam nis augue done leo ut fermentum senectus eget.
                                                    Metusi lacinia turpis
                                                    potenti in
                                                    aliquet ipsum primis and pede volutpat.Feugiat to hymenaeos facilisis erat morbi
                                                    libero to sociosqu inte
                                                    dum
                                                    justo
                                                    sagittis feugiat astron make facilisis morb.</p>
                                                <h4 className="name mt-40">Micthcel Stark - <span className="designation">CEO, Meghna
                                                    Group</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* <!-- testimonial section end -->    */}
        </>
    )
}

<div className="testimonial-area theme-bg  pt-155 pb-155">
    <span className="shape shape__1">
        <img src="/images/shape/t-line-1.png" alt="" />
    </span>
    <span className="shape shape__2">
        <img src="/images/shape/t-line-2.png" alt="" />
    </span>
    <div className="container">
        <div className="row justify-content-end">
            <div className="col-xl-7 col-lg-8">
                <div className="section-header mb-10">
                    <h4 className="sub-heading sub-heading__white mb-10">Testimonials</h4>
                    <h2 className="section-title section-title__white">Customer Feeback</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-12">
                <div className="testimonial">
                    <Swiper
                        spaceBetween={2}
                        slidesPerView={1}
                        autoplaydisableoninteraction={"false"}
                        loop={true}
                        pagination={{ clickable: true }}
                        className="custom-class"
                        navigation={{
                            prevEl: ".custom-prev",
                            nextEl: ".custom-next",
                        }}
                    >
                        <SwiperSlide>
                            <div className="testimonial-item">
                                <div className="testimonial-item__thumb">
                                    <span className="t-shape">
                                        <img src="/images/shape/border-shape.png" alt="" />
                                    </span>
                                    <div className="author">
                                        <img src="/images/other/author-1.png" alt="" />
                                    </div>
                                    <span className="quote"><img src="/images/icons/t-quote.png" alt="" /></span>
                                </div>
                                <div className="testimonial-item__content">
                                    <p>Malesuada imperdiet commodo nostra taciti neque arcu in sem a vivamus tempor ac sem
                                        convallis ullamcorper
                                        acer
                                        enims
                                        massa massa porta interdum to nullam nis augue done leo ut fermentum senectus eget.
                                        Metusi lacinia turpis
                                        potenti in
                                        aliquet ipsum primis and pede volutpat.Feugiat to hymenaeos facilisis erat morbi
                                        libero to sociosqu inte
                                        dum
                                        justo
                                        sagittis feugiat astron make facilisis morb.</p>
                                    <h4 className="name mt-40">Micthcel Stark - <span className="designation">CEO, Meghna
                                        Group</span></h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
</div>
