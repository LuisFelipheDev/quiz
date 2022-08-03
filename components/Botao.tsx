import Link from "../node_modules/next/link";
import styles from "../styles/Botao.module.css";

interface BotaoProps{
    texto:string
    href?:string
    onClink?:(e:any)=>void

    
}

export default function Botao(props:BotaoProps) {

    function simpleButton() {
        return(
            <button className={styles.botao} onClick={props.onClink}>
        {props.texto}
    </button>
        )
    }

    return props.href ?
    (
        <Link href={props.href}>
            {simpleButton()}   
        </Link>

    )
    :(
        simpleButton()
    )
}