import styles from "./input.module.css";

export default function Input({nome, placeholder, type}){
    const tipo = type || "text"
    return(
        <div>
            <label htmlFor={nome} className={styles.label}>{nome}</label>
            <input type={tipo} name={nome} id={nome} placeholder={placeholder} className={styles.input} />
        </div>
    )
}