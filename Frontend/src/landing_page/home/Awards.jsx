export default function Awards() {
    return (
        <div className="home_awards_container px-2 px-md-5 mx-2 mt-5 m-md-5">
            <div className="row">

                <div className="col-sm-12 col-md-5 mx-auto">
                    <img src="/HomePage_Awards.png" alt="Home Page Award Image" className="img-fluid mb-sm-2 mb-md-4 p-sm-2 p-md-5" />
                </div>

                <div className="col-sm-12 col-md-5 mx-auto mt-5">

                    <h3>Largest stock broker in India</h3>

                    <h5 className="p-2 text-muted">
                        2+ million Zerodha clients contribute to over 15% of all retail
                        order volumes in India daily by trading and investing in:
                    </h5>

                    <div className="row p-2 text-muted">
                        <div className="col-6">
                            <ul>
                                <li>Future and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
            <br />
            <br />
        </div>
    )
}

