import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Profile1 from '../../img/profilepics/profile1.jpg'
import Profile2 from '../../img/profilepics/profile2.jpg'
import Profile3 from '../../img/profilepics/profile3.jpg'
import Profile4 from '../../img/profilepics/profile4.jpg'
import { Pagination } from 'swiper';
import 'swiper/css/pagination'
import 'swiper/css'





const Testimonial = () => {
    const clients = [
        {img: Profile1,
        review: 
"            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus assumenda voluptas itaque minima animi impedit aut, ea quo tenetur. Ex eveniet accusamus obcaecati quo optio consectetur laboriosam unde labore!",
        },
        {img: Profile2,
        review: 
"            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus assumenda voluptas itaque minima animi impedit aut, ea quo tenetur. Ex eveniet accusamus obcaecati quo optio consectetur laboriosam unde labore!",
        },
        {img: Profile3,
        review: 
"            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus assumenda voluptas itaque minima animi impedit aut, ea quo tenetur. Ex eveniet accusamus obcaecati quo optio consectetur laboriosam unde labore!",
        },
        {img: Profile4,
        review: 
"            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus assumenda voluptas itaque minima animi impedit aut, ea quo tenetur. Ex eveniet accusamus obcaecati quo optio consectetur laboriosam unde labore!",
        }
    ] 



    return ( 
        <div className="t-wrapper" id='testimonial'>
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>from me</span>
                <div className="blur t-blur1"></div>
                <div className="blur t-blur2"></div>
            </div>

                    {/* slide */}
                    <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{clickable: true}}
                    >

                    {clients.map((client, index) => {
                        return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                            <img src={client.img} alt=""/>
                            <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                        )
                    })}

                    </Swiper>

             
        </div>
     );
}
 
export default Testimonial;