export default function TopBar() {
    return (
        <div className="topbar_container d-flex">
            <div className="indices_container gap-4 d-flex">
                <div className="nifty d-flex p-2">
                    <p className="index p-2">NIFTY 50</p>
                    <p className="index-points p-2 text-danger">{100.2}</p>
                    <p className="percent p-2 text-muted">0</p>
                </div>
                <div className="sensex d-flex p-2">
                    <p className="index p-2">SENSEX</p>
                    <p className="index-points p-2 text-danger">{100.2}</p>
                    <p className="percent p-2 tex-muted">0</p>
                </div>
            </div>
        </div>
    )
}

