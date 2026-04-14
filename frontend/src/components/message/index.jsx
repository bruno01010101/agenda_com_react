import styles from "./message.module.css"
export default function message({text, classe}){
    return(
        <div className={styles[classe]}>
            <p>{text}</p>
        </div>
    )
}