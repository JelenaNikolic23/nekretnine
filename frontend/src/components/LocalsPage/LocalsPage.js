import { useEffect, useState } from "react";
import { getLocals } from "../../services/RealEstateService";
import { hideLoader } from "../../utils";
import Loader from "../Common/Loader";
import PageIntro from "../Common/PageIntro";
import LocalsList from "./LocalsList";


function LocalsPage() {

    const pageIntroProps = {
        title: "Lokali",
        subtitle: "Poslovni objekti",
        pathLabel: "Lokali"
    }

    const [items, setItems] = useState([]);

    useEffect(() => {
        getLocals().then(response => {
            if (response.status !== 200) {

            }

            const locals = response.data.data.map(item => {
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

            setItems(locals);
            hideLoader();
        });
    }, []);

    return (
        <>
            <PageIntro data={pageIntroProps} />
            <LocalsList items={items} />
            <Loader />
        </>
    )
}

export default LocalsPage;