import { Link, Outlet } from "react-router"
import styles from "./authlayout.module.css"
import Input from "../Ui/Input"
import Botao from "../Ui/botao"
import TextLogin from "../Form/TextLogin"

export default function AuthLayout({titulo, txtBtn, flag}){
    return(
        <main className={styles.main}>
            <div className={styles.card}>
                <h1 className={styles.h1}>{titulo}</h1>

                <div className={styles.gap}>
                    <Input nome="Email" placeholder="Digite o seu email"/>
                    <Input nome="Senha" placeholder="Digite a sua senha" type="password" />
                    <div >
                        <input type="checkbox" name="check" id="check" className={styles.checkbox} />
                        <label htmlFor="check">Mostrar Senha</label>
                    </div>

                    <Botao text={txtBtn}/>
                    <TextLogin isLogin={flag} />
                </div>
            </div>
        </main>
    )
}