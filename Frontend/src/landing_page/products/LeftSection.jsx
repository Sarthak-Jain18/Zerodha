import { MoveRight } from 'lucide-react';

export default function LeftSection({ photo, name, desc, link1, link2 }) {
    return (
        <div className="products_leftSec_container">
            <div className="row">

                <div className="col-12 col-lg-6 ms-auto p-4 px-lg-5">
                    <img src={photo} alt={name} className="img-fluid mb-sm-2 mb-md-4 p-sm-2 p-md-5" />
                </div>

                <div className="col-12 col-lg-5 me-auto p-4 p-lg-5 mt-5">

                    <h3 className='my-4' style={{ color: "#424242" }}>{name}</h3>
                    <p className='text-muted'>{desc}</p>

                    <div className="d-flex justify-content-start gap-5 py-2">
                        {link1 && (<h6><a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">{link1} <MoveRight /></a></h6>)}
                        {link2 && (<h6><a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">{link2} <MoveRight /></a></h6>)}
                    </div>
                    <div className="d-flex justify-content-start gap-5 py-2">
                        <div className="google_play">
                            <img src="/google_play.png" alt="google play" style={{ maxWidth: "10rem", borderRadius: "0.5rem" }}
                                className="img-fluid custom-hover-img" />
                        </div>
                        <div className="app_store">
                            <img src="/app_store.png" alt="app store" style={{ maxWidth: "10rem", borderRadius: "0.5rem" }}
                                className="img-fluid custom-hover-img" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}


