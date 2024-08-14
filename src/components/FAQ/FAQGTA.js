import React from 'react'

export default function FAQGTA() {
    return (
        <>
            {/* <!-- gta section start --> */}
            <section className="gta-area grey-bg pt-125 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div id="contact-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.504252964468!2d-96.8858286!3d32.9112732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c279886300001%3A0x922f8b2ab56a96df!2sSILK%20DIGITIZING!5e0!3m2!1sen!2s!4v1709723459995!5m2!1sen!2s" width="600" height="700" style={{border:"0",width:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-xl-6 pl-70">
                            <div className="section-header mb-50">
                                <h4 className="sub-heading sub-heading__2 mb-15">Send Message
                                    <span><img src="/images/shape/heading-shape-4.png" className="ml-10" alt="" /></span>
                                </h4>
                                <h2 className="section-title section-title__2">Get in Touch</h2>
                            </div>
                            <div className="contact-form">
                                <form action="#" method="POST" id="contact-form">
                                    <div className="form-group mt-25">
                                        <input type="text" name="name" id="name" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group mt-25">
                                        <input type="email" name="email" id="mail" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group mt-25">
                                        <input type="tel" name="phone"
          id="tel"
          placeholder="Phone Number"/>
                                    </div>
                                    <div className="form-group mt-25">
                                    <select
          name="service"
          id="service"
          style={{ width: '100%' }}
        >
          <option value="" disabled>Choose Service</option>
          <option value="Embroidery Digitizing">Embroidery Digitizing</option>
          <option value="Vector Conversion">Vector Conversion</option>
        </select>
                                    </div>
                                    <div className="form-group mt-25">
                                        <textarea name="message" id="message" placeholder="Your Message"></textarea>
                                    </div>
                                    <button type="submit" className="site-btn site-btn__s2 mt-15"><span className="icon icon__black"><i
                                        className="far fa-arrow-right"></i></span> Contact us</button>
                                    <p className="ajax-response"></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- gta section end -->    */}
        </>
    )
}
