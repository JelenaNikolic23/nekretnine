import { useEffect, useState, useContext } from "react";
import { getLocals } from "../../services/RealEstateService";
import { hideLoader, showLoader } from "../../utils";
import Loader from "../Common/Loader";
import PageIntro from "../Common/PageIntro";
import Pagination from "../Common/Pagination";
import LocalsList from "./LocalsList";
import { SearchContext } from "../../context/SearchContext";

function LocalsPage() {

    const pageIntroProps = {
        title: "Lokali",
        subtitle: "Poslovni objekti",
        pathLabel: "Lokali"
    }

    const { searchOptions, setSearchOptions } = useContext(SearchContext);

    const [items, setItems] = useState([]);

    const [pagination, setPagination] = useState({
        currentPage: 1,
        total: 1
    });

    useEffect(() => {
        getLocals().then(response => {
            handleRetrievedLocals(response);
        });

    }, []);

    useEffect(() => {
        showLoader();
        getLocals(1, searchOptions).then(response => {
            handleRetrievedLocals(response);
        })
      }, [searchOptions]);

    function handleRetrievedLocals(response) {
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
                rooms: item.attributes.rooms,
                bathrooms: item.attributes.bathrooms,
                surface: item.attributes.surface,
                price: item.attributes.price,
                heating: item.attributes.heating,
                outsideSurface: item.attributes.outsideSurface,
                equipmentIncluded: item.attributes.equipmentIncluded,
                helperWarehouse: item.attributes.helperWarehouse,
                ventilation: item.attributes.ventilation,
                imageUrl: "http://localhost:1337" + imageUrl,
                overviewLink: "/locals/" + item.id,
            }
        });

        const responsePagination = response.data.meta.pagination
        setPagination({
            currentPage: responsePagination.page,
            total: responsePagination.pageCount
        })

        setItems(locals);
        hideLoader();
    }

    function changePage(pageNumber) {
        showLoader();
        getLocals(pageNumber, searchOptions).then(response => {
            handleRetrievedLocals(response);
        });
    }

    function sortBy(e) {
        setSearchOptions({
          ...searchOptions,
          sortByPrice: e.target.value
        });
      }

    return (
        <>
            <PageIntro data={pageIntroProps} />
            {items.length !== 0 &&
                <form className="m-5">
                    <div className="form-group row">
                    <div className="col-9 text-end">
                        <label className="form-text">Sort by</label>
                    </div>
                    <div className="col-3 text-right">
                        <select className="form-control" onChange={sortBy}>
                        <option value=""></option>
                        <option value="price-asc">Cena rastuce</option>
                        <option value="price-desc">Cena opadajuce</option>
                        </select>
                    </div>
                    </div>
                </form>}
            <LocalsList items={items} />
            <Pagination pagination={pagination} changePage={changePage} />
            <Loader />
        </>
    )
}

export default LocalsPage;