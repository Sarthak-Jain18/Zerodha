import { useState, useEffect, useContext } from "react";
import axios from "axios";
import TopBar from './TopBar.jsx'
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Tooltip, Grow } from '@mui/material'
import { toast, Bounce } from "react-toastify";
import { OrdersContext } from "../OrdersContext.jsx";
import { auth } from "../firebase.js";
import { CircleCheck, CircleX } from 'lucide-react';

export default function WatchList() {

    const { setAllOrders } = useContext(OrdersContext);
    const [allWatchList, setAllWatchList] = useState([]);
    const [hoveredRow, setHoveredRow] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedStock, setSelectedStock] = useState(null);
    const [buyQty, setBuyQty] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    function handleError(err) {
        toast.error(
            <span className="toast-inline"><CircleX /> {err}</span>,
            {
                icon: false,
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            }
        );
    };

    function handleSuccess(msg) {
        toast.success(
            <span className="toast-inline"><CircleCheck /> {msg}</span>,
            {
                icon: false,
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            }
        );
    };

    function handleMouseEnter(index) {
        setHoveredRow(index);
    };

    function handleMouseLeave() {
        setHoveredRow(null);
    };

    // open modal when "Buy" button clicked
    function openBuyBox(stock) {
        setSelectedStock(stock);
        setBuyQty("");
        setShowModal(true);
    };

    async function handleBuySubmit() {
        if (!buyQty || buyQty <= 0) {
            setErrorMsg("Enter a valid quantity!");
            return;
        }

        try {
            const user = auth.currentUser;
            if (!user) return;

            const token = await user.getIdToken();

            const res = await axios.post(
                `${import.meta.env.VITE_BACKEND_URI}/buyStock`,
                { name: selectedStock.name, qty: buyQty, price: selectedStock.price },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setAllOrders(res.data); // update context, Orders will auto re-render
            setErrorMsg("");
            setShowModal(false);
            handleSuccess("Stock bought successfully!");
        } catch (err) {
            console.error(err);
            setErrorMsg("Error buying stock!");
            handleError("Failed to buy stock!");
        }
    }

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URI}/allWatchlist`)
            .then((res) => { setAllWatchList(res.data); })
    }, []);

    return (
        <div>

            <TopBar />

            <div className="watchlist_container">

                <div className="search_container row">
                    <div className="col-10">
                        <input type="text" name="search" id="search" className="form-control"
                            placeholder="Search : infy, tcs, wipro, .etc" />
                    </div>
                    <div className="col-2 py-1">
                        <span className="counts">{allWatchList.length}/50</span>
                    </div>
                </div>

                <div className="order-table my-5">
                    <table>
                        <tbody>
                            {allWatchList.map((stock, index) => {
                                const profitClass = stock.isDown ? "loss" : "profit";
                                const isHovered = hoveredRow === index;

                                return (
                                    <tr key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                                        <th className={profitClass}>{stock.name}</th>
                                        <th>{stock.percent}</th>
                                        <th className={profitClass}>{stock.isDown ? <ChevronDown /> : <ChevronUp />}</th>
                                        <th className={profitClass}>{stock.price}</th>
                                        <th className="action-cell">
                                            {isHovered && <WatchListActions stock={stock} openBuyBox={openBuyBox} />}
                                        </th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </div>

            {/* SELL MODAL */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-box">

                        <div className="mb-3">
                            <h5 className="text-center fw-semibold mb-3">Buy Stock</h5>
                            <div className="ms-1">
                                <h6 className="mb-1">Stock Name: {selectedStock.name}</h6>
                                <h6 className="mb-0">Current Price: ₹{selectedStock.price}</h6>
                            </div>
                        </div>

                        <div>
                            <input type="number" className="form-control my-2" placeholder="Enter quantity to buy"
                                value={buyQty} onChange={(e) => { setBuyQty(e.target.value); setErrorMsg(""); }} />
                            {errorMsg && (<p className="text-danger small mt-1 mb-0 ps-1">{errorMsg}</p>)}
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn btn-secondary me-2" onClick={() => { setShowModal(false); setErrorMsg(""); }}>
                                Cancel
                            </button>
                            <button className="btn btn-danger" onClick={handleBuySubmit}>
                                Buy
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}

// BUY BUTTON WITH TOOLTIP
function WatchListActions({ stock, openBuyBox }) {
    return (
        <Tooltip title="Buy (B)" placement="top" arrow slots={{ transition: Grow }}>
            <button className="buy" onClick={() => openBuyBox(stock)}>Buy</button>
        </Tooltip>
    );
}



