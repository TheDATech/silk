import React from 'react'
import CounterUp from '../Plugins/CounterUp'

export default function HomeTwoCounter() {
    return (
        <>
         {/* <!-- counter section start --> */}
    <div className="counter-area pb-70 blue-bg">
        <div className="container">
            <div className="row mt-none-40">
                <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                    <div className="counter-box text-center">
                        <div className="counter_box__icon">
                            <img src="/images/icons/c-1.png" alt=""/>
                        </div>
                        <h2 className="counter_box__title"><span className="odometer" ><CounterUp count={12} />K+</span></h2>
                        <p>Complete Work</p>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                    <div className="counter-box text-center">
                        <div className="counter_box__icon">
                            <img src="/images/icons/imgpsh_fullsize_anim.png" alt="" style={{width:'5rem',height:'4.2rem'}}/>
                        </div>
                        <h2 className="counter_box__title"><span className="odometer" ><CounterUp count={230} />+</span></h2>
                        <p>Expert Designers</p>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                    <div className="counter-box text-center">
                        <div className="counter_box__icon">
                            <img src="/images/icons/client.png" alt="" style={{width:'5rem',height:'4.2rem'}}/>
                        </div>
                        <h2 className="counter_box__title"><span className="odometer" ><CounterUp count={5} />K+</span></h2>
                        <p>Satisfied Client</p>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                    <div className="counter-box text-center">
                        <div className="counter_box__icon">
                        <img src="/images/icons/c-2.png" alt=""/>
                        </div>
                        <h2 className="counter_box__title"><span className="odometer" ><CounterUp count={16} />K+</span></h2>
                        <p>Total Designs</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- counter section end -->    */}
        </>
    )
}
