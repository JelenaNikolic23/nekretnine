import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleLocal } from "../../services/RealEstateService";
import { hideLoader } from "../../utils";
import Loader from "../Common/Loader";
import PageIntro from "../Common/PageIntro";
import ContactAgentSection from "../HomeOverviewPage/ContactAgentSection";
import LocalDetails from "./LocalDetails";
import LocalOverviewCarousel from "./LocalOverviewCarousel";

function LocalOverviewPage(props) {
  const [pageIntroProps, setPageIntroProps] = useState({
    title: "Naslov objekta",
    subtitle: "Lokacija",
    pathLabel: "Lokali",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const [local, setLocal] = useState({
    id: "",
    title: "",
    location: "",
    city: "",
    type: "",
    description: "",
    rooms: 0,
    bathrooms: 0,
    surface: 0,
    price: 0,
    heating: "",
    outsideSurface: 0,
    equipmentIncluded: false,
    helperWarehouse: false,
    ventilation: false,
    latitude: 0,
    longitude: 0,
    forSale: false,
  });

  const [imageUrls, setImageUrls] = useState([]);
  const [agent, setAgent] = useState({});

  useEffect(() => {
    getSingleLocal(id)
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
          pathLabel: "Lokali",
        });

        const tempLocal = {
          id: item.id,
          title: item.attributes.title,
          location: item.attributes.location,
          type: item.attributes.type,
          description: item.attributes.description,
          city: item.attributes.city.data.attributes.name,
          rooms: item.attributes.rooms,
          bathrooms: item.attributes.bathrooms,
          surface: item.attributes.surface,
          price: item.attributes.price,
          heating: item.attributes.heating,
          outsideSurface: item.attributes.outsideSurface,
          equipmentIncluded: item.attributes.equipmentIncluded,
          helperWarehouse: item.attributes.helperWarehouse,
          ventilation: item.attributes.ventilation,
          latitude: item.attributes.latitude,
          longitude: item.attributes.longitude,
          forSale: item.attributes.forSale,
          internet: item.attributes.internet,
          opticalNetwork: item.attributes.opticalNetwork,
          phone: item.attributes.phone,
        };

        setAgent({
          ...item.attributes.agent.data.attributes,
          imageUrl:
            "http://localhost:1337" +
            item.attributes.agent.data.attributes.profilePicture.data.attributes
              .url,
        });
        setLocal(tempLocal);
        hideLoader();
      })
      .catch((err) => {
        navigate("/not-found");
      });
  }, []);

  return (
    <>
      console.log(forSale, "ovde");
      <PageIntro data={pageIntroProps} />
      <section className="property-single nav-arrow-b">
        <div className="container">
          <LocalOverviewCarousel images={imageUrls} />

          <div className="row">
            <LocalDetails local={local} />
            <ContactAgentSection agent={agent} />
            <Loader />
          </div>
        </div>
      </section>
    </>
  );
}

export default LocalOverviewPage;
