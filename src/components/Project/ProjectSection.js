import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Data from '../../Data';
export default function ProjectSection() {
    const [category, setCategory] = useState('All');
    const [visibleImages, setVisibleImages] = useState(24); 

    const filteredPortfolio = category === 'All' ? Data : Data.filter(item => item.category_name === category);
  

   const handleLoadMore = () => {
    setVisibleImages(prevVisibleImages => prevVisibleImages + 12);
  };

    return (
        <>
            {/* <!-- project section start --> */}
            <div className="project-area project-area__2 pt-100 mb-50" style={{paddingTop:'100px'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center">
                            <div className="section-header mb-65">
                                <h4 className="sub-heading sub-heading__2 mb-15">
                                    <span><img src="/images/shape/heading-shape-3.png" className="mr-5" alt="" /></span>
                                    Project showcase
                                    <span><img src="/images/shape/heading-shape-4.png" className="ml-5" alt="" /></span>
                                </h4>
                                <h2 className="section-title section-title__2">REcent projects</h2>
                            </div>
                        </div>
                        <div className='projecrbtngrid'>
                        <button className='projecrbtn' onClick={() => setCategory('All')}>Show All</button>
                            {Data && [...new Set(Data.map(item => item.category_name))].map((category_name, index) => (
    <button className='projecrbtn' key={index} onClick={() => setCategory(category_name)}>{category_name}</button>
))}
                </div>
                    </div>
                </div>
             
                <div className="container-fluid">
                    <div className="row project-row mt-none-30">
                        {filteredPortfolio && filteredPortfolio.slice(0, visibleImages).map((portfolio,index)=>{
                            return(
                                <div className="col-xl-3 col-lg-3 col-md-3 mt-30" key={portfolio.id}>
                                <div className="project-item">
                                <div className="project-item__thumb project-item__thumb--big">
                                    <img src={portfolio.image} alt="" style={{objectFit:'contain'}}/>
                                </div>
                                <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                    <Link to="/project-details" className="project-item__link"><i
                                        className="far fa-arrow-right"></i></Link>
                                    <div className="project-item__content">
                                        <h5 className="project-item__subtitle"><span>//</span> Book Print</h5>
                                        <h4 className="project-item__title">{portfolio.category_name}</h4>
                                    </div>
                                </div>
                            </div>
                            </div>
                            )
                        })}
                    </div>
                    {filteredPortfolio && filteredPortfolio.length > visibleImages && ( // Render the "Load More" button conditionally
        <div className="text-center mt-10">
          <button onClick={handleLoadMore} className="projecrbtn">Load More</button>
        </div>
      )}
                </div>
            </div>
            {/* <!-- project section end -->    */}
        </>
    )
}
