import React from "react";

const ReadAboutUs = () => {
  return (
    <div>
      {/* <!-- ***** Start Read About Us ***** --> */}

      <section
        className="section section-bg"
        id="schedule"
        style={{
          backgroundImage: "url(assets/images/about-fullscreen-1-1920x700.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading dark-bg">
                <h2>
                  Read <em>About Us</em>
                </h2>
                <img src="assets/images/line-dec.png" alt="" />
                <p>
                  we have secured our position as leaders in international
                  recruitment and hiring. We currently have 139 offices that
                  create a network that spans 37 countries around the world,
                  with strong opportunities for more growth within Asia Pacific.
                  We opened our first office in Asia in 1994, and have developed
                  our presence into many of the main business hubs in the region
                  since then. Our team in Asia has global connections, regional
                  knowledge and local market experience; ideally positioning us
                  to partner with multinational blue-chip companies and local
                  firms alike, and with todays global professionals. Over time,
                  our founding mission has remained unchanged: to bring the
                  worlds best companies and brightest professionals together,
                  helping each side reach their maximum potential and
                  capabilities.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-content text-center">
                <p>
                  The quality of our service is demonstrated by the fact that
                  over 90% of our current business comes from referrals and
                  repeat clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ***** End Read About Us ***** --> */}
    </div>
  );
};

export default ReadAboutUs;
