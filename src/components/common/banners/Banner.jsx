import React from 'react'

const Banner = ({ string, page }) => {
    return (
        <div>
            <section className="section" id="call-to-action" style={{ "backgroundImage": "url(assets/images/240_F_268464465_rVl8ZzXB77DqW8OUi3AEO99lTeohk2PS.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="cta-content">
                                <br />
                                <br />
                                <h2>{string} <em>{page}</em></h2>
                                <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner