import { Outlet } from "react-router"
import styles from "./homelayout.module.css"
import { Link } from "react-router"
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
export default function HomeLayout(){
    const token = localStorage.getItem("token")
    const [open, setOpen] = useState(true)
    const middle = open ? 'middle'  : 'closed';
    const right = open ? 'right' : 'closed';


    function logout(){
        localStorage.removeItem("token")
        window.location.reload()
    }
    return(
        <main className={styles.main}>
            <header className={styles.cabecalho}>
                <div className={styles.left}>
                    <span className={styles.circulo}></span>
                    <h1>LaAgenda</h1>
                </div>
                <div className={styles.hamburguer}>
                    <IoMenu className={styles.icone} onClick={() => setOpen(!open)}/>
                </div>
                <ul className={styles[middle]}>
                    <li><Link to="/" >Sobre</Link></li>
                    <li><Link to="/create">Criar contato</Link></li>
                    <li><Link to="/">Pagina inicial</Link></li>
                </ul>
                <div className={styles[right]}>
                    {token && (
                        <button className={styles.gray} onClick={logout}>Logout</button>
                    )}
                    {!token && (
                        <Link to="/auth/login"><button className={styles.gray}>Fazer login</button></Link>  
                    )}
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