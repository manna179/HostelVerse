import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import img1 from '../../../assets/food (5).jpg'
import img2 from '../../../assets/food (2).jpg'
import img3 from '../../../assets/food (3).jpg'
import img4 from '../../../assets/food (4).jpg'

import { FreeMode, Pagination } from 'swiper/modules';

const CategoryMeal = () => {
    return (
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img className='h-full w-full' src={img1} alt="" />
            <h2 className='text-4xl uppercase text-center -mt-20 text-white'>Breakfast</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <h2  className='text-4xl uppercase text-center -mt-20 text-white'>Lunch</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
            <h2  className='text-4xl uppercase text-center -mt-20 text-white'>Dinner</h2>
        </SwiperSlide>
        <SwiperSlide>
         <img src={img4} alt="" />
         <h2  className='text-4xl uppercase text-center -mt-20  text-white'>All Meals</h2>
        </SwiperSlide>
        
      </Swiper>
    );
};

export default CategoryMeal;