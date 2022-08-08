import PageIntro from "../Common/PageIntro";
import ContactAgentSection from "./ContactAgentSection";
import RealEstateDetails from "./RealEstateDetails";
import RealEstateOverviewCarousel from "./RealEstateOverviewCarousel";

function RealEstateOverviewPage() {

    const pageIntroProps = {
        title: "Naslov objekta",
        subtitle: "Lokacija",
        pathLabel: "Kuca/Stan"
    }

    return (
        <>
            <PageIntro data={pageIntroProps} />

            <section className="property-single nav-arrow-b">
                <div className="container">
                    <RealEstateOverviewCarousel />

                    <div className="row">
                        <RealEstateDetails />
                        <ContactAgentSection />
                    </div>
                </div>
            </section>
        </>
    )
}

export default RealEstateOverviewPage;
