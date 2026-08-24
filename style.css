// =========================================================
// DISCO DE NEWTON — INTERAÇÕES
// Projeto Integrador
// Física + Tecnociência + Programação
// =========================================================


// =========================================================
// ACESSIBILIDADE
// =========================================================

const body = document.body;
const btnContraste = document.getElementById("btnContraste");

function atualizarContraste() {

    const ativo =
        body.classList.contains("alto-contraste");

    btnContraste.setAttribute(
        "aria-pressed",
        String(ativo)
    );

    btnContraste.textContent =
        ativo
            ? "☀️ Contraste normal"
            : "♿ Alto contraste";

    localStorage.setItem(
        "altoContraste",
        String(ativo)
    );
}


btnContraste.addEventListener("click", () => {

    body.classList.toggle("alto-contraste");

    atualizarContraste();

});


if (
    localStorage.getItem("altoContraste") === "true"
) {

    body.classList.add("alto-contraste");

}


atualizarContraste();


// =========================================================
// MENU PARA CELULAR
// =========================================================

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

    const aberto =
        navMenu.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(aberto)
    );

});


document
    .querySelectorAll(".nav-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


// =========================================================
// CORES DO DISCO
// =========================================================

const colorInfo =
    document.getElementById("colorInfo");


document
    .querySelectorAll(".color-labels button")
    .forEach(button => {

        button.addEventListener("click", () => {

            const nome =
                button.dataset.color;

            const info =
                button.dataset.info;

            colorInfo.innerHTML =
                `<strong>${nome}:</strong> ${info}`;

        });

    });


// =========================================================
// PRISMA / ESPECTRO
// =========================================================

const prismButton =
    document.getElementById("prismButton");

const spectrum =
    document.getElementById("spectrum");

const prismHint =
    document.getElementById("prismHint");


prismButton.addEventListener("click", () => {

    const ativo =
        spectrum.classList.toggle("active");


    if (ativo) {

        prismHint.textContent =
            "✨ A luz foi representada como separada em diferentes componentes do espectro visível.";

        prismButton.setAttribute(
            "aria-pressed",
            "true"
        );

    } else {

        prismHint.textContent =
            "👆 Clique novamente no prisma para visualizar a decomposição da luz.";

        prismButton.setAttribute(
            "aria-pressed",
            "false"
        );

    }

});


// =========================================================
// SIMULADOR DO DISCO DE NEWTON
// =========================================================

const disco =
    document.getElementById("disco");

const discoWrapper =
    document.querySelector(".disco-wrapper");

const speedRange =
    document.getElementById("speedRange");

const speedValue =
    document.getElementById("speedValue");

const speedLabel =
    document.getElementById("speedLabel");

const resultadoTitulo =
    document.getElementById("resultadoTitulo");

const resultado =
    document.getElementById("resultado");

const statusIcon =
    document.getElementById("statusIcon");

const btnGirar =
    document.getElementById("btnGirar");

const btnPausar =
    document.getElementById("btnPausar");

const btnResetar =
    document.getElementById("btnResetar");


let girando = false;

let velocidade = 0;


// ---------------------------------------------------------
// ATUALIZAR VELOCIDADE
// ---------------------------------------------------------

function atualizarDisco() {

    velocidade =
        Number(speedRange.value);


    speedValue.textContent =
        `${velocidade}%`;


    // -----------------------------------------
    // DISCO PARADO
    // -----------------------------------------

    if (velocidade === 0) {

        disco.style.animationDuration =
            "0s";

        discoWrapper.classList.remove(
            "fast-effect",
            "max-effect"
        );

        speedLabel.textContent =
            "DISCO PARADO";

        resultadoTitulo.textContent =
            "Disco parado";

        resultado.textContent =
            "Aumente a velocidade para iniciar a experiência.";

        statusIcon.textContent =
            "○";

        return;
    }


    // -----------------------------------------
    // VELOCIDADE DA ANIMAÇÃO
    // -----------------------------------------

    const duracao =
        Math.max(
            0.08,
            1.5 - (velocidade / 100) * 1.38
        );


    disco.style.animationDuration =
        `${duracao}s`;


    // -----------------------------------------
    // BAIXA VELOCIDADE
    // -----------------------------------------

    if (velocidade < 35) {

        discoWrapper.classList.remove(
            "fast-effect",
            "max-effect"
        );

        speedLabel.textContent =
            "BAIXA VELOCIDADE";

        resultadoTitulo.textContent =
            "🌈 Cores bem definidas";

        resultado.textContent =
            "Os setores coloridos ainda podem ser percebidos com bastante clareza.";

        statusIcon.textContent =
            "🟡";

    }


    // -----------------------------------------
    // VELOCIDADE MÉDIA
    // -----------------------------------------

    else if (velocidade < 70) {

        discoWrapper.classList.add(
            "fast-effect"
        );

        discoWrapper.classList.remove(
            "max-effect"
        );

        speedLabel.textContent =
            "VELOCIDADE MÉDIA";

        resultadoTitulo.textContent =
            "👁️ Maior integração visual";

        resultado.textContent =
            "As cores passam rapidamente diante dos olhos e tendem a parecer mais integradas.";

        statusIcon.textContent =
            "🔵";

    }


    // -----------------------------------------
    // ALTA VELOCIDADE
    // -----------------------------------------

    else {

        discoWrapper.classList.add(
            "max-effect"
        );

        speedLabel.textContent =
            "ALTA VELOCIDADE";

        resultadoTitulo.textContent =
            "✨ Aparência mais clara";

        resultado.textContent =
            "A simulação aproxima visualmente a integração das cores. Em um disco real, o resultado pode ser branco-acinzentado.";

        statusIcon.textContent =
            "⚪";

    }


    // -----------------------------------------
    // CONTINUAR GIRANDO
    // -----------------------------------------

    if (girando) {

        disco.classList.add(
            "disco-girando"
        );

    }

}


// ---------------------------------------------------------
// INICIAR
// ---------------------------------------------------------

function iniciarDisco() {

    if (velocidade === 0) {

        speedRange.value = 70;

        atualizarDisco();

    }


    girando = true;


    disco.classList.add(
        "disco-girando"
    );


    resultadoTitulo.textContent =
        "🌀 Disco em movimento";

    resultado.textContent =
        "Observe as cores enquanto aumentamos a velocidade de rotação.";

    statusIcon.textContent =
        "●";


    btnGirar.textContent =
        "🔄 Girando...";

}


// ---------------------------------------------------------
// PAUSAR
// ---------------------------------------------------------

function pausarDisco() {

    girando = false;


    disco.classList.remove(
        "disco-girando"
    );


    statusIcon.textContent =
        "Ⅱ";


    btnGirar.textContent =
        "▶ Girar";


    if (velocidade > 0) {

        resultadoTitulo.textContent =
            "⏸ Experimento pausado";

        resultado.textContent =
            "Altere a velocidade ou clique em Girar para continuar.";

    }

}


// ---------------------------------------------------------
// REINICIAR
// ---------------------------------------------------------

function resetarDisco() {

    girando = false;


    disco.classList.remove(
        "disco-girando"
    );


    discoWrapper.classList.remove(
        "fast-effect",
        "max-effect"
    );


    speedRange.value = 0;


    btnGirar.textContent =
        "▶ Girar";


    atualizarDisco();

}


// ---------------------------------------------------------
// EVENTOS DOS BOTÕES
// ---------------------------------------------------------

btnGirar.addEventListener(
    "click",
    iniciarDisco
);


btnPausar.addEventListener(
    "click",
    pausarDisco
);


btnResetar.addEventListener(
    "click",
    resetarDisco
);


speedRange.addEventListener(
    "input",
    () => {

        atualizarDisco();

        if (
            velocidade > 0 &&
            girando
        ) {

            disco.classList.add(
                "disco-girando"
            );

        }

    }
);


// =========================================================
// MODAIS DOS CONCEITOS
// =========================================================

const modal =
    document.getElementById("conceptModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const modalClose =
    document.getElementById("modalClose");


document
    .querySelectorAll(".concept-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            modalTitle.textContent =
                card.dataset.modalTitle;

            modalText.textContent =
                card.dataset.modalText;

            modal.classList.add("active");

            modal.setAttribute(
                "aria-hidden",
                "false"
            );

            modalClose.focus();

        });

    });


function fecharModal() {

    modal.classList.remove(
        "active"
    );

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

}


modalClose.addEventListener(
    "click",
    fecharModal
);


modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            fecharModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            fecharModal();

        }

    }
);


// =========================================================
// QUIZ
// =========================================================

const perguntas = [

    {
        pergunta:
            "O que acontece com a percepção das cores quando o Disco de Newton gira rapidamente?",

        opcoes: [

            "As cores tendem a parecer mais integradas visualmente.",

            "As cores deixam de refletir qualquer luz.",

            "O disco obrigatoriamente fica preto.",

            "A luz desaparece."

        ],

        correta: 0,

        explicacao:
            "A rotação rápida faz os setores coloridos passarem sucessivamente diante dos olhos, contribuindo para uma percepção mais integrada."
    },


    {
        pergunta:
            "O que um prisma pode fazer com a luz branca?",

        opcoes: [

            "Destruí-la.",

            "Separá-la em diferentes componentes do espectro.",

            "Transformá-la diretamente em calor.",

            "Torná-la invisível."

        ],

        correta: 1,

        explicacao:
            "A dispersão pode separar componentes da luz, permitindo observar diferentes regiões do espectro visível."
    },


    {
        pergunta:
            "Qual conceito está relacionado à percepção de estímulos visuais apresentados rapidamente em sequência?",

        opcoes: [

            "Convecção.",

            "Refração sonora.",

            "Percepção visual.",

            "Inércia térmica."

        ],

        correta: 2,

        explicacao:
            "A percepção visual está relacionada à forma como nosso sistema visual processa estímulos apresentados rapidamente."
    },


    {
        pergunta:
            "Por que um Disco de Newton feito com pigmentos pode parecer acinzentado em vez de branco puro?",

        opcoes: [

            "Porque os pigmentos absorvem parte da luz.",

            "Porque o olho humano não percebe nenhuma cor.",

            "Porque o disco precisa ser preto.",

            "Porque o movimento elimina a luz."

        ],

        correta: 0,

        explicacao:
            "Os pigmentos absorvem parte da luz incidente, por isso o resultado de um disco real pode parecer acinzentado."
    }

];


let perguntaAtual = 0;

let pontuacao = 0;

let respondeu = false;


const quizQuestion =
    document.getElementById(
        "quizQuestion"
    );

const quizOptions =
    document.getElementById(
        "quizOptions"
    );

const quizFeedback =
    document.getElementById(
        "quizFeedback"
    );

const quizNext =
    document.getElementById(
        "quizNext"
    );

const quizProgress =
    document.getElementById(
        "quizProgress"
    );

const quizBar =
    document.getElementById(
        "quizBar"
    );


// ---------------------------------------------------------
// CARREGAR PERGUNTA
// ---------------------------------------------------------

function carregarPergunta() {

    respondeu = false;

    quizNext.disabled = true;

    quizFeedback.textContent = "";

    quizFeedback.className =
        "quiz-feedback";


    const pergunta =
        perguntas[perguntaAtual];


    quizProgress.textContent =
        `Questão ${perguntaAtual + 1} de ${perguntas.length}`;


    quizBar.style.width =
        `${((perguntaAtual + 1) / perguntas.length) * 100}%`;


    quizQuestion.textContent =
        pergunta.pergunta;


    quizOptions.innerHTML =
        "";


    pergunta.opcoes.forEach(
        (opcao, indice) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "quiz-option";


            button.type =
                "button";


            button.textContent =
                opcao;


            button.addEventListener(
                "click",
                () => responder(
                    indice,
                    button
                )
            );


            quizOptions.appendChild(
                button
            );

        }
    );


    quizNext.textContent =
        perguntaAtual === perguntas.length - 1
            ? "Ver resultado →"
            : "Próxima →";

}


// ---------------------------------------------------------
// RESPONDER
// ---------------------------------------------------------

function responder(
    indice,
    buttonEscolhido
) {

    if (respondeu) {
        return;
    }


    respondeu = true;


    const pergunta =
        perguntas[perguntaAtual];


    const botoes =
        document.querySelectorAll(
            ".quiz-option"
        );


    botoes.forEach(
        (button, i) => {

            button.disabled = true;


            if (
                i === pergunta.correta
            ) {

                button.classList.add(
                    "correct"
                );

            }

        }
    );


    if (
        indice === pergunta.correta
    ) {

        pontuacao++;


        quizFeedback.textContent =
            `✓ Correto! ${pergunta.explicacao}`;


        quizFeedback.classList.add(
            "correct-feedback"
        );

    } else {

        buttonEscolhido.classList.add(
            "wrong"
        );


        quizFeedback.textContent =
            `✗ Quase! ${pergunta.explicacao}`;


        quizFeedback.classList.add(
            "wrong-feedback"
        );

    }


    quizNext.disabled =
        false;

}


// ---------------------------------------------------------
// PRÓXIMA PERGUNTA
// ---------------------------------------------------------

quizNext.addEventListener(
    "click",
    () => {

        if (!respondeu) {
            return;
        }


        if (
            perguntaAtual <
            perguntas.length - 1
        ) {

            perguntaAtual++;

            carregarPergunta();

            return;

        }


        mostrarResultado();

    }
);


// ---------------------------------------------------------
// RESULTADO
// ---------------------------------------------------------

function mostrarResultado() {

    quizQuestion.textContent =
        `🎉 Você acertou ${pontuacao} de ${perguntas.length}!`;


    quizOptions.innerHTML =
        "";


    quizFeedback.className =
        "quiz-feedback result-feedback";


    if (
        pontuacao === perguntas.length
    ) {

        quizFeedback.textContent =
            "🏆 Excelente! Você dominou os principais conceitos do Disco de Newton.";

    }

    else if (
        pontuacao >= 2
    ) {

        quizFeedback.textContent =
            "👏 Muito bem! Você já entendeu boa parte do conteúdo.";

    }

    else {

        quizFeedback.textContent =
            "🔎 Que tal revisar as seções de Física e visão humana e tentar novamente?";

    }


    quizNext.textContent =
        "↻ Refazer quiz";


    quizNext.disabled =
        false;


    quizNext.onclick =
        reiniciarQuiz;

}


// ---------------------------------------------------------
// REINICIAR QUIZ
// ---------------------------------------------------------

function reiniciarQuiz() {

    perguntaAtual = 0;

    pontuacao = 0;

    quizNext.onclick = null;

    carregarPergunta();

}


// =========================================================
// INICIALIZAÇÃO
// =========================================================

carregarPergunta();

atualizarDisco();
