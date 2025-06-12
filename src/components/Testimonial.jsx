import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Testimonial = () => {
    let sliderContent = [
        {
            name: "Mathew Lina",
            image: "/public/images/testimonial_img_1.jpg",
        },
        {
            name: "Nahia Colunga",
            image: "/public/images/testimonial_img_2.jpg",
        },
    ]
    return (
        <section>
            <div className="container">
                <div>
                    <h3>
                        Don’t just take our word for it
                    </h3>
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: true,
                        }}
                        loop={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>
                        {sliderContent.map((nothing) => {
                            return <SwiperSlide>
                                <div className='d-flex'>
                                    <div>
                                        <img src={nothing.image} width={'100%'} alt="" />
                                    </div>
                                    <div>
                                        <div>
                                            <span><i className='fa-solid fa-star'></i></span>
                                            <span><i className='fa-solid fa-star'></i></span>
                                            <span><i className='fa-solid fa-star'></i></span>
                                            <span><i className='fa-solid fa-star'></i></span>
                                            <span><i className='fa-solid fa-star'></i></span>
                                        </div>
                                        <h3>Very interesting course</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus adipisci voluptate nobis ab animi ullam, commodi, explicabo mollitia aliquid natus veritatis earum harum iusto modi blanditiis asperiores voluptatem officiis ea?</p>
                                        <h2>{nothing.name}</h2>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })}
                        <SwiperSlide>Slide 1</SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonial