import { Outlet } from "react-router"
import styles from "./authlayout.module.css"
export default function AuthLayout(){
    return(
       <main className={styles.main}>
            <Outlet />
        </main>
    )
}