import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(306, "Quem é a namorada do Mickey?", [
    RespostaModel.errado("Margarida"),
    RespostaModel.errado("A Pequena Sereia"),
    RespostaModel.errado("Olívia Palito"),
    RespostaModel.certa("Minnie"),
  ]),
  new QuestaoModel(216, "O que era Frankenstein, de Mary Shelley?", [
    RespostaModel.errado("Gorila"),
    RespostaModel.errado("Príncipe"),
    RespostaModel.errado("Sapo"),
    RespostaModel.certa("Monstro"),
  ]),
  new QuestaoModel(201, "Quem fundou a fábrica de automóveis Ford?", [
    RespostaModel.errado("Harrison Ford"),
    RespostaModel.errado("Gerald Ford"),
    RespostaModel.errado("Anna Ford"),
    RespostaModel.certa("Henry Ford"),
  ]),
  new QuestaoModel(221, "A água ferve a quantos graus centígrados?", [
    RespostaModel.errado("200"),
    RespostaModel.errado("170"),
    RespostaModel.errado("120"),
    RespostaModel.certa("100"),
  ]),
  new QuestaoModel(231, "Qual é o país de origem do vinho champanha", [
    RespostaModel.errado("América"),
    RespostaModel.errado("Holanda"),
    RespostaModel.errado("Suécia"),
    RespostaModel.certa("França"),
  ]),
  new QuestaoModel(202, "Que Imperador pôs fogo em Roma ?", [
    RespostaModel.errado("Trajano"),
    RespostaModel.errado("Julio Cezar"),
    RespostaModel.errado("Calígola"),
    RespostaModel.certa("Nero"),
  ]),
];

export default questoes;
