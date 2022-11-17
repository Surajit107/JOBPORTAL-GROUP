import React from 'react'
import Banner from '../components/common/banners/Banner'

const JobDetails = () => {
    return (
        <div>
            <Banner string="$70 000" />

            <section className="section" id="trainers">
                <div className="container">
                    <br />
                    <br />

                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="assets/images/job-image-1-1200x600.jpg" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="assets/images/job-image-1-1200x600.jpg" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="assets/images/job-image-1-1200x600.jpg" alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                    <br />
                    <br />

                    <div className="row" id="tabs">
                        <div className="col-lg-4">
                            <ul>
                                <li><a href='#tabs-1'><i className="fa fa-cog"></i> Job Description</a></li>
                                <li><a href='#tabs-2'><i className="fa fa-info-circle"></i> About Employer</a></li>
                                <li><a href='#tabs-3'><i className="fa fa-phone"></i> Contact Details</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <section className='tabs-content' style={{ "width": "100%" }}>
                                <article id='tabs-1'>
                                    <h4>Job Description</h4>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio eum expedita nobis cum vitae totam voluptate temporibus nostrum, repellendus accusantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo hic quis quo tempora, totam non vero velit. Inventore, obcaecati placeat perspiciatis neque enim laudantium. Sit eaque, aliquid et nisi illo.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nam placeat ut cumque ipsa iste, commodi omnis aperiam perferendis incidunt. Provident doloremque, quia labore eius adipisci asperiores voluptatum nisi porro corporis ex explicabo magnam eligendi, autem quae, voluptate et molestiae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae soluta architecto modi. Et ullam ipsam, tempore sequi nesciunt dignissimos animi odio eaque illum eligendi pariatur. Porro delectus a rem rerum ex similique fugit dolorem fugiat libero sint aliquam velit, eligendi adipisci fuga assumenda, dolorum, deserunt ea inventore quis voluptas accusantium omnis iure quia temporibus. Accusamus, adipisci facere ullam ea amet.</p>
                                </article>

                                <article id='tabs-2'>
                                    <h4>About Employer</h4>

                                    <p className="lead"> <i className="fa fa-map-marker"></i> London </p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia doloremque sit, enim sint odio corporis illum perferendis, unde repellendus aut dolore doloribus minima qui ullam vel possimus magnam ipsa deleniti.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ducimus ab numquam magnam aliquid, odit provident consectetur corporis eius blanditiis alias nulla commodi qui voluptatibus laudantium quaerat tempore possimus esse nam sed accusantium inventore? Sapiente minima dicta sed quia sunt?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum qui, corrupti consequuntur. Officia consectetur error amet debitis esse minus quasi, dicta suscipit tempora, natus, vitae voluptatem quae libero. Sunt nulla culpa impedit! Aliquid cupiditate, impedit reiciendis dolores, illo adipisci, omnis dolor distinctio voluptas expedita maxime officiis maiores cumque sequi quaerat culpa blanditiis. Quia tenetur distinctio rem, quibusdam officiis voluptatum neque!</p>
                                </article>

                                <article id='tabs-3'>
                                    <h4>Contact Details</h4>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>Name</label>

                                            <p>John Smith</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <label>Mobile phone</label>
                                            <p>9876543210</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <label>Email</label>
                                            <p><a href="!#">john@carsales.com</a></p>
                                        </div>
                                        <div className="col-sm-6">
                                            <label>Website</label>
                                            <p><a href="#!">http://www.surajit.com/</a></p>
                                        </div>
                                    </div>
                                </article>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default JobDetails