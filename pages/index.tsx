import { useEffect, useState } from "react";
import Questionario from "../components/Questionario";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";
import { useRouter } from "../node_modules/next/router";
import styles from '../styles/Home.module.css'

  const BASE_URL = 'http://localhost:3000/api'

export default function Home() {

  const router = useRouter()

  const [idsDasQuestoes,setIdsDasQuestoes] = useState<number[]>([])
  const [questao,setQuestao] = useState<QuestaoModel>()
  const [respostasCertas,setRespostasCertas] = useState<number>(0)

  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resp.json()    
    setIdsDasQuestoes(idsDasQuestoes)
  }

  async function carregarQuestoes(id:number) {
    const resp = await fetch(`${BASE_URL}/questoes/${id}`)
    const Questoes = await resp.json()
    const instancia = QuestaoModel.criarUsandoObjeto(Questoes)

    setQuestao(instancia)
  }

  useEffect(()=>{
    carregarIdsDasQuestoes()
  },[])


  useEffect(()=>{
    idsDasQuestoes.length > 0 && carregarQuestoes(idsDasQuestoes[0])
  },[idsDasQuestoes])

  function questaoRespondida(questao:QuestaoModel) {
    setQuestao(questao)

    const acertou = questao.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
  }

  function idProximaQuestao() {
      const proximoId = idsDasQuestoes.indexOf(questao.id) + 1
      return idsDasQuestoes[proximoId]
  }

  function irParaProximoPasso() {
      const proximoId = idProximaQuestao()
      proximoId ? irParaProximaQuestao(proximoId) : finalizar()
  }

  function irParaProximaQuestao(proximoId:number) {
    carregarQuestoes(proximoId)
  }

  function finalizar() {
    router.push({
      pathname:'/resultado',
      query:{
        total:idsDasQuestoes.length,
        certas: respostasCertas
      }
    })
  }

  return questao ? (
    <div className={styles.home}>
      <Questionario 
        questao={questao}
        ultima={idProximaQuestao() === undefined}
        questaoRespondida={questaoRespondida}
        irPraProximaPasso={irParaProximoPasso}
        
      />

    </div>
  ): false
}
