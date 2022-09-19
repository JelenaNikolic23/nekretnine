import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { select } from "../../utils";

function SearchingMenu() {

    const { searchOptions, setSearchOptions } = useContext(SearchContext);

    function closeSearchMenu() {
        let body = select('body');
        body.classList.remove('box-collapse-open')
        body.classList.add('box-collapse-closed')
    }

    function search() {
        setSearchOptions(prev => ({
            ...prev,
            name: 'tro'
        }))
    }

    return (
        <>

            <div className="click-closed"></div>

            <div className="box-collapse text-start">
                <div className="title-box-d">
                    <h3 className="title-d">Pretraga nekretnina</h3>
                </div>
                <span className="close-box-collapse right-boxed bi bi-x" onClick={closeSearchMenu}></span>
                <div className="box-collapse-wrap form">
                    <form className="form-a">
                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <div className="form-group">
                                    <label className="pb-2" htmlFor="Type">Naziv</label>
                                    <input type="text" className="form-control form-control-lg form-control-a" placeholder="Naziv" />
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="Type">Tip</label>
                                    <select className="form-control form-select form-control-a" id="Type">
                                        <option>Poslovni objekti</option>
                                        <option>Stambeni objekti</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="city">Grad</label>
                                    <select className="form-control form-select form-control-a" id="city">
                                        <option>Svi</option>
                                        <option>Beograd</option>
                                        <option>Novi Sad</option>
                                        <option>Nis</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="price">Minimalna cena</label>
                                    <input min={50000} type="number" className="form-control form-control-a" id="min-price" />
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="price">Maksimalna cena</label>
                                    <input min={50001} type="number" className="form-control form-control-a" id="max-price" />
                                </div>
                            </div>

                            <div>
                                <button type="button" className="btn btn-b-n " data-bs-toggle="collapse" data-bs-target="#advancedSearch">
                                    <i className="bi bi-plus-lg"></i>
                                    <span>Napredna pretraga</span>
                                </button>
                            </div>

                            <div className="collapse my-2 px-5" id="advancedSearch">
                                <div className="row">

                                    <div className="col-md-6 mb-2">
                                        <div className="form-group mt-3">
                                            <label className="pb-2" htmlFor="bedrooms">Spavace sobe</label>
                                            <select className="form-control form-select form-control-a" id="bedrooms">
                                                <option></option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                                <option>04</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <div className="form-group mt-3">
                                            <label className="pb-2" htmlFor="bathrooms">Kupatila</label>
                                            <select className="form-control form-select form-control-a" id="bathrooms">
                                                <option></option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-6 form-check">
                                        <input type="checkbox" id="chekcboxParkingMesto" className="form-check-input" />
                                        <label className="form-label">Parking mesto</label>
                                    </div>

                                    <div className="col-6 form-check">
                                        <input type="checkbox" id="checkboxTerasa" className="form-check-input" />
                                        <label className="form-label">Terasa</label>
                                    </div>
                                    <div className="col-6 form-check">
                                        <input type="checkbox" id="checkboxOstava" className="form-check-input" />
                                        <label className="form-label">Ostava</label>
                                    </div>
                                    <div className="col-6 form-check">
                                        <input type="checkbox" id="checkboxPrikljucakKablovska" className="form-check-input" />
                                        <label className="form-label">Prikljucak za kablovsku</label>
                                    </div>
                                    <div className="col-6 form-check">
                                        <input type="checkbox" id="checkboxZajednickaProstorija" className="form-check-input" />
                                        <label className="form-label">Zajednicka prostorija</label>
                                    </div>
                                </div>



                            </div>

                            <div className="col-md-12 mt-3">
                                <button type="button" className="btn btn-b" onClick={search}>Pretraga</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SearchingMenu;