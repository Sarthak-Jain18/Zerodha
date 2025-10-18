import TeamCard from "./TeamCard"

export default function Team() {
    return (
        <div className="about_team_container m-2 m-md-5">
            <div className="row m-2 m-md-5 text-muted">
                <div className="people mt-5">

                    <div className="text-center">
                        <h3 className="" style={{ color: "#424242" }}>People</h3>
                    </div>

                    {/* NITHIN KAMATH */}
                    <div className="row mt-4 mt-sm-1 p-3 p-md-5 mx-auto g-4">
                        <div className="col-12 col-lg-5 text-center">
                            <img src="/about_nithin-kamath.jpg" alt="About Image" style={{ maxWidth: "18rem" }}
                                className="img-fluid  my-3 rounded-circle" />
                            <p className="fs-5 m-1">Nithin Kamath</p>
                            <p className="fs-6 m-1">Founder, CEO</p>
                        </div>
                        <div className="col-12 col-lg-5 ms-2">
                            <p className="mt-5">
                                Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long
                                stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                                <br /><br />

                                He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                                <br /><br />

                                Playing basketball is his zen.
                                <br /><br />

                                Connect on <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">Homepage</a> / &nbsp;
                                <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">TradingQnA</a> / &nbsp;
                                <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">Twitter</a>
                            </p>
                        </div>
                    </div>

                    {/* TEAM */}
                    <div className="row mt-5">
                        <TeamCard photo="/about_Nikhil.jpg" name="Nikhil Kamath" designation="Co-founder & CFO" description="Nikhil is an astute and 
                        experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess."/>
                        <TeamCard photo="/about_Kailash.jpg" name="Dr. Kailash Nadh" designation="CTO" description="Kailash has a PhD 
                        in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. 
                        He has been a developer from his adolescence and continues to write code every day."/>
                        <TeamCard photo="/about_Venu.jpg" name="Venu Madhav" designation="COO" description="Venu is the backbone of Zerodha taking 
                        care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in 
                        financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside 
                        of Zerodha." />
                        <TeamCard photo="/about_Hanan.jpg" name="Hanan Delvi" designation="CCO" description="We take pride in the way we support our 
                        clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support 
                        initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time." />
                        <TeamCard photo="/about_Seema.jpg" name="Seema Patil" designation="Director" description="Seema who has lead the quality team 
                        since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast." />
                        <TeamCard photo="/about_karthik.jpg" name="Karthik Rangappa" designation="Chief of Education" description="Karthik 'Guru' 
                        Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at 
                        Zerodha and loves stock markets, classic rock, single malts, and photography." />
                        <TeamCard photo="/about_Austin.jpg" name="Austin Prakesh" designation="Director Strategy" description="Austin is a successful self-made 
                        entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing 
                        revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches." />
                    </div>

                </div>
            </div>
        </div>
    )
}

