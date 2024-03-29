import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    pathLabel: "Kuca/Stan",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const [home, setHome] = useState({
    id: "",
    title: "",
    location: "",
    city: "",
    type: "",
    description: "",
    rooms: 0,
    bathrooms: 0,
    garages: 0,
    balcons: 0,
    surface: 0,
    price: 0,
    cableNetwork: false,
    keepingRoom: false,
    parkingPlace: false,
    sharedRoom: false,
    forSale: false,
    latitude: 0,
    longitude: 0,
  });
  const [imageUrls, setImageUrls] = useState([]);
  const [agent, setAgent] = useState({});

  useEffect(() => {
    getSingleHome(id)
      .then((response) => {
        if (response.status !== 200) {
        }

        const item = response.data.data;

        setImageUrls(
          item.attributes.pictures.data.map((picture) => {
            return "http://localhost:1337" + picture.attributes.url;
          })
        );

        setPageIntroProps({
          title: item.attributes.title,
          subtitle:
            item.attributes.location +
            ", " +
            item.attributes.city.data.attributes.name,
          pathLabel: "Kuca/Stan",
        });

        const tempHome = {
          id: item.id,
          title: item.attributes.title,
          location: item.attributes.location,
          city: item.attributes.city.data.attributes.name,
          type: item.attributes.type,
          description: item.attributes.description,
          bedrooms: item.attributes.rooms,
          bathrooms: item.attributes.bathrooms,
          garages: item.attributes.garages,
          balcons: item.attributes.balcons,
          surface: item.attributes.surface,
          price: item.attributes.price,
          heating: item.attributes.heating,
          legalized: item.attributes.legalized,
          floorNumber: item.attributes.floorNumber,
          cableNetwork: item.attributes.cableNetwork,
          keepingRoom: item.attributes.keepingRoom,
          parkingPlace: item.attributes.parkingPlace,
          sharedRoom: item.attributes.sharedRoom,
          latitude: item.attributes.latitude,
          longitude: item.attributes.longitude,
          forSale: item.attributes.forSale,
          internet: item.attributes.internet,
          opticalNetwork: item.attributes.opticalNetwork,
          phone: item.attributes.phone,
          state: item.attributes.state,
        };

        setAgent({
          ...item.attributes.agent.data.attributes,
          imageUrl:
            "http://localhost:1337" +
            item.attributes.agent.data.attributes.profilePicture.data.attributes
              .url,
        });
        setHome(tempHome);
        hideLoader();
      })
      .catch((err) => {
        navigate("/not-found");
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
  );
}

export default HomeOverviewPage;
