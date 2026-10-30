const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Durante uma aula, seu professor apresenta uma ferramenta de Inteligência Artificial que consegue explicar conteúdos, responder perguntas e ajudar nos estudos. Como você reage?",
        alternativas: [
            {
                texto: "Fico curioso e quero experimentar a ferramenta para aprender coisas novas.",
                afirmacao: "Começou a explorar a Inteligência Artificial e descobriu novas maneiras de aprender e estudar."
            },
            {
                texto: "Fico preocupado, pois acredito que os alunos podem deixar de pensar por conta própria.",
                afirmacao: "Passou a refletir sobre os riscos da Inteligência Artificial e a importância de desenvolver o pensamento crítico."
            }
        ]
    },
    {
        enunciado: "Seu professor passou uma pesquisa sobre meio ambiente. Você decide utilizar uma ferramenta de IA para ajudar na atividade. Como você utiliza essa tecnologia?",
        alternativas: [
            {
                texto: "Peço para a IA explicar o assunto e me ajudar a encontrar informações para a pesquisa.",
                afirmacao: "Aprendeu a utilizar a IA como uma ferramenta de apoio para encontrar informações e compreender assuntos difíceis."
            },
            {
                texto: "Faço minha própria pesquisa em livros, sites e materiais indicados pelo professor.",
                afirmacao: "Desenvolveu suas habilidades de pesquisa e percebeu que existem muitas maneiras de aprender sem depender da Inteligência Artificial."
            }
        ]
    },
    {
        enunciado: "Na sua escola, alguns alunos começaram a entregar trabalhos feitos inteiramente por Inteligência Artificial, sem revisar ou compreender o conteúdo. O que você pensa sobre isso?",
        alternativas: [
            {
                texto: "A IA pode ajudar bastante, mas os alunos precisam entender e revisar o que ela produz.",
                afirmacao: "Passou a defender o uso responsável da Inteligência Artificial, mostrando aos colegas que a tecnologia deve ajudar na aprendizagem, e não substituir o esforço dos estudantes."
            },
            {
                texto: "Se a IA consegue fazer o trabalho, não vejo problema em entregar tudo pronto.",
                afirmacao: "Começou a depender da Inteligência Artificial para realizar suas atividades e percebeu que estava deixando de desenvolver suas próprias habilidades."
            }
        ]
    },
    {
        enunciado: "Sua professora propôs um projeto criativo sobre o futuro da educação. Você pode utilizar ferramentas de Inteligência Artificial para desenvolver sua ideia. O que você escolhe fazer?",
        alternativas: [
            {
                texto: "Utilizo uma IA para criar imagens, textos e ideias que complementem meu projeto.",
                afirmacao: "Descobriu novas possibilidades criativas com a Inteligência Artificial e começou a utilizar a tecnologia para desenvolver projetos inovadores na escola."
            },
            {
                texto: "Prefiro criar meu projeto com desenhos, pesquisas e ideias próprias, sem utilizar IA.",
                afirmacao: "Desenvolveu sua criatividade por meio de métodos tradicionais e percebeu que a tecnologia é uma opção, mas não a única maneira de criar."
            }
        ]
    },
    {
        enunciado: "A escola decidiu ampliar o uso da Inteligência Artificial nas salas de aula. Alguns alunos acreditam que ela poderá substituir os professores no futuro. Qual é a sua opinião?",
        alternativas: [
            {
                texto: "Acredito que a IA pode ajudar os professores, mas a presença humana continua sendo essencial na educação.",
                afirmacao: "Passou a incentivar o uso da Inteligência Artificial como uma aliada dos professores, valorizando a empatia, o diálogo e a orientação humana no processo de aprendizagem."
            },
            {
                texto: "Acredito que, no futuro, a IA poderá ensinar melhor do que os professores.",
                afirmacao: "Começou a pesquisar sobre o futuro da educação e descobriu que, apesar dos avanços tecnológicos, o papel dos professores continua sendo muito importante para a formação dos estudantes."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
