import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

function HomePageCarousel() {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides
            navigation
            loop={true}
            speed={2000}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, Navigation]}
            className="intro postition-relative">

            <SwiperSlide className="swiper-slide carousel-item-a intro bg-image text-start" style={{ backgroundImage: "url(https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg)" }}>
                <div className="overlay overlay-a"></div>
                <div className="intro-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="intro-body">
                                        <p className="intro-title-top">
                                            Vise od 10 gradova <br />
                                            u Republici Srbiji
                                        </p>
                                        <h1 className="intro-title mb-4 ">
                                            <span className="color-b">Stambeni objekti</span>
                                            <br /> Kuce i stanovi
                                        </h1>
                                        <p className="intro-subtitle intro-price">
                                            <span className="price-a">od 50.000€</span>
                                        </p>
                                        <p className="intro-subtitle intro-price">
                                            <Link to={"homes"} className="price-b" style={{textDecoration: "none"}}>
                                                Detaljnije
                                                <i className="bi bi-chevron-right"></i>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide carousel-item-a intro bg-image text-start" style={{ backgroundImage: "url(https://images.pexels.com/photos/2147149/pexels-photo-2147149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}>
                <div className="overlay overlay-a"></div>
                <div className="intro-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="intro-body">
                                        <p className="intro-title-top">
                                            Visenameski poslovni objekti
                                        </p>
                                        <h1 className="intro-title mb-4 ">
                                            <span className="color-b">Poslovni prostor</span>
                                            <br /> Lokali
                                        </h1>
                                        <p className="intro-subtitle intro-price">
                                            <span className="price-a">od 15.000€</span>
                                        </p>
                                        <p className="intro-subtitle intro-price">
                                            <Link to={"locals"} className="price-b" style={{textDecoration: "none"}}>
                                                Detaljnije
                                                <i className="bi bi-chevron-right"></i>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <div className="swiper-pagination"></div>
        </Swiper>
    );
}

export default HomePageCarousel;