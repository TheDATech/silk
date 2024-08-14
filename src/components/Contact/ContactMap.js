import React from 'react'
import GoogleMap from '../Plugins/GoogleMap/GoogleMap'

export default function ContactMap() {
    return (
        <>
            {/* <!-- map area start --> */}
            <div className="contact-map-area">
                <div id="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.504252964468!2d-96.8858286!3d32.9112732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c279886300001%3A0x922f8b2ab56a96df!2sSILK%20DIGITIZING!5e0!3m2!1sen!2s!4v1709723459995!5m2!1sen!2s" width="600" height="700" style={{border:"0",width:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            {/* <!-- map area end -->    */}
        </>
    )
}
