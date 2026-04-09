import { Outlet } from "react-router"
export default function AuthLayout(){
    return(
       <>
            <h1>Autenticação </h1>
            <Outlet />
        </>
    )
}