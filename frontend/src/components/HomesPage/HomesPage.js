import PageIntro from "../Common/PageIntro";
import HomesList from "./HomesList";
import { useEffect, useState } from "react";
import { getHomes } from "../../services/RealEstateService";
import Loader from "../Common/Loader";
import { hideLoader } from "../../utils";


function HomesPage() {

    const pageIntroProps = {
        title: "Kuce i stanovi",
        subtitle: "Stambeni objekti",
        pathLabel: "Kuce i stanovi"
    }

    const [items, setItems] = useState([]);

    useEffect(() => {
        getHomes().then(response => {
            if (response.status !== 200) {

            }

            const flatsAndHouses = response.data.data.map(item => {
                let imageUrl = "";
                if (item.attributes.pictures.data.length > 0) {
                    imageUrl = item.attributes.pictures.data[0].attributes.url;
                }

                return {
                    id: item.id,
                    title: item.attributes.title,
                    location: item.attributes.location,
                    city: item.attributes.city.data.attributes.name,
                    bedrooms: item.attributes.bedrooms,
                    bathrooms: item.attributes.bathrooms,
                    garages: item.attributes.garages,
                    surface: item.attributes.surface,
                    price: item.attributes.price,
                    imageUrl: "http://localhost:1337" + imageUrl,
                    overviewLink: "/homes/" + item.id,
                }
            });

            setItems(flatsAndHouses);
            hideLoader();
        });
    }, []);

    return (
        <>
            <PageIntro data={pageIntroProps} />
            <HomesList items={items} />
            <Loader />
        </>
    )
}

export default HomesPage;