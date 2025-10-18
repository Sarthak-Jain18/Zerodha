import { MoveRight } from 'lucide-react';

export default function Education() {
    return (
        <div className="home_education_container px-2 px-md-5 mx-2 mt-5 m-md-5">
            <div className="row">

                <div className="col-sm-12 col-md-5 mx-auto">
                    <img src="/HomePage_Education.png" alt="Home Page Education Image" className="img-fluid mb-sm-2 mb-md-4 p-sm-2 p-md-5" />
                </div>

                <div className="col-sm-12 col-md-5 mx-auto mt-5">
                    <h2 className='fs-3 p-1'>Free and open market education</h2>

                    <div>
                        <div>
                            <p className="text-muted p-1">
                                Varsity, the largest online stock market education book
                                in the world covering everything from the basics to advanced trading.
                            </p>
                        </div>
                        <div className="education_link p-1">
                            <h6><a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">Varsity <MoveRight /></a></h6>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p className="text-muted p-1">
                                TradingQ&A, the most active trading and investment community
                                in India for all your market related queries.
                            </p>
                        </div>
                        <div className="education_link p-1">
                            <h6><a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">TradingQ&A <MoveRight /></a></h6>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
