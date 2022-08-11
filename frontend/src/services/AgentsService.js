import jQuery from 'jquery'; 
import axios from 'axios';


function getAgents() {
    const queryParams = jQuery.param({
        populate: "*"
    });

    return axios.get("http://localhost:1337/api/agents?" + queryParams);
}

export {
    getAgents
}