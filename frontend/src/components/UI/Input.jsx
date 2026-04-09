import styles from "./ui.module.css"
export default function Input({titulo, placeholder, handleChange, value}){
    return(
        <div className={styles.campo}>
            <label htmlFor={titulo} className={styles.label}>{titulo}</label>
            <input className={styles.input} type="text" name={titulo} id={titulo} 
            placeholder={placeholder} onChange={handleChange} value={value}/>
        </div>
    )
}