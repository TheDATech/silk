import React from 'react'
import { Link } from 'react-router-dom'

export default function PatchesDetailsContent() {
    return (
        <>
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
                                        <Link to="/custom-patches">Custom Patches
                                        <span className="icon"><i class ="far fa-arrow-right"></i></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/custom-patches/embroidered-patches">Embroidered Patches
                                        <span className="icon"><i class ="far fa-arrow-right"></i></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/custom-patches/chenille-patches">Chenille Patches
                                        <span className="icon"><i class ="far fa-arrow-right"></i></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/custom-patches/woven-patches">Woven Patches
                                        <span className="icon"><i class ="far fa-arrow-right"></i></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/custom-patches/pvc-patches">PVC Patches
                                        <span className="icon"><i class ="far fa-arrow-right"></i></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/custom-patches/printed-patches">Printed Patches
                                        <span className="icon"><i class ="far fa-arrow-right"></i></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/custom-patches/leather-patches">Leather Patches
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
                                        <div className="details-content">
                                            <div className="details-content__thumb mb-30">
                                                <img src="/images/bg/custom-patches-bg-1.jpeg" alt=""/>
                                            </div>
                                            <h2 className="details-content__title mb-20">Flyer Printing</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt
                                                labore etern dolore magna
                                                aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                eas commodo consequat. Duis
                                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint
                                                occaecat cupidatat non proident sunt inter on culpa qui officia deserunt mollit anim id est
                                                laborum. Diam ligula eget
                                                cras neque dolor vulputate rutrum varius magnis facilisis lobortis taciti augue nam pretium
                                                vestibulum uterin nunc vitae
                                                nec ullamcorper fusce conubia tempor placerat phasellus.</p>
                                            <div className="content mt-20">
                                                <p>Nam augue odio lacus fusce montes ullamcorper nec arcu eget platea eleifend donec to
                                                    suscipit turps felis pulvinar
                                                    purus
                                                    uter neque nisl consectetuer fames buyer lobortis mollis est nulla non ante mauris
                                                    scelerisque fermentum praesent
                                                    ipsum.
                                                    Erat tempus adipiscing felis vitae ace to litora et fusce at odio consequat dignissim
                                                    fusce felis toll doern
                                                    sodales.</p>
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
                                                            <p>God The movin firmament seed over herb gather interna multis fly morning</p>
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
                                                            <p>God The movin firmament seed over herb gather interna multis fly morning</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-6 col-md-6 mt-30">
                                                    <div className="wp-box wp-box__2 text-center">
                                                        <div className="wp-box__icon wp-box__icon--center wp-box__icon--4 mb-25">
                                                            <img src="/images/icons/w-p-4.png" alt=""/>
                                                        </div>
                                                        <div className="wp-box__content">
                                                            <h4 className="wp-box__title wp-box__title--2">Start Printing</h4>
                                                            <p>God The movin firmament seed over herb gather interna multis fly morning</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>                                      
                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- details content end -->    */}
                    </>
                    )
}
