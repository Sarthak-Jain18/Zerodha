export default function Charges() {
    return (
        <div className="pricing_charges_container mx-md-5">
            <div className="row p-3 p-md-5">

                <div className="table1 py-4">
                    <h4 className="py-2 mute2">Charges for account opening</h4>
                    <div className="border">
                        <table className="table custom-table">
                            <thead>
                                <tr>
                                    <th style={{ color: "#424242", fontWeight: "normal" }}>Type of account</th>
                                    <th style={{ color: "#424242", fontWeight: "normal" }}>Charges</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <td style={{ color: "#666" }}>Online account</td>
                                    <td style={{ color: "#666" }}>FREE</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#666" }}>Offline account</td>
                                    <td style={{ color: "#666" }}>FREE</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#666" }}>NRI account (offline only)</td>
                                    <td style={{ color: "#666" }}>₹ 500</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#666" }}>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                                    <td style={{ color: "#666" }}>₹ 500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="table2 py-4">
                    <h4 className="py-2 mute2">Demat AMC (Annual Maintenance Charge)</h4>
                    <div className="border">
                        <table className="table custom-table">
                            <thead>
                                <tr>
                                    <th style={{ color: "#424242", fontWeight: "normal" }}>Value of holdings</th>
                                    <th style={{ color: "#424242", fontWeight: "normal" }}>AMC</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <td style={{ color: "#666" }}>Up to ₹4 lakh</td>
                                    <td style={{ color: "#666" }}>FREE*</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#666" }}>₹4 lakh - ₹10 lakh</td>
                                    <td style={{ color: "#666" }}>₹ 100 per year, charged quarterly*</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#666" }}>Above ₹10 lakh</td>
                                    <td style={{ color: "#666" }}>₹ 300 per year, charged quartlerly</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="fs-6 mute3">
                        * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA).
                        BSDA account holders cannot hold more than one demat account. To learn more about BSDA, &nbsp;
                        <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">click here</a>.
                    </p>
                </div>

                <div className="table3 py-4">
                    <h4 className="py-2 mute2">Charges for optional value added services</h4>
                    <div className="border">
                        <table className="table custom-table">
                            <thead>
                                <tr>
                                    <th style={{ color: "#424242", fontWeight: "normal" }}>Service</th>
                                    <th style={{ color: "#424242", fontWeight: "normal" }}>Billing Frquency</th>
                                    <th style={{ color: "#424242", fontWeight: "normal" }}>Charges</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <td style={{ color: "#666" }}>Tickertape</td>
                                    <td style={{ color: "#666" }}>Monthly / Annual</td>
                                    <td style={{ color: "#666" }}>Free: 0 | Pro: 249/2399</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#666" }}>Smallcase</td>
                                    <td style={{ color: "#666" }}>Per transaction</td>
                                    <td style={{ color: "#666" }}>Buy & Invest More: 100 | SIP: 10</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#666" }}>Kite Connect</td>
                                    <td style={{ color: "#666" }}>Monthly	Connect:</td>
                                    <td style={{ color: "#666" }}>500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="explained">
                    <h4 className="py-2 mute2">Charges explained</h4>
                    <div className="row mute3">

                        <div className="col-12 col-md-6">

                            <div>
                                <p style={{ fontSize: "16px" }}>Securities/Commodities transaction tax</p>
                                <p style={{ fontSize: "12px" }}>
                                    Tax by the government when transacting on the exchanges.
                                    Charged as above on both buy and sell sides when trading equity delivery.
                                    Charged only on selling side when trading intraday or on F&O. <br /><br />
                                    When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
                                </p>
                            </div>

                            <div>
                                <p style={{ fontSize: "16px" }}>Transaction/Turnover Charges</p>
                                <p style={{ fontSize: "12px" }}>
                                    Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.<br /><br />
                                    BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016.
                                    (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)<br /><br />
                                    BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.<br /><br />
                                    BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group
                                    E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.<br /><br />
                                    BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.
                                </p>
                            </div>

                            <div>
                                <p style={{ fontSize: "16px" }}>Call & trade</p>
                                <p style={{ fontSize: "12px" }}>
                                    Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
                                </p>
                            </div>

                            <div>
                                <p style={{ fontSize: "16px" }}>Stamp charges</p>
                                <p style={{ fontSize: "12px" }}>
                                    Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments
                                    on the stock exchanges and depositories.
                                </p>
                            </div>

                            <div>
                                <p style={{ fontSize: "16px" }}>NRI brokerage charges</p>
                                <ul>
                                    <li style={{ fontSize: "12px" }}>₹100 per order for futures and options.</li>
                                    <li style={{ fontSize: "12px" }}>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                                    <li style={{ fontSize: "12px" }}>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                                    <li style={{ fontSize: "12px" }}>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                                </ul>
                            </div>

                            <div>
                                <p style={{ fontSize: "16px" }}>Account with debit balance</p>
                                <p style={{ fontSize: "12px" }}>
                                    If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
                                </p>
                            </div>

                            <div>
                                <p style={{ fontSize: "16px" }}>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
                                <ul>
                                    <li style={{ fontSize: "12px" }}>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                                    <li style={{ fontSize: "12px" }}>Options - ₹50 per crore + GST traded value (premium value).</li>
                                    <li style={{ fontSize: "12px" }}>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                                </ul>
                            </div>

                            <div>
                                <p style={{ fontSize: "16px" }}>Margin Trading Facility (MTF)</p>
                                <ul>
                                    <li style={{ fontSize: "12px" }}>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                                    <li style={{ fontSize: "12px" }}>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                                    <li style={{ fontSize: "12px" }}>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                                </ul>
                            </div>

                        </div>

                        <div className="col-12 col-md-6">

                            <div>
                                <p style={{ fontSize: "16px" }}>GST</p>
                                <p style={{ fontSize: "12px" }}>
                                    Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)
                                </p>
                            </div>

                            <div>
                                <p style={{ fontSize: "16px" }}>SEBI Charges</p>
                                <p style={{ fontSize: "12px" }}>
                                    Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
                                </p>
                            </div>

                            <div>
                                <p style={{ fontSize: "16px" }}>DP (Depository participant) charges</p>
                                <p style={{ fontSize: "12px" }}>
                                    ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold,
                                    irrespective of quantity.<br /><br />
                                    Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.<br /><br />
                                    Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
                                </p>
                            </div>

                            <div>
                                <p style={{ fontSize: "16px" }}>Pledging charges</p>
                                <p style={{ fontSize: "12px" }}>₹30 + GST per pledge request per ISIN.</p>
                            </div>

                            <div>
                                <p style={{ fontSize: "16px" }}>AMC (Account maintenance charges)</p>
                                <p style={{ fontSize: "12px" }}>
                                    For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA,&nbsp;
                                    <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">Click here</a><br /><br />
                                    For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC,&nbsp;
                                    <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">Click here</a>
                                </p>
                            </div>

                            <div>
                                <p style={{ fontSize: "16px" }}>Corporate action order charges</p>
                                <p style={{ fontSize: "12px" }}>
                                    ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.
                                </p>
                            </div>

                            <div>
                                <p style={{ fontSize: "16px" }}>Off-market transfer charges</p>
                                <p style={{ fontSize: "12px" }}>₹25 per transaction.</p>
                            </div>

                            <div>
                                <p style={{ fontSize: "16px" }}>Physical CMR request</p>
                                <p style={{ fontSize: "12px" }}>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
                            </div>

                            <div>
                                <p style={{ fontSize: "16px" }}>Payment gateway charges</p>
                                <p style={{ fontSize: "12px" }}>₹9 + GST (Not levied on transfers done via UPI)</p>
                            </div>

                            <div>
                                <p style={{ fontSize: "16px" }}>Delayed Payment Charges</p>
                                <p style={{ fontSize: "12px" }}>
                                    Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account.&nbsp;
                                    <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">Learn more.</a>
                                </p>
                            </div>

                            <div>
                                <p style={{ fontSize: "16px" }}>Trading using 3-in-1 account with block functionality</p>
                                <ul>
                                    <li style={{ fontSize: "12px" }}>Delivery & MTF Brokerage: 0.5% per executed order.</li>
                                    <li style={{ fontSize: "12px" }}>Intraday Brokerage: 0.05% per executed order.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="disclaimer mute3">
                    <div>
                        <p style={{ fontSize: "16px" }}>Disclaimer</p>
                        <p style={{ fontSize: "12px" }}>
                            For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt
                            to receive physical contract notes will be charged ₹20 per contract note plus courier charges.
                            Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory
                            charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options
                            contracts. Free investments are available only for our retail individual clients. Companies, Partnerships,
                            Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of
                            0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off
                            positions in physically settled contracts, a brokerage of 0.1% will be charged.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}



