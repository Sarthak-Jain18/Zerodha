export default function Footer() {
    return (
        <div className="footer_container border-top p-5 mt-5">
            <div className="row">

                <div className="col-12 col-md-3">
                    <img src="/Zerodha_icon.png" alt="Zerodha Icon" className="img-fluid mb-3 mt-2" style={{ maxHeight: "20px" }} />
                    <p>&copy; 2010 - 2025, Zerodha Broking Ltd.<br />All rights reserved.</p>
                    <div className="social1 d-flex gap-3 m-2 text-muted fs-5">
                        <div className="twitter"><i className="fa-brands fa-x-twitter"></i></div>
                        <div className="facebook"><i className="fa-brands fa-square-facebook"></i></div>
                        <div className="instagram"><i className="fa-brands fa-instagram"></i></div>
                        <div className="linkedin"><i className="fa-brands fa-linkedin-in"></i></div>
                    </div>
                    <div className="social2 d-flex gap-3 m-2 text-muted fs-5">
                        <div className="youtube"><i className="fa-brands fa-youtube"></i></div>
                        <div className="whatsapp"><i className="fa-brands fa-whatsapp"></i></div>
                        <div className="telegram"><i className="fa-brands fa-telegram"></i></div>
                    </div>
                </div>

                <div className="col-12 col-md-2 p-2">
                    <h4 className="fs-5">Account</h4>
                    <p className="custom-link-hover fs-6">Open demat account</p>
                    <p className="custom-link-hover fs-6">Minor demat account</p>
                    <p className="custom-link-hover fs-6">NRI demat account</p>
                    <p className="custom-link-hover fs-6">Commodity</p>
                    <p className="custom-link-hover fs-6">Dematerialisation</p>
                    <p className="custom-link-hover fs-6">Fund tranfer</p>
                    <p className="custom-link-hover fs-6">MTF</p>
                    <p className="custom-link-hover fs-6">Referral program</p>
                </div>

                <div className="col-12 col-md-2 p-2">
                    <h4 className="fs-5">Support</h4>
                    <p className="custom-link-hover fs-6">Contact us</p>
                    <p className="custom-link-hover fs-6">Support portal</p>
                    <p className="custom-link-hover fs-6">How to file a complaint?</p>
                    <p className="custom-link-hover fs-6">Status of your complaints</p>
                    <p className="custom-link-hover fs-6">Bulletin</p>
                    <p className="custom-link-hover fs-6">Circular</p>
                    <p className="custom-link-hover fs-6">Z-Connect blog</p>
                    <p className="custom-link-hover fs-6">Downloads</p>
                </div>

                <div className="col-12 col-md-2 p-2">
                    <h4 className="fs-5">Company</h4>
                    <p className="custom-link-hover fs-6">About</p>
                    <p className="custom-link-hover fs-6">Philosophy</p>
                    <p className="custom-link-hover fs-6">Press & media</p>
                    <p className="custom-link-hover fs-6">Careers</p>
                    <p className="custom-link-hover fs-6">Zerodha Cares (CSR)</p>
                    <p className="custom-link-hover fs-6">Zerodha.tech</p>
                    <p className="custom-link-hover fs-6">Open source</p>
                </div>

                <div className="col-12 col-md-2 p-2">
                    <h4 className="fs-5">Quick links</h4>
                    <p className="custom-link-hover fs-6">Upcoming IPOs</p>
                    <p className="custom-link-hover fs-6">Brokerage charges</p>
                    <p className="custom-link-hover fs-6">Market holidays</p>
                    <p className="custom-link-hover fs-6">Economic calender</p>
                    <p className="custom-link-hover fs-6">Calculators</p>
                    <p className="custom-link-hover fs-6">Markets</p>
                    <p className="custom-link-hover fs-6">Sectors</p>
                </div>

            </div>

            <div className="row mt-5 p-sm-2 text-muted" style={{ fontSize: "12px" }}>
                <p>
                    Zerodha Broking Ltd.: Member of NSE, BSE & MCX - SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository
                    services through Zerodha Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
                    Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha
                    Broking Ltd., 153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
                    Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write
                    to <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">complaints@zerodha.com</a>,
                    for DP related to <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">dp@zerodha.com</a>.
                    Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    <br /><br />

                    Procedure to file a complaint on <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">SEBI SCORES</a>: Register on SCORES portal.
                    Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
                    Effective Communication, Speedy redressal of the grievances
                    <br /><br />

                    <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">Smart Online Dispute Resolution</a>&nbsp;
                    | <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">Grievances Redressal Mechanism</a>
                    <br /><br />

                    Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    <br /><br />

                    Attention investors: 1. Stock brokers can accept securities as margins from clients only by way of pledge
                    in the depository system w.e.f September 01, 2020. 2. Update your e-mail and phone number with your stock broker /
                    depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge.
                    3. Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    <br /><br />

                    India's largest broker based on networth as per NSE. <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">NSE broker factsheet</a>
                    <br /><br />

                    "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers.
                    Receive information of your transactions directly from Exchange on your mobile/email at the end of the day.
                    Issued in the interest of investors. KYC is one time exercise while dealing in securities markets -
                    once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the
                    same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO,
                    there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form
                    to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain
                    in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others.
                    If you find anyone claiming to be part of Zerodha and offering such services, please &nbsp;
                    <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">create a ticket here</a>.
                </p>
            </div>

            <div className="row mx-auto">
                <ul className="list-unstyled d-flex flex-wrap m-0 fw-medium text-center">
                    <li className="mx-4 custom-link-hover">NSE</li>
                    <li className="mx-4 custom-link-hover">BSE</li>
                    <li className="mx-4 custom-link-hover">MCX</li>
                    <li className="mx-4 custom-link-hover">Terms & conditions</li>
                    <li className="mx-4 custom-link-hover">Policies & procedures</li>
                    <li className="mx-4 custom-link-hover">Privacy policy</li>
                    <li className="mx-4 custom-link-hover">Disclosure</li>
                    <li className="mx-4 custom-link-hover">For investor's attention</li>
                    <li className="mx-4 custom-link-hover">Investor charter</li>
                </ul>
            </div>
        </div>
    )
}



