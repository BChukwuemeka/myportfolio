import "./Navbar.css";




const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Andrew</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
              <ul >
                <li>
                    Home
                </li>

                <li>
                    Serivces
                </li>

                <li>
                    Experience
                </li>

                <li>
                    Protfolio
                </li>

                <li>
                    Testimonial
                </li>
                
              </ul>

        </div>
                <button className="button n-button">Contact</button>
        </div>

    </div>
  );
};

export default Navbar;
