import styles from "./edit.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
export default function EditContact(){
    return(
        <div className={styles.meio}>
            <div className={styles.principal}>
                <h1 className={styles.edit}>Editar Contato</h1>
                <Input titulo="Nome" placeholder="Digite o nome do contato"/>
                <Input titulo="email" placeholder="Digite o email do contato"/>
                <Input titulo="telefone" placeholder="Digite o número do contato"/>
                <Button text="Criar contato" size="medium"/>
            </div>
        </div>
    )
}