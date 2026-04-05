import { useEffect, useState } from "react"
import styles from "./home.module.css"
import { MdDelete, MdEdit  } from "react-icons/md";
import { Link } from "react-router"
export default function Home(){
    const [contatos, setContatos] = useState([])
    const api = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token")

    useEffect(() => {
        //utilize .env pois a url em produção será outra. A maneira de utilizar .env no front também muda
        
        fetch(`${api}/contatos`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then(response => response.json())
        .then(data => setContatos(data.contatos))
        .catch(() => console.log('deu erro'))
    }, [token, api])

    const handleDelete = (contato) =>{
        fetch(`${api}/contatos/${contato._id}`,{
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            method: "DELETE"
        })
        .then(() => {
            setContatos(prev => {
                return prev.filter(c => c._id !== contato._id) // sempre deve retornar algo
            })
        })
    }

    return(
        <main className={styles.main}>
            <div className={styles.textinho}>
                <h1 className={styles.h1}>Agenda</h1>
                <p>Seus contatos estão abaixo</p>
            </div>
            
            {contatos?.map((contact) =>( 
                <div key={contact._id}>
                    <div className={styles.contato}>
                        <div>{contact.nome}</div>
                        <div>{contact.email}</div>
                        <div>{contact.numero}</div>
                        <div className={styles.merdaDeDiv}>
                            <MdDelete className={styles.lixeira} onClick={() => handleDelete(contact)}/>   
                            <Link to={`/edit/${contact._id}`}>
                                <MdEdit className={styles.lapis} /> 
                            </Link>
                        </div>
                    </div>
                    <hr />
                </div>  
            ))}
        </main>
    )
}