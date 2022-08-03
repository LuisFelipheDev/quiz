import styles from '../styles/Temporizador.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TemporizadorProps{
    key:any
    duracao: number
    tempoEsgotado: () => void
}

export default function temporizador(props:TemporizadorProps) {
    return(
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                isPlaying
                duration={props.duracao}
                colors={['#BCE596', '#F7B801', '#ED827A',]}
                colorsTime={[10, 5, 0]}
                onComplete={props.tempoEsgotado}
            > 
            {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}