import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'



const Intro = () => {
    return ( 
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Andrew Thomas</span>
                    <span>Frontend Developer with high level
                         of experience in web designing and 
                         development, producing high quality 
                         work</span>
                    <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Instagram} alt="" />
                </div>
                </div>

            </div>

            <div className="i-right">
                
                <img src={Vector1} alt=''/>
                <img src={Vector2} alt=''/>
                <img src={boy} alt=''/>
                <img src={glassesimoji} alt=''/>


                <div className='f-div1'>
                    <FloatingDiv img={Crown} text1={'Web'} text2={'Developer'} />
                </div>
                <div className='f-div2'>
                    <FloatingDiv img={thumbup} text1={'Best Design'} text2={'Award'} />
                </div>

                { /* blur divs */ }

                <div className="blur"></div>
                <div className="blur-blue"></div>


                
               
            </div>

        </div>
     );
}
 
export default Intro;