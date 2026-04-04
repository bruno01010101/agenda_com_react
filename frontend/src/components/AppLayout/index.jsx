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
                    <li><Link to="/create">Criar contato</Link></li>
                    <li> <Link to="/">Página inicial</Link></li>
                    <li><a href="">Sobre </a></li>
                </ul>

                <div className={styles.linksDireita}>
                    <Link to="/auth/login" className={styles.login}>Fazer Login</Link>
                    <Link to="/auth/cadastro" className={styles.cadastro}>Cadastrar</Link>
                </div>
            </header>

            <main className={styles.filhos}>
                <Outlet />
            </main>

            <footer className={styles.rodape}>
                <p>Desenvolvido por <a href="https://www.linkedin.com/in/bruno-dos-santos-282a583a8/" target="blank">Bruno dos santos</a></p>
            </footer>
        </main>
    )
}