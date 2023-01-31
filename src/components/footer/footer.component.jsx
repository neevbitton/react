import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";
const Footer = () => {
    return(
        <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col item">
                        <h3>Contact Us</h3>
                        <ul>
                            <li> <FontAwesomeIcon icon={faLocationDot} />
                                Bialik 61, Ramat Gan</li>
                            <li> <FontAwesomeIcon icon={faPhone} />
                                03-6703750</li>
                            <li className="copyright">Neev Bitton © 2022</li>
                        </ul>
                    </div>
                    {/* <div className="col-sm-6 col-md-3 item">
                        <h3>Contact us</h3>
                        <ul>
                            <li>Phone Number : 03-7441010, 03-7441111</li>
                            <li>Email : office@sospets.co.il</li>
                            <li>Address : Tagor 38, Tel-Aviv</li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Company Name</h3>
                        <p>The S.O.S. Hayut association has made its banner the subject of education for the love of animals, as a goal and as an urgent and important need just like the need to save animals. </p>
                    </div>
                    <div className="col item social"><i className="icon ion-social-facebook"></i><i className="icon ion-social-twitter"></i><i className="icon ion-social-snapchat"></i><i className="icon ion-social-instagram"></i></div>
                </div>
                <p className="copyright">Neev Bitton © 2022</p>
            </div> */}
            </div>
            </div>
        </footer>
    </div>
    )
}

export default Footer;