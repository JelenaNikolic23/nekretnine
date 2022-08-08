import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleHome } from "../../services/RealEstateService";
import { hideLoader } from "../../utils";
import Loader from "../Common/Loader";
import PageIntro from "../Common/PageIntro";
import ContactAgentSection from "./ContactAgentSection";
import HomeDetails from "./HomeDetails";
import HomeOverviewCarousel from "./HomeOverviewCarousel";

function HomeOverviewPage() {

    const [pageIntroProps, setPageIntroProps] = useState({
        title: "Naslov objekta",
        subtitle: "Lokacija",
        pathLabel: "Kuca/Stan"
    });

    const { id } = useParams();

    const [home, setHome] = useState({
        id: "",
        title: "",
        location: "",
        city: "",
        type: "",
        description: "",
        bedrooms: 0,
        bathrooms: 0,
        garages: 0,
        balcons: 0,
        surface: 0,
        price: 0,
        cableNetwork: false,
        keepingRoom: false,
        parkingPlace: false,
        sharedRoom: false,
    });
    const [imageUrls, setImageUrls] = useState([]);
    const [agent, setAgent] = useState({});

    useEffect(() => {
        getSingleHome(id).then(response => {
            if (response.status !== 200) {

            }

            const item = response.data.data;

            setImageUrls(item.attributes.pictures.data.map(picture => {
                return "http://localhost:1337" + picture.attributes.url;
            }));

            setPageIntroProps({
                title: item.attributes.title,
                subtitle: item.attributes.location + ", " + item.attributes.city.data.attributes.name,
                pathLabel: "Kuca/Stan"
            })

            const tempHome = {
                id: item.id,
                title: item.attributes.title,
                location: item.attributes.location,
                city: item.attributes.city.data.attributes.name,
                type: item.attributes.type,
                description: item.attributes.description,
                bedrooms: item.attributes.bedrooms,
                bathrooms: item.attributes.bathrooms,
                garages: item.attributes.garages,
                balcons: item.attributes.balcons,
                surface: item.attributes.surface,
                price: item.attributes.price,
                cableNetwork: item.attributes.cableNetwork,
                keepingRoom: item.attributes.keepingRoom,
                parkingPlace: item.attributes.parkingPlace,
                sharedRoom: item.attributes.sharedRoom,
            };
            
            setAgent({
                ...item.attributes.agent.data.attributes,
                imageUrl: "http://localhost:1337" + item.attributes.agent.data.attributes.profilePicture.data.attributes.url,
               });
            setHome(tempHome);
            hideLoader();
        });
    }, []);

    return (
        <>
            <PageIntro data={pageIntroProps} />

            <section className="property-single nav-arrow-b">
                <div className="container">
                    <HomeOverviewCarousel images={imageUrls} />

                    <div className="row">
                        <HomeDetails home={home} />
                        <ContactAgentSection agent={agent} />
                        <Loader />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeOverviewPage;
