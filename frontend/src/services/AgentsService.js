import jQuery from 'jquery'; 
import axios from 'axios';


function getAgents(page=1) {
    const queryParams = jQuery.param({
        populate: "*",
        "pagination[page]": page,
        "pagination[pageSize]": 9,
    });

    return axios.get("http://localhost:1337/api/agents?" + queryParams);
}

export {
    getAgents
}