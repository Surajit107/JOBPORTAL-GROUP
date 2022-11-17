import React from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../../common/Pagination'

const Cards = () => {
    return (
        <div>
            <section className="section" id="trainers">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>43,167 Job Listed</h2>
                            </div>
                        </div>
                    </div>

                    <ul className="job-listings mb-5">

                        <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                            <Link to="/jobsingle" className='p-2'><h4>Puma</h4></Link>
                            <div className="job-listing-logo">
                                <script type="text/javascript" async=""
                                    src="https://www.google-analytics.com/analytics.js"></script>
                            </div>
                            <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                                <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                                    <h2>Product Designer</h2>
                                    <strong>Puma</strong>
                                </div>
                                <div className="job-listing-location pt-2 mb-3 mb-sm-0 custom-width w-25">
                                    <span className="icon-room"></span> New York City
                                </div>
                                <div className="job-listing-meta pt-2">
                                    <span className="badge badge-danger">Part Time</span>
                                </div>
                            </div>
                        </li>

                    </ul>
                    
                    <br />

                    {/* *******Pagination******* */}
                    <Pagination />
                </div>
            </section>
        </div>
    )
}

export default Cards