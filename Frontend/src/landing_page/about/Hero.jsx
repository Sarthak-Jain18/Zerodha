export default function About() {
    return (
        <div className="about_hero_container m-2 m-md-5">
            <br /><br />
            <div className="row m-2 m-md-5 text-muted">

                <div className="text-center" style={{ color: "#424242" }}>
                    <h2 className="m-md-5 fs-4">
                        We pioneered the discount broking model in India. <br />
                        Now, we are breaking ground with our technology.
                    </h2>
                </div>

                <hr className="m-3 p-3" />

                <div className="row mx-auto">
                    {/* COLUMN 1 */}
                    <div className="col-12 col-md-5 p-md-5 mx-auto">
                        <p>
                            We kick-started operations on the 15th of August, 2010 with
                            the goal of breaking all barriers that traders and investors
                            face in India in terms of cost, support, and technology. We named
                            the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                            <br /><br />

                            Today, our disruptive pricing models and in-house technology have made
                            us the biggest stock broker in India.
                            <br /><br />

                            Over 1.6+ crore clients place billions of orders every year through our
                            powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                        </p>
                    </div>
                    {/* COLUMN 2 */}
                    <div className="col-12 col-md-5 p-md-5 mx-auto">
                        <p>
                            In addition, we run a number of popular open online educational and community initiatives
                            to empower retail traders and investors.
                            <br /><br />

                            <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">Rainmatter</a>, our fintech fund and incubator, has invested
                            in several fintech startups with the goal of growing the Indian capital markets.
                            <br /><br />

                            And yet, we are always up to something new every day. Catch up on the latest updates
                            on our <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">blog</a> or see what the media
                            is <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">saying about</a> us or learn more about our business
                            and product <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">philosophies</a>.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}



