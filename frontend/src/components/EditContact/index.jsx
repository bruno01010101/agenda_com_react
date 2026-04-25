import styles from "./edit.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

export default function EditContact(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const navigate = useNavigate()
    const url = import.meta.env.VITE_API_URL
    const {id} = useParams()
    
    async function EditarContato() {
        try{
            console.log(nome, email, telefone)
            const token = localStorage.getItem("token")
            if(!token) return
            await axios.patch(`${url}/contatos/${id}`, JSON.stringify({
                nome: nome,
                email: email,
                telefone: telefone
            }), {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
            navigate('/')
        }catch(err){
            navigate('/', {
                state: {
                    message: err.response?.data.message,
                    type: "error"
                }
            })
        }
    }
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token")
                if (!token) return
                const req = await axios.get(`${url}/contatos/${id}`, { // header get so tem dois argumentos
                    headers: { 'Authorization': `Bearer ${token}` }
                })
                const data = await req.data
                setNome(data.nome)
                setEmail(data.email)
                setTelefone(data.telefone)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [url, id])

    return(
        <div className={styles.meio}>
            <div className={styles.principal}>
                <h1 className={styles.edit}>Editar Contato</h1>
                <Input titulo="Nome" placeholder="Digite o nome do contato" value={nome} handleChange={(e) => setNome(e.target.value)}/>
                <Input titulo="email" placeholder="Digite o email do contato" value={email} handleChange={(e) => setEmail(e.target.value)}/>
                <Input titulo="telefone" placeholder="Digite o número do contato" value={telefone} handleChange={(e) => setTelefone(e.target.value)}/>
                <Button text="Editar contato" size="medium" handleClick={EditarContato}/>
            </div>
        </div>
    )
}