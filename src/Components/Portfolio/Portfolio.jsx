import './Portfolio.css'
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Pagination, Autoplay} from 'swiper';
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import MusicApp from '../../img/musicapp.png'
import HOC from '../../img/hoc.png'
import Portsite from '../../img/portfolioPics/portfolio1.png'



const Portfolio = () => {

 SwiperCore.use([Autoplay])

    return ( 
        <div className="portfolio" id='portfolio'>
            {/* heading */}
            <span>Recent Projects</span>
            <span>Portfolio</span>

                    {/* slider */}
                    <Swiper
                        breakpoints={{
                            // window width is >= 640px
                            640: {
                            width: 640,
                            slidesPerView: 1,
                            spaceBetween: 10,
                            },
                            // window width is >= 760px
                            760: {
                            width: 760,
                            slidesPerView: 2,
                            spaceBetween: 10,
                            },
                            // window width is >= 1024px
                            1024: {
                            width: 1024,
                            slidesPerView: 3,
                            spaceBetween: 10,
                            }
                            }}
                            modules={[Pagination, Autoplay]}
                            loop= {true}
                            
                            cardsEffect={true}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            className='swiper-container'
                    >
                            <SwiperSlide ><img src={Sidebar} alt='FeatureImage' /></SwiperSlide>
                            <SwiperSlide ><img src={Ecommerce} alt='FeatureImage' /></SwiperSlide>
                            <SwiperSlide ><img src={MusicApp} alt='FeatureImage' /></SwiperSlide>
                            <SwiperSlide ><img src={HOC} alt='FeatureImage' /></SwiperSlide>
                            <SwiperSlide ><img src={Portsite} alt='FeatureImage' /></SwiperSlide>
                </Swiper>
       
        </div>
     );
}
 
export default Portfolio;