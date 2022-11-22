import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Banner from '../components/common/banners/Banner'
import { fetchSignUp } from '../redux/slice/SignUpSlice'

const initialState = {
  email: "",
  mobile: "",
  username: "",
  password: ""
}

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formValue, setFormValue] = useState(initialState)

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventdefault()
  }

  const onButtonClick = () => {
    dispatch(fetchSignUp(formValue))
    navigate('/')
  }

  return (
    <div>
      <Banner string="Create Your Account &" page="Sign Up" />
      <section className="section" id="contact-us" style={{ "marginTop": "0" }}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-6 col-xs-6">
              <div className="contact-form">

                {/* ******From Start****** */}

                <form onSubmit={handleSubmit}>
                  <div className="row">

                    {/* *****Email***** */}

                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="email"
                          placeholder="Enter a valid email ID*"
                          value={formValue.email}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Phone***** */}

                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="mobile"
                          type="tel"
                          placeholder="Enter a valid mobile number*"
                          maxLength={10}
                          value={formValue.mobile}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****User Name***** */}

                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="username"
                          type="text"
                          placeholder="Enter a username*"
                          value={formValue.username}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Password***** */}

                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="password"
                          type="password"
                          placeholder="Enter a password*" 
                          value={formValue.password}
                          onChange={handleChange}/>
                      </fieldset>
                    </div>

                    <div className="col-lg-12 d-flex justify-content-center">
                      <fieldset>
                        <button onClick={onButtonClick} className="main-button">Sign Up</button>
                      </fieldset>
                    </div>
                  </div>
                </form>

                {/* ******From End****** */}

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignUp