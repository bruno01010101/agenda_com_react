import { Link, Outlet } from "react-router"

export default function AuthLayout(){
    return(
        <>
            <header>
                <h1>Agenda digital</h1>

                <nav>
                    <p>olá manito</p>
                </nav>
            </header>

            <Outlet />

            <footer>
                <p>Desenvolvido por <a href="https://www.linkedin.com/in/bruno-dos-santos-282a583a8/" target="blank">Bruno dos santos</a></p>
            </footer>
        </>
    )
}