import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import {Link} from 'react-scroll'
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../Context";





const Navbar = () => {

const [closeBar, setcloseBar] = useState (false)
const [showMenu, setshowMenu] = useState(false)

const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;




  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Barr Ify</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
              <ul >

              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>

                <li>
                    Home
                </li>

                </Link>

                <Link to="services" spy={true} smooth={true}>

                <li>
                    Services
                </li>

                </Link>

                <Link to="experience" spy={true} smooth={true}>

                <li>
                    Experience
                </li>

                </Link>

                <Link to="portfolio" spy={true} smooth={true}>

                <li>
                    Portfolio
                </li>

                </Link>

                <Link to="testimonial" spy={true} smooth={true}>

                <li>
                    Testimonial
                </li>

                </Link>

              <div className="menu-wrapper" onClick={() => {setshowMenu(!showMenu); setcloseBar(!closeBar);}}>


              <div className="menu_button" id={showMenu ? "close" : ""}>
                    <div className="bars"></div>
                </div>

              </div>
              </ul>
              

              </div>


{/* Mobile Nav */}


<div className="mobile-nav" id={closeBar ? "open" : ""} style={ darkMode ? {color : "white", background : "black"} : {color : "", background : "white"} }>
              <ul className="mobile-lists">
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                <li>
                    Home
                </li>
                </Link>
                <Link to="services" spy={true} smooth={true}>
                <li>
                    Services
                </li>
                </Link>
                <Link to="experience" spy={true} smooth={true}>
                <li>
                    Experience
                </li>
                </Link>
                <Link to="portfolio" spy={true} smooth={true}>
                <li>
                    Portfolio
                </li>
                </Link>
                <Link to="testimonial" spy={true} smooth={true}>
                <li>
                    Testimonial
                </li>
                </Link>
              </ul>
              
              <Link to="contact" spy={true} smooth={true}>
                      
                      <button className="button mobile-nav-button">Contact</button>
              
              </Link>
              </div>








              <Link to="contact" spy={true} smooth={true}>
                      
                      <button className="button n-button">Contact</button>
              
              </Link>
              
              </div>

              {/* Mobile Nav */}

              

              

    </div>
  );
};

export default Navbar;
