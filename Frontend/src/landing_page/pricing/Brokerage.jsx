import { useState } from "react";
import TableContent from "./TableContent";

export default function Brokerage() {

    const [activeTable, setActiveTable] = useState(1); // default first table

    // Data for each table
    const tablesData = [
        {
            heading: ["", "Equity delivery", "Equity intraday"],
            rows: [
                ["Brokerage", "Zero Brokerage", "0.03% or Rs. 20/executed order whichever is lower"],
                ["STT/CTT", "0.1% on buy & sell", "0.025% on the sell side"],
                ["Transaction charges", "NSE: 0.00297%, BSE: 0.00375%", "NSE: 0.00297%, BSE: 0.00375%"],
                ["GST", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"],
                ["SEBI charges", "₹10 / crore", "₹10 / crore"],
                ["Stamp charges", "0.015% or ₹1500 / crore on buy side", "0.003% or ₹300 / crore on buy side"],
            ]
        },
        {
            heading: ["", "F&O - Futures", "F&O - Options"],
            rows: [
                ["Brokerage", "0.03% or Rs. 20/executed order whichever is lower", "Flat Rs. 20 per executed order"],
                ["STT/CTT", "0.02% on the sell side", "0.125% of the intrinsic value on options that are bought and exercised"],
                ["Transaction charges", "NSE: 0.00173%, BSE: 0", "NSE: 0.03503% (on premium), BSE: 0.0325% (on premium)"],
                ["GST", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"],
                ["SEBI charges", "₹10 / crore", "₹10 / crore"],
                ["Stamp charges", "0.002% or ₹200 / crore on buy side", "0.003% or ₹300 / crore on buy side"]
            ]
        },
        {
            heading: ["", "Currency futures", "Currency options"],
            rows: [
                ["Brokerage", "0.03% or ₹ 20/executed order whichever is lower", "₹ 20/executed order"],
                ["STT/CTT", "No STT", "No STT"],
                ["Transaction charges", "NSE: 0.00035%, BSE: 0.00045%", "NSE: 0.0311%, BSE: 0.001%"],
                ["GST", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"],
                ["SEBI charges", "₹10 / crore", "₹10 / crore"],
                ["Stamp charges", "0.0001% or ₹10 / crore on buy side", "0.0001% or ₹10 / crore on buy side"]
            ]
        },
        {
            heading: ["", "Commodity futures", "Commodity options"],
            rows: [
                ["Brokerage", "0.03% or Rs. 20/executed order whichever is lower", "₹ 20/executed order"],
                ["STT/CTT", "0.01% on sell side (Non-Agri)", "0.05% on sell side"],
                ["Transaction charges", "MCX: 0.0021%, NSE: 0.0001%", "MCX: 0.0418%, NSE: 0.001%"],
                ["GST", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"],
                ["SEBI charges", "Agri: ₹1 / crore, Non-agri: ₹10 / crore", "₹10 / crore"],
                ["Stamp charges", "0.002% or ₹200 / crore on buy side", "0.003% or ₹300 / crore on buy side"]
            ]
        }
    ];

    return (
        <div className="pricing_brokerage_container p-3 p-md-5 m-md-5">
            <div className="row">

                {/* Buttons */}
                <div className="mb-3">
                    <button className={`btn me-2 table-btn ${activeTable === 1 ? "table-btn-active" : "table-btn-non-active"}`}
                        onClick={() => setActiveTable(1)}>Equity</button>
                    <button className={`btn me-2 table-btn ${activeTable === 2 ? "table-btn-active" : "table-btn-non-active"}`}
                        onClick={() => setActiveTable(2)}>F&O</button>
                    <button className={`btn me-2 table-btn ${activeTable === 3 ? "table-btn-active" : "table-btn-non-active"}`}
                        onClick={() => setActiveTable(3)}>Currency</button>
                    <button className={`btn table-btn ${activeTable === 4 ? "table-btn-active" : "table-btn-non-active"}`}
                        onClick={() => setActiveTable(4)}>Commodity</button>
                </div>

                {/* Tables */}
                <TableContent columns={tablesData[activeTable - 1].heading} rows={tablesData[activeTable - 1].rows} />

                <div className="text-center p-5">
                    <p className="fs-4">
                        <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">Calculate your costs upfront</a> using our brokerage calculator
                    </p>
                </div>

            </div>
        </div>
    )
}
