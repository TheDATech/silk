import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectDetailsBreadCrumb() {
    return (
        <>
            {/* <!-- breadcrumb section start --> */}
            <section className="breadcrumb-section pt-180 pb-180 bg_img" style={{"background":"url(/images/bg/breadcrumb-bg-1.jpeg)"}}
                data-overlay="dark" data-opacity="3">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 d-flex pr-0">
                            <div className="breadcrumb-text">
                                <h2 className="breadcrumb-text__title">
                                    project details
                                </h2>
                                <ul className="breadcrumb-text__nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li>-</li>
                                    <li>project details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- breadcrumb section end -->    */}
        </>
    )
}
