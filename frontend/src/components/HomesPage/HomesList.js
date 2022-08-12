import { Link } from "react-router-dom";

function HomesList(props) {

    return (
        <section className="property-grid grid">
            <div className="container">
                <div className="row">

                    {props.items.length === 0 && "Nema dostupnih stambenih objekata"}
                    {props.items.map(item => {
                        return (
                        <div key={item.id} className="col-md-4">
                            <div className="card-box-a card-shadow">
                                <div className="img-box-a">
                                    <img src={item.imageUrl} alt="" className="img-a img-fluid" />
                                </div>
                                <div className="card-overlay">
                                    <div className="card-overlay-a-content">
                                        <div className="card-header-a">
                                            <h2 className="card-title-a">
                                                <span >{item.title}
                                                <br />{item.location}, {item.city}</span>
                                            </h2>
                                        </div>
                                        <div className="card-body-a">
                                            <div className="price-box d-flex">
                                                <span className="price-a">{item.price} €</span>
                                            </div>
                                            <Link to={item.overviewLink} className="link-a">Vise detalja
                                                <span className="bi bi-chevron-right"></span>
                                            </Link>
                                        </div>
                                        <div className="card-footer-a">
                                            <ul className="card-info d-flex justify-content-around">
                                                <li>
                                                    <h4 className="card-info-title">Povrsina</h4>
                                                    <span>{item.surface} m
                                                        <sup>2</sup>
                                                    </span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Sobe</h4>
                                                    <span>{item.bedrooms}</span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Kupatila</h4>
                                                    <span>{item.bathrooms}</span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Garaze</h4>
                                                    <span>{item.garages}</span>
                                                </li>
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


export default HomesList;
