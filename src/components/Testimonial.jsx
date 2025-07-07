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
        {
            name: "Mathew Lina",
            image: "/public/images/testimonial_img_1.jpg",
        },
    ]
    return (
        <section className='py-6'>
            <div className="container">
                <div className='slider-sec'>
                    <h3 className='slider-head'>
                        Don’t just take our word for it
                    </h3>
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={2}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                        }}
                        loop={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>
                        {sliderContent.map((nothing) => {
                            return <SwiperSlide>
                                <div className='row slider-card'>
                                    <div className='col-4'>
                                        <div className='rounded-3 overflow-hidden'>
                                            <img src={nothing.image} width={'100%'} alt="" />
                                        </div>
                                    </div>
                                    <div className='col-8'>
                                        <div className='slider-content'>
                                            <div className='text-warning'>
                                                <span className='fs-6'><i className='fa-solid fa-star'></i></span>
                                                <span className='fs-6'><i className='fa-solid fa-star'></i></span>
                                                <span className='fs-6'><i className='fa-solid fa-star'></i></span>
                                                <span className='fs-6'><i className='fa-solid fa-star'></i></span>
                                                <span className='fs-6'><i className='fa-solid fa-star'></i></span>
                                            </div>
                                            <h3>Very interesting course</h3>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus adipisci voluptate nobis ab nksdnsi</p>
                                            <h2>{nothing.name}</h2>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })}


                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonial