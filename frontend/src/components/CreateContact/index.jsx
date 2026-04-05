import { useState } from "react"
import Botao from "../Ui/botao"
import Input from "../Ui/Input"
import styles from "./createcontact.module.css"
import { useNavigate } from 'react-router'

export default function CreateContact(){
    const navigate = useNavigate()

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const url = import.meta.env.VITE_API_URL;

    function criarContato(){
        const token = localStorage.getItem("token")
        fetch(`${url}/contatos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                numero: telefone
            })
        })
        .then(() => {
            navigate("/")
        })
        .catch(() => console.log("deu erro"))
    }

    return(
        <div className={styles.main}>
            <h1>Criar Contato</h1>
            <Input nome="Nome" placeholder="nome" type="text" value={nome ?? ""} onChange={(e) => setNome(e.target.value)}/>
            <Input nome="Email" placeholder="email" type="text" value={email ?? ""} onChange={(e) => setEmail(e.target.value)} />
            <Input nome="Telefone" placeholder="telefone" type="text" value={telefone ?? ""} onChange={(e) => setTelefone(e.target.value)} />
            <Botao text="Criar contato" size="small" handleClick={criarContato}/>
        </div>
    )
}