import '../index.css'
import FooterLinks from "./FooterLinks"

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
        </footer>
        </>
    )
}