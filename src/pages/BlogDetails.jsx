import React from 'react'
import Banner from '../components/common/banners/Banner'

const BlogDetails = () => {
    return (
        <div>
            <Banner string="Single" page="blog post"/>

            {/* <!-- ***** Blog Start ***** --> */}
            <section className="section" id="our-classes">
                <div className="container">
                    <br />
                    <br />
                    <section className='tabs-content'>
                        <article>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>

                            <p><i className="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 27.07.2020 10:10 &nbsp;|&nbsp; <i className="fa fa-comments"></i>  15 comments</p>

                            <div><img src="assets/images/blog-image-fullscren-1-1920x700.jpg" alt="" /></div>

                            <br />

                            <p>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nihil magnam magni perferendis sit, inventore maxime architecto ab officia illum vitae veritatis asperiores laborum quaerat ratione omnis, possimus, sunt quae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus amet, corporis corrupti quod illum id autem assumenda nostrum quo, odio libero dolorum. Expedita, enim non voluptatibus qui veritatis iste ad? Voluptates natus dolor, minus culpa magnam! Iusto blanditiis beatae laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolor nemo optio facere impedit fugiat obcaecati blanditiis tempora inventore sapiente beatae aspernatur vitae fuga totam possimus eveniet, praesentium maiores! Dolorum illum voluptates ipsum aspernatur explicabo numquam, aliquid a amet, deleniti eos suscipit totam laudantium excepturi voluptatum fugiat eum nesciunt minus iste, expedita provident temporibus, alias possimus veritatis aut fugit? Eaque.expedita provident temporibus, alias possimus veritatis aut fugit? Eaque.</p>

                            <ul className="social-icons">
                                <li>Share this:</li>
                                <li><a href="#!"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#!"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#!"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#!"><i className="fa fa-behance"></i></a></li>
                            </ul>
                        </article>
                    </section>

                    <br />
                    <br />
                    <br />

                    <section className='tabs-content'>
                        <div className="row">
                            <div className="col-md-8">
                                <h4>Comments</h4>
                                <ul className="features-items">
                                    <li>
                                        <div className="feature-item" style={{"marginBottom":"15px"}}>
                                            <div className="left-icon">
                                                <img src="assets/images/features-first-icon.png" alt="First One" />
                                            </div>
                                            <div className="right-content">
                                                <h4>John Doe <small>27.07.2020 10:10</small></h4>
                                                <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em></p>
                                            </div>
                                        </div>

                                        <div className="tabs-content">
                                            <div className="feature-item" style={{"marginBottom":"15px"}}>
                                                <div className="left-icon">
                                                    <img src="assets/images/features-first-icon.png" alt="First One" />
                                                </div>
                                                <div className="right-content">
                                                    <h4>John Doe <small>27.07.2020 11:10</small></h4>
                                                    <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="feature-item" style={{"marginBottom":"15px"}}>
                                        <div className="left-icon">
                                            <img src="assets/images/features-first-icon.png" alt="second one" />
                                        </div>
                                        <div className="right-content">
                                            <h4>John Doe <small>27.07.2020 12:10</small></h4>
                                            <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            {/* <!-- ***** Blog End ***** --> */}
            <br />
        </div>
    )
}

export default BlogDetails
