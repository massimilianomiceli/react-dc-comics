import styles from "./Social.module.css"

export default function Social(){
    
    const socialIcons = [
        {site: "Facebook", img:"/img/footer-facebook.png", url:"#"},
        {site: "Twitter", img:"/img/footer-twitter.png", url:"#"},
        {site: "You Tube", img:"/img/footer-youtube.png", url:"#"},
        {site: "Pintarest", img:"/img/footer-pinterest.png", url:"#"},
        {site: "Periscope", img:"/img/footer-periscope.png", url:"#"},
    ]
    
    return(
        <>
        <nav className="d-flex align-items-center">
            <h4 className={styles.socialLabel}>FOLLOW US</h4>
            <ul className="d-flex justify-content-around list-unstyled gap-3 my-0">
                {socialIcons.map((socialIcon, index)=>(
                    <li key={index} className="d-flex">
                        <a href={socialIcon.url} className="lightText d-flex align-items-center text-decoration-none">
                            <img src={socialIcon.img} className="" alt=""/>
                        </a>
                    </li>                
                ))}
            </ul>
        </nav>       
        </>
    )
}