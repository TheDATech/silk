import React from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            {/* <!-- footer start --> */}
            <footer className="footer footer__2 pt-120">
                <div className="container">
                    <div className="row mt-none-50 justify-content-center">
                        <div className="col-xl-2 col-lg-3 mt-50">
                            <Link to="/" className="footer__logo">
                                <img src="/images/logo/logo.png" alt="" />
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-4 mt-50 pl-45 pr-0">
                            <div className="footer-widget footer-widget__2">
                                <h4 className="widget-title">Our Service</h4>
                                <ul>
                                    <li><Link to="/services/embroidery-digitizing"><i className="fa fa-angle-right"></i>Embroidery Digitizing</Link></li>
                                    <li><Link to="/services/vector-conversion"><i className="fa fa-angle-right"></i>Vector Conversion</Link></li>
                                    <li><Link to="https://silkpatches.netlify.app/custom-patches"><i className="fa fa-angle-right"></i>Custom Patches</Link></li>
                                    {/*<li><Link to="/service/custom-patches"><i className="fa fa-angle-right"></i>Custom Patches</Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-5 mt-50 pl-70 pr-0">
                            <div className="footer-widget footer-widget__2">
                                <h4 className="widget-title">Useful Links</h4>
                                <div className="recent-news mt-none-20">
                                    <div className="recent-news__content mt-20">
                                    <ul>
                                    <li><Link to="/"><i className="fa fa-angle-right"></i>Home</Link></li>
                                    <li><Link to="/about"><i className="fa fa-angle-right"></i>About</Link></li>
                                    <li><Link to="/faq"><i className="fa fa-angle-right"></i>FAQ</Link></li>
                                    <li><Link to="/blogs"><i className="fa fa-angle-right"></i>Blogs</Link></li>
                                    <li><Link to="/privacy-policy"><i className="fa fa-angle-right"></i>Privacy Policy</Link>
                                    </li>
                                    <li><Link to="/refund-policy"><i className="fa fa-angle-right"></i>Refund Policy</Link>
                                    </li>
                                </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4  col-lg-6 mt-50">
                            <div className="footer-widget footer-widget__2">
                                <div className="newslater">
                                    <h4 className="newslater__title">Subscribe to our
                                        Newsletter</h4>
                                    <div className="newslater__form">
                                        <form action="index.html">
                                            <input type="email" name="email" id="email" placeholder="Enter Email" />
                                            <button type="submit"><i className="far fa-paper-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom footer__bottom--2 mt-115">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 my-auto">
                                <div className="copyright-text">
                                    <p className='mb-0'>Copyright &copy; 2015 - 2024 <Link to="https://silkdigitizing.com">Silk Digitizing</Link> All
                                        Rights Reserved.</p>
                                        <p>Developed by <Link to='https://thedatech.com' style={{color:'rgb(255, 102, 0)'}}>DA Tech</Link></p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="social__links social__links--2">
                                    <Link to="https://www.facebook.com/silkdigitize/" target='__blank'><i className="fab fa-facebook-f"></i></Link>
                                    <Link to="https://twitter.com/SilkDigitizing" target='__blank'><FaXTwitter/></Link>
                                    <Link to="https://www.pinterest.com/silkdigitize/" target='__blank'><i className="fab fa-pinterest-p"></i></Link>
                                    <Link to="https://ca.linkedin.com/in/silkdigitizing" target='__blank'><i className="fab fa-linkedin-in"></i></Link>
                                    <Link to="https://www.alignable.com/dallas-tx/silk-digitizing" target='__blank'><i className="fa fa-font"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- footer end --> */}
        </>
    )
}
