import React, { useState } from 'react'

export default function FAQArea() {
    const [activeDefault, setActiveDefault] = useState(0);
    const FAQ = [
        {
            q: "What file formats are used for embroidery digitizing?",
            a: "Common file formats for embroidery digitizing include .DST, .PES, .EXP, .XXX, .VIP, and .JEF. These formats are specific to embroidery machines and contain the necessary instructions for stitching."
        },
        {
            q: "Do I need special software for embroidery digitizing?",
            a: "Yes, specialized software such as Wilcom, Tajima DG/ML by Pulse, and Hatch Embroidery are commonly used for embroidery digitizing. These programs allow designers to create and edit embroidery designs and export them in the appropriate file formats."
        },
        {
            q: "Can any image be digitized for embroidery?",
            a: "Not necessarily. While many images can be digitized for embroidery, complex designs with fine details may not translate well to embroidery. It's best to consult with a professional digitizer to determine if a design is suitable for embroidery."
        },
        {
            q: "How much does embroidery digitizing cost?",
            a: "The cost of embroidery digitizing varies depending on factors such as design complexity, stitch count, and turnaround time. Digitizing services typically charge per thousand stitches, with prices ranging from $1 to $10 per thousand stitches or more."
        },
        {
            q: "What software do graphic designers use?",
            a: "Graphic designers use a variety of software depending on their preferences and specific needs. Some common graphic design software includes Adobe Photoshop for image editing, Adobe Illustrator for vector graphics, Adobe InDesign for layout design, and CorelDRAW."
        },
        {
            q: "What is the difference between raster and vector graphics?",
            a: "Raster graphics are made up of pixels and are best for photographs and images with complex color blends. Vector graphics, on the other hand, are made up of paths and shapes defined by mathematical equations, making them infinitely scalable without losing quality. They are ideal for logos and illustrations."
        }
    ]
    return (
        <>
            {/* <!-- faq section start --> */}
            <section className="faq-area faq-area__2 pt-80 pb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 text-center">
                            <div className="section-header mb-75">
                                <h4 className="sub-heading sub-heading__2 mb-15">
                                    <span><img src="/images/shape/heading-shape-3.png" className="mr-5" alt="" /></span>
                                    Common Question
                                    <span><img src="/images/shape/heading-shape-4.png" className="ml-5" alt="" /></span>
                                </h4>
                                <h2 className="section-title section-title__2">Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="accordion faqs faqs__2" id="accordionFaq">
                                {FAQ.map((d, i) => (
                                    <div className="card">
                                        <div onClick={() => setActiveDefault(activeDefault === i ? -1 : i)} className="card__header" id="heading1">
                                            <h5 className="mb-0 title">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                                    data-target="#collapse1" aria-expanded={activeDefault === i ?"true" :"false"} aria-controls="collapse1">
                                                    {d.q}
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse1" className={`collapse ${activeDefault === i ? "show" : ""}`} aria-labelledby="heading1" data-parent="#accordionFaq">
                                            <div className="card__body">
                                                <p>{d.a}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- faq section end -->    */}
        </>
    )
}
