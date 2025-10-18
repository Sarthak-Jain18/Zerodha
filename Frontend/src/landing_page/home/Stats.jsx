import { MoveRight } from 'lucide-react';

export default function Stats() {
    return (
        <div className="home_stats_container px-2 px-md-5 mx-2 mt-5 m-md-5">
            <div className="row">

                <div className="col-sm-12 col-md-5 mx-auto">

                    <h2 className='fs-3 mb-4'>Trust with confidence</h2>

                    <div>
                        <h3 className="fs-4">Customer-first always</h3>
                        <p className="text-muted">
                            That's why 1.6+ crore customers trust Zerodha with
                            ~ ₹6 lakh crores of equity investments, making us India's largest broker;
                            contributing to 15% of daily retail exchange volumes in India.
                        </p>
                    </div>

                    <div>
                        <h3 className="fs-4">No spam or gimmicks</h3>
                        <p className="text-muted">
                            No gimmicks, spam, "gamification",
                            or annoying push notifications. High quality apps that you use at your pace,
                            the way you like. <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2"> Our philosophies.</a>
                        </p>
                    </div>

                    <div>
                        <h3 className="fs-4">The Zerodha universe</h3>
                        <p className="text-muted">
                            Not just an app, but a whole ecosystem. Our investments
                            in 30+ fintech startups offer you tailored services specific to your needs.
                        </p>
                    </div>

                    <div>
                        <h3 className="fs-4">Do better with money</h3>
                        <p className="text-muted">
                            With initiatives like <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2"> Nudge </a>
                            and <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2"> Kill Switch</a>, we don't just
                            facilitate transactions, but actively help you do better with your money.
                        </p>
                    </div>

                </div>

                <div className="col-sm-12 col-md-5 mx-auto">
                    <img src="/HomePage_Stats.png" alt="Home Page Stats Image" className="img-fluid mb-sm-2 mb-md-4 p-sm-2 p-md-3" />
                    <div className="stats_links d-flex justify-content-evenly">
                        <h6><a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">Explore our products <MoveRight /></a></h6>
                        <h6><a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">Try Kite demo <MoveRight /></a></h6>
                    </div>
                </div>

            </div>

            <br />

            <div className="row">
                <div className="col-sm-12 col-md-8 mx-auto">
                    <img src="/HomePage_Media.png" alt="Home Page Media Image" className="img-fluid mb-sm-2 mb-md-4 p-sm-2 p-md-5" />
                </div>
            </div>
        </div>
    )
}

