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
                    <li><Link to="/edit" className={styles.links}>Editar contato</Link></li>
                    <li><Link to="/" className={styles.links}>Pagina inicial</Link></li>
                </ul>
                <div>
                    <Link to="/auth/login"><button className={styles.gray}>Fazer login</button></Link>
                    <Link to="/auth/register"><button className={styles.orange} >Cadastrar</button></Link>
                </div>
            </header>
            <Outlet />

            <footer className={styles.rodape}>
                <p>Desenvolvido por <a href="https://www.linkedin.com/in/bruno-dos-santos-282a583a8/" target="blank">Bruno dos Santos</a></p>
            </footer>
        </main>
    )
}