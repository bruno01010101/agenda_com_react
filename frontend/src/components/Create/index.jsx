import styles from "./create.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
export default function CreateContact(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const navigate = useNavigate()

    async function criarContato(){
        const url = import.meta.env.VITE_API_URL
        try{
            const token = localStorage.getItem("token")
            if(!token){
                navigate('/', {
                    state: {
                        message: "É necessário estar logado para criar um contato",
                        type: "Error"
                    }
                })
            }
            const req = await axios.post(`${url}/contatos`, {
                nome,
                email: email,
                telefone
            }, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
            navigate('/', {
                state: {
                    message: req.data.message,
                    type: "success"
                }
            })
        }catch(err){
            navigate('/', {
                state: {
                    message: err.message,
                    type: "error"
                }
            })
        }
    }
    return(
        <div className={styles.meio}>
            <div className={styles.principal}>
                <h1>Criar Contato</h1>
                <Input titulo="Nome" placeholder="Digite o nome do contato" value={nome} handleChange={(e) => setNome(e.target.value)}/>
                <Input titulo="email" placeholder="Digite o email do contato" value={email} handleChange={(e) => setEmail(e.target.value)}/>
                <Input titulo="telefone" placeholder="Digite o número do contato" value={telefone} handleChange={(e) => setTelefone(e.target.value)}/>
                <Button text="Criar contato" size="medium" handleClick={criarContato}/>
            </div>
        </div>
    )
}