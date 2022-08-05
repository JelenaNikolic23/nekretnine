import PageIntro from "../Common/PageIntro";
import AgentsList from "./AgentsList";

function AgentsPage() {

    const pageIntroProps = {
        title: "Agenti",
        subtitle: "Predstavljamo Vam tim agenata Super nekretnina",
        pathLabel: "Agenti"
    }

    return (
        <>
            <PageIntro data={pageIntroProps} />
            <AgentsList />
        </>
    )
}

export default AgentsPage;