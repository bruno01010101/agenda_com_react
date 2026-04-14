import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./form.module.css";
import { Link, useNavigate } from "react-router"
import { cadastro, login } from "../AuthLayout/auth";
export default function Form({title, btnText, isLogin}){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    const handleClick = (email, senha) => {
        if(isLogin){
            login(email, senha)
        }
        if (!isLogin) {
            cadastro(email, senha)
            navigate("/auth/login")
        }
    }

    function mudaEmail(e){
        setEmail(e.target.value)
    }

    function mudaSenha(e){
        setSenha(e.target.value)
    }

   return(
    <div className={styles.form}>
        <h1 className={styles.titulo}>{title}</h1>
        <Input titulo="Email" placeholder="Digite o seu email" value={email} handleChange={(e) => mudaEmail(e)} />
        <Input titulo="Senha" placeholder="Digite a sua senha email" value={senha} handleChange={(e) => mudaSenha(e)} />
        <div className={styles.showpass}>
            <input type="checkbox" name="showPassword" id="showPassword" />
            <label htmlFor="showPassword">Mostrar Senha</label>
        </div>
        <Button text={btnText} size="big" handleClick={() => handleClick(email, senha)}/>
        <div className={styles.textBottom}>
            <p>Esqueceu o <Link to="/" className={styles.link}>usuário/senha?</Link> </p>
            {!isLogin && (
                <p>Já tem uma conta? <Link to="/auth/login" className={styles.link}>Faça login</Link></p>
            )}
            {isLogin && (
                <p>Ainda não tem uma conta? <Link to="/auth/register" className={styles.link}>Faça seu cadastro</Link></p>
            )}
        </div>
    </div>
   )
}