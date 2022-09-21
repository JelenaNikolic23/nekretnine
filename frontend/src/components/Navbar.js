import { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {SearchContext} from "../context/SearchContext";
import {UserContext} from "../context/UserContext";
import { select, onscroll } from "../utils"

function Header() {

    const {user, setUser} = useContext(UserContext);
    const { searchOptions, setSearchOptions } = useContext(SearchContext);

    const navigate = useNavigate();


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

    function handleLogout() {
        setUser(null);
    }

    function toggleSeachMenu() {
        let body = select('body');
        body.classList.add('box-collapse-open')
        body.classList.remove('box-collapse-closed')
    }

    function routeToHomesPage(event) {
        event.preventDefault();
        setSearchOptions({
            naziv: null,
            tip: null,
            grad: null,
            minCena: null,
            maxCena: null,
            minKvadratura: null,
            maxKvadratura: null,
            sobe: null,
            kupatila: null,
            parkingMesto: null,
            ostava: null,
            zajednickaProstorija: null
        });
        navigate("/homes");
    }

    function routeToLocalsPage(event) {
        event.preventDefault();
        setSearchOptions({
            naziv: null,
            tip: null,
            grad: null,
            minCena: null,
            maxCena: null,
            minKvadratura: null,
            maxKvadratura: null,
            sobe: null,
            kupatila: null,
            parkingMesto: null,
            ostava: null,
            zajednickaProstorija: null
        })
        navigate("/locals");
    }

    return (
        <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
            <div className="container">
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <NavLink className="navbar-brand text-brand" to={"/"} activeclassname={"active"}>Super<span className="color-b">Nekretnine</span></NavLink>

                <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <NavLink to={"/"} className="nav-link" activeclassname={"active"}>Pocetna</NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            <label className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Nekretnine</label>
                            <div className="dropdown-menu">
                                <NavLink className="dropdown-item " to={"/homes"} activeclassname={"active"} onClick={(e) => routeToHomesPage(e)}>Stanovi/Kuce</NavLink>
                                <NavLink className="dropdown-item " to={"/locals"} activeclassname={"active"} onClick={(e) => routeToLocalsPage(e)}>Lokali</NavLink>
                            </div>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link " to={"/agents"} activeclassname={"active"}>Agenti</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link " to={"/contact"} activeclassname={"active"}>Kontakt</NavLink>
                        </li>

                        {user && 
                        <li className="nav-item">
                            <Link className="btn btn-warning" to={"/real-estates/new"}>Novi oglas</Link>
                        </li>
                        }

                    </ul>
                </div>

                
                <div className="d-flex" style={{columnGap: "1rem"}}>
                    <button type="button" className="btn btn-b-n  navbar-toggle-box navbar-toggle-box-collapse"  onClick={toggleSeachMenu}>
                        <i className="bi bi-search"></i>
                    </button>


                    {!user && 
                    <button type="button" className="btn" style={{borderColor: "#2eca6a"}}>
                        <Link className="text-black fw-bold" style={{textDecoration: 'none'}} to={"/login"}>Login</Link>
                    </button>
                    }   

                    {user && 
                    <button type="button" className="btn" style={{borderColor: "red"}}>
                        <span className="text-black fw-bold" style={{textDecoration: 'none'}} onClick={handleLogout}>Logout</span>
                    </button>
                    }
                </div>

            </div>
        </nav>
    );
}

export default Header;