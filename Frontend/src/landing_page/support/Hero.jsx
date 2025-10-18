export default function Hero() {
    return (
        <div className="support_hero_container p-5" style={{ backgroundColor: "#f6f6f6" }}>
            <div className="row px-5">

                <div className="d-flex">
                    <div><h1 className="mute1 py-5">Support Portal</h1></div>
                    <div className="ms-auto">
                        <button className="btn btn-lg mt-5  custom-signup-btn">My tickets</button>
                    </div>
                </div>

                <div className="input-group p-2 border" style={{ borderRadius: "0.25rem", backgroundColor: "#fff" }}>
                    <span className="input-group-text" id="search-icon" style={{ backgroundColor: "#fff", border: "none" }}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input type="text" className="form-control border-0" id="support_input" aria-label="Search" aria-describedby="search-icon"
                        placeholder="Eg: How do I open my account, How do I activate F&O..." />
                </div>

            </div>
        </div >
    )
}
