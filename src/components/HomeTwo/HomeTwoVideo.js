import React from 'react'
import VideoPopUp from '../Plugins/VideoPopup'
import { useState } from 'react'
import axios from 'axios';

export default function HomeTwoVideo() {
    const [isPopUp, setPopUp] = useState(false)
    const [userdata,setUserdata]=useState({
        name:"",
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
    

      const handleSubmit = async(e) => {
        try{
            e.preventDefault();
            const res=await axios.post('https://silk.thedatech.com/api',{userdata})
            console.log('res',res);
        }catch(err){
            console.log('error message',err)
        }
      };

    return (
        <>
            {/* <!-- video area start --> */}
            <section className="video-area">
                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-xl-8">
                            <div className="video__bg bg_img" style={{ "background": "url(/images/bg/1920x900.png)",backgroundRepeat:'no-repeat',backgroundSize:'100% 100%'}} data-overlay="dark"
                                data-opacity="34">
                                <div className="video-container-wrap">
                                    <a onClick={setPopUp}
                                        data-rel="lightcase:myCollection" data-animation="fadeInLeft" data-delay=".1s"
                                        className="video-link pointer">
                                        <div className="video-play-wrap">
                                            <div className="video-mark">
                                                <div className="wave-pulse wave-pulse-1"></div>
                                                <div className="wave-pulse wave-pulse-2"></div>
                                            </div>
                                            <div className="video-play">
                                                <i className="fa fa-play"></i>
                                            </div>
                                        </div>
                                    </a>
                                    <a onClick={setPopUp} className="video-text pointer"
                                        data-rel="lightcase:myCollection" data-animation="fadeInLeft" data-delay=".1s">Play
                                        Video</a>
                                </div>
                            </div>
                            {isPopUp && <VideoPopUp setShow={() => setPopUp(false)} src={"/images/About-Us/Aboutpagevideo.mp4"} />}
                        </div>
                        <div className="col-xl-4">
                            <div className="quote-wrapper">
                                <h2 className="quote-title">Free quote</h2>
                                <div className="quote-form">
                                    <form onSubmit={handleSubmit} className="mt-none-15">
                                        <div className="form-group mt-15">
                                            <input type="text" name="name" id="name" placeholder="Your Name" value={userdata.name}
          onChange={handleChange}/>
                                        </div>
                                        <div className="form-group mt-15">
                                            <input type="email" name="email"
          id="email"
          placeholder="Your Email"
          value={userdata.email}
          onChange={handleChange} />
                                        </div>
                                        <div className="form-group mt-15">
                                            <input type="tel" name="phone"
          id="tel"
          placeholder="Phone Number"
          value={userdata.phone}
          onChange={handleChange}/>
                                        </div>
                                        <div className="form-group mt-15">
                                            <select name="service"
          id="service"
          value={userdata.service}
          onChange={handleChange} style={{width:'100%'}}>
                                                <option value=" "  data-display="Choose Service"> Choose Service</option>
                                                <option value="Embroidery Digitizing">Embroidery Digitizing</option>
                                                <option value="Vector Conversion">Vector Conversion</option>
                                            </select>
                                        </div>
                                        <div className="form-group mt-15">
                                            <textarea name="message"
          id="message"
          placeholder="Write Message"
          value={userdata.message}
          onChange={handleChange}></textarea>
                                        </div>
                                        <div className="form-group mt-15">
                                            <button type="submit" className="quote-btn"><span className="icon"><i
                                                className="far fa-arrow-right"></i></span> free
                                                estimate</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- video area end -->    */}
        </>
    )
}
