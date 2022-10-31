import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveNewRealEstate, savePhotosForRealEstate } from "../../services/RealEstateService";
import MultipleImagesUploader from "../Common/MultipleImagesUploader";
import PageIntro from "../Common/PageIntro";
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from "../../context/UserContext";
import { getAllCities } from "../../services/CommonServices";

export default function CreateRealEstate(props) {

    const navigation = useNavigate();

    const pageIntroProps = {
        title: "Nova nekretnina",
        subtitle: "Nekretnine",
        pathLabel: "Nova nekretnina"
    };

    const {user, setUser} = useContext(UserContext);

    const [newRealEstate, setNewRealEstate] = useState({
        "title": "",
        "description": "",
        "type": "stan/kuca",
        "location": "",
        "city": 1,
        "price": 0,
        "surface": 0,
        "bathrooms": 0,
        "garages": 0,
        "balcons": 0,
        "cableNetwork": false,
        "keepingRoom": false,
        "parkingPlace": false,
        "sharedRoom": false,
        "createdAt": "",
        "updatedAt": "",
        "publishedAt": "",
        "floorNumber": 0,
        "legalized": false,
        "heating": "CG",
        "ventilation": false,
        "equipmentIncluded": false,
        "helperWarehouse": false,
        "outsideSurface": 0,
        "rooms": 0,
        "agent": 1,
        "pictures": [],
    });

    const [cities, setCities] = useState([]);

    const [imagesArray, setImagesArray] = useState([]);
    const [homesSelelected, setHomesSelected] = useState(true);
    const [savingInProgress, setSavingInProgress] = useState(false);

    useEffect(() => {
        if (!user) {
            navigation("/login");
        }

        getCities();
        
    }, []);

    const getCities = () => {
        getAllCities().then(res => {
            setCities(res.data.data);
        })
    };

    const handleTextProperyChanged = (event) => {
        setNewRealEstate(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }

    const handleIntNumberProperyChanged = (event) => {
        setNewRealEstate(prev => ({
            ...prev,
            [event.target.name]: parseInt(event.target.value)
        }));
    }

    const handleFloatNumberProperyChanged = (event) => {
        setNewRealEstate(prev => ({
            ...prev,
            [event.target.name]: parseFloat(event.target.value)
        }));
    }

    const handleCheckProperyChanged = (event) => {
        setNewRealEstate(prev => ({
            ...prev,
            [event.target.name]: event.target.checked
        }));
    }

    const handleTypeChanged = (event) => {
        setHomesSelected(event.target.value === "Stanovi/Kuce");
        handleTextProperyChanged(event);
    }

    const save = () => {
        if (!imagesArray.length) {
            toast.error("Morate da izaberete bar jednu sliku", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                className: "Toastify__toast-theme--colored"
                });
            return;
        }

        newRealEstate.city = parseInt(newRealEstate.city);

        setSavingInProgress(true);
        saveNewRealEstate(newRealEstate, user)
            .then(response => {
                const newRealEstateId = response.data.data.id;
                savePhotosForRealEstate(newRealEstateId, imagesArray, user)
                    .then(response => {
                        toast.success('Uspesno sacuvano!', {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            className: "Toastify__toast-theme--colored"
                            });

                            setTimeout(() => {
                                if (newRealEstate.type === 'stan/kuca') {
                                    navigation("/homes");
                                } else {
                                    navigation("/locals");
                                }
                            }, 1500);
                    })
                    .catch(err => {
                        console.log(err)
                        toast.error(err.response.data.error.message, {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            className: "Toastify__toast-theme--colored"
                            });
                    })
                    .finally(() => {
                        setSavingInProgress(false);
                    })
            })
            .catch(err => {
                toast.error(err.response.data.error.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    className: "Toastify__toast-theme--colored"
                    });
                console.log(err);
            })
            .finally(() => {
                setSavingInProgress(false);
            })
    }
    
    return (
        <>
            <PageIntro data={pageIntroProps} />
            <form className="mt-5 w-75 m-auto">
                <div className="mb-3">
                    <label htmlFor="title" className="fw-bold">Naslov</label>
                    <input type="text" className="form-control" id="title" name="title" onChange={handleTextProperyChanged}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="fw-bold">Opis</label>
                    <textarea className="form-control" rows={3} id="description" name="description" onChange={handleTextProperyChanged}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="type" className="fw-bold">Tip</label>
                    <select className="form-select" id="type" name="type" onChange={handleTypeChanged}>
                        <option value={"stan/kuca"}>Stanovi/Kuce</option>
                        <option value={"lokal"}>Lokali</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="fw-bold">Grad</label>
                    <select className="form-select" id="city" name="city" onChange={handleIntNumberProperyChanged}>
                        {cities.map((city, index) => {
                            return (
                                <option key={index} value={city.id}>{city.attributes.name}</option>
                            )}
                        )}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="fw-bold">Lokacija</label>
                    <input type="text" className="form-control" id="location" name="location" onChange={handleTextProperyChanged} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="fw-bold">Cena</label>
                    <input type="number" className="form-control" id="price" name="price" onChange={handleIntNumberProperyChanged} />
                </div>
                <div className="mb-3">
                    <label htmlFor="surface" className="fw-bold">Povrsina</label>
                    <input type="number" className="form-control" id="surface" name="surface" onChange={handleFloatNumberProperyChanged} />
                </div>

                <div className="mb-3">
                    <label htmlFor="rooms" className="fw-bold">Prostorije</label>
                    <input type="number" className="form-control" id="rooms" name="rooms" onChange={handleIntNumberProperyChanged} />
                </div>

                <div className="mb-3">
                    <label htmlFor="type" className="fw-bold">Grejanje</label>
                    <select className="form-select" id="heating" name="heating" onChange={handleTextProperyChanged}>
                        <option value={"CG"}>Centralno grejanje</option>
                        <option value={"Gas"}>Gas</option>
                        <option value={"Struja"}>Struja</option>
                    </select>
                </div>

                {homesSelelected && 
                <>
                    <div className="mb-3">
                        <label htmlFor="floorNumber" className="fw-bold">Sprat</label>
                        <input type="number" className="form-control" id="floorNumber" name="floorNumber" onChange={handleIntNumberProperyChanged} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="bathrooms" className="fw-bold">Broj kupatila</label>
                        <input type="number" className="form-control" id="bathrooms" name="bathrooms" onChange={handleIntNumberProperyChanged} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="garages" className="fw-bold">Broj garaza</label>
                        <input type="number" className="form-control" id="garages" name="garages" onChange={handleIntNumberProperyChanged} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="balcons" className="fw-bold">Broj terasa</label>
                        <input type="number" className="form-control" id="balcons" name="balcons" onChange={handleIntNumberProperyChanged} />
                    </div>
                </>}

                <div className="form-check mb-3">
                    {homesSelelected && 
                    <div className="row mb-3">
                        <div className="col-4 d-flex justify-content-start" style={{columnGap: "5px"}}>
                            <input type="checkbox" className="form-check-input mr-2" id="cableNetwork" name="cableNetwork" onChange={handleCheckProperyChanged} />
                            <label htmlFor="cableNetwork" className="form-check-label">Kablovska</label>
                        </div>
                        <div className="col-4 d-flex justify-content-start" style={{columnGap: "5px"}}>
                            <input type="checkbox" className="form-check-input mr-2" id="keepingRoom" name="keepingRoom" onChange={handleCheckProperyChanged}  />
                            <label htmlFor="keepingRoom" className="form-check-label">Ostava</label>
                        </div>
                        <div className="col-4 d-flex justify-content-start" style={{columnGap: "5px"}}>
                            <input type="checkbox" className="form-check-input mr-2" id="sharedRoom" name="sharedRoom" onChange={handleCheckProperyChanged} />
                            <label htmlFor="sharedRoom" className="form-check-label">Zajednicka prostorija</label>
                        </div>
                    </div>
                    }

                    <div className="row mb-3">
                        {homesSelelected &&
                            <div className="col-4 d-flex justify-content-start" style={{columnGap: "5px"}}>
                                <input type="checkbox" className="form-check-input mr-2" id="parkingPlace" name="parkingPlace" onChange={handleCheckProperyChanged} />
                                <label htmlFor="parkingPlace" className="form-check-label">Parking mesto</label>
                            </div>
                        }

                        <div className="col-4 d-flex justify-content-start" style={{columnGap: "5px"}}>
                            <input type="checkbox" className="form-check-input mr-2" id="legalized" name="legalized" onChange={handleCheckProperyChanged} />
                            <label htmlFor="legalized" className="form-check-label">Legalizovano</label>
                        </div>

                    </div>
                    
                    {!homesSelelected &&
                    <>
                        <div className="row mb-3">
                            <div className="col-4 d-flex justify-content-start" style={{columnGap: "5px"}}>
                                <input type="checkbox" className="form-check-input mr-2" id="ventilation" name="ventilation" onChange={handleCheckProperyChanged} />
                                <label htmlFor="ventilation" className="form-check-label">Ventilacija</label>
                            </div>

                            <div className="col-4 d-flex justify-content-start" style={{columnGap: "5px"}}>
                                <input type="checkbox" className="form-check-input mr-2" id="equipmentIncluded" name="equipmentIncluded" onChange={handleCheckProperyChanged} />
                                <label htmlFor="equipmentIncluded" className="form-check-label">Oprema ukljucena</label>
                            </div>

                            <div className="col-4 d-flex justify-content-start" style={{columnGap: "5px"}}>
                                <input type="checkbox" className="form-check-input mr-2" id="outsideSurface" name="outsideSurface" onChange={handleCheckProperyChanged} />
                                <label htmlFor="outsideSurface" className="form-check-label">Spoljna povrsina</label>
                            </div>

                        </div>
                        
                        <div className="row mb-3">
                            <div className="col-4 d-flex justify-content-start" style={{columnGap: "5px"}}>
                                <input type="checkbox" className="form-check-input mr-2" id="helperWarehouse" name="helperWarehouse" onChange={handleCheckProperyChanged} />
                                <label htmlFor="helperWarehouse" className="form-check-label">Pomocno skladiste</label>
                            </div>

                        </div>
                    </>
                    }
                </div>

                <div className="my-5">
                    <label className="fw-bold">Izaberite slike</label>
                    <MultipleImagesUploader imageAdded={(images) => setImagesArray(images)} />
                </div>

                <div className="my-5">
                    <button type="button" className="btn btn-success" onClick={save}>Sacuvaj</button>
                </div>
                
                {savingInProgress &&
                    <div className="spinner-border text-success mb-3" role="status"></div>
                }
                
            </form>
            
            <ToastContainer />
        </>
    )
}