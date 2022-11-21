import React from 'react'
import Banner from '../components/common/banners/Banner'

const PostJobs = () => {
  return (
    <div>
      <Banner string="Post" page="Jobs" />

      <section className="section" id="contact-us" style={{ "marginTop": "0" }}>
        <div className="container-fluid">
          <div className="row">

            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h2>Create <em> Job Requirements</em> Here</h2>
                <img src="assets/images/line-dec.png" alt="waves" />
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-xs-12">
              <div className="contact-form">
                <form>
                  <div className="row">

                    {/* *****Job Title***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="jobtitle"
                          type="text"
                          placeholder="Job Title*" />
                      </fieldset>
                    </div>

                    {/* *****Company Name***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="compname"
                          type="text"
                          placeholder="Company Name*" />
                      </fieldset>
                    </div>

                    {/* *****Employer Name***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          placeholder="Employer Name*" />
                      </fieldset>
                    </div>

                    {/* *****Employer Email***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Employer Email*" />
                      </fieldset>
                    </div>

                    {/* *****Contact Number***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="phone"
                          type="tel"
                          placeholder="Contact Number*" />
                      </fieldset>
                    </div>

                    {/* *****Employment Status***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="empstatus"
                          type="text"
                          placeholder="Employment Status*" />
                      </fieldset>
                    </div>

                    {/* *****Job Location***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="location"
                          type="text"
                          placeholder="Job Location*" />
                      </fieldset>
                    </div>

                    {/* *****Job Vacancy***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="vacancy"
                          type="text"
                          placeholder="Vacancy*" />
                      </fieldset>
                    </div>

                    {/* *****Experience***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="experience"
                          type="text"
                          placeholder="Experience*" />
                      </fieldset>
                    </div>

                    {/* *****Min. Salary***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="salary"
                          type="text"
                          placeholder="Minimum Salary*" />
                      </fieldset>
                    </div>

                    {/* *****Max. Salary***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="salary"
                          type="text"
                          placeholder="Maximum Salary*" />
                      </fieldset>
                    </div>

                    {/* *****Category One***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="salary"
                          type="text"
                          placeholder="Post Job Category Here*" />
                      </fieldset>
                    </div>

                    {/* *****Category Two***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="salary"
                          type="text"
                          placeholder="If Any Other Category Present*" />
                      </fieldset>
                    </div>

                    {/* *****Gender***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="gender"
                          type="text"
                          placeholder="Gender*" />
                      </fieldset>
                    </div>

                    {/* *****Company Website***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="compweb"
                          type="text"
                          placeholder="Company Website*" />
                      </fieldset>
                    </div>

                    {/* *****Application Dedline***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="dedline"
                          type="text"
                          placeholder="Application Dedline* [dd-Month-yyyy]" />
                      </fieldset>
                    </div>

                    {/* *****Job Description***** */}

                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="description"
                          rows="12"
                          placeholder="Job Description*" />
                      </fieldset>
                    </div>

                    {/* *****Responsibilities***** */}

                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="responsibilities"
                          rows="12"
                          placeholder="Responsibilities*" />
                      </fieldset>
                    </div>

                    {/* *****Education***** */}

                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="education"
                          rows="12"
                          placeholder="Education*" />
                      </fieldset>
                    </div>

                    {/* *****Other Benifits***** */}

                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="benifits"
                          rows="12"
                          placeholder="Other Benifits*" />
                      </fieldset>
                    </div>

                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="main-button">Submit</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PostJobs