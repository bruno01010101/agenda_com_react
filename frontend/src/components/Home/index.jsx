import styles from "./home.module.css";
import Message from "../message";
export default function Home(){
    return(
        <div className={styles.main}>
            <Message text="contato cadastrado com sucesso" classe="error" />
            <h1>oi</h1>
        </div>
    )
}