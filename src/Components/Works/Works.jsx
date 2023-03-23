import './Works.css'
import Upwork from '../../img/upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/shopify.png'
import Facebook from '../../img/facebook.png'




const Works = () => {
    return ( 
        <div className="works">
            <div className="awesome">
                <span>Works for ALL these</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Dolorum veniam accusamus 
                     <br/> eum incidunt itaque 
                     assumenda consequuntur necessitatibus consectetur?
                     <br/> eum incidunt itaque 
                     assumenda consequuntur necessitatibus consectetur?
                     <br/> eum incidunt itaque 
                     assumenda consequuntur necessitatibus consectetur?
                </span>


                        <button className="button s-button">
                            Hire me
                        </button>


                     <div className="blur s-blur">

                     </div>
            </div>

                {/* right side */}
                <div className="w-right">
                    <div className="w-mainCircle">
                        <div className="w-secCircle">
                            <img src={Upwork} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Fiverr} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Amazon} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Shopify} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Facebook} alt="" />
                        </div>
                    </div>
                                {/* background circle */}

                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
                </div>


        </div>
     );
}
 
export default Works;