import { ChevronDown } from 'lucide-react';
import DoubtCard from "./DoubtCard"

export default function Doubts() {
    return (
        <div className="support_doubts_container mt-5">
            <div className="row mx-auto p-2 p-md-0">

                <div className="col-12 col-md-8 ms-md-5">

                    <DoubtCard photo="/support-add.png" alt="Support User Image" name="Account Opening" id="accountOpening"
                        points={["Resident individual", "Minor", "Non Resident Indian (NRI)", "Company, Partnership, HUF and LLP", "Glossary"]} />

                    <DoubtCard photo="/support-user.png" alt="Support Add Image" name="Your Zerodha Account" id="yourZerodhaAccount"
                        points={["Your Profile", "Account modification", "Client Master Report (CMR) and Depository Participant (DP)", "Nomination", "Transfer and conversion of securities"]} />

                    <DoubtCard photo="/support-kite.png" alt="Support Kite Image" name="Kite" id="kite"
                        points={["IPO", "Trading FAQs", "Margin Trading Facility (MTF) and Margins", "Charts and orders", "Alerts and Nudges", "General"]} />

                    <DoubtCard photo="/support-rupee.png" alt="Support Rupee Image" name="Funds" id="funds"
                        points={["Add money", "Withdraw money", "Add bank accounts", "eMandates"]} />

                    <DoubtCard photo="/support-console.png" alt="Support Console Image" name="Console" id="console"
                        points={["Portfolio", "Corporate actions", "Funds statement", "Reports", "Profile", "Segments"]} />

                    <DoubtCard photo="/support-coin.png" alt="Support Coin Image" name="Coin" id="coin"
                        points={["Mutual funds", "National Pension Scheme (NPS)", "Fixed Deposit (FD)", "Features on Coin", "Payments and Orders", "General"]} />

                </div>

                <div className="col-12 col-md-3">

                    <div className="row d-flex mt-3 ps-5 ps-md-3">
                        <div className="col-1 p-0" style={{ backgroundColor: "#ff9100", width: "0.5rem" }}>&nbsp;</div>
                        <div className="col-11" style={{ backgroundColor: "#ff91001a" }}>
                            <ul>
                                <li className="custom-link-hover2 p-2 text-decoration-underline">Exclusion of F&O contracts on 8 securities from August 29, 2025</li>
                                <li className="custom-link-hover2 p-2 text-decoration-underline">Revision in expiry day of Index and Stock derivatives contracts</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row border m-4 m-md-0 mt-md-5">
                        <h6 className='py-3 mb-0 fs-6' style={{ backgroundColor: "#f6f6f6" }}>Quick links</h6>
                        <ol className='ps-4 mb-0'>
                            <li className="custom-link-hover2 p-2 py-3 border-bottom">Track account opening</li>
                            <li className="custom-link-hover2 p-2 py-3 border-bottom">Track segment activation</li>
                            <li className="custom-link-hover2 p-2 py-3 border-bottom">Intraday margins</li>
                            <li className="custom-link-hover2 p-2 py-3">Kite user manual</li>
                        </ol>
                    </div>
                </div>

            </div>
        </div>
    )
}


