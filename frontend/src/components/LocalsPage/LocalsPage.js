import PageIntro from "../Common/PageIntro";
import LocalsList from "./LocalsList";


function LocalsPage() {

    const pageIntroProps = {
        title: "Lokali",
        subtitle: "Poslovni objekti",
        pathLabel: "Lokali"
    }

    return (
        <>
            <PageIntro data={pageIntroProps} />
            <LocalsList />
        </>
    )
}

export default LocalsPage;