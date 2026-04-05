import { useEffect, useState } from "react";
import Botao from "../Ui/botao"
import Input from "../Ui/Input"
import styles from "./editcontact.module.css"
import { useNavigate, useParams } from 'react-router'

export default function CreateContact(){
    const token = localStorage.getItem("token")
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const url = import.meta.env.VITE_API_URL;
    const navigate = useNavigate()
    const {id} = useParams();

    useEffect(() => {
        fetch(`${url}/contatos/${id}`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then(resp => resp.json())
        .then((contato) => {
            setNome(contato.nome ?? "");
            setEmail(contato.email ?? "");
            setTelefone(contato.numero ?? "");
        })
        .catch(err => console.log(err))
    }, [id, url, token])

    const editarContato = async () => {
        try{
            const result = await fetch(`${url}/contatos/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                method: "PATCH",
                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    numero: telefone
                })
            })
            console.log(result)
            navigate('/')
        }catch(err){
            console.log(err.message)
        }
    }

    return(
        <div className={styles.main}>
            <h1>Editar Contato</h1>
            <Input nome="Nome" placeholder="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
            <Input nome="Email" placeholder="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input nome="Telefone" placeholder="telefone" type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
            <Botao text="Editar contato" size="small" handleClick={editarContato}/>
        </div>
    )
}