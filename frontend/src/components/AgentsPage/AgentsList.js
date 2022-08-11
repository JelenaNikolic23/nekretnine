function AgentsList(props) {
    return (
        <section className="agents-grid grid">
            <div className="container">
                <div className="row">
                {props.agents.length === 0 && "Nema dostupnih agenata"}
                {props.agents.map(agent => { 
                    return (
                    <div key={agent.id} className="col-md-4">
                        <div className="card-box-d">
                            <div className="card-img-d">
                                <img src={agent.imageUrl} alt="" className="img-d img-fluid" />
                            </div>
                            <div className="card-overlay card-overlay-hover">
                                <div className="card-header-d">
                                    <div className="card-title-d align-self-center">
                                        <h3 className="title-d">
                                            {agent.firstName} {agent.lastName}
                                        </h3>
                                    </div>
                                </div>
                                <div className="card-body-d">
                                    <p className="content-d color-text-a">
                                        {agent.description}
                                    </p>
                                    <div className="info-agents color-a">
                                        <p>
                                            <strong>Telefon: </strong> {agent.phoneNumber}
                                        </p>
                                        <p>
                                            <strong>Email: </strong> {agent.email}
                                        </p>
                                    </div>
                                </div>
                                <div className="card-footer-d">
                                    <div className="socials-footer d-flex justify-content-center">
                                        <ul className="list-inline">
                                            {agent.facebookLink && <li className="list-inline-item">
                                                <a href={agent.facebookLink} className="link-one">
                                                    <i className="bi bi-facebook" aria-hidden="true"></i>
                                                </a>
                                            </li>}
                                            {agent.twitterLink && <li className="list-inline-item">
                                                <a href={agent.twitterLink} className="link-one">
                                                    <i className="bi bi-twitter" aria-hidden="true"></i>
                                                </a>
                                            </li>}
                                            {agent.instagramLink && <li className="list-inline-item">
                                                <a href={agent.instagramLink} className="link-one">
                                                    <i className="bi bi-instagram" aria-hidden="true"></i>
                                                </a>
                                            </li>}
                                            {agent.linkedInLink && <li className="list-inline-item">
                                                <a href={agent.linkedInLink} className="link-one">
                                                    <i className="bi bi-linkedin" aria-hidden="true"></i>
                                                </a>
                                            </li>}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}    
                </div>
                
                <div className="row">
                    <div className="col-sm-12">
                        <nav className="pagination-a">
                            <ul className="pagination justify-content-end">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabIndex="-1">
                                        <span className="bi bi-chevron-left"></span>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">1</a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">3</a>
                                </li>
                                <li className="page-item next">
                                    <a className="page-link" href="#">
                                        <span className="bi bi-chevron-right"></span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AgentsList;