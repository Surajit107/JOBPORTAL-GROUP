import React from "react";

const Banner = ({ string, page }) => {
  return (
    <div>
      <section
        className="section"
        id="call-to-action"
        style={{
          backgroundImage:
            "url(assets/images/240_F_268464465_rVl8ZzXB77DqW8OUi3AEO99lTeohk2PS.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="cta-content">
                <br />
                <br />
                <h2>
                  {string} <em>{page}</em>
                </h2>
                <p>
                  <h3>
                    <b>The new world of work is already here.</b>
                  </h3>
                  <br></br>
                  Connecting talented people with companies in need of their
                  skills is what we do. The top talent of today and tomorrow is
                  already open to new ways to work. They embrace it. They thrive
                  in it. Are you? We can help you get there. Celebrating 75
                  years of building better futures together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
