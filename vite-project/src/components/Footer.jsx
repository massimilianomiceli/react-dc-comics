import '../index.css'
import FooterLinks from "./FooterLinks"

export default function Footer(){
    return(
        <>
        <footer>
            <div className="container-fluid containerBgFooter">
                <div className="container">
                    <FooterLinks />
                </div>
            </div>
        </footer>
        </>
    )
}