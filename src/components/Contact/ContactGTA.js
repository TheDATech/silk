import React, { useState } from 'react'

export default function ContactGTA() {
    const [userdata,setUserdata]=useState({
        full_name:"",
        email:"",
        phone:"",
        service:"",
        message:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserdata({
          ...userdata,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to an API
        console.log(userdata);
      };
    return (
        <>
            {/* <!-- gta section start --> */}
            <section className="gta-area gta-area__2 pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="gta-bg__2">
                                <img src="/images/Contact-Us/824x565 (2).png" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 pl-50">
                            <div className="section-header mb-50">
                                <h4 className="sub-heading sub-heading__2 mb-15">Send Message
                                     <span><img src="/images/shape/heading-shape-4.png" className="mr-10 mx-2" alt=""/></span>
                                </h4>
                                <h2 className="section-title section-title__2">Get in Touch</h2>
                            </div>
                            <div className="contact-form">
                                <form onSubmit={handleSubmit} id="contact-form">
                                    <div className="form-group mt-25">
                                        <input type="text" name="full_name" id="name" placeholder="Your Name" value={userdata.full_name}
          onChange={handleChange}/>
                                    </div>
                                    <div className="form-group mt-25">
                                        <input type="email" name="email" id="email" placeholder="Email Address" value={userdata.email}
          onChange={handleChange}/>
                                    </div>
                                    <div className="form-group mt-25">
                                        <input type="tel" name="phone"
          id="tel"
          placeholder="Phone Number"
          value={userdata.phone}
          onChange={handleChange}/>
                                    </div>
                                    <div className="form-group mt-25">
                                    <select
          name="service"
          id="service"
          value={userdata.service}
          onChange={handleChange}
          style={{ width: '100%' }}
        >
          <option value="" disabled>Choose Service</option>
          <option value="Embroidery Digitizing">Embroidery Digitizing</option>
          <option value="Vector Conversion">Vector Conversion</option>
        </select>
                                    </div>
                                    <div className="form-group mt-25">
                                        <textarea name="message" id="message" placeholder="Your Message" value={userdata.message}
          onChange={handleChange}></textarea>
                                    </div>
                                    <button type="submit" className="site-btn site-btn__2 mt-15"><span className="icon icon__black"><i
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
