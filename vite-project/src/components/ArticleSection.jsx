import styles from "./ArticleSection.module.css"
import '../index.css'


export default function ArticleSection(props){
    
    const {series, thumb, description} = props;
    
    return(
        <>
        <article className="col-2">
            <img src={thumb} className={`${styles.articleImg} mb-3`} alt={description}/>
            <h3 className="lightText mb-3">{series.toUpperCase()}</h3>
        </article>  
        </>
    )
}