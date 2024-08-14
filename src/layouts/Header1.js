import React, { useState, useEffect  } from 'react'
import MobileMenu from './MobileMenu';
import { NavLink } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";

export default function Header1() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    const [isSelect, setSelect] = useState("Eng");

    const [isMobileMenu, setMobileMenu] = useState(false);
    const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu)

    const [scroll, setScroll] = useState(false);
   useEffect(() => {
      window.addEventListener("scroll", () => {
         setScroll(window.scrollY > 100);
      });
   }, [scroll]);

    return (
        <>
            {/* <!-- header start --> */}
            <header className="header">
                <div className="header__top">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 p-0">
                                <ul className="header__info">
                                    <li><NavLink to="https://web.whatsapp.com/send?phone=19292798016&text=Hey%20!%20I%20need%20help%20with%20custom%20patches" target='__blank'><i className="fa fa-phone-volume"></i> +1 929-279-8016</NavLink>
                                    </li>
                                    <li><NavLink to="mailto:info@silkdigitizing.com"><i className="fal fa-envelope-open"></i>
                                    info@silkdigitizing.com</NavLink></li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-12 my-auto p-0">
                                <div className="social__links">
                                    <NavLink to="https://www.facebook.com/silkdigitize/" target='__blank'><i className="fab fa-facebook-f"></i></NavLink>
                                    <NavLink to="https://twitter.com/SilkDigitizing" target='__blank'><FaXTwitter/></NavLink>
                                    <NavLink to="https://www.pinterest.com/silkdigitize/" target='__blank'><i className="fab fa-pinterest-p"></i></NavLink>
                                    <NavLink to="https://ca.linkedin.com/in/silkdigitizing" target='__blank'><i className="fab fa-linkedin-in"></i></NavLink>
                                    <NavLink to="https://www.alignable.com/dallas-tx/silk-digitizing" target='__blank'><i className="fa fa-font"></i></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`header__bottom ${scroll ? "sticky-header animated fadeInDown" : ""}`}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12">
                                <div className="navarea">
                                    <NavLink to="/" className="site-logo logowidth">
                                        <img src="/images/logo/logo.png" alt="LOGO" style={{width:'100%',height:'100%',objectFit:'contain'}}/>
                                    </NavLink>
                                    <div className="mainmenu d-none d-lg-block">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li>
                                                    <NavLink to="/">Home</NavLink>
                                                </li>
                                                <li className="menu_has_children"><NavLink to="/services">Services</NavLink>
                                                <ul className="sub-menu">
                                                       <li><NavLink to="/services/line-art">Line Art</NavLink></li>
                                                        <li className='second-parent'><NavLink to="/services/graphic-designing">Graphic Designing</NavLink>
                                                           <ul className="sub-menu1"><li><NavLink to="/services/graphic-designing/logo-designing">Logo Designing</NavLink></li>
                                                           <li><NavLink to="/services/graphic-designing/photo-editing">Photo Editing</NavLink></li></ul>
                                                        </li>
                                                        <li><NavLink to="/services/vector-conversion">Vector Conversion</NavLink></li>
                                                        <li className='second-parent'><NavLink to="/services/embroidery-digitizing" className='a'>Embroidery Digitizing</NavLink>
                                                        <ul className="sub-menu1"><li><NavLink to="/services/embroidery-digitizing/flat-embroidery-digitizing">Flat Embroidery Digitizing</NavLink></li>
                                                           <li><NavLink to="/services/embroidery-digitizing/applique-embroidery-digitizing">Applique Embroidery Digitizing</NavLink></li>
                                                           <li><NavLink to="/services/embroidery-digitizing/3D-puff-embroidery-digitizing">3D Puff Embroidery Digitizing</NavLink></li>
                                                           <li><NavLink to="/services/embroidery-digitizing/chenille-embroidery-digitizing">Chenille Embroidery Digitizing</NavLink></li>
                                                           <li><NavLink to="/services/embroidery-digitizing/sequin-embroidery-digitizing">Sequin Embroidery Digitizing</NavLink></li>
                                                           </ul>
                                                        </li>
                                                    </ul></li>
                                                   {/*  <li className="menu_has_children">
                                                    <NavLink to="/custom-patches">Custom Patches</NavLink>
                                                    <ul className="sub-menu">
                                                        <li><NavLink to="/custom-patches/embroidered-patches">Embroidered Patches</NavLink></li>
                                                        <li><NavLink to="/custom-patches/chenille-patches">Chenille Patches</NavLink></li>
                                                        <li><NavLink to="/custom-patches/woven-patches">Woven Patches</NavLink></li>
                                                        <li><NavLink to="/custom-patches/pvc-patches">PVC Patches</NavLink></li>
                                                        <li><NavLink to="/custom-patches/printed-patches">Printed Patches</NavLink></li>
                                                        <li><NavLink to="/custom-patches/leather-patches">Leather Patches</NavLink></li>
                                                    </ul>
                                                </li> */}
                                                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                                                <li><NavLink to="/pricing">Pricing</NavLink></li>
                                                <li><NavLink to="/contact">Contact</NavLink></li>
                                                <li><NavLink to="/about">About</NavLink></li>
                                                <li><NavLink to="/blogs">Blogs</NavLink></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="mobile-menu mean-container d-block d-lg-none ">
                                        <div className="mean-bar">
                                            <NavLink onClick={MobileMenuTrueFalse} to="#nav" className={isMobileMenu ? "meanmenu-reveal d-none" : "meanmenu-reveal"} >
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </NavLink>
                                            <NavLink onClick={MobileMenuTrueFalse} to="#nav" className={isMobileMenu ? "meanmenu-reveal" : "meanmenu-reveal d-none"} style={{ "right": "0px", "left": "auto", "textAlign": "center", "textIndent": "0px", "fontSize": "18px" }}>
                                                X
                                            </NavLink>
                                        </div>
                                        {isMobileMenu &&
                                            <MobileMenu />
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 my-auto">
                                <div className="lang-quote">
                                    <NavLink to="/contact" className="quote-btn">Get Started</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- header end --> */}
        </>
    )
}
