import { useEffect, useState } from "react";
import { getAgents } from "../../services/AgentsService";
import { hideLoader, showLoader } from "../../utils";
import Loader from "../Common/Loader";
import PageIntro from "../Common/PageIntro";
import Pagination from "../Common/Pagination";
import AgentsList from "./AgentsList";

function AgentsPage() {

    const pageIntroProps = {
        title: "Agenti",
        subtitle: "Predstavljamo Vam tim agenata Super nekretnina",
        pathLabel: "Agenti"
    }

    const [agents, setAgents] = useState([]);

    const [pagination, setPagination] = useState({
        currentPage: 1,
        total: 1
    });

    function changePage(pageNumber) {
        showLoader();
        getAgents(pageNumber).then(response => {
            handleRetrievedAgents(response);
        });
    }

    useEffect(() => {
        getAgents().then(response => {
            handleRetrievedAgents(response);
        });
    }, []);

    const handleRetrievedAgents = (response) => {
        if (response.status !== 200) {

        }

        const agentsList = response.data.data.map(item => {
            let imageUrl = "";
            if (item.attributes.profilePicture.data) {
                imageUrl = item.attributes.profilePicture.data.attributes.url;
            }

            return {
                id: item.id,
                firstName: item.attributes.firstName,
                lastName: item.attributes.lastName,
                description: item.attributes.description,
                phoneNumber: item.attributes.phoneNumber,
                email: "TODO",
                instagramLink: item.attributes.instagramLink,
                facebookLink: item.attributes.facebookLink,
                linkedInLink: item.attributes.linkedInLink,
                tweeterLink: item.attributes.tweeterLink,
                imageUrl: "http://localhost:1337" + imageUrl,
            }
        });

        setAgents(agentsList);
        
        const responsePagination = response.data.meta.pagination;
        setPagination({
            currentPage: responsePagination.page,
            total: responsePagination.pageCount
        });

        hideLoader();
    }

    return (
        <>
            <PageIntro data={pageIntroProps} />
            <AgentsList agents={agents} />
            <Pagination pagination={pagination} changePage={changePage} />
            <Loader />
        </>
    )
}

export default AgentsPage;