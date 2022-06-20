import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import CollectionItem from "../Common/CollectionItems";

const Slider = () => {
    return (
        <>
            <section className="container mx-auto px-24 lg:px-99 py-99">

                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    centeredSlides
                    Navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={swiper => console.log(swiper)}
                >
                    {
                        [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]?.map((item => (
                            <SwiperSlide>
                                <CollectionItem slider />
                            </SwiperSlide>
                        )))
                    }


                </Swiper>

            </section>
        </>

    )
}


export default Slider;