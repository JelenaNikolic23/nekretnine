import jQuery from 'jquery'; 
import axios from 'axios';


function getHomes(page=1, searchOptions) {
    const queryParams = jQuery.param({
        "filters[type]": "stan/kuca",
        "filters[title][$contains]": searchOptions?.name,
        "pagination[page]": page,
        "pagination[pageSize]": 9,
        populate: "*"
    });

    return axios.get("http://localhost:1337/api/real-estates?" + queryParams);
}

function getSingleHome(homeId) {
    const queryParams = jQuery.param({
        "filters[type]": "lokal",
        populate: "pictures,agent.profilePicture,city"
    });

    return axios.get("http://localhost:1337/api/real-estates/" + homeId + "?" + queryParams);
}

function getLocals(page=1) {
    const queryParams = jQuery.param({
        "filters[type]": "lokal",
        "pagination[page]": page,
        "pagination[pageSize]": 9,
        populate: "*"
    });

    return axios.get("http://localhost:1337/api/real-estates?" + queryParams);
}

function getSingleLocal(homeId) {
    const queryParams = jQuery.param({
        "filters[type]": "lokal",
        populate: "pictures,agent.profilePicture,city"
    });

    return axios.get("http://localhost:1337/api/real-estates/" + homeId + "?" + queryParams);
}

function saveNewRealEstate(requestBody, user) {
    return axios.post("http://localhost:1337/api/real-estates", {
        data: {
        ...requestBody,
        "createdAt": (new Date()).toISOString(),
        "publishedAt": (new Date()).toISOString(),
        "agent": user.user.id
        }
    },
    {
        headers: {
            Authorization: `Bearer ${user.jwt}`
        }
    });
}

function savePhotosForRealEstate(realEstateId, photosArray, user) {
    const formData = new FormData();
    formData.append("ref", "api::real-estate.real-estate");
    formData.append("refId", realEstateId);
    formData.append("field", "pictures");
    photosArray.forEach(photo => {
        formData.append("files", photo)
    });

    return axios.post("http://localhost:1337/api/upload", formData,
    {
        headers: {
            Authorization: `Bearer ${user.jwt}`
        }
    });
}

export {
    getHomes,
    getSingleHome,
    getLocals,
    getSingleLocal,
    saveNewRealEstate,
    savePhotosForRealEstate
}
