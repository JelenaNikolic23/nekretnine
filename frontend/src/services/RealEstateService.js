import jQuery from "jquery";
import axios from "axios";

function getHomes(page = 1, searchOptions) {
  const filteringOptions = {
    "filters[type]": "stan/kuca",
    "pagination[page]": page,
    "pagination[pageSize]": 9,
    populate: "*",
  };

  if (searchOptions?.naziv) {
    filteringOptions["filters[title][$contains]"] = searchOptions?.naziv;
  }

  if (searchOptions?.grad) {
    filteringOptions["filters[city]"] = searchOptions?.grad;
  }

  if (searchOptions?.minCena) {
    filteringOptions["filters[price][$gt]"] = searchOptions?.minCena;
  }

  if (searchOptions?.maxCena) {
    filteringOptions["filters[price][$lt]"] = searchOptions?.maxCena;
  }

  if (searchOptions?.minKvadratura) {
    filteringOptions["filters[surface][$gt]"] = searchOptions?.minKvadratura;
  }

  if (searchOptions?.maxKvadratura) {
    filteringOptions["filters[surface][$lt]"] = searchOptions?.maxKvadratura;
  }

  if (searchOptions?.spratnost) {
    filteringOptions["filters[floorNumber]"] = searchOptions?.spratnost;
  }

  if (searchOptions?.sobe) {
    filteringOptions["filters[rooms]"] = +searchOptions?.sobe;
  }

  if (searchOptions?.kupatila) {
    filteringOptions["filters[bathrooms]"] = +searchOptions?.kupatila;
  }

  if (searchOptions?.parkingMesto) {
    filteringOptions["filters[parkingPlace]"] = true;
  }

  if (searchOptions?.ostava) {
    filteringOptions["filters[keepingRoom]"] = true;
  }

  if (searchOptions?.zajednickaProstorija) {
    filteringOptions["filters[sharedRoom]"] = true;
  }

  if (searchOptions?.prodaja) {
    filteringOptions["filters[forSale]"] = true;
  }

  if (searchOptions?.grejanje) {
    filteringOptions["filters[heating]"] = searchOptions.grejanje;
  }

  if (searchOptions?.uknjizen) {
    filteringOptions["filters[legalized]"] = searchOptions.uknjizen;
  }

  if (searchOptions?.garaze) {
    filteringOptions["filters[garages]"] = searchOptions.garaze;
  }

  if (searchOptions?.stanje) {
    filteringOptions["filters[state]"] = searchOptions.stanje;
  }

  if (searchOptions?.internet) {
    filteringOptions["filters[internet]"] = searchOptions.internet;
  }

  if (searchOptions?.fiksniTelefon) {
    filteringOptions["filters[phone]"] = searchOptions.fiksniTelefon;
  }

  if (searchOptions?.optickaMreza) {
    filteringOptions["filters[opticalNetwork]"] = searchOptions.optickaMreza;
  }

  if (searchOptions?.sortByPrice) {
    if (searchOptions.sortByPrice.includes("asc")) {
      filteringOptions["sort[0]"] = "price:asc";
    } else if (searchOptions.sortByPrice.includes("desc")) {
      filteringOptions["sort[0]"] = "price:desc";
    }
  }

  return axios.get(
    "http://localhost:1337/api/real-estates?" + jQuery.param(filteringOptions)
  );
}

function getSingleHome(homeId) {
  const queryParams = jQuery.param({
    "filters[type]": "lokal",
    populate: "pictures,agent.profilePicture,city",
  });

  return axios.get(
    "http://localhost:1337/api/real-estates/" + homeId + "?" + queryParams
  );
}

function getLocals(page = 1, searchOptions) {
  const filteringOptions = {
    "filters[type]": "lokal",
    "pagination[page]": page,
    "pagination[pageSize]": 9,
    populate: "*",
  };

  if (searchOptions?.naziv) {
    filteringOptions["filters[title][$contains]"] = searchOptions?.naziv;
  }

  if (searchOptions?.grad) {
    filteringOptions["filters[city]"] = searchOptions?.grad;
  }

  if (searchOptions?.minCena) {
    filteringOptions["filters[price][$gt]"] = searchOptions?.minCena;
  }

  if (searchOptions?.maxCena) {
    filteringOptions["filters[price][$lt]"] = searchOptions?.maxCena;
  }

  if (searchOptions?.minKvadratura) {
    filteringOptions["filters[surface][$gt]"] = searchOptions?.minKvadratura;
  }

  if (searchOptions?.maxKvadratura) {
    filteringOptions["filters[surface][$lt]"] = searchOptions?.maxKvadratura;
  }

  if (searchOptions?.parkingMesto) {
    filteringOptions["filters[parkingPlace]"] = true;
  }

  if (searchOptions?.zajednickaProstorija) {
    filteringOptions["filters[sharedRoom]"] = true;
  }

  if (searchOptions?.stanje) {
    filteringOptions["filters[state]"] = searchOptions.stanje;
  }

  if (searchOptions?.oprema) {
    filteringOptions["filters[equipmentIncluded]"] = true;
  }

  if (searchOptions?.pomocnoSkladiste) {
    filteringOptions["filters[helperWarehouse]"] = true;
  }

  if (searchOptions?.ventilacija) {
    filteringOptions["filters[ventilation]"] = true;
  }

  if (searchOptions?.prodaja) {
    filteringOptions["filters[forSale]"] = true;
  }

  if (searchOptions?.grejanje) {
    filteringOptions["filters[heating]"] = searchOptions.grejanje;
  }

  if (searchOptions?.uknjizen) {
    filteringOptions["filters[legalized]"] = searchOptions.uknjizen;
  }

  if (searchOptions?.internet) {
    filteringOptions["filters[internet]"] = searchOptions.internet;
  }

  if (searchOptions?.fiksniTelefon) {
    filteringOptions["filters[phone]"] = searchOptions.fiksniTelefon;
  }

  if (searchOptions?.optickaMreza) {
    filteringOptions["filters[opticalNetwork]"] = searchOptions.optickaMreza;
  }

  if (searchOptions?.sortByPrice) {
    if (searchOptions.sortByPrice.includes("asc")) {
      filteringOptions["sort[0]"] = "price:asc";
    } else if (searchOptions.sortByPrice.includes("desc")) {
      filteringOptions["sort[0]"] = "-price:desc";
    }
  }
  return axios.get(
    "http://localhost:1337/api/real-estates?" + jQuery.param(filteringOptions)
  );
}

function getSingleLocal(homeId) {
  const queryParams = jQuery.param({
    "filters[type]": "lokal",
    populate: "pictures,agent.profilePicture,city",
  });

  return axios.get(
    "http://localhost:1337/api/real-estates/" + homeId + "?" + queryParams
  );
}

function saveNewRealEstate(requestBody, user) {
  return axios.post(
    "http://localhost:1337/api/real-estates",
    {
      data: {
        ...requestBody,
        createdAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        agent: parseInt(user.user.id),
      },
    },
    {
      headers: {
        Authorization: `Bearer ${user.jwt}`,
      },
    }
  );
}

function savePhotosForRealEstate(realEstateId, photosArray, user) {
  const formData = new FormData();
  formData.append("ref", "api::real-estate.real-estate");
  formData.append("refId", realEstateId);
  formData.append("field", "pictures");
  photosArray.forEach((photo) => {
    formData.append("files", photo);
  });

  return axios.post("http://localhost:1337/api/upload", formData, {
    headers: {
      Authorization: `Bearer ${user.jwt}`,
    },
  });
}

export {
  getHomes,
  getSingleHome,
  getLocals,
  getSingleLocal,
  saveNewRealEstate,
  savePhotosForRealEstate,
};
