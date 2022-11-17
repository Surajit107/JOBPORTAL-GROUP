import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/common/banners/Banner'

const Jobs = () => {
  return (
    <div>
      <Banner string="Our" page="Jobs" />
      {/* <!-- ***** Fleet Starts ***** --> */}
      <section className="section" id="trainers">
        <div className="container">
          <br />
          <br />

          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="trainer-item">
                    <div className="image-thumb">
                      <img src="assets/images/product-1-720x480.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <span> <sup>$</sup>70 000 </span>

                      <h4>Lorem ipsum dolor sit amet, consectetur</h4>

                      <p>Medical &nbsp;/&nbsp; Health Jobs</p>

                      <ul className="social-icons">
                        <li><Link to="/jobdetails">+ View More</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="trainer-item">
                    <div className="image-thumb">
                      <img src="assets/images/product-2-720x480.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <span> <sup>$</sup>70 000 </span>

                      <h4>Lorem ipsum dolor sit amet, consectetur</h4>

                      <p>Medical &nbsp;/&nbsp; Health Jobs</p>

                      <ul className="social-icons">
                        <li><Link to="/jobdetails">+ View More</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="trainer-item">
                    <div className="image-thumb">
                      <img src="assets/images/product-3-720x480.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <span> <sup>$</sup>70 000 </span>

                      <h4>Lorem ipsum dolor sit amet, consectetur</h4>

                      <p>Medical &nbsp;/&nbsp; Health Jobs</p>

                      <ul className="social-icons">
                        <li><Link to="/jobdetails">+ View More</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="trainer-item">
                    <div className="image-thumb">
                      <img src="assets/images/product-4-720x480.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <span> <sup>$</sup>70 000 </span>

                      <h4>Lorem ipsum dolor sit amet, consectetur</h4>

                      <p>Medical &nbsp;/&nbsp; Health Jobs</p>

                      <ul className="social-icons">
                        <li><Link to="/jobdetails">+ View More</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="trainer-item">
                    <div className="image-thumb">
                      <img src="assets/images/product-5-720x480.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <span> <sup>$</sup>70 000 </span>

                      <h4>Lorem ipsum dolor sit amet, consectetur</h4>

                      <p>Medical &nbsp;/&nbsp; Health Jobs</p>

                      <ul className="social-icons">
                        <li><Link to="/jobdetails">+ View More</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="trainer-item">
                    <div className="image-thumb">
                      <img src="assets/images/product-6-720x480.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <span> <sup>$</sup>70 000 </span>

                      <h4>Lorem ipsum dolor sit amet, consectetur</h4>

                      <p>Medical &nbsp;/&nbsp; Health Jobs</p>

                      <ul className="social-icons">
                        <li><Link to="/jobdetails">+ View More</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <br />

          <nav>
            <ul className="pagination pagination-lg justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#!" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="#!">1</a></li>
              <li className="page-item"><a className="page-link" href="#!">2</a></li>
              <li className="page-item"><a className="page-link" href="#!">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#!" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      {/* <!-- ***** Fleet Ends ***** --> */}
      <br />
    </div>
  )
}

export default Jobs