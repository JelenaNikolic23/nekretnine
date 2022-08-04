
function Header() {
    return (
        <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
            <div className="container">
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <a className="navbar-brand text-brand" href="index.html">Super<span className="color-b">Nekretnine</span></a>

                <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <a className="nav-link active" href="index.html">Pocetna</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Nekretnine</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item " href="property-single.html">Stanovi/Kuce</a>
                                <a className="dropdown-item " href="blog-single.html">Lokali</a>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link " href="blog-grid.html">Agenti</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link " href="blog-grid.html">Kontakt</a>
                        </li>

                    </ul>
                </div>

                <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                    <i className="bi bi-search"></i>
                </button>

            </div>
        </nav>
    );
}

export default Header;