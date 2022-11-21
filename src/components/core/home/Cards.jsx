import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllJobs } from '../../../redux/slice/JobSlice'
import Pagination from '../../common/Pagination'

const Cards = () => {

    const dispatch = useDispatch()
    const { fetch_job_data } = useSelector((state) => state.jobslice)
    useEffect(() => {
        dispatch(fetchAllJobs())
    }, [dispatch])
    const joblist = fetch_job_data.length

    return (
        <div>
            <section className="section" id="trainers">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>{joblist} Jobs Listed</h2>
                            </div>
                        </div>
                    </div>

                    <ul className="job-listings mb-5">

                        {
                            fetch_job_data?.map((curElm) => {
                                const { title, company, city, status, id } = curElm
                                return (
                                    <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center" key={id}>
                                        <Link to={`/jobsingle/${id}`} className='p-2'><h4>{company}</h4></Link>
                                        <div className="job-listing-logo">
                                            <script type="text/javascript" async=""
                                                src="https://www.google-analytics.com/analytics.js"></script>
                                        </div>
                                        <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                                            <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                                                <h2>{title}</h2>
                                                <strong>{company}</strong>
                                            </div>
                                            <div className="job-listing-location pt-2 mb-3 mb-sm-0 custom-width w-25">
                                                <span className="icon-room"></span> {city}
                                            </div>
                                            <div className="job-listing-meta pt-2">
                                                <span className="badge badge-success">{status}</span>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }

                    </ul>

                    <br />

                    {/* *******Pagination******* */}
                    <Pagination joblist={joblist} />
                </div>
            </section>
        </div>
    )
}

export default Cards