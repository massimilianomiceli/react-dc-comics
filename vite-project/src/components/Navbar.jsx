import styles from "./Navbar.module.css"
import '../index.css'

export default function Navbar(){
    
    const links = [
        {text: "characters", url:"#", active: false},
        {text: "comics", url:"#", active: true},
        {text: "movies", url:"#", active: false},
        {text: "tv", url:"#", active: false},
        {text: "games", url:"#", active: false},
        {text: "collectibles", url:"#", active: false},
        {text: "videos", url:"#", active: false},
        {text: "fans", url:"#", active: false},
        {text: "news", url:"#", active: false},
        {text: "shop", url:"#", active: false},
    ]
    
    return(
        <>
        <nav className={`${styles.navbar} d-flex justify-content-around align-items-center`}>
            <img src="/img/dc-logo.png" id="logo" alt="DC logo"/>
            <ul className="d-flex align-items-stretch h-100 my-0 list-unstyled gap-4">
                {links.map((link, index)=>(
                    <li key={index} className="d-flex align-items-stretch">
                        <a href={link.url} className={`${styles.link} ${link.active ? styles.linkActive : ""}  d-flex align-items-center fw-bold fs-6 text-decoration-none`}>
                            {link.text.toUpperCase()}
                        </a>
                    </li>                
                ))}
            </ul>
        </nav>        
        </>
    )
}