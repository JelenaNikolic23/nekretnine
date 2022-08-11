import { useEffect, useState } from "react";
import { getAgents } from "../../services/AgentsService";
import { hideLoader } from "../../utils";
import Loader from "../Common/Loader";
import PageIntro from "../Common/PageIntro";
import AgentsList from "./AgentsList";

function AgentsPage() {

    const pageIntroProps = {
        title: "Agenti",
        subtitle: "Predstavljamo Vam tim agenata Super nekretnina",
        pathLabel: "Agenti"
    }

    const [agents, setAgents] = useState([]);

    useEffect(() => {
        getAgents().then(response => {
            if (response.status !== 200) {

            }
            console.log(response)
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
            hideLoader();
        });
    }, []);

    return (
        <>
            <PageIntro data={pageIntroProps} />
            <AgentsList agents={agents} />
            <Loader />
        </>
    )
}

export default AgentsPage;