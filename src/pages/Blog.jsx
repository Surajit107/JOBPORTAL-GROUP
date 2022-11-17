import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/common/banners/Banner'

const Blog = () => {
  return (
    <div>
      <Banner string="Read our" page="Blog" />

      {/* <!-- ***** Blog Start ***** --> */}
      <section className="section" id="our-classes">
        <div className="container">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-10">
              <section className='tabs-content'>
                <article>
                  <img src="assets/images/blog-image-1-940x460.jpg" alt="" />
                  <h4>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>

                  <p><i className="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 27.07.2020 10:10 &nbsp;|&nbsp; <i className="fa fa-comments"></i>  15 comments</p>

                  <p>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.</p>
                  <div className="main-button">
                    <Link to="/blogdetails">Continue Reading</Link>
                  </div>
                </article>

                <br />
                <br />

                <article>
                  <img src="assets/images/blog-image-2-940x460.jpg" alt="" />
                  <h4>Aspernatur excepturi magni, placeat rerum nobis magnam libero! Soluta.</h4>
                  <p><i className="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 27.07.2020 10:10 &nbsp;|&nbsp; <i className="fa fa-comments"></i>  15 comments</p>
                  <p>Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  <div className="main-button">
                    <Link to="/blogdetails">Continue Reading</Link>
                  </div>
                </article>

                <br />
                <br />

                <article>
                  <img src="assets/images/blog-image-3-940x460.jpg" alt="" />
                  <h4>Sunt hic recusandae vitae explicabo quidem laudantium corrupti non adipisci nihil.</h4>
                  <p><i className="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 27.07.2020 10:10 &nbsp;|&nbsp; <i className="fa fa-comments"></i>  15 comments</p>
                  <p>Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque.</p>
                  <div className="main-button">
                    <Link to="/blogdetails">Continue Reading</Link>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Blog End ***** --> */}
    </div>
  )
}

export default Blog