import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import '../../cssFile/swiper.css'
const Slider = () => {
    return (
        <div className='mb-10 '>
            <div className=''>
                <Swiper className='lg:w-[1300px] rounded-xl sm:w-[500px] lg:h-[560px] sm:h-[200px] '
                    navigation={true}
                    modules={[Navigation, Autoplay, Pagination]}
                    loop={true}

                    autoplay={
                        {
                            delay: 2000

                        }
                    }
                    pagination={{
                        clickable: true,
                    }}
                >
                    <SwiperSlide>
                        <div className='slide slide1'>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide slide2'>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide slide3'>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide slide4'>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide slide5'>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide slide6'>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide slide7'>

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Slider;