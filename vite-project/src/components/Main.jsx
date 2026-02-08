import ArticleSection from "./ArticleSection"
import UtilityBar from "./UtilityBar"
import '../index.css'

export default function Main(){
    return(
        <>
        <main>
            <div className="container-fluid containerBgDark">
                <div className="container">
                    <ArticleSection />
                    <div className="row justify-content-center">
                        <button class="btnLoad mb-3" type="button">LOAD MORE</button>
                    </div>
                </div>
            </div>
            <div className="container-fluid containerBgBlue">
                <div className="container">
                    <UtilityBar />                    
                </div>
            </div>
        </main>
        </>
    )
}