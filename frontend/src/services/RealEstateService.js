import jQuery from 'jquery'; 
import axios from 'axios';


function getHomes(page=1) {
    const queryParams = jQuery.param({
        "filters[type]": "stan/kuca",
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

export {
    getHomes,
    getSingleHome,
    getLocals,
    getSingleLocal
}
