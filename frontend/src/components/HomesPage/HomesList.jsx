import { Link } from "react-router-dom";

function HomesList(props) {
  return (
    <section className="property-grid grid">
      <div className="container">
        <div className="row">
          {props.items.length === 0 && "Nema dostupnih stambenih objekata"}
          {props.items.map((item) => {
            return (
              <div key={item.id} className="col-md-4">
                <div className="card-box-a card-shadow">
                  <div className="img-box-a">
                    <img
                      src={item.imageUrl}
                      alt=""
                      className="img-a img-fluid"
                    />
                  </div>
                  <div className="card-overlay">
                    <div className="card-overlay-a-content">
                      <div className="card-header-a">
                        <h2 className="card-title-a">
                          <span>
                            {item.title}
                            <br />
                            {item.location}, {item.city}
                          </span>
                        </h2>
                      </div>
                      <div className="card-body-a">
                        <div className="price-box d-flex">
                          <span className="price-a">{item.price} €</span>
                        </div>
                        <div>
                          <b className="text-white">
                            {item.forSale ? "*PRODAJA*" : "*IZDAVANJE*"}
                          </b>
                        </div>
                        <Link to={item.overviewLink} className="link-a">
                          Više detalja
                          <span className="bi bi-chevron-right"></span>
                        </Link>
                      </div>
                      <div className="card-footer-a">
                        <ul className="card-info d-flex justify-content-around">
                          <li>
                            <h4 className="card-info-title">Površina</h4>
                            <span>
                              {item.surface ? item.surface : 0} m<sup>2</sup>
                            </span>
                          </li>
                          <li>
                            <h4 className="card-info-title">Sobe</h4>
                            <span>{item.rooms ? item.rooms : 0}</span>
                          </li>
                          <li>
                            <h4 className="card-info-title">Kupatila</h4>
                            <span>{item.bathrooms ? item.bathrooms : 0}</span>
                          </li>
                          <li>
                            <h4 className="card-info-title">Garaže</h4>
                            <span>{item.garages ? item.garages : 0}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomesList;
