function RealEstateDetails() {
    return (
        <div className="col-sm-12">
            <div className="row justify-content-between">
                <div className="col-md-5 col-lg-4">
                    <div className="property-price d-flex justify-content-center foo">
                        <div className="card-header-c d-flex">
                            <div className="card-box-ico">
                                <span className="title-c">15000</span>
                                <span className="bi bi-currency-euro"></span>
                            </div>
                        </div>
                    </div>
                    <div className="property-summary">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="title-box-d section-t4">
                                    <h3 className="title-d">Podaci o nekretnini</h3>
                                </div>
                            </div>
                        </div>
                        <div className="summary-list">
                            <ul className="list">
                                <li className="d-flex justify-content-between">
                                    <strong>ID nekretnine:</strong>
                                    <span>1134</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <strong>Lokacija:</strong>
                                    <span>Grbavica, Novi Sad</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <strong>Tip nekretnine:</strong>
                                    <span>Stan</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <strong>Status:</strong>
                                    <span>Aktivan</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <strong>Povrsina:</strong>
                                    <span>340m
                                        <sup>2</sup>
                                    </span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <strong>Sobe:</strong>
                                    <span>4</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <strong>Kupatila:</strong>
                                    <span>2</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <strong>Garaze:</strong>
                                    <span>1</span>
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
                            Prelep stan u mirnom delu Novog Sada.
                        </p>
                    </div>
                    <div className="row section-t3">
                        <div className="col-sm-12">
                            <div className="title-box-d text-start">
                                <h3 className="title-d">Dodatne infromacije</h3>
                            </div>
                        </div>
                    </div>
                    <div className="amenities-list color-text-a">
                        <ul className="list-a no-margin">
                            <li>Terasa</li>
                            <li>Prikljucak za kablovsku</li>
                            <li>Ostava</li>
                            <li>Parking mesto</li>
                            <li>Zajednicka prostorija</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RealEstateDetails;