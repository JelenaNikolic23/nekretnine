import PageIntro from "../Common/PageIntro";
import HomesList from "./HomesList";
import { useContext, useEffect, useState } from "react";
import { getHomes } from "../../services/RealEstateService";
import Loader from "../Common/Loader";
import { hideLoader, showLoader } from "../../utils";
import Pagination from "../Common/Pagination";
import { SearchContext } from "../../context/SearchContext";

function HomesPage() {
  const pageIntroProps = {
    title: "Kuće i stanovi",
    subtitle: "Stambeni objekti",
    pathLabel: "Kuće i stanovi",
  };

  const { searchOptions, setSearchOptions } = useContext(SearchContext);

  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    total: 1,
  });

  function changePage(pageNumber) {
    showLoader();
    getHomes(pageNumber, searchOptions).then((response) => {
      handleRetrievedHomes(response);
    });
  }

  useEffect(() => {
    getHomes().then((response) => {
      handleRetrievedHomes(response);
    });
  }, []);

  useEffect(() => {
    showLoader();
    getHomes(1, searchOptions).then((response) => {
      handleRetrievedHomes(response);
    });
  }, [searchOptions]);

  function handleRetrievedHomes(response) {
    if (response.status !== 200) {
    }

    const flatsAndHouses = response.data.data.map((item) => {
      let imageUrl = "";
      console.log(imageUrl, imageUrl);
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
        forSale: item.attributes.forSale,
        garages: item.attributes.garages,
        surface: item.attributes.surface,
        price: item.attributes.price,
        imageUrl: "http://localhost:1337" + imageUrl,
        overviewLink: "/homes/" + item.id,
      };
    });

    setItems(flatsAndHouses);

    const responsePagination = response.data.meta.pagination;
    setPagination({
      currentPage: responsePagination.page,
      total: responsePagination.pageCount,
    });

    hideLoader();
  }

  function sortBy(e) {
    setSearchOptions({
      ...searchOptions,
      sortByPrice: e.target.value,
    });
  }

  return (
    <>
      <PageIntro data={pageIntroProps} />
      {items.length !== 0 && (
        <form className="m-5">
          <div className="form-group row">
            <div className="col-9 text-end" style={{ width: "60%" }}>
              <label className="form-text">Sort by</label>
            </div>
            <div className="col-3 text-right">
              <select className="form-control" onChange={sortBy}>
                <option value=""></option>
                <option value="price-asc">Cena rastuće</option>
                <option value="price-desc">Cena opadajuće</option>
              </select>
            </div>
          </div>
        </form>
      )}
      <HomesList items={items} />
      <Pagination pagination={pagination} changePage={changePage} />
      <Loader />
    </>
  );
}

export default HomesPage;
