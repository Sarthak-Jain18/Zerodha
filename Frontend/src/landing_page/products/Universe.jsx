import UniverseCard from "./UniverseCard"

export default function Universe() {
    return (
        <div className="products_universe_container">
            <div className="row">

                <div className="text-center">
                    <h5 className="text-muted p-3">
                        Want to know more about our technology stack? Check out the &nbsp;
                        <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">Zerodha.tech</a> blog.
                    </h5>
                    <h4 className="p-3 mt-5" style={{ color: "#424242" }}>
                        The Zerodha Universe
                    </h4>
                    <h6 className="text-muted p-1">
                        Extend your trading and investment experience even further with our partner platforms
                    </h6>
                </div>

                <div className="px-0 px-md-5">
                    <div className="row mx-auto p-5">
                        <UniverseCard photo="/zerodhafundhouse-logo.png" desc="Our asset management venture that is creating 
                    simple and transparent index funds to help you save for your goals." />
                        <UniverseCard photo="/sensibull-logo.png" desc="Options trading platform that lets you create 
                    strategies, analyze positions, and examine data points like open interest, FII/DII, and more." />
                        <UniverseCard photo="/tijori-logo.png" desc="Investment research platform that offers detailed 
                    insights on stocks, sectors, supply chains, and more." />
                        <UniverseCard photo="/streak-logo.png" desc="Systematic trading platform that allows you to create 
                    and backtest strategies without coding." />
                        <UniverseCard photo="/smallcase-logo.png" desc="Thematic investing platform that helps you invest 
                    in diversified baskets of stocks on ETFs." />
                        <UniverseCard photo="/ditto-logo.png" desc="Personalized advice on life and health insurance. 
                    No spam and no mis-selling." />
                    </div>
                </div>

                <div className="d-grid col-6 col-md-2 mx-auto">
                    <button onClick={() => window.location.href = `${import.meta.env.VITE_DASHBOARD_URL}/signup`}
                        className="btn btn-lg mt-sm-2 mt-md-5 custom-signup-btn">
                        Sign up for free
                    </button>
                </div>

            </div>
            <br /><br />
        </div>
    )
}
