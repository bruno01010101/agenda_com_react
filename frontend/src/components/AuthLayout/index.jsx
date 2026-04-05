import { Link, Outlet, useNavigate } from "react-router"
import styles from "./authlayout.module.css"
import Input from "../Ui/Input"
import Botao from "../Ui/botao"
import TextLogin from "../Form/TextLogin"
import { cadastrar, logar } from "./auth"
import { useState } from "react"

export default function AuthLayout({ titulo, txtBtn, flag }) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()
    async function handleClick(e) {
        e.preventDefault()
        try {
            if (flag) {
                console.log("logando")
                await logar(email, senha)

                navigate('/', {
                    state: { mensagem: "Login realizado com sucesso!" }
                })

            } else {
                console.log("cadastrando")
                await cadastrar(email, senha)

                navigate('/', {
                    state: { mensagem: "Cadastro realizado com sucesso!" }
                })
            }

        } catch (err) {
            navigate('/', {
                state: { mensagem: err.message }
            })
        }
    }

    return (
        <main className={styles.main}>
            <div className={styles.card}>
                <h1 className={styles.h1}>{titulo}</h1>

                <div className={styles.gap}>
                    <Input nome="Email" placeholder="Digite o seu email" value={email} onChange={(e) =>
                        setEmail(e.target.value)} />
                    <Input nome="Senha" placeholder="Digite a sua senha" type="password" value={senha}
                        onChange={(e) => setSenha(e.target.value)} />
                    <div >
                        <input type="checkbox" name="check" id="check" className={styles.checkbox} />
                        <label htmlFor="check">Mostrar Senha</label>
                    </div>

                    <Botao text={txtBtn} size="big" handleClick={(e) => handleClick(e)} />
                    <TextLogin isLogin={flag} />
                </div>
            </div>
        </main>
    )
}