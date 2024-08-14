import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';



export default function AboutTestimonial() {
    return (
        <>
            {/* <!-- testimonial area start --> */}
            <div className="testimonial-area testimonial-area__2 testimonial-area__3 pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="testimonial__3 owl-carousel text-center position-relative">
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
                                    // scrollbar={{ draggable: true }}
                                >

                                
                                    <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p className='text-center'>Fast, dependable service.  Highly recommend.</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/Google.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Pat Beauregard</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p className='text-center'>Absolutely the best!!!</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/Google.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Cee The man</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p className='text-center'>Have been doing a great job for us for several years now. Job gets back under 24 hrs and edits are taken care of right away.</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/Google.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Scott C</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p className='text-center'>I always get what i order. They are always helpful, on time, very fast service.
Never disappointed or regret on their work. Thank you for being my right hand.
</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/Google.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Ruth Tesfai</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p className='text-center'>Love my chenille patches definitely gonna be ordering more soon. Customer service was awesome and shipping was fast.</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/Google.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">ENY Nitty</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p className='text-center'>Awesome company. Do great work, quick and redo changes fast if needed.. recommend them highly.</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/Google.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Lori Cervi</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p className='text-center'>Great work, fast service. My go to every time, you won’t regret this investment!</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/Google.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Juwann Wadley</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p className='text-center'>Amazing work!!! Shipping is fast, good condition product!!! Love it will be doing more work!!</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/Google.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Abdul Ayaan</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p className='text-center'>10 out of 10! look forward to future business! Thank you</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/Google.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Official OnTheRon</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p className='text-center'>Very professional and fast delivery</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/Google.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Twintwo Johnson</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p>I wanna say I received the best service for my purchase, quick shipping, great condition, great quality, and on time!!!! I would advise others to stick with this company after seeing myself they're great work ethics!!!</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/author-2.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Quashon Winchester</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p>I always get what I order. They are always helpful, on time, very fast service. Never disappointed or regret their work. Thank you for being my right hand.</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/author-2.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Ruth</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p>Sometimes I need to revise something about the design and have requested the PFX files as well as the DST files. The files that I receive can't easily be resized or revised in any way.</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/author-2.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Nancy Savage</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p>Tried to get this done but I got alot of excuses from other companies. They were able to get everything together quick and the patches came out amazing!!</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/author-2.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">LycanNerd</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p>Amazing! They do what u want make wonderful suggestions they are ready quickly</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/author-2.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Gina</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p>Quick, honest and resonable prices.</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/author-2.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Mike Courtois</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item text-center">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p>My designs always come back and sew very well.</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/author-2.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Diana Banta</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item text-center">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p>Amazing digitizers .Always great job.</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/author-2.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Judy</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item text-center">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p>Fast turn around and great design.</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/author-2.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">John Paul</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item text-center">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p>Dope work💪🏿💪🏿💪🏿💪🏿</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/other/author-2.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Big Dodds' Custom</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="owl-nav">
                                    <div className="owl-prev custom-prev"><i className="fal fa-long-arrow-left"></i></div>
                                    <div className="owl-next custom-next"><i className="fal fa-long-arrow-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- testimonial area end -->    */}
        </>
    )
}
