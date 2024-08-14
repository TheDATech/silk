import React from 'react'

export default function Preloader() {
    return (
        <>
            {/* <!-- preloader  --> */}
            <div id="preloader">
                <div id="ctn-preloader" className="ctn-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="S" className="letters-loading">
                                S
                            </span>
                            <span data-text-preloader="I" className="letters-loading">
                                I
                            </span>
                            <span data-text-preloader="L" className="letters-loading">
                                L
                            </span>
                            <span data-text-preloader="K" className="letters-loading">
                                K
                            </span>
                            <span data-text-preloader="D" className="letters-loading">
                                D
                            </span>
                            <span data-text-preloader="I" className="letters-loading">
                                I
                            </span>
                            <span data-text-preloader="G" className="letters-loading">
                                G
                            </span>
                            <span data-text-preloader="I" className="letters-loading">
                                I
                            </span>
                            <span data-text-preloader="T" className="letters-loading">
                                T
                            </span>
                            <span data-text-preloader="I" className="letters-loading">
                                I
                            </span>
                            <span data-text-preloader="Z" className="letters-loading">
                                Z
                            </span>
                            <span data-text-preloader="I" className="letters-loading">
                                I
                            </span>
                            <span data-text-preloader="N" className="letters-loading">
                                N
                            </span>
                            <span data-text-preloader="G" className="letters-loading">
                                G
                            </span>
                        </div>
                    </div>
                    <div className="loader">
                        <div className="row">
                            <div className="col-3 loader-section section-left">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-left">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- preloader end --> */}

        </>
    )
}
