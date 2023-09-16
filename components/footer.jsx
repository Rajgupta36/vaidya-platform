import React from "react";
import '../css/footer.css'
import { NavLink } from "react-router-dom";
function Footer() {
    return (
        <div>
            <footer className=" text-center text-lg-start" >

                <section className="d-flex justify-content-between p-4" >

                    <div className="me-5">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href="/" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="/" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>

                        <a href="/" className="text-white me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="/" className="text-white me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="/" className="text-white me-4">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>

                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Team Ayur Vaidya</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                                <p style={{ textalign: 'center' }}>
                                    "Discover a world of wellness with our platform, your trusted guide to holistic health, medication insights,yoga and Ayurveda wisdom."
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Products</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                                <p>
                                    <NavLink to="/Herb" className="text-white">Herbs</NavLink>
                                </p>
                                <p>
                                    <NavLink to="/Formulation" className="text-white">medicine</NavLink>
                                </p>
                                <p>
                                    <NavLink to="/Formulation" className="text-white">Formulation</NavLink>
                                </p>
                                <p>
                                    <NavLink to="/Symptom" className="text-white">Symptom based diagnosis</NavLink>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto"
                                />
                                <p>
                                    <a href="/" className="text-white">Home</a>
                                </p>
                                <p>
                                    <a href="/Symptom" className="text-white">Ayurveda Reccomendation platform</a>
                                </p>
                                <p>
                                    <a href="/Instruction" className="text-white">Blog</a>
                                </p>
                                <p>
                                    <a href="/Instruction" className="text-white">Faq</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto"
                                />
                                <p><i className="fas fa-home mr-3"></i> Bhopal, M.P., India</p>
                                <p><i className="fas fa-envelope mr-3"></i> TeamXXX@outlook.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 91 9565XXXX34</p>
                                <p><i className="fas fa-print mr-3"></i> + 87 763XXXXX54</p>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="text-center p-3" >
                    © 2023 Copyright:
                    <a className="text-white" href="../index.html">Team Ayur Vadiya</a>
                </div>

            </footer>
        </div >
    )
}
export default Footer;