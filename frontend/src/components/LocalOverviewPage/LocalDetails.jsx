import MapComponent from "../Common/MapComponent";

function LocalDetails(props) {
  return (
    <div className="col-sm-12">
      <div className="row justify-content-between">
        <div className="col-md-5 col-lg-4">
          <div className="property-price d-flex justify-content-center foo">
            <div className="card-header-c d-flex">
              <div className="card-box-ico">
                <span className="title-c">{props.local.price}</span>
                <span className="bi bi-currency-euro"></span>
              </div>
            </div>
          </div>
          <div className="property-summary">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box-d section-t4 text-start">
                  <h3 className="title-d">{props.local.title}</h3>
                </div>
              </div>
            </div>
            <div className="summary-list">
              <ul className="list">
                <li className="d-flex justify-content-between">
                  <strong>Lokacija:</strong>
                  <span>
                    {props.local.location}, {props.local.city}
                  </span>
                </li>
                <li className="d-flex justify-content-between">
                  <strong>Tip nekretnine:</strong>
                  <span>{props.local.type}</span>
                </li>
                <li className="d-flex justify-content-between">
                  <strong>Povrsina:</strong>
                  <span>
                    {props.local.surface}m<sup>2</sup>
                  </span>
                </li>
                <li className="d-flex justify-content-between">
                  <strong>Grejanje:</strong>
                  <span>{props.local.heating}</span>
                </li>
                <li className="d-flex justify-content-between">
                  <strong>Prostorije:</strong>
                  <span>{props.local.rooms}</span>
                </li>
                <li className="d-flex justify-content-between">
                  <strong>Kupatila:</strong>
                  <span>{props.local.bathrooms}</span>
                </li>
                {props.local.outsideSurface && (
                  <li className="d-flex justify-content-between">
                    <strong>Basta:</strong>
                    <span>{props.local.outsideSurface}</span>
                  </li>
                )}
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
              {props.local.description}
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
              {props.local.equipmentIncluded && <li>Uključena oprema</li>}
              {props.local.helperWarehouse && <li>Pomoćni prostor</li>}
              {props.local.ventilation && <li>Ventilacija</li>}
              {props.local.internet && <li>Internet</li>}
              {props.local.phone && <li>Fiksni telefon</li>}
              {props.local.opticalNetwork && <li>Optička mreža</li>}
            </ul>
          </div>
          <div className="row section-t3">
            <MapComponent
              lat={props.local.latitude}
              lng={props.local.longitude}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocalDetails;
