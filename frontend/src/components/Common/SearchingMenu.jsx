import { useContext, useState, useRef, useEffect } from "react";
import { SearchContext } from "../../context/SearchContext";
import { select } from "../../utils";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SearchingMenu() {
  const { searchOptions, setSearchOptions } = useContext(SearchContext);
  const [typeOfRealEstate, setTypeOfRealEstate] = useState("stan/kuca");
  const [cities, setCities] = useState([]);

  const navigate = useNavigate();

  const nazivRef = useRef(null);
  const tipRef = useRef(null);
  const gradRef = useRef(null);
  const minCenaRef = useRef(null);
  const maxCenaRef = useRef(null);
  const minKvadraturaRef = useRef(null);
  const maxKvadraturaRef = useRef(null);
  const grejanjeRef = useRef(null);
  const sobeRef = useRef(null);
  const floorNumberRef = useRef(null);
  const kupatilaRef = useRef(null);
  const parkingMestoRef = useRef(null);
  const ostavaRef = useRef(null);
  const zajednickaProstorijaRef = useRef(null);
  const ventilacijaRef = useRef(null);
  const pomocnoSkladisteRef = useRef(null);
  const opremaRef = useRef(null);
  const prodajaRef = useRef(null);
  const uknjizenRef = useRef(null);
  const garazeRef = useRef(null);
  const stanjeRef = useRef(null);
  const internetRef = useRef(null);
  const phoneRef = useRef(null);
  const opticalNetworkRef = useRef(null);

  useEffect(() => {
    axios.get("http://localhost:1337/api/cities").then((response) => {
      setCities(response.data.data);
    });
  }, []);

  function closeSearchMenu() {
    let body = select("body");
    body.classList.remove("box-collapse-open");
    body.classList.add("box-collapse-closed");
  }

  function search() {
    if (tipRef.current.value === "stan/kuca") {
      navigate("/homes");
    } else {
      navigate("/locals");
    }

    setSearchOptions((prev) => ({
      ...prev,
      naziv: nazivRef.current.value ? nazivRef.current.value : null,
      grad: gradRef.current.value ? gradRef.current.value : null,
      tip: tipRef.current.value ? tipRef.current.value : null,
      minCena: minCenaRef.current.value ? minCenaRef.current.value : null,
      maxCena: maxCenaRef.current.value ? maxCenaRef.current.value : null,
      minKvadratura: minKvadraturaRef.current.value
        ? minKvadraturaRef.current.value
        : null,
      maxKvadratura: maxKvadraturaRef.current.value
        ? maxKvadraturaRef.current.value
        : null,
      prodaja: prodajaRef.current?.checked ? prodajaRef.current.checked : null,
      grejanje: grejanjeRef.current?.value ? grejanjeRef.current.value : null,
      spratnost: floorNumberRef.current.value
        ? floorNumberRef.current.value
        : null,
      sobe: sobeRef.current?.value ? sobeRef.current.value : null,
      kupatila: kupatilaRef.current?.value ? kupatilaRef.current.value : null,
      parkingMesto: parkingMestoRef.current?.checked
        ? parkingMestoRef.current.checked
        : null,
      ostava: ostavaRef.current?.checked ? ostavaRef.current.checked : null,
      zajednickaProstorija: zajednickaProstorijaRef.current?.checked
        ? zajednickaProstorijaRef.current.checked
        : null,
      oprema: opremaRef.current?.checked ? opremaRef.current.checked : null,
      pomocnoSkladiste: pomocnoSkladisteRef.current?.checked
        ? pomocnoSkladisteRef.current.checked
        : null,
      ventilacija: ventilacijaRef.current?.checked
        ? ventilacijaRef.current.checked
        : null,
      uknjizen: uknjizenRef.current?.checked
        ? uknjizenRef.current.checked
        : null,
      garaze: garazeRef.current?.value ? garazeRef.current.value : null,
      stanje: stanjeRef.current?.value ? stanjeRef.current.value : null,
      internet: internetRef.current?.checked
        ? internetRef.current.checked
        : null,
      optickaMreza: opticalNetworkRef.current?.checked
        ? opticalNetworkRef.current.checked
        : null,
      fiksniTelefon: phoneRef.current?.checked
        ? phoneRef.current.checked
        : null,

      sortByPrice: "",
    }));
  }

  return (
    <>
      <div className="click-closed"></div>

      <div className="box-collapse text-start">
        <div className="title-box-d">
          <h3 className="title-d">Pretraga nekretnina</h3>
        </div>
        <span
          className="close-box-collapse right-boxed bi bi-x"
          onClick={closeSearchMenu}
        ></span>
        <div className="box-collapse-wrap form">
          <form className="form-a">
            <div className="row">
              <div className="col-md-12 mb-2">
                <div className="form-group">
                  <label className="pb-2" htmlFor="Type">
                    Naziv
                  </label>
                  <input
                    ref={nazivRef}
                    type="text"
                    className="form-control form-control-lg form-control-a"
                    placeholder="Naziv"
                  />
                </div>
              </div>
              <div className="col-md-12 my-2">
                <div className="form-check">
                  <label className="form-check-label" htmlFor="Type">
                    Prodaja
                  </label>
                  <input
                    ref={prodajaRef}
                    type="checkbox"
                    className="form-check-input"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="Type">
                    Tip
                  </label>
                  <select
                    className="form-control form-select form-control-a"
                    id="Type"
                    ref={tipRef}
                    onChange={(event) =>
                      setTypeOfRealEstate(event.target.value)
                    }
                  >
                    <option value="lokali">Lokali</option>
                    <option value="stan/kuca">Stambeni objekti</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="city">
                    Grad
                  </label>
                  <select
                    className="form-control form-select form-control-a"
                    id="city"
                    ref={gradRef}
                  >
                    <option value=""></option>
                    {cities.map((city) => {
                      return (
                        <option key={city.id} value={city.id}>
                          {city.attributes.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="price">
                    Minimalna cena
                  </label>
                  <input
                    min={50000}
                    type="number"
                    className="form-control form-control-a"
                    id="min-price"
                    ref={minCenaRef}
                  />
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="price">
                    Maksimalna cena
                  </label>
                  <input
                    min={50001}
                    type="number"
                    className="form-control form-control-a"
                    id="max-price"
                    ref={maxCenaRef}
                  />
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-b-n "
                  data-bs-toggle="collapse"
                  data-bs-target="#advancedSearch"
                >
                  <i className="bi bi-plus-lg"></i>
                  <span>Napredna pretraga</span>
                </button>
              </div>

              <div className="collapse my-2 px-5" id="advancedSearch">
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <div className="form-group mt-3">
                      <label className="pb-2" htmlFor="price">
                        Minimalna kvadratura
                      </label>
                      <input
                        min={1}
                        type="number"
                        className="form-control form-control-a"
                        id="min-surface"
                        ref={minKvadraturaRef}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div className="form-group mt-3">
                      <label className="pb-2" htmlFor="price">
                        Maksimalna kvadratura
                      </label>
                      <input
                        min={2}
                        type="number"
                        className="form-control form-control-a"
                        id="max-surface"
                        ref={maxKvadraturaRef}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div className="form-group mt-3">
                      <label className="pb-2" htmlFor="Type">
                        Grejanje
                      </label>
                      <select
                        className="form-control form-select form-control-a"
                        id="Type"
                        ref={grejanjeRef}
                      >
                        <option value=""></option>
                        <option value="CG">CG</option>
                        <option value="Gas">Gas</option>
                        <option value="Struja">Struja</option>
                      </select>
                    </div>
                  </div>

                  {typeOfRealEstate === "stan/kuca" && (
                    <>
                      <div className="col-md-6 mb-2">
                        <div className="form-group mt-3">
                          <label className="pb-2" htmlFor="bedrooms">
                            Spavaće sobe
                          </label>
                          <select
                            className="form-control form-select form-control-a"
                            id="bedrooms"
                            ref={sobeRef}
                          >
                            <option></option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6 mb-2">
                        <div className="form-group mt-3">
                          <label className="pb-2" htmlFor="bathrooms">
                            Kupatila
                          </label>
                          <select
                            className="form-control form-select form-control-a"
                            id="bathrooms"
                            ref={kupatilaRef}
                          >
                            <option></option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6 mb-2">
                        <div className="form-group mt-3">
                          <label className="pb-2" htmlFor="state">
                            Stanje
                          </label>
                          <select
                            className="form-control form-select form-control-a"
                            id="state"
                            ref={stanjeRef}
                          >
                            <option></option>
                            <option value="Prazan">Prazan</option>
                            <option value="Polunamešten">Polunamešten</option>
                            <option value="Namešten">Namešten</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6 mb-2">
                        <div className="form-group mt-3">
                          <label className="pb-2" htmlFor="floorNumber">
                            Sprat
                          </label>
                          <input
                            min={0}
                            type="number"
                            className="form-control form-control-a"
                            id="floorNumber"
                            ref={floorNumberRef}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="col-6 form-check">
                          <input
                            type="checkbox"
                            id="chekcboxParkingMesto"
                            className="form-check-input"
                            ref={parkingMestoRef}
                          />
                          <label className="form-label">Parking mesto</label>
                        </div>

                        <div className="col-6 form-check">
                          <input
                            type="checkbox"
                            id="checkboxOstava"
                            className="form-check-input"
                            ref={ostavaRef}
                          />
                          <label className="form-label">Ostava</label>
                        </div>
                        <div className="col-6 form-check">
                          <input
                            type="checkbox"
                            id="checkboxZajednickaProstorija"
                            className="form-check-input"
                            ref={zajednickaProstorijaRef}
                          />
                          <label className="form-label">
                            Zajednička prostorija
                          </label>
                        </div>
                      </div>
                    </>
                  )}

                  {typeOfRealEstate === "lokali" && (
                    <>
                      <div className="col-md-6 mb-2">
                        <div className="form-group mt-3">
                          <label className="pb-2" htmlFor="garage">
                            Garaže
                          </label>
                          <input
                            max={5}
                            type="number"
                            className="form-control form-control-a"
                            id="garage"
                            ref={garazeRef}
                          />
                        </div>
                      </div>

                      <div className="col-6 form-check">
                        <input
                          type="checkbox"
                          id="chekcboxVentilacija"
                          className="form-check-input"
                          ref={ventilacijaRef}
                        />
                        <label className="form-label">Ventilacija</label>
                      </div>

                      <div className="col-6 form-check">
                        <input
                          type="checkbox"
                          id="checkboxPomocnoSkladiste"
                          className="form-check-input"
                          ref={pomocnoSkladisteRef}
                        />
                        <label className="form-label">Pomoćno skladište</label>
                      </div>
                      <div className="col-6 form-check">
                        <input
                          type="checkbox"
                          id="checkboxOprema"
                          className="form-check-input"
                          ref={opremaRef}
                        />
                        <label className="form-label">Sa opremom</label>
                      </div>
                    </>
                  )}

                  <div className="col-6 form-check">
                    <input
                      type="checkbox"
                      id="checkboxUknjizen"
                      className="form-check-input"
                      ref={uknjizenRef}
                    />
                    <label className="form-label">Uknjižen</label>
                  </div>

                  <div className="col-6 form-check">
                    <input
                      type="checkbox"
                      id="checkboxInternet"
                      className="form-check-input"
                      ref={internetRef}
                    />
                    <label className="form-label">Internet</label>
                  </div>

                  <div className="col-6 form-check">
                    <input
                      type="checkbox"
                      id="checkboxOptics"
                      className="form-check-input"
                      ref={opticalNetworkRef}
                    />
                    <label className="form-label">Optička mreža</label>
                  </div>

                  <div className="col-6 form-check">
                    <input
                      type="checkbox"
                      id="checkboxPhone"
                      className="form-check-input"
                      ref={phoneRef}
                    />
                    <label className="form-label">Fiksni telefon</label>
                  </div>
                </div>
              </div>

              <div className="col-md-12 mt-3">
                <button type="button" className="btn btn-b" onClick={search}>
                  Pretraga
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
