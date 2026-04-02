import { Link, Outlet } from "react-router"
import styles from "./authlayout.module.css"
import Input from "../Ui/Input"

export default function AuthLayout(){
    return(
        <main className={styles.main}>
            <div className={styles.card}>
                <h1 className={styles.h1}>Login</h1>

                <div className={styles.gap}>
                    <Input nome="Email" placeholder="Digite o seu email"/>
                    <Input nome="Senha" placeholder="Digite a sua senha" type="password" />
                </div>
            </div>
        </main>
    )
}