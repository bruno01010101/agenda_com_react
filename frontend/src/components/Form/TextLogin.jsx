import styles from "./index.module.css"
import { Link } from "react-router"
export default function TextLogin({isLogin}){

    return(
        <div className={styles.div}>
            <p>Esqueceu o <a href="#" className={styles.link} >usuário / senha?</a></p>
            {isLogin && (
                <p>Não tem uma conta? <Link to="/auth/cadastro" className={styles.link} >Cadastre-se</Link></p>
            )}
            {!isLogin && (
                <p>Já tem uma conta? <Link to="/auth/login" className={styles.link} >Faça login</Link></p>
            )}
        </div>
    )
}