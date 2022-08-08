import { useEffect } from "react";
import { hideLoader } from "../../utils";
import Loader from "../Common/Loader";
import HomePageCarousel from "./HomePageCarousel";


function HomePage() {

    useEffect(() => {
        setTimeout(() => {
            hideLoader();
        }, 500);
      });

    return (
        <>
            <HomePageCarousel />
            <Loader />
        </>
    )
}

export default HomePage;