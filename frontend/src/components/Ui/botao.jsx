import styles from "./botao.module.css";
export default function Botao({text, size}){
    const name = `btn_${size}`
    return(
        <button className={styles[name]}>{text}</button>
    )
}