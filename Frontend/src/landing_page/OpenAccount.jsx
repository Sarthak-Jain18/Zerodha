export default function OpenAccount() {
    return (
        <div className="open_account_container px-2 px-md-5 mx-2 mt-5 m-md-5">
            <div className="row text-center">
                <div className="d-grid col-sm-12 col-md-8 mx-auto">
                    <h3 className="m-2">Open a Zerodha account</h3>
                    <h5 className="m-2 text-muted fs-6">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</h5>
                    <div className="d-grid col-sm-6 col-md-3 mx-auto">
                        <button onClick={() => window.location.href = `${import.meta.env.VITE_DASHBOARD_URL}/signup`}
                            className="btn btn-lg mt-sm-2 mt-md-5 custom-signup-btn">
                            Sign up for free
                        </button>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}
