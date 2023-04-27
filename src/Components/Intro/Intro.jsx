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
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ThemeContext } from '../../Context'



const Intro = () => {

    // context
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

    const transition = {duration : 2, type: 'spring'}


    return ( 
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                    <span>Chukwuemeka Chukwuemeka</span>
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
                <motion.img 
                initial={{left: "-36%"}}
                whileInView={{left: "-24%"}}
                transition={transition}
                src={glassesimoji} alt=''/>


                <motion.div
                initial={{top:"-4%", left: "-68%"}}
                whileInView={{left: "68%"}}
                transition={transition}
                 className='f-div1'>

                    <FloatingDiv img={Crown} text1={'Web'} text2={'Developer'} />
                
                </motion.div>

                <motion.div
                initial={{left: "9rem", top: "18rem"}}
                whileInView={{left: "0rem"}}
                transition={transition}
                 className='f-div2'>
                    <FloatingDiv img={thumbup} text1={'Best Design'} text2={'Award'} />
                </motion.div>

                { /* blur divs */ }

                <div className="blur"></div>
                <div className="blur-blue"></div>


                
               
            </div>

        </div>
     );
}
 
export default Intro;