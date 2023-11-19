import MapComponent from "../Common/MapComponent";

function HomeDetails(props) {
  return (
    <div className="col-sm-12">
      <div className="row justify-content-between">
        <div className="col-md-5 col-lg-4">
          <div className="property-price d-flex justify-content-center foo">
            <div className="card-header-c d-flex">
              <div className="card-box-ico">
                <span className="title-c">{props.home.price}</span>
                <span className="bi bi-currency-euro"></span>
              </div>
            </div>
          </div>
          <div className="property-summary">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box-d section-t4 text-start">
                  <h3 className="title-d">{props.home.title}</h3>
                </div>
              </div>
            </div>
            <div className="summary-list">
              <ul className="list">
                {/* <li className="d-flex justify-content-between">
                  <strong>ID nekretnine:</strong>
                  <span>{props.home.id}</span>
                </li> */}
                <li className="d-flex justify-content-between">
                  <strong>Lokacija:</strong>
                  <span>
                    {props.home.location}, {props.home.city}
                  </span>
                </li>
                <li className="d-flex justify-content-between">
                  <strong>Tip nekretnine:</strong>
                  <span>{props.home.type}</span>
                </li>
                <li className="d-flex justify-content-between">
                  <strong>Uknjižen:</strong>
                  {props.home.legalized && <span>Da</span>}
                  {!props.home.legalized && <span>Ne</span>}
                </li>
                <li className="d-flex justify-content-between">
                  <strong>Površina:</strong>
                  <span>
                    {props.home.surface}m<sup>2</sup>
                  </span>
                </li>
                <li className="d-flex justify-content-between">
                  <strong>Sprat:</strong>
                  <span>{props.home.floorNumber}</span>
                </li>
                <li className="d-flex justify-content-between">
                  <strong>Grejanje:</strong>
                  <span>{props.home.heating}</span>
                </li>
                <li className="d-flex justify-content-between">
                  <strong>Sobe:</strong>
                  <span>{props.home.bedrooms}</span>
                </li>
                <li className="d-flex justify-content-between">
                  <strong>Kupatila:</strong>
                  <span>{props.home.bathrooms}</span>
                </li>
                <li className="d-flex justify-content-between">
                  <strong>Garaže:</strong>
                  <span>{props.home.garages}</span>
                </li>
                <li className="d-flex justify-content-between">
                  <strong>Terase:</strong>
                  <span>{props.home.balcons}</span>
                </li>
                <li className="d-flex justify-content-between">
                  <strong>Stanje:</strong>
                  <span>{props.home.state}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-lg-7 section-md-t3">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box-d text-start">
                <h3 className="title-d">Opis nekretnine</h3>
              </div>
            </div>
          </div>
          <div className="property-description">
            <p className="description color-text-a text-start">
              {props.home.description}
            </p>
          </div>
          <div className="row section-t3">
            <div className="col-sm-12">
              <div className="title-box-d text-start">
                <h3 className="title-d">Dodatne infromacije</h3>
              </div>
            </div>
          </div>
          <div className="amenities-list color-text-a text-start">
            <ul className="list-a no-margin">
              {props.home.keepingRoom && <li>Ostava</li>}
              {props.home.cableNetwork && <li>Priključak za kablovsku</li>}
              {props.home.parkingPlace && <li>Parking mesto</li>}
              {props.home.sharedRoom && <li>Zajednička prostorija</li>}
              {props.home.internet && <li>Internet</li>}
              {props.home.phone && <li>Fiksni telefon</li>}
              {props.home.opticalNetwork && <li>Optička mreža</li>}
            </ul>
          </div>
          <div className="row section-t3">
            <MapComponent
              lat={props.home.latitude}
              lng={props.home.longitude}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDetails;
