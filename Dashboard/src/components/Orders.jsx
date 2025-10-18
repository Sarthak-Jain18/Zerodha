import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Tooltip, Grow } from '@mui/material'
import { toast, Bounce } from "react-toastify";
import { OrdersContext } from "../OrdersContext.jsx";
import { auth } from "../firebase.js";
import { CircleCheck, CircleX } from 'lucide-react';

export default function Orders() {

    const { allOrders, setAllOrders } = useContext(OrdersContext);
    const [hoveredRow, setHoveredRow] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedStock, setSelectedStock] = useState(null);
    const [sellQty, setSellQty] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    function handleError(err) {
        toast.error(
            <span className="toast-inline"><CircleX /> {err}</span>,
            {
                icon: false,
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
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
                closeOnClick: false,
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

    // open modal when "Sell" button clicked
    function openSellBox(stock) {
        setSelectedStock(stock);
        setSellQty("");
        setShowModal(true);
    };

    async function handleSellSubmit() {
        if (!sellQty || sellQty <= 0 || sellQty > selectedStock.qty) {
            setErrorMsg("Enter a valid quantity!");
            return;
        }

        try {
            const user = auth.currentUser;
            if (!user) return;

            const token = await user.getIdToken();

            const res = await axios.post(
                `${import.meta.env.VITE_BACKEND_URI}/sellStock`,
                { name: selectedStock.name, qty: sellQty },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setAllOrders(res.data); // update orders context
            setErrorMsg("");
            setShowModal(false);
            handleSuccess("Stock sold successfully!")
        } catch (err) {
            console.error(err);
            setErrorMsg("Error selling stock!");
            handleError("Failed to sell stock!");
        }
    }

    useEffect(() => {
        async function fetchOrders() {
            try {
                const user = auth.currentUser;
                if (!user) return;

                const token = await user.getIdToken();
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/allOrders`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setAllOrders(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchOrders();
    }, []);

    return (
        <div className="orders_container">

            {(!allOrders || allOrders.length === 0) ?
                (
                    <div className="no_orders text-center m-5">
                        <p>You haven't placed any orders.</p>
                        <p>Place orders by selecting from watchlist.</p>
                    </div>
                ) : (
                    <div>
                        <h3 className="title fs-4">Orders ({allOrders.length})</h3>

                        <div className="order-table my-5">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Total Value</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {allOrders.map((stock, index) => {
                                        const total = (stock.qty * stock.price);
                                        const isHovered = hoveredRow === index;

                                        return (
                                            <tr key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                                                <th>{stock.name}</th>
                                                <th>{stock.qty}</th>
                                                <th>{stock.price}</th>
                                                <th>{total.toFixed(2)}</th>
                                                <th className="action-cell">
                                                    {isHovered && <WatchListActions stock={stock} openSellBox={openSellBox} />}
                                                </th>

                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

            {/* SELL MODAL */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-box">

                        <div className="mb-3">
                            <h5 className="text-center fw-semibold mb-3">Sell Stock</h5>
                            <div className="ms-1">
                                <h6 className="mb-1">Stock Name: {selectedStock.name}</h6>
                                <h6 className="mb-1">Available Qty: {selectedStock.qty}</h6>
                                <h6 className="mb-0">Current Price: ₹{selectedStock.price}</h6>
                            </div>
                        </div>

                        <div>
                            <input type="number" className="form-control my-2" placeholder="Enter quantity to sell"
                                value={sellQty} onChange={(e) => { setSellQty(e.target.value); setErrorMsg(""); }} />
                            {errorMsg && (<p className="text-danger small mt-1 mb-0 ps-1">{errorMsg}</p>)}
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn btn-secondary me-2" onClick={() => { setShowModal(false); setErrorMsg(""); }}>
                                Cancel
                            </button>
                            <button className="btn btn-danger" onClick={handleSellSubmit}>
                                Sell
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}

// SELL BUTTON WITH TOOLTIP
function WatchListActions({ stock, openSellBox }) {
    return (
        <Tooltip title="Sell (S)" placement="top" arrow slots={{ transition: Grow }}>
            <button className="sell" onClick={() => openSellBox(stock)}>Sell</button>
        </Tooltip>
    );
}
