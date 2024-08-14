import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactInfo() {
    return (
        <>
            {/* <!-- contact info area start --> */}
            <div className="contact-info-area pt-100">
                <div className="container">
                    <div className="row mt-none-30 justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-6 mt-30">
                            <div className="contact-info">
                                <h4 className="contact-info__title">United States</h4>
                                <p>2727 Lyndon B Johnson Fwy #212, Dallas, TX 75234. (Main Office)</p>
                                <Link to="mailto:info@silkdigitizing.com">info@silkdigitizing.com</Link>
                                <Link to="tel:+1929-279-8016">+1 929-279-8016</Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 mt-30">
                            <div className="contact-info">
                                <h4 className="contact-info__title">Canada</h4>
                                <p>40 Locomotive Cres, Brampton, ON L7A0T6, Canada.</p>
                                <Link to="mailto:info@silkdigitizing.com">info@silkdigitizing.com</Link>
                                <Link to="tel:+1929-279-8016">+1 929-279-8016</Link>
                            </div>
                        </div>
                        
                    
                    </div>
                </div>
            </div>
            {/* <!-- contact info area end -->    */}
        </>
    )
}
