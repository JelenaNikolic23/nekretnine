import PageIntro from "../Common/PageIntro";
import HousesAndFlatsList from "./HousesAndFlatsList";

function FlatsAndHousesPage() {

    const pageIntroProps = {
        title: "Kuce i stanovi",
        subtitle: "Stambeni objekti",
        pathLabel: "Kuce i stanovi"
    }

    return (
        <>
            <PageIntro data={pageIntroProps} />
            <HousesAndFlatsList />
        </>
    )
}

export default FlatsAndHousesPage;