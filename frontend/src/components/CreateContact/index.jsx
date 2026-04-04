import Botao from "../Ui/botao"
import Input from "../Ui/Input"
import styles from "./createcontact.module.css"
export default function CreateContact(){
    return(
        <div className={styles.main}>
            <Input nome="Nome" placeholder="nome" type="text" />
            <Input nome="Email" placeholder="email" type="text" />
            <Input nome="Telefone" placeholder="telefone" type="number" />
            <Botao text="Criar contato" size="small"/>
        </div>
    )
}