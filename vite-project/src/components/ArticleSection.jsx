import styles from "./ArticleSection.module.css"
import '../index.css'
import comics from "../data/comics";

export default function ArticleSection(){
    return(
        <>
        <section className="row pt-5">
            {comics.map((comic)=>(
                <article key={comics.id} className="col-2">
                    <img src={comic.thumb} className={`${styles.articleImg} mb-3`} alt="" srcset="" />
                    <h3 className="lightText mb-3">{comic.series.toUpperCase()}</h3>
                </article>  
            ))}
         </section>
        </>
    )
}