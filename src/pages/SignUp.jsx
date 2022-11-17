import React from 'react'
import Banner from '../components/common/banners/Banner'

const SignUp = () => {
  return (
    <div>
      <Banner string="Create Your Account &" page="Sign Up" />
      <section className="section" id="contact-us" style={{ "marginTop": "0" }}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-6 col-xs-6">
              <div className="contact-form">
                <form>
                  <div className="row">

                    {/* *****Email***** */}

                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="email"
                          placeholder="Enter a valid email ID*" />
                      </fieldset>
                    </div>

                    {/* *****Phone***** */}

                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="phone"
                          type="tel"
                          placeholder="Enter a valid mobile number*" />
                      </fieldset>
                    </div>
                    
                    {/* *****User Name***** */}

                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="username"
                          type="text"
                          placeholder="Enter a username*" />
                      </fieldset>
                    </div>

                    {/* *****Password***** */}

                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="password"
                          type="password"
                          placeholder="Enter a password*" />
                      </fieldset>
                    </div>

                    <div className="col-lg-12 d-flex justify-content-center">
                      <fieldset>
                        <button type="submit" id="form-submit" className="main-button">Sign Up</button>
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

export default SignUp