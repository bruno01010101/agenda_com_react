import styles from "./botao.module.css";
export default function Botao({text}){
    return(
        <button className={styles.btn}>{text}</button>
    )
}