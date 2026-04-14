import styles from "./message.module.css"
export default function Message({text, classe}){
    return(
        <div className={styles[classe]}>
            <p>{text}</p>
        </div>
    )
}