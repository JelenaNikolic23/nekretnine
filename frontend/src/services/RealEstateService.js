import jQuery from 'jquery'; 
import axios from 'axios';


function getHousesAndFlats() {
    const queryParams = jQuery.param({
        type: "kuce/stanovi",
        populate: "*"
    });

    return axios.get("http://localhost:1337/api/real-estates?" + queryParams);
}

export {
    getHousesAndFlats
}
