import PageIntro from "../Common/PageIntro";
import HomesList from "./HomesList";
import { useEffect, useState } from "react";
import { getHomes } from "../../services/RealEstateService";
import Loader from "../Common/Loader";
import { hideLoader, showLoader } from "../../utils";
import Pagination from "../Common/Pagination";

function HomesPage() {
  const pageIntroProps = {
    title: "Kuce i stanovi",
    subtitle: "Stambeni objekti",
    pathLabel: "Kuce i stanovi",
  };

  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    total: 1
  });

  function changePage(pageNumber) {
    showLoader();
    getHomes(pageNumber).then(response => {
      handleRetrievedHomes(response);
    });
  }

  useEffect(() => {
    getHomes().then(response => {
      handleRetrievedHomes(response);
    });
  }, []);

  function handleRetrievedHomes(response) {
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
        rooms: item.attributes.rooms,
        bathrooms: item.attributes.bathrooms,
        garages: item.attributes.garages,
        surface: item.attributes.surface,
        price: item.attributes.price,
        imageUrl: "http://localhost:1337" + imageUrl,
        overviewLink: "/homes/" + item.id,
      }
    });

    setItems(flatsAndHouses);

    const responsePagination = response.data.meta.pagination;
    setPagination({
      currentPage: responsePagination.page,
      total: responsePagination.pageCount
    });
    hideLoader();
  }

  return (
    <>
      <PageIntro data={pageIntroProps} />
      <HomesList items={items} />
      <Pagination pagination={pagination} changePage={changePage} />
      <Loader />
    </>
  )
}

export default HomesPage;
