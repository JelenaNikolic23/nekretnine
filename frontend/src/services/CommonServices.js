import jQuery from 'jquery'; 
import axios from 'axios';


function getAllCities() {
    const queryParams = jQuery.param({
        populate: "*"
    });

    return axios.get("http://localhost:1337/api/cities?" + queryParams);
}

export {
    getAllCities
}