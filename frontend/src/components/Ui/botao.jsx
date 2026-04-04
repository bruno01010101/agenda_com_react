import styles from "./botao.module.css";
export default function Botao({text, size, handleClick}){
    const name = `btn_${size}`
    return(
        <button className={styles[name]} onClick={handleClick}>{text}</button>
    )
}