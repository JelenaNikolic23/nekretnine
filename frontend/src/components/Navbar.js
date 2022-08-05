import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { select, onscroll } from "../utils"

function Header() {

    useEffect(() => {

        let selectHNavbar = select('.navbar-default')
        if (selectHNavbar) {
            onscroll(document, () => {
                if (window.scrollY > 100) {
                    selectHNavbar.classList.add('navbar-reduce')
                    selectHNavbar.classList.remove('navbar-trans')
                } else {
                    selectHNavbar.classList.remove('navbar-reduce')
                    selectHNavbar.classList.add('navbar-trans')
                }
            })
        }
    }, []);

    return (
        <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
            <div className="container">
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <NavLink className="navbar-brand text-brand" to={"/"} activeClassName={"active"}>Super<span className="color-b">Nekretnine</span></NavLink>

                <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <NavLink to={"/"} className="nav-link" activeClassName={"active"}>Pocetna</NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Nekretnine</a>
                            <div className="dropdown-menu">
                                <NavLink className="dropdown-item " to={"/houses-and-flats"} activeClassName={"active"}>Stanovi/Kuce</NavLink>
                                <NavLink className="dropdown-item " to={"/locals"} activeClassName={"active"}>Lokali</NavLink>
                            </div>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link " to={"/agents"} activeClassName={"active"}>Agenti</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link " to={"/contact"} activeClassName={"active"}>Kontakt</NavLink>
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