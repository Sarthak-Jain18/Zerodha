import { MoveRight } from 'lucide-react';

export default function Pricing() {
    return (
        <div className="home_pricing_container px-2 px-md-5 mx-2 mt-5 m-md-5">
            <div className="row">

                <div className="col-sm-12 col-md-4 mx-auto mt-5">

                    <div>
                        <h3 className="fs-4">Unbeatable pricing</h3>
                        <p className="text-muted">
                            We pioneered the concept of discount
                            broking and price transparency in India. Flat fees and no hidden charges.
                        </p>
                    </div>

                    <div className="pricing_link">
                        <h6><a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">See pricing <MoveRight /></a></h6>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 mx-auto">
                    <img src="/HomePage_Pricing.png" alt="Home Page Pricing Image" className="img-fluid mb-sm-2 mb-md-4 p-sm-1 p-md-2" />
                </div>

            </div>
        </div>
    )
}