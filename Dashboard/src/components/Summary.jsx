import { useAuth } from "../AuthContext.jsx";

export default function Summary() {

    const { user } = useAuth();

    return (
        <div className="summary_container">
            <div className="row">

                <div className="username kite-card">
                    <h6 className="fs-4 ms-4">Hi, {user?.displayName || "User"}!</h6>
                </div>

                <div className="section kite-card">
                    <h6 className="fs-4 ms-4">Equity</h6>

                    <div className="data d-flex">
                        <div className="first m-4">
                            <h3>3.74k</h3>
                            <small className="txt-muted">Margin available</small>
                        </div>
                        <div>
                            <hr className="vr m-4" style={{ height: "5rem" }} />
                        </div>
                        <div className="second m-4">
                            <p>Margins used : <b className="txt-muted">0</b></p>
                            <p>Opening balance <b className="txt-muted">3.74k</b></p>
                        </div>
                    </div>
                </div>

                <div className="section kite-card">
                    <h6 className="fs-4 ms-4">Holdings (13)</h6>

                    <div className="data d-flex">
                        <div className="first m-4">
                            <h3 className="profit">1.55k <small>+5.20%</small></h3>
                            <small className="txt-muted">Profit & Loss</small>
                        </div>
                        <div>
                            <hr className="vr m-4" style={{ height: "5rem" }} />
                        </div>
                        <div className="second m-4">
                            <p>Current Value <b className="txt-muted">31.43k</b></p>
                            <p>Investment <b className="txt-muted">29.88k</b></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
