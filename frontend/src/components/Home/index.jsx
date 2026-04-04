import { useEffect, useState } from "react"
import styles from "./home.module.css"
export default function Home(){
    const [contatos, setContatos] = useState([])

    useEffect(() => {
        //utilize .env pois a url em produção será outra. A maneira de utilizar .env no front também muda
        const api = import.meta.env.VITE_API_URL;
        fetch(`${api}/contatos`)
        .then(response => response.json())
        .then(data => setContatos(data.contatos))
        .catch(() => console.log('deu erro'))
    }, [])

    return(
        <main className={styles.main}>
            <div className={styles.textinho}>
                <h1 className={styles.h1}>Agenda</h1>
                <p>Seus contatos estão abaixo</p>
            </div>
            
            {contatos?.map((contact, indice) =>( 
                <div key={indice}>
                    <div className={styles.contato}>
                        <div>{contact.nome}</div>
                        <div>{contact.email}</div>
                        <div>{contact.numero}</div>
                    </div>
                    <hr />
                </div>  
            ))}
        </main>
    )
}