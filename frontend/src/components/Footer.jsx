function Footer() {
    return (
        <>
            <section className="section-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="widget-a">
                                <div className="w-header-a">
                                    <h3 className="w-title-a text-brand">Super<span className="color-b">Nekretnine</span></h3>
                                </div>
                                <div className="w-body-a">
                                    <p className="w-text-a color-text-a w-50 mx-auto">
                                        Agencija za nekretnine osnovana 2022. godine. Mislija agencije je kreiranje i prikaz ponude nekretnina kupcima na nacin da sto jednostavnije i brze dodju do nekretnine koju traze.
                                    </p>
                                </div>
                                <div className="w-footer-a">
                                    <ul className="list-unstyled">
                                        <li className="color-a">
                                            <span className="color-text-a">E-mail :</span> info@supernekretnine.com
                                        </li>
                                        <li className="color-a">
                                            <span className="color-text-a">Telefon :</span>  021/ 945-234
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
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
                            <div className="copyright-footer">
                                <p className="copyright color-text-a">
                                    Diplomski rad
                                    &copy;
                                    <span className="color-a"> Jelena Nikolic</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;