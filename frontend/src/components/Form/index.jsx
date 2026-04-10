import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./form.module.css";
import { Link } from "react-router"
export default function Form({title, btnText, isLogin}){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const handleClick = (email, senha) => {

    }

   return(
    <div className={styles.form}>
        <h1 className={styles.titulo}>{title}</h1>
        <Input titulo="Email" placeholder="Digite o seu email" value={email} handleChange={(e) => setEmail(e.target.value)} />
        <Input titulo="Senha" placeholder="Digite a sua senha email" value={senha} handleChange={(e) => setSenha(e.target.value)} />
        <div className={styles.showpass}>
            <input type="checkbox" name="showPassword" id="showPassword" />
            <label htmlFor="showPassword">Mostrar Senha</label>
        </div>
        <Button text={btnText} size="big" handleClick={handleClick}/>
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