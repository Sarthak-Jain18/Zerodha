import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { auth } from "./firebase.js";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {

    const [allOrders, setAllOrders] = useState([]);

    async function fetchOrders() {
        try {
            const user = auth.currentUser;
            if (!user) return; // user not logged in yet

            const token = await user.getIdToken();

            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/allOrders`,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setAllOrders(res.data);
        } catch (err) {
            console.error("Error fetching orders:", err);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <OrdersContext.Provider value={{ allOrders, setAllOrders, fetchOrders }}>
            {children}
        </OrdersContext.Provider>
    );
};


