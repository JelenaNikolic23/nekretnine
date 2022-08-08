function ContactAgentSection() {
    return (
        <div className="col-md-12">
            <div className="row section-t3">
                <div className="col-sm-12">
                    <div className="title-box-d text-start">
                        <h3 className="title-d">Agent</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <img src="https://bootstrapmade.com/demo/templates/EstateAgency/assets/img/agent-4.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="property-agent">
                        <h4 className="title-agent">Anabella Geller</h4>
                        <p className="color-text-a">
                            Motivisana da pronadje nekretninu koja u potpunosti odgovara Vasim zahtevima
                        </p>
                        <ul className="list-unstyled">
                            <li className="d-flex justify-content-between">
                                <strong>Phone:</strong>
                                <span className="color-text-a">063/5961789</span>
                            </li>
                            <li className="d-flex justify-content-between">
                                <strong>Email:</strong>
                                <span className="color-text-a">annabella@supernekretnine.com</span>
                            </li>
                            <li className="d-flex justify-content-between">
                                <strong>Skype:</strong>
                                <span className="color-text-a">Annabela.ge</span>
                            </li>
                        </ul>
                        <div className="socials-a">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="bi bi-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="bi bi-twitter" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="bi bi-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="bi bi-linkedin" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactAgentSection;
