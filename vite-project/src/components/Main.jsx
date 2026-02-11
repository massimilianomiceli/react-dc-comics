import ArticleSection from "./ArticleSection"
import UtilityBar from "./UtilityBar"
import comics from "../data/comics"
import '../index.css'




export default function Main(){
    return(
        <>
        <main>
            <div className="container-fluid containerBgDark">
                <div className="container containerArticle">
                    <label className="containerArticleLabel py-1 px-3">CURRENT SERIES</label>
                    <section className="row pt-5">
                        {comics.map(comic => (
                            <ArticleSection 
                            key={comic.id}    
                            series={comic.series}
                            thumb={comic.thumb}
                            description={comic.description}
                            />
                        ))}    
                    </section>

                    <div className="row justify-content-center">
                        <button className="btnLoad mb-3" type="button">LOAD MORE</button>
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