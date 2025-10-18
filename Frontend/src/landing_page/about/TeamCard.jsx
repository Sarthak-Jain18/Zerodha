import { ChevronDown } from 'lucide-react';

export default function TeamCard({ photo, name, designation, description }) {
    return (
        <div className="team_card_container col-12 col-md-6 col-lg-4 mb-3 text-center">
            <div className='p-4'>
                <img src={photo} alt={name} style={{ maxWidth: "16rem" }} className="img-fluid mb-1 p-2 rounded-circle" />
            </div>
            <div>
                <p className="fs-5 m-1">{name}</p>
                <p className="fs-6 m-1 text-muted">{designation}</p>
            </div>
            <div>
                <p className="d-inline-flex gap-1">
                    <button className="btn custom-bio-btn" type="button" data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${name.replace(/\s+/g, '-')}`} aria-expanded="false"
                        aria-controls={`collapse-${name.replace(/\s+/g, '-')}`}>
                        Bio <ChevronDown />
                    </button>
                </p>
                <div className="collapse text-start" id={`collapse-${name.replace(/\s+/g, '-')}`}>
                    <div className="card card-body">{description}</div>
                </div>
            </div>
        </div>
    )
}


