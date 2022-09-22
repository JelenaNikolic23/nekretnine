function ContactAgentSection(props) {
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
                <div className="col-sm-6 col-md-3">
                    <img src={props.agent.imageUrl} alt="" className="img-fluid" />
                </div>
                <div className="col-sm-6">
                    <div className="property-agent">
                        <h4 className="title-agent">{props.agent.firstName} {props.agent.lastName}</h4>
                        <p className="color-text-a">
                            {props.agent.description}
                        </p>
                        <ul className="list-unstyled">
                            <li className="d-flex justify-content-between">
                                <strong>Phone:</strong>
                                <span className="color-text-a">{props.agent.phoneNumber}</span>
                            </li>
                            <li className="d-flex justify-content-between">
                                <strong>Email:</strong>
                                <span className="color-text-a">{props.agent.email}</span>
                            </li>
                        </ul>
                        <div className="socials-a">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a target="_blank" href={props.agent.facebookLink}>
                                        <i className="bi bi-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a target="_blank" href={props.agent.twitterLink}>
                                        <i className="bi bi-twitter" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a target="_blank" href={props.agent.instagramLink}>
                                        <i className="bi bi-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a target="_blank" href={props.agent.linkedInLink}>
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
