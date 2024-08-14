import React from 'react'
import { Link, useParams } from 'react-router-dom'
import serviceDetailData from './serviceDetailData';
import { Helmet } from 'react-helmet';
import ServiceRecPortfolio from './ServiceRecPortfolio';

export default function ServiceDetailsContent() {
    const {name,subcat}=useParams();
    console.log('name',name);
    const FilterData = serviceDetailData && serviceDetailData.filter((item) => item.slug === name);
    return (
        <>
        <Helmet>
            {subcat? <link rel="canonical" href={`https://silkdigitizing.com/services/${subcat}/${name}`}></link>: <link rel="canonical" href={`https://silkdigitizing.com/services/${name}`}></link>}
        </Helmet>
            {/* <!-- details content start --> */}
            <div className="details-content-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="sidebar grey-bg">
                                <h4 className="sidebar__title">
                                    <span><img src="/images/shape/heading-shape-3.png" className="mr-5" alt=""/></span>
                                    More Service
                                </h4>
                                <ul className="sidebar__list">
                                    <li>
                                        <Link to="/services/embroidery-digitizing">Embroidery Digitizing
                                        <span className="icon"><i class ="far fa-arrow-right"></i></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/embroidery-digitizing/flat-embroidery-digitizing">Flat Embroidery Digitizing
                                        <span className="icon"><i class ="far fa-arrow-right"></i></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/embroidery-digitizing/applique-embroidery-digitizing">Applique Embroidery Digitizing
                                        <span className="icon"><i class ="far fa-arrow-right"></i></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/embroidery-digitizing/3D-puff-embroidery-digitizing">3D Puff Embroidery Digitizing
                                        <span className="icon"><i class ="far fa-arrow-right"></i></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/embroidery-digitizing/chenille-embroidery-digitizing">Chenille Embroidery Digitizing
                                        <span className="icon"><i class ="far fa-arrow-right"></i></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/embroidery-digitizing/sequin-embroidery-digitizing">Sequin Embroidery Digitizing
                                        <span className="icon"><i class ="far fa-arrow-right"></i></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/vector-conversion">Vector Conversion
                                        <span className="icon"><i class ="far fa-arrow-right"></i></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/graphic-designing">Graphic Designing
                                        <span className="icon"><i class ="far fa-arrow-right"></i></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/graphic-designing/logo-designing">Logo Designing
                                        <span className="icon"><i class ="far fa-arrow-right"></i></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/graphic-designing/photo-editing">Photo Editing
                                        <span className="icon"><i class ="far fa-arrow-right"></i></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/line-art">Line Art
                                        <span className="icon"><i class ="far fa-arrow-right"></i></span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar grey-bg mt-30">
                                <h4 className="sidebar__title">
                                    <span><img src="/images/shape/heading-shape-3.png" className="mr-5" alt=""/></span>
                                    Quick Contact
                                </h4>
                                <div className="contact-form contact-form__3">
                                    <form action="index">
                                        <div className="form-group mt-20">
                                            <input type="text" name="name" id="name" placeholder="Your Name"/>
                                        </div>
                                        <div className="form-group mt-20">
                                            <input type="email" name="email" id="email" placeholder="Email Address"/>
                                        </div>
                                        <div className="form-group mt-20">
                                            <input type="tel" name="phone" id="tel" placeholder="Your phone number"/>
                                        </div>
                                        <div className="form-group mt-20">
                                        <select
          name="service"
          style={{ width: '100%',background:"#fff",borderRadius:"0",border:"none" }}
        >
          <option value="" disabled>Choose Service</option>
          <option value="Embroidery Digitizing">Embroidery Digitizing</option>
          <option value="Vector Conversion">Vector Conversion</option>
        </select>
                                        </div>
                                        <div className="form-group mt-20">
                                            <textarea name="message" id="message" placeholder="Your Message"></textarea>
                                        </div>
                                        <button type="submit" className="site-btn site-btn__2 mt-10"><span
                                            className="icon icon__black"><i className="far fa-arrow-right"></i></span> SEnd
                                            messgae</button>
                                    </form>
                                </div>
                            </div>
                                    </div>
                                    <div className="col-xl-8">
                                        {FilterData && FilterData.map(({id,name,content,booking,design,order,image,portfolioImage,metaTitle,metaDes,metaKeywords})=>{
                                            return(
                                                <div className="details-content" key={id+name}>
                                                    <Helmet>
                                                    <title>{metaTitle}</title>
        <meta name="description" content={metaDes} />
        <meta name="keywords" content={metaKeywords}/>
                                                    </Helmet>
                                                <div className="details-content__thumb mb-30">
                                                    <img src={image} alt={name}/>
                                                </div>
                                                <h2 className="details-content__title mb-20">{name}</h2>
                                                <p>{content}</p>
                                                <div className="content mt-20">
                                                    <h2 className="details-content__title mt-30 mb-25">Working Process</h2>
                                                </div>
                                                <div className="row mt-none-30">
                                                    <div className="col-xl-4 col-lg-6 col-md-6 mt-30">
                                                        <div className="wp-box wp-box__2 text-center">
                                                            <div className="wp-box__icon wp-box__icon--center wp-box__icon--2 mb-25">
                                                                <img src="/images/icons/w-p-1.png" alt=""/>
                                                            </div>
                                                            <div className="wp-box__content">
                                                                <h4 className="wp-box__title wp-box__title--2">Booking Online</h4>
                                                                <p>{booking}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 col-md-6 mt-30">
                                                        <div className="wp-box wp-box__2 text-center">
                                                            <div className="wp-box__icon wp-box__icon--center wp-box__icon--3 mb-25">
                                                                <img src="/images/icons/w-p-3.png" alt=""/>
                                                            </div>
                                                            <div className="wp-box__content">
                                                                <h4 className="wp-box__title wp-box__title--2">Creative Design</h4>
                                                                <p>{design}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 col-md-6 mt-30">
                                                        <div className="wp-box wp-box__2 text-center">
                                                            <div className="wp-box__icon wp-box__icon--center wp-box__icon--4 mb-25">
                                                                <img src="/images/icons/w-p-4.png" alt=""/>
                                                            </div>
                                                            <div className="wp-box__content">
                                                                <h4 className="wp-box__title wp-box__title--2">Process Orders</h4>
                                                                <p>{order}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ServiceRecPortfolio portfolioImage={portfolioImage} name={name}/>
                                            </div>
                                            )
                                        })}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- details content end -->    */}
                    </>
                    )
}
