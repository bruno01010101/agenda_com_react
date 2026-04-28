import styles from "./home.module.css";
import Message from "../message";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router"
import axios from "axios";

export default function Home() {
    const location = useLocation(); // serve para acessar dados da url. Aqui estou usando para acessar state, que eu alterei no navigate
    const message = location.state?.message
    const type = location.state?.type
    const tipo = type || "error"
    const url = import.meta.env.VITE_API_URL
    const [mensagem, setMensagem] = useState();
    const [contatos, setContatos] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const Data = async () => {
            if (message) {
                setMensagem(message)
                const timer = setTimeout(() => {
                    setMensagem(null)
                    navigate(location.pathname, { replace: true })
                }, 3000);
                return () => clearTimeout(timer);
            }
            try {
                const token = localStorage.getItem("token")
                if (!token) return
                const req = await axios.get(`${url}/contatos`, { // header get so tem dois argumentos
                    headers: { 'Authorization': `Bearer ${token}` }
                })
                const data = await req.data
                setContatos(data)
            } catch (err) {
                setMensagem(err.response?.data.message)
                console.log(err)
            }
        }
        Data();
    }, [message, url])

    const excluir = async (id) => {
        try {
            const token = localStorage.getItem("token")
            if (!token) return
            await axios.delete(`${url}/contatos/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            // pode fazer isso tranquilo porque o axios lança um erro (se ele ocorrer)
            setContatos((prev) => {
                return prev.filter(contact => contact._id !== id)
            })
        } catch (err) {
            setMensagem(err.response?.data.message)
        }
    }

    return (
        <div className={styles.main}>
            {mensagem && (
                <div className={styles.top}>
                    <Message text={mensagem} classe={tipo} />
                </div>
            )}
            <div className={styles.pai}>
                {contatos.map((contact) => (
                    <div key={contact._id} className={styles.espaco}>
                        <div className={styles.contato}>
                            <p>{contact.nome}</p>
                            <p>{contact.email}</p>
                            <div className={styles.third}>
                                <p>{contact.telefone}</p>
                                <div className={styles.buttons}>
                                    <Link to={`/edit/${contact._id}`}>
                                        <MdOutlineEdit className={styles.edit} />
                                    </Link>
                                    <RiDeleteBin6Fill className={styles.remove} onClick={() => excluir(contact._id)} />
                                </div>
                            </div>
                        </div>
                        <hr className={styles.linha}/>
                    </div>
                ))}

            </div>
        </div>
    )
}