import Card from '../Card/Card';
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Resume from './resume.pdf'





const Services = () => {
    return ( 
        <div className="services">

            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Dolorum veniam accusamus <br/> eum incidunt itaque 
                     assumenda consequuntur necessitatibus consectetur?
                     </span>

                     <a href={Resume} download>

                        <button className="button s-button">
                            Download CV
                        </button>
                     </a>


                     <div className="blur s-blur">

                     </div>
            </div>
            
            {/* right side */}
            <div className="cards">
                <div>
                    <Card 
                    emoji = {HeartEmoji}
                    heading = {"Design"}
                    detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                    />
                </div>
                <div>
                    <Card 
                    emoji = {Glasses}
                    heading = {"Developer"}
                    detail = {"Html, Css, JavaScript, React"}
                    />
                </div>
                <div>
                    <Card 
                    emoji = {Humble}
                    heading = {"UI/UX"}
                    detail = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, velit minus!"}
                    />
                </div>

                <div className="blur s-blur2"></div>

            </div>

        </div>
     );
}
 
export default Services;