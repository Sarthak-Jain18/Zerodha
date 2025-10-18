export default function Hero() {
    return (
        <div className="pricing_hero_container m-5 p-2 p-md-5">
            <div className="row mt-5">

                <div className="text-center">
                    <h3 style={{ color: "#424242" }}>Charges</h3>
                    <h5 className="text-muted mt-3">List of all charges and taxes</h5>
                </div>

                <div className="row text-center p-2 p-md-5 mx-auto my-5">

                    <div className="col-12 col-md-4 mt-2">
                        <img src="/Zero-photo.png" alt="Zero Image" className="img-fluid" />
                        <h3 style={{ color: "#424242" }}>Free equity delivery</h3>
                        <p className="text-muted">
                            All equity delivery investments (NSE, BSE), are absolutely free - &#8377; 0 brokerage.
                        </p>
                    </div>

                    <div className="col-12 col-md-4">
                        <img src="/Twenty-photo.png" alt="Twenty Image" className="img-fluid" />
                        <h3 style={{ color: "#424242" }}>Intraday and F&O trades</h3>
                        <p className="text-muted">
                            Flat ₹ 20 or 0.03% (whichever is lower) per executed order
                            on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                        </p>
                    </div>

                    <div className="col-12 col-md-4 mt-2">
                        <img src="/Zero-photo.png" alt="Zero Image" className="img-fluid" />
                        <h3 style={{ color: "#424242" }}>Free direct MF</h3>
                        <p className="text-muted">
                            All direct mutual fund investments are absolutely free - ₹ 0 commissions & DP charges.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

