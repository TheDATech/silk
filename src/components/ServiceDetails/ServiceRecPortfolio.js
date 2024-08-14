import { Link } from "react-router-dom"

const ServiceRecPortfolio=({portfolioImage,name})=>{
    return(
        <div className="project-area project-area__2 pt-80 pb-80" style={{paddingTop:'100px'}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8 text-center">
                    <div className="section-header mb-65">
                        <h4 className="sub-heading sub-heading__2 mb-15">
                            <span><img src="/images/shape/heading-shape-3.png" className="mr-5" alt=""/></span>
                            Project showcase
                            <span><img src="/images/shape/heading-shape-4.png" className="ml-5" alt=""/></span>
                        </h4>
                        <h2 className="section-title section-title__2">REcent projects</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row project-row mt-none-30">
                {portfolioImage && portfolioImage.map((item,index)=>{
                    return(
                        <div className="col-md-6 mt-30" key={index}>
                        <div className="project-item">
                                    <div className="project-item__thumb">
                                        <img src={item} alt=""/>
                                    </div>
                                    <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                        <div className="project-item__content">
                                            <h5 className="project-item__subtitle"><span>//</span> Book Print</h5>
                                            <h4 className="project-item__title">{name}</h4>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    )
}
export default ServiceRecPortfolio