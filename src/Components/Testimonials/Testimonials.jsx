import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Profile1 from '../../img/profilepics/profile1.jpg'
import Profile2 from '../../img/profilepics/profile2.jpg'
import Profile3 from '../../img/profilepics/profile3.jpg'
import Profile4 from '../../img/profilepics/profile4.jpg'






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
        <div className="t-wrapper">
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>from me</span>
                <div className="blur t-blur1"></div>
                <div className="blur t-blur2"></div>
            </div>

                    {/* slide */}
                    <Swiper>

                    {clients.map((client, index) => {
                        return(<SwiperSlide key={index}>
                            <img src={client.img} alt=""/>
                            <span>{client.review}</span>
                        </SwiperSlide>)
                    })}

                    </Swiper>

             
        </div>
     );
}
 
export default Testimonial;