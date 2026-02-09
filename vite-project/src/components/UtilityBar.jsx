import '../index.css'
import styles from "./UtilityBar.module.css"

export default function UtilityBar(){
    
    const links = [
        {text: "digital comics", url:"#", img: "/img/buy-comics-digital-comics.png"},
        {text: "dc merchandise", url:"#", img: "img/buy-comics-merchandise.png"},
        {text: "subscription", url:"#", img: "/img/buy-comics-subscriptions.png"},
        {text: "comic shop locator", url:"#", img:"/img/buy-comics-shop-locator.png"},
        {text: "dc power visa", url:"#", img: "/img/buy-dc-power-visa.svg"},

    ]
    
    return(
        <>
        <nav className="py-5">
            <ul className="d-flex justify-content-around list-unstyled gap-4 my-0">
                {links.map((link, index)=>(
                    <li key={index} className="d-flex">
                        <img src={link.img} className={`${styles.navImg} me-3`} alt="" srcset="" />
                        <a href={link.url} className="lightText d-flex align-items-center text-decoration-none">
                            {link.text.toUpperCase()}
                        </a>
                    </li>                
                ))}
            </ul>
        </nav>        
        </>
    )
}