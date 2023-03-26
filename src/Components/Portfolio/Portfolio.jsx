import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import MusicApp from '../../img/musicapp.png'
import HOC from '../../img/hoc.png'



const Portfolio = () => {
    return ( 
        <div className="portfolio" id='portfolio'>
            {/* heading */}
            <span>Recent Projects</span>
            <span>Portfolio</span>

                    {/* slider */}
                <Swiper 
                breakpoints={{
                    350: {
                        width: 350,
                        slidesPerView: 1,
                        
                    },
                    950:{
                        width: 950,
                        slidesPerView: 3,
                    },
                    1150:{
                        width: 1150,
                        slidesPerView: 4,
                    },
                    1350:{
                        width: 1350,
                        slidesPerView: 4,
                    },
                }}
                spaceBetween={40} 
                slidesPerView={3} 
                grabCursor={true}
                className='portfolio-slider'
                >
                    <SwiperSlide>
                        <img src={Sidebar} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Ecommerce} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={MusicApp} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={HOC} alt="" />
                    </SwiperSlide>
                </Swiper>
        </div>
     );
}
 
export default Portfolio;