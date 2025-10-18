export default function UniverseCard({ photo, desc }) {
    return (
        <div className="universe_card_container col-12 col-sm-6 col-md-4 px-5 text-center">
            <img src={photo} alt="Universe Image" className="img-fluid p-2 custom-hover-img"
                style={{ width: "15rem" }} />
            <p className="text-muted text-start">{desc}</p>
        </div>
    )
}
