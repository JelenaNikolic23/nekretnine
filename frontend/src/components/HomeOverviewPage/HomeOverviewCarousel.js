import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

function HomeOverviewCarousel(props) {
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
                    
                    {props.images.map(imageUrl => {
                        const style = {
                            backgroundImage: `url('${imageUrl}')`
                        }
                        return (
                            <SwiperSlide key={imageUrl} className="swiper-slide carousel-item-a intro bg-image text-start" style={style}></SwiperSlide>
                        )
                    })}

                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeOverviewCarousel;