import '../index.css'
import styles from "./FooterLinks.module.css"

export default function FooterLinks(){
    
    const footerLinks = [
            {
                title:"dc comics",
                links: [
                    {name: "Character", url:"#"},
                    {name: "Comics", url:"#"},
                    {name: "Movies", url:"#"},
                    {name: "TV", url:"#"},
                    {name: "Games", url:"#"},
                    {name: "Videos", url:"#"},
                    {name: "News", url:"#"},
                ]
            },
            {
                title:"shop",
                links: [
                    {name: "Shop DC", url:"#"},
                    {name: "Shop DC Collectibles", url:"#"},
                ]
            },
            {
                title:"dc",
                links: [
                    {name: "Terms of use", url:"#"},
                    {name: "Privacy policy (New)", url:"#"},
                    {name: "Ad Choices", url:"#"},
                    {name: "Advertising", url:"#"},
                    {name: "Jobs", url:"#"},
                    {name: "Subscriptions", url:"#"},
                    {name: "Talent workshops", url:"#"},
                    {name: "CPSC Certificates", url:"#"},
                    {name: "Ratings", url:"#"},
                    {name: "Shop Help", url:"#"},
                    {name: "Contact Us", url:"#"},
                ]
            },
            {
                title:"sites",
                links: [
                    {name: "DC", url:"#"},
                    {name: "MAD magazine", url:"#"},
                    {name: "DC Kids", url:"#"},
                    {name: "DC Universe", url:"#"},
                    {name: "DC Power Visa", url:"#"},
                ]
            },
        ]
    
    return(
        <>
            <nav className="d-flex gap-1 py-5">
                {footerLinks.map((footerLink, index)=>(
                    <div key={index} className="col-2">
                        <h4 className={styles.footerTitle}>{footerLink.title.toUpperCase()}</h4>
                            <ul className="d-flex flex-column list-unstyled my-1">
                                {footerLink.links.map((link, linkIndex)=>(
                                    <li key={linkIndex} className="d-flex p-0">
                                    <a href={link.url} className={`${styles.footerLinks} text-decoration-none mb-0`}>{link.name}</a>
                                    </li>                
                                ))}
                            </ul>    
                    </div>
                ))}
            </nav>
        </>
    )
}                            