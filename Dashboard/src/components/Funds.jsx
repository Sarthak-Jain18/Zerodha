import { Link } from "react-router-dom"

export default function Funds() {
    return (
        <div className="funds_container">
            <div className="row">

                <div className="funds kite-card d-flex flex-column justify-content-center align-items-center text-center" style={{ height: "8rem" }}>
                    <div>
                        <p className="text-muted m-2 py-1">Instant, zero-cost fund transfers with UPI</p>
                    </div>
                    <div>
                        <Link to="#" className="btn custom-btn-blue m-2">Add Funds</Link>
                        <Link to="#" className="btn custom-btn-orange m-2">Withdraw</Link>
                    </div>
                </div>

                <div className="kite-card">
                    <h3 className="title fs-4 ms-3">Equity</h3>
                    <div className="funds-table p-3">
                        <div className="data funds-table-data">
                            <p>Available margin</p>
                            <p className="text-muted">4,043.10</p>
                        </div>
                        <div className="data funds-table-data">
                            <p>Used margin</p>
                            <p className="text-muted">3,757.30</p>
                        </div>
                        <div className="data funds-table-data">
                            <p>Available cash</p>
                            <p className="text-muted">4,043.10</p>
                        </div>

                        <hr />

                        <div className="data funds-table-data">
                            <p>Opening Balance</p>
                            <p className="text-muted">4,043.10</p>
                        </div>
                        <div className="data funds-table-data">
                            <p>Opening Balance</p>
                            <p className="text-muted">3736.40</p>
                        </div>
                        <div className="data funds-table-data">
                            <p>Payin</p>
                            <p className="text-muted">4064.00</p>
                        </div>
                        <div className="data funds-table-data">
                            <p>SPAN</p>
                            <p className="text-muted">0.00</p>
                        </div>
                        <div className="data funds-table-data">
                            <p>Delivery margin</p>
                            <p className="text-muted">0.00</p>
                        </div>
                        <div className="data">
                            <p>Exposure</p>
                            <p className="text-muted">0.00</p>
                        </div>
                        <div className="data funds-table-data">
                            <p>Options premium</p>
                            <p className="text-muted">0.00</p>
                        </div>

                        <hr />

                        <div className="data funds-table-data">
                            <p>Collateral (Liquid funds)</p>
                            <p className="text-muted">0.00</p>
                        </div>
                        <div className="data funds-table-data">
                            <p>Collateral (Equity)</p>
                            <p className="text-muted">0.00</p>
                        </div>
                        <div className="data funds-table-data">
                            <p>Total Collateral</p>
                            <p className="text-muted">0.00</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}