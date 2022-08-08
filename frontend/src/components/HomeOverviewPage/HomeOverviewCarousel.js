import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

function RealEstateOverviewCarousel() {
    return (
        <div className="row justify-content-center my-4">
            <div className="col-lg-8">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    centeredSlides
                    loop={true}
                    speed={2000}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination]}
                    className="intro postition-relative">

                    <SwiperSlide className="swiper-slide carousel-item-a intro bg-image text-start" style={{ backgroundImage: "url(https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg)" }}></SwiperSlide>
                    <SwiperSlide className="swiper-slide carousel-item-a intro bg-image text-start" style={{ backgroundImage: "url(https://images.pexels.com/photos/2147149/pexels-photo-2147149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}></SwiperSlide>

                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
        </div>
    )
}

export default RealEstateOverviewCarousel;