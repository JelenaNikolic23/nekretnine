import jQuery from 'jquery'; 
import axios from 'axios';


function getHomes() {
    const queryParams = jQuery.param({
        type: "kuce/stanovi",
        populate: "*"
    });

    return axios.get("http://localhost:1337/api/real-estates?" + queryParams);
}

function getSingleHome(homeId) {
    const queryParams = jQuery.param({
        type: "kuce/stanovi",
        populate: "pictures,agent.profilePicture,city"
    });

    return axios.get("http://localhost:1337/api/real-estates/" + homeId + "?" + queryParams);
}

function getLocals() {
    const queryParams = jQuery.param({
        type: "lokali",
        populate: "*"
    });

    return axios.get("http://localhost:1337/api/real-estates?" + queryParams);
}

function getSingleLocal(homeId) {
    const queryParams = jQuery.param({
        type: "lokali",
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