import { MoveRight } from 'lucide-react';

export default function RightSection({ photo, name, desc, link }) {
    return (
        <div className="products_rightSec_container">
            <div className="row">

                <div className="col-12 col-lg-5 ms-auto p-4 p-lg-5 mt-5">
                    <h3 className='my-4' style={{ color: "#424242" }}>{name}</h3>
                    <p className='text-muted'>{desc}</p>
                    <div className="d-flex justify-content-start gap-5 py-2">
                        <h6><a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">{link} <MoveRight /></a></h6>
                    </div>
                </div>

                <div className="col-12 col-lg-5 me-auto p-3">
                    <img src={photo} alt={name} className="img-fluid mb-sm-2 mb-md-4 p-sm-2 p-md-5" />
                </div>

            </div>
        </div>
    )
}

