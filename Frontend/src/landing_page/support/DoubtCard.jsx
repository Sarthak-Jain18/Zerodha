import { ChevronDown } from 'lucide-react';

export default function DoubtCard({ photo, alt, name, id, points }) {
    return (
        <div>

            <div className='p-3 ps-4'>
                <div className='d-flex border clickable-card' role="button" data-bs-toggle="collapse"
                    data-bs-target={`#${id}`} aria-expanded="false" aria-controls={id}>
                    <div className='p-3' style={{ backgroundColor: "#f2f8fe" }}>
                        <img src={photo} alt={alt} style={{ maxWidth: "1.5rem" }}
                            className="img-fluid rounded-circle" />
                    </div>
                    <div className='py-3 ps-3'><h1 className='mute2 fs-5'>{name}</h1></div>
                    <div className='ms-auto me-3 my-3'><ChevronDown color="#387ed1" /></div>
                </div>
            </div>

            <div className="collapse" id={id}>
                <div className="card card-body ms-md-5 ps-md-3">
                    <ul>
                        {points.map(point => (
                            <li key={point} className="custom-link-hover2 p-2">{point}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
}



