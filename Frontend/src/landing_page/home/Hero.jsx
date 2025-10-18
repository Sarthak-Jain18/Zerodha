export default function Hero() {
    return (
        <div className="home_hero_container px-2 px-md-5 mx-2 mt-5 m-md-5">
            <div className="row text-center">
                <div className="d-grid col-sm-12 col-md-8 mx-auto">
                    <img src="/HomePage_Hero.png" alt="Home Page Hero Image" className="img-fluid mb-sm-2 mb-md-4 p-sm-2 p-md-5" />
                    <h3 className="m-1">Invest in everything</h3>
                    <h5 className="m-1 text-muted">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h5>
                    <div className="d-grid col-sm-6 col-md-3 mx-auto">
                        <button onClick={() => window.location.href = `${import.meta.env.VITE_DASHBOARD_URL}/signup`}
                            className="btn btn-lg mt-sm-2 mt-md-5 custom-signup-btn">
                            Sign up for free
                        </button>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    )
}



