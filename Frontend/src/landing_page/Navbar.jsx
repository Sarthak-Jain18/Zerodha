import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar_container">
            <nav className="navbar navbar-expand-lg border-bottom fixed-top" style={{ backgroundColor: "#FFF" }}>
                <div className="container-fluid">

                    <Link className="navbar-brand ms-2" to="/">
                        <img src="/Zerodha_icon.png" alt="Zerodha Icon" className="img-fluid" style={{ maxHeight: "20px" }} />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item mx-3">
                                <Link className="nav-link custom-link-hover" to="/signup">Signup</Link>
                            </li>

                            <li className="nav-item mx-3">
                                <Link className="nav-link custom-link-hover" to="/dashboard">Dashboard</Link>
                            </li>

                            <li className="nav-item mx-3">
                                <Link className="nav-link custom-link-hover" to="/about">About</Link>
                            </li>

                            <li className="nav-item mx-3">
                                <Link className="nav-link custom-link-hover" to="/products">Products</Link>
                            </li>

                            <li className="nav-item mx-3">
                                <Link className="nav-link custom-link-hover" to="/pricing">Pricing</Link>
                            </li>

                            <li className="nav-item mx-3">
                                <Link className="nav-link custom-link-hover" to="/support">Support</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )
}


