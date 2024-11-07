import React from 'react'
import { Link} from 'react-router-dom'

export default function ServiceBreadcrumb() {
    return (
        <>
            {/* <!-- breadcrumb section start --> */}
            {/* <!-- breadcrumb section end -->  */}
            <section className='container-fluid newbreadcrumb'>
              <div className='newbreadcrumb-columnleft'>
              <img src='/images/shape/breadcrumb-shape.png' alt='' style={{width:'100%',height:'100%'}}/>
              </div>
              <div className='newbreadcrumb-columnRight'>
              <img src="/images/Services/1275x500.png" alt="" style={{objectFit:'cover',width:'100%',height:'100%'}}/>
              <div className='newbreadcrumb-overlay'></div>
              </div>
              <div className="newbreadcrumbbreadcrumb-text">
                                <h1 className="breadcrumb-text__title">
                                    our patches
                                </h1>
                                <ul className="breadcrumb-text__nav">
                                <li><Link to="/">Home</Link></li>
                                    <li>-</li>
                                    <li>patches</li>
                                </ul>
                            </div>
            </section>
        </>
    )
}
