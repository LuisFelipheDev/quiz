import QuestaoModel from "../model/questao"
import styles from '../styles/Questionario.module.css'
import Botao from "./Botao"
import Questao from "./Questao"

interface QuestionarioProps{
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao:QuestaoModel) => void
    irPraProximaPasso: () => void
}

export default function Questionario(props) {

    function respostaFornecida(indice:number) {
        if(props.questao.naoRespondida){
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }
    return(
        <div className={styles.questionario}>
            {props.questao ? (
                <Questao valor={props.questao} tempoPraResposta={6} respostaFornecida={respostaFornecida} tempoEsgotado={props.irPraProximaPasso} />
                )
                :false
            }
            <Botao onClink={props.irPraProximaPasso} texto={props.ultima? 'Finalizar': 'Próxima' } />

        </div>
    )
}