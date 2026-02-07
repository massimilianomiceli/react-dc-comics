import '../index.css'

export default function Header(){
    return(
        <>
        <header>
            <div className="container">
                <nav className="d-flex justify-content-around align-items-center">
                    <img src="/img/dc-logo.png" id="logo" alt="" srcset="" />
                    <ul className="d-flex h-100 my-0 list-unstyled gap-3">
                        <li className=""><a href="#" className="text-secondary fw-bold text-decoration-none">CHARACTERS</a></li>
                        <li className=""><a href="#" className="text-secondary fw-bold text-decoration-none">COMICS</a></li>
                        <li className=""><a href="#" className="text-secondary fw-bold text-decoration-none">MOVIES</a></li>
                        <li className=""><a href="#" className="text-secondary fw-bold text-decoration-none">TV</a></li>
                        <li className=""><a href="#" className="text-secondary fw-bold text-decoration-none">GAMES</a></li>
                        <li className=""><a href="#" className="text-secondary fw-bold text-decoration-none">COLLECTIBLES</a></li>
                        <li className=""><a href="#" className="text-secondary fw-bold text-decoration-none">VIDEOS</a></li>
                        <li className=""><a href="#" className="text-secondary fw-bold text-decoration-none">FANS</a></li>
                        <li className=""><a href="#" className="text-secondary fw-bold text-decoration-none">NEWS</a></li>
                        <li className=""><a href="#" className="text-secondary fw-bold text-decoration-none">SHOP</a></li>
                    </ul>
                </nav> 
            </div>
        </header>
        </>
    )
}