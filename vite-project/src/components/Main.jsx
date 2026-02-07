import ArticleSection from "./ArticleSection"
import '../index.css'

export default function Main(){
    return(
        <>
        <main>
            <div className="container-fluid bg-black">
                <div className="container">
                    <ArticleSection />
                    <div className="row justify-content-center">
                        <button class="btnLoad mb-3" type="button">LOAD MORE</button>
                    </div>
                </div>
                    

            </div>
        </main>
        </>
    )
}