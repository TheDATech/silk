import React from 'react'
import { Link } from 'react-router-dom'

export default function FAQBreadcrumb() {
    return (
        <>
            {/* <!-- breadcrumb section start --> */}
            <section className='container-fluid newbreadcrumb'>
              <div className='newbreadcrumb-columnleft'>
              <img src='/images/shape/breadcrumb-shape.png' alt='' style={{width:'100%',height:'100%'}}/>
              </div>
              <div className='newbreadcrumb-columnRight'>
              <img src="/images/FAQ/cover2.png" alt="" style={{objectFit:'cover',width:'100%',height:'100%'}}/>
              <div className='newbreadcrumb-overlay'></div>
              </div>
              <div className="newbreadcrumbbreadcrumb-text">
                                <h1 className="breadcrumb-text__title">
                                Asked question
                                </h1>
                                <ul className="breadcrumb-text__nav">
                                <li><Link to="/">Home</Link></li>
                                    <li>-</li>
                                    <li>Asked question</li>
                                </ul>
                            </div>
            </section>
            {/* <!-- breadcrumb section end -->     */}
        </>
    )
}
