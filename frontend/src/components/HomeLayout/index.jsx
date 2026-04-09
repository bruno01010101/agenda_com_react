import { Outlet } from "react-router"
import styles from "./homelayout.module.css"
import { Link } from "react-router"
export default function HomeLayout(){
    return(
        <main className={styles.main}>
            <header className={styles.cabecalho}>
                <div className={styles.left}>
                    <span className={styles.circulo}></span>
                    <h1>LaAgenda</h1>
                </div>
                <ul className={styles.middle}>
                    <li><Link to="/create" className={styles.links}>Criar contato</Link></li>
                    <li><Link to="/" className={styles.links}>Página inicial</Link></li>
                    <li><a href="" className={styles.links}>sobre</a></li>
                </ul>
                <div>
                    <button className={styles.gray}>Fazer login</button>
                    <button className={styles.orange} >Cadastrar</button>
                </div>
            </header>
            <Outlet />

            <footer className={styles.rodape}>
                <p>Desenvolvido por <a href="https://www.linkedin.com/in/bruno-dos-santos-282a583a8/" target="blank">Bruno dos Santos</a></p>
            </footer>
        </main>
    )
}