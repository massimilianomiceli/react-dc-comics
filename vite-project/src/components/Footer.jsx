import '../index.css'
import FooterLinks from "./FooterLinks"
import Social from "./Social"

export default function Footer(){
    return(
        <>
        <footer>
            <div className="container-fluid containerBgFooter">
                <div className="container position-relative">
                    <img src="/img/dc-logo-bg.png" className="footerLogo" alt="" srcset="" />
                    <FooterLinks />
                </div>
            </div>
            <div className="container-fluid containerBgFooter2 py-4">
                <div className="container d-flex justify-content-between align-items-center">
                    <button class="btnSignUp" type="button">SIGN-UP NOW!</button>
                    <Social />
                </div>
            </div>
        </footer>
        </>
    )
}