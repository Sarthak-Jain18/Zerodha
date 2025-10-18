import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import { CircleUserRound, LogOut } from 'lucide-react';
import { signOut } from "firebase/auth";
import { auth } from "./firebase.js";

export default function Navbar() {

    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);
    const dropdownRef = useRef(null);

    function handleMenuClick(index) {
        setSelectedMenu(index);
        setIsProfileDropDownOpen(false); // closes dropdown when another menu clicked
    }

    function handleProfileClick(e) {
        e.stopPropagation(); // prevents closing instantly
        setSelectedMenu(5);
        setIsProfileDropDownOpen(!isProfileDropDownOpen);
    }

    async function handleLogout() {
        try {
            await signOut(auth);  // Firebase logout
            localStorage.clear();
            window.location.href = import.meta.env.VITE_FRONTEND_URL;
        } catch (error) {
            console.error("Logout error:", error);
        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsProfileDropDownOpen(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div className="navbar_container">
            <nav className="navbar navbar-expand-lg border-bottom fixed-top bg-white shadow-sm" style={{ minHeight: "60px" }}>
                <div className="container-fluid py-1">

                    <Link className="navbar-brand ms-3 d-flex align-items-center" to="/" onClick={() => handleMenuClick(0)}>
                        <img src="/kite-logo.png" alt="Kite Logo" className="img-fluid" style={{ maxHeight: "2rem" }} />
                    </Link>

                    <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse text-center bg-white" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto align-items-center gap-lg-5 gap-2">

                            {[{ name: "Dashboard", path: "/", id: 0 },
                            { name: "Orders", path: "/orders", id: 1 },
                            { name: "Holdings", path: "/holdings", id: 2 },
                            { name: "Positions", path: "/positions", id: 3 },
                            { name: "Funds", path: "/funds", id: 4 },
                            { name: "Home", path: "/zerodhaHome", id: 5 }]
                                .map((item) => (
                                    <li className="nav-item" key={item.id}>
                                        <Link to={item.path} style={{ textDecoration: "none" }} onClick={() => handleMenuClick(item.id)}>
                                            <p className={`menu mb-0 ${selectedMenu === item.id ? "menu_active" : "menu_deactive"}`}>
                                                {item.name}
                                            </p>
                                        </Link>
                                    </li>
                                ))}

                            <li className="nav-item position-relative" ref={dropdownRef}>
                                <div onClick={handleProfileClick} style={{ cursor: "pointer" }}
                                    className="nav-link d-flex align-items-center justify-content-center">
                                    <CircleUserRound size={28} className={selectedMenu === 5 ? "menu_active" : "menu_deactive"} />
                                </div>

                                {isProfileDropDownOpen && (
                                    <ul className="dropdown-menu show position-absolute end-0 mt-2"
                                        style={{ display: "block", position: "absolute", top: "100%", right: 0, zIndex: 100 }}>
                                        <li>
                                            <button className="dropdown-item d-flex align-items-center justify-content-between"
                                                onClick={() => { handleLogout(); setIsProfileDropDownOpen(false); }}>
                                                Logout <LogOut size={20} />
                                            </button>
                                        </li>
                                    </ul>
                                )}
                            </li>

                        </ul>
                    </div>

                </div >
            </nav >
        </div >
    )
}
