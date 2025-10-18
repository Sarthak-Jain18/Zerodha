import { useState, useEffect } from "react";
import axios from "axios";

export default function Holdings() {

    const [allHoldings, setAllHoldings] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URI}/allHoldings`)
            .then((res) => { setAllHoldings(res.data); })
    }, []);

    return (
        <div className="holdings_container">

            <h3 className="title fs-4">Holdings ({allHoldings.length})</h3>

            <div className="row kite-card">
                <div className="col">
                    <h5>29,875.<span>55</span></h5>
                    <small className="txt-muted">Total investment</small>
                </div>
                <div className="col">
                    <h5>31,428.<span>95</span></h5>
                    <small className="txt-muted">Current value</small>
                </div>
                <div className="col">
                    <h5 className="profit">1,553.40 <small>(+5.20%)</small></h5>
                    <small className="txt-muted">P&L</small>
                </div>
            </div>

            <div className="order-table my-5">
                <table>

                    <thead>
                        <tr>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg. cost</th>
                            <th>LTP</th>
                            <th>Curr. val</th>
                            <th>P&L</th>
                            <th>Net chg.</th>
                            <th>Day chg.</th>
                        </tr>
                    </thead>

                    <tbody>
                        {allHoldings.map((stock, index) => {
                            const costPrice = (stock.avg * stock.qty);
                            const sellPrice = (stock.price * stock.qty);
                            const profit = (sellPrice - costPrice);
                            const profitClass = profit >= 0 ? "profit" : "loss";
                            const dayClass = stock.isLoss ? "loss" : "profit";

                            return (
                                <tr key={index}>
                                    <th>{stock.name}</th>
                                    <th>{stock.qty}</th>
                                    <th>{stock.avg.toFixed(2)}</th>
                                    <th>{stock.price.toFixed(2)}</th>
                                    <th>{costPrice.toFixed(2)}</th>
                                    <th className={profitClass}>{profit.toFixed(2)}</th>
                                    <th className={profitClass}>{stock.net}</th>
                                    <th className={dayClass}>{stock.day}</th>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>

        </div>
    )
}


