import React from 'react'
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';


export default function HomeOneHero() {
    const team = [
        {
            title: ["Pixen Your", "Printing Solution"],
            desc: "Magnificence in the realistic interchanges",
            // img: (
            //     <Image
            //     src="/images/shape/hero-shape.png"
            //     layout="responsive"
            //     width={1174}
            //     height={899}
            //     />
            //     ),
            //     src: "/images/banner/hp-slide-1.jpeg"
            // },
            src: "/images/banner/hp-slide-1.jpeg"
        },
        {
            title: ["Pixen Your", "Printing Solution"],
            desc: "Magnificence in the realistic interchanges",
            // img: (
            //     <Image
            //         src="/images/shape/hero-shape.png"
            //         layout="responsive"
            //         width={1174}
            //         height={899}
            //     />
            // ),
            src: "/images/banner/hp-slide-1.jpeg"
        }
    ];

    return (
        <>
            {/* <!-- hero start --> */}
            <section className="hero position-relative">
                <Swiper
                    // install Swiper modules
                    // modules={[Navigation, Scrollbar]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplaydisableoninteraction={"false"}
                    loop={true}
                    modules={[Navigation]}
                    className=""
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                // pagination={{ clickable: true }}
                // breakpoints={{

                //     // when window width is >= 768px
                //     768: {
                //         slidesPerView: 2,
                //     },
                //     992: {
                //         // when window width is >= 992px
                //         slidesPerView: 3,
                //     }
                // }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >
                    {team.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="hero__item">
                                <div className="container-fluid p-0">
                                    <div className="row no-gutters">
                                        <div className="col-xl-6 col-lg-7">
                                            <div className="hero__content">
                                                <h2 className="hero__title" data-animation="fadeIn" data-delay=".2s" data-duration=".5s">{item.title[0]} <br />
                                                    {item.title[1]}</h2>
                                                <p data-animation="fadeInUp" data-delay=".5s" data-duration=".7s">Magnificence in the
                                                    realistic interchanges</p>
                                                <Link data-animation="fadeInUp" data-delay=".7s" data-duration=".9s" to="/about"
                                                    className="site-btn"><span className="icon"><i className="far fa-arrow-right"></i></span> Read
                                                    More</Link>
                                                <div className="shape">
                                                    <img src="/images/shape/hero-shape.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero__image d-flex align-self-stretch">
                                    <img src={item.src} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <div className="owl-nav">
                    <div className="custom-prev owl-prev"><i className="fal fa-angle-left"></i></div>
                    <div className="custom-next owl-next"><i className="fal fa-angle-right"></i></div>
                </div>

            </section>
            {/* <!-- hero end --> */}
        </>
    )
}
