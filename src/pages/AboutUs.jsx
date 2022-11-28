import React from "react";
import Banner from "../components/common/banners/Banner";
import SendUsMsg from "../components/core/home/SendUsMsg";

const AboutUs = () => {
  return (
    <div>
      <Banner string="Learn more" page="About Us" />

      <section className="section" id="our-classes">
        <div className="container">
          <br />
          <br />
          <br />
          <div className="row" id="tabs">
            <div className="col-lg-4">
              <ul>
                <li>
                  <a href="#tabs-1">
                    <i className="fa fa-soccer-ball-o"></i> Our Goals
                  </a>
                </li>
                <li>
                  <a href="#tabs-2">
                    <i className="fa fa-briefcase"></i> Our Work
                  </a>
                </li>
                <li>
                  <a href="#tabs-3">
                    <i className="fa fa-heart"></i> Our Passion
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-8">
              <section className="tabs-content">
                <article id="tabs-1">
                  <img src="assets/images/about-image-1-940x460.jpg" alt="" />
                  <h4>Our Goals</h4>

                  <p>
                    Since our start as a two-man operation in London in 1976,
                    Michael Page has grown and expanded globally. Now, after
                    more than 40 years in the recruitment market, we have
                    secured our position as leaders in international recruitment
                    and hiring. We currently have 139 offices that create a
                    network that spans 37 countries around the world, with
                    strong opportunities for more growth within Asia Pacific. We
                    opened our first office in Asia in 1994, and have developed
                    our presence into many of the main business hubs in the
                    region since then. Our team in Asia has global connections,
                    regional knowledge and local market experience; ideally
                    positioning us to partner with multinational blue-chip
                    companies and local firms alike, and with todays global
                    professionals. Over time, our founding mission has remained
                    unchanged: to bring the worlds best companies and brightest
                    professionals together, helping each side reach their
                    maximum potential and capabilities. We offer a unique,
                    consultative approach to recruitment, tailoring every
                    solution to specific requirements and offering long-term
                    support. Through experience, growth and consistently high
                    standards, we have become one of the most recognised and
                    respected recruitment brands in the world.
                  </p>
                </article>
                <article id="tabs-2">
                  <img src="assets/images/about-image-2-940x460.jpg" alt="" />
                  <h4>Our Work</h4>
                  <p>
                    Whether you are currently recruiting, looking for advice on
                    industry recruitment trends or simply want to source
                    information on expected salary rates, we can help. Michael
                    Page International is a leading professional recruitment
                    agency specialising in the recruitment of permanent,
                    contract and temporary positions on behalf of the world's
                    top companies. The quality of our service is demonstrated by
                    the fact that over 90% of our current business comes from
                    referrals and repeat clients.
                  </p>
                </article>
                <article id="tabs-3">
                  <img src="assets/images/about-image-3-940x460.jpg" alt="" />
                  <h4>Our Passion</h4>
                  <p>
                    As a recruitment consultant you can choose the path your
                    career takes. Want to lead a team of consultants and see
                    them beat targets every quarter? Want to develop your career
                    internationally? Want to be the highest biller? Choose a
                    career with PageGroup and you can. Youll receive the best
                    rewards and training & development opportunities in the
                    industry, all supported by innovative, world leading
                    technology.
                  </p>
                </article>
              </section>
            </div>
          </div>
        </div>
      </section>

      <SendUsMsg />
    </div>
  );
};

export default AboutUs;
