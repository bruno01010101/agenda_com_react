import { Link, Outlet } from "react-router"
import styles from "./applayout.module.css"

export default function AppLayout(){
    return(
        <main className={styles.main}>
            <header className={styles.cabecalho}>
                <div className={styles.tituloEsquerda}>
                    <span className={styles.bola}></span> <h1>LaAgenda</h1>
                </div>

                <ul className={styles.meio}>
                    <li><a href="">Sobre </a></li>
                    <li><a href=""> Nada a ve msm</a> </li>
                    <li> <a href="">Enchendo linguiça</a></li>
                </ul>

                <div className={styles.linksDireita}>
                    <Link to="/auth/login" className={styles.login}>Fazer Login</Link>
                    <Link to="/auth/login" className={styles.cadastro}>Cadastrar</Link>
                </div>
            </header>

            <Outlet />

            <footer className={styles.rodape}>
                <p>Desenvolvido por <a href="https://www.linkedin.com/in/bruno-dos-santos-282a583a8/" target="blank">Bruno dos santos</a></p>
            </footer>
        </main>
    )
}