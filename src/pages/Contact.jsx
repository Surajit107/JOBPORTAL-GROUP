import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Banner from '../components/common/banners/Banner'
import ContactInfo from '../components/core/contact/ContactInfo'
import { fetchContact } from '../redux/slice/ContactSlice'

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: ""
}

const Contact = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [fromValue, setFromValue] = useState(initialState)

  const handleChange = (e) => {
    setFromValue({ ...fromValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventdefault()
  }

  const onButtonClick = () => {
    dispatch(fetchContact(fromValue))
    navigate('/contact')
  }

  return (
    <div>
      <Banner string="Feel free to" page="Contact Us" />
      <ContactInfo />

      {/* <!-- ***** Contact Us Area Starts ***** --> */}
      <section className="section" id="contact-us" style={{ "marginTop": "0" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.103998600563!2d88.42524581460412!3d22.575213338564737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275927b0061ad%3A0x496c2fab98874c86!2sWebskitters%20Technology%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1668614059719!5m2!1sen!2sin" width="680" height="600" style={{ "border": "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="contact-form section-bg" style={{ "backgroundImage": "url(assets/images/contact-1-720x480.jpg)" }}>

                <form onSubmit={handleSubmit}>
                  <div className="row">

                    {/* ****Name**** */}
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          placeholder="Your Name*"
                          value={fromValue.name}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* ****Email**** */}
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="email"
                          placeholder="Your Email*"
                          value={fromValue.email}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* ****Subject**** */}
                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          placeholder="Subject*"
                          value={fromValue.subject}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* ****Message**** */}
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          placeholder="Message*"
                          value={fromValue.message}
                          onChange={handleChange}></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button className="main-button" onClick={onButtonClick}>Send Message</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Contact Us Area Ends ***** --> */}
    </div>
  )
}

export default Contact