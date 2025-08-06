const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
         enunciado:"Qual a principal função de um processador em um computador?",
         alernativas:["Armazenar dados temporários","Executar cálculos e processar informações"]
            },
    {
        enunciado:"Pergunta 2",
        alernativas:["Alternativa 1","Alternativa 2"]
            },
    {
        enunciado:"Pergunta 3",
        alernativas:["Alternativa 1","Alternativa 2"]
            },
    {
        enunciado:"Pergunta 4",
        alernativas:["Alternativa 1","Alternativa 2"]
            },
    {
        enunciado:"Pergunta 5",
        alernativas:["Alternativa 1","Alternativa 2"]
            }
];

let atual = 0;
let perguntaAtual;
function mostraPergunta(){
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta()