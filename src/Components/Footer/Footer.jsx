import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'



const Footer = () => {
    return ( 
        <div className="footer">
            <img src={Wave} alt="" />
            <div className="f-content">
                <span>chuquemekachuks12@gmail.com</span>
                <div className="f-icons">
                    <Insta />
                    <Facebook />
                    <Github />
                </div>
            </div>
        </div>
     );
}
 
export default Footer;