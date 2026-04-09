import styles from "./ui.module.css"
export default function Button({text, size, handleClick}){
    return(
        <button className={styles[size]} onClick={handleClick}>{text}</button>
    )
}