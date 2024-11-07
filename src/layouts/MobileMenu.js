import React, { useEffect, useState } from 'react'
import MetisMenu from 'metismenujs'
import { NavLink } from 'react-router-dom';


export default function MobileMenu() {
    const [mobileopen,setMobileopen]=useState(false);

    useEffect(() => {
        new MetisMenu("#metismenu");
    }, []);

    return (
        <>
            <nav className="mobile-nav">
                <ul className="metismenu" id="metismenu">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="menu_has_children" onMouseEnter={()=>setMobileopen(true)} onMouseLeave={()=>setMobileopen(false)}><NavLink to="/services" className="has-arrow">Services</NavLink>
                    {mobileopen===true &&(<ul>
                            <li><NavLink to="/services/line-art">Line Art</NavLink></li>
                            <li><NavLink to="/services/graphic-designing">Graphic Designing</NavLink></li>
                            <li><NavLink to="/services/graphic-designing/logo-designing">Logo Designing</NavLink></li>
                            <li><NavLink to="/services/graphic-designing/photo-editing">Photo Editing</NavLink></li>
                            <li><NavLink to="/services/vector-conversion">Vector Conversion</NavLink></li>
                            <li><NavLink to="/services/embroidery-digitizing">Embroidery Digitizing</NavLink></li>
                            <li><NavLink to="/services/embroidery-digitizing/flat-embroidery-digitizing">Flat Embroidery Digitizing</NavLink></li>
                            <li><NavLink to="/services/embroidery-digitizing/applique-embroidery-digitizing">Applique Embroidery Digitizing</NavLink></li>
                            <li><NavLink to="/services/embroidery-digitizing/3D-puff-embroidery-digitizing">3D Puff Embroidery Digitizing</NavLink></li>
                            <li><NavLink to="/services/embroidery-digitizing/chenille-embroidery-digitizing">Chenille Embroidery Digitizing</NavLink></li>
                            <li><NavLink to="/services/embroidery-digitizing/sequin-embroidery-digitizing">Sequin Embroidery Digitizing</NavLink></li>
                        </ul>)}</li>
                    <li><NavLink to="https://silkpatches.netlify.app/custom-patches">Patches</NavLink></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/pricing">Pricing</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                    <li><NavLink to="/faq">Faq</NavLink></li>
                    <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
                    <li><NavLink to="/refund-policy">Refund Policy</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

<nav id="mobile-menu">
    <ul className="metismenu" id="metismenu">
        <li className="menu_has_children">
            <NavLink to="/" className="has-arrow">Home</NavLink>
        </li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="#" className="has-arrow">Pages</NavLink>
            <ul>
                <li><NavLink to="/pricing">Pricing</NavLink></li>
                <li><NavLink to="/faq">Faq</NavLink></li>
                <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
            </ul>
        </li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/portfolio">Project</NavLink></li>
        <li><NavLink to="/blogs" className="has-arrow">Blogs</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
</nav>