import react from "react"
import "../component/Footer.css"
const Footer = () => {
    return (
        <>
            <div>
                <footer>
                    <img src="" className="footer-logo" alt="" />
                    <div className="footer">
                        <div className="first-column"></div>

                        <div className="second-column">
                            <p>CODEPIP</p>
                            <p>About Us</p>
                            <p>Blog</p>
                            <p>Pricing</p>
                            <p>Curriculum</p>
                            <p>Press</p>
                        </div>

                        <div className="third-column">
                            <p>FEATURES</p>
                            <p>Games</p>
                            <p>Individual Plans</p>
                            <p>Group Plans</p>
                            <p>Classroom</p>
                        </div>

                        <div className="fourth-column">
                            <p>SUPPORT</p>
                            <p>FAQ</p>
                            <p>Contact Us</p>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </div>

                        <div className="fifth-column">
                            <p>FOLLOW</p>
                            <p>Twiter</p>
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>Linked In</p>
                            <p>You Tube</p>
                            <p>RSS</p>
                        </div>

                        <div className="sixth-column">
                            <p>LATEST</p>
                            <p>
                                Reach your resources with Pathfinder, a game of constructing file
                                paths
                            </p>
                            <p>Treat yourself to selectors with CSS Scoops</p>
                            <p>
                                Organize emoji with Disarray, a coding game about JavaScript array
                                methods
                            </p>
                            <p>
                                Dig deep about the :nth-child() selector with our newest CSS game,
                                Nth Cart
                            </p>
                            <p>You Tube</p>
                        </div>
                    </div>
                    <div className="note">
                            <p>2022 Codepip. All rights reserved.</p>
                        </div>
                </footer>
            </div>
        </>
    )
}
export default Footer;