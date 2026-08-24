// ======================================================
// DISCO DE NEWTON - SCRIPT.JS
// Projeto Integrador
// Física + Tecnociência + Programação
// ======================================================


// ======================================================
// 1. ACESSIBILIDADE - ALTO CONTRASTE
// ======================================================

const btnContraste = document.getElementById("btnContraste");

function alternarContraste() {
    document.body.classList.toggle("alto-contraste");

    const ativo = document.body.classList.contains("alto-contraste");

    localStorage.setItem("altoContraste", ativo);

    if (btnContraste) {
        btnContraste.textContent = ativo
            ? "☀️ Contraste normal"
            : "♿ Alto contraste";
    }
}

if (btnContraste) {
    btnContraste.addEventListener("click", alternarContraste);
}

if (localStorage.getItem("altoContraste") === "true") {
    document.body.classList.add("alto-contraste");

    if (btnContraste) {
        btnContraste.textContent = "☀️ Contraste normal";
    }
}


// ======================================================
// 2. MENU PARA CELULAR
// ======================================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        const aberto = navMenu.classList.toggle("menu-aberto");

        menuToggle.setAttribute("aria-expanded", aberto);

        menuToggle.textContent = aberto ? "✕" : "☰";
    });


    // Fecha o menu quando o usuário clica em um link
    const linksMenu = navMenu.querySelectorAll("a");

    linksMenu.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("menu-aberto");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";
        });

    });
}


// ======================================================
// 3. INFORMAÇÕES DAS CORES DO DISCO
// ======================================================

const botoesCores = document.querySelectorAll(".color-labels button");
const colorInfo = document.getElementById("colorInfo");

botoesCores.forEach(botao => {

    botao.addEventListener("click", () => {

        const cor = botao.dataset.color;
        const informacao = botao.dataset.info;

        if (colorInfo) {

            colorInfo.innerHTML = `
                <strong>${cor}</strong><br>
                ${informacao}
            `;

        }

        botoesCores.forEach(b => {
            b.classList.remove("cor-selecionada");
        });

        botao.classList.add("cor-selecionada");

    });

});


// ======================================================
// 4. SIMULAÇÃO DO PRISMA
// ======================================================

const prismButton = document.getElementById("prismButton");
const spectrum = document.getElementById("spectrum");
const prismHint = document.getElementById("prismHint");

if (prismButton) {

    prismButton.addEventListener("click", () => {

        const ativo = spectrum.classList.toggle("spectrum-active");

        if (ativo) {

            prismButton.classList.add("prism-active");

            prismHint.textContent =
                "A luz branca foi representada como uma combinação de diferentes regiões do espectro visível.";

        } else {

            prismButton.classList.remove("prism-active");

            prismHint.textContent =
                "Clique no prisma para visualizar a decomposição da luz.";

        }

    });

}


// ======================================================
// 5. SIMULADOR DO DISCO DE NEWTON
// ======================================================

const disco = document.getElementById("disco");
const btnGirar = document.getElementById("btnGirar");
const btnPausar = document.getElementById("btnPausar");
const btnResetar = document.getElementById("btnResetar");

const speedRange = document.getElementById("speedRange");
const speedValue = document.getElementById("speedValue");

const speedLabel = document.getElementById("speedLabel");

const statusIcon = document.getElementById("statusIcon");

const resultadoTitulo = document.getElementById("resultadoTitulo");
const resultado = document.getElementById("resultado");


// Variáveis do simulador
let girando = false;
let velocidade = 0;


// ------------------------------------------------------
// Atualiza a velocidade visual do disco
// ------------------------------------------------------

function atualizarVelocidade(valor) {

    velocidade = Number(valor);

    if (speedValue) {
        speedValue.textContent = `${velocidade}%`;
    }


    // Velocidade 0
    if (velocidade === 0) {

        if (speedLabel) {
            speedLabel.textContent = "DISCO PARADO";
        }

        if (resultadoTitulo) {
            resultadoTitulo.textContent = "Disco parado";
        }

        if (resultado) {
            resultado.textContent =
                "Aumente a velocidade para iniciar a experiência.";
        }

        if (statusIcon) {
            statusIcon.textContent = "○";
        }

        pararAnimacao();

        return;
    }


    // Velocidade baixa
    if (velocidade < 30) {

        if (speedLabel) {
            speedLabel.textContent = "ROTAÇÃO BAIXA";
        }

        if (resultadoTitulo) {
            resultadoTitulo.textContent = "As cores ainda estão bem visíveis";
        }

        if (resultado) {
            resultado.textContent =
                "O disco está começando a girar. Como a velocidade ainda é baixa, conseguimos perceber as diferentes regiões coloridas.";
        }

        if (statusIcon) {
            statusIcon.textContent = "◔";
        }

    }


    // Velocidade média
    else if (velocidade < 70) {

        if (speedLabel) {
            speedLabel.textContent = "ROTAÇÃO MÉDIA";
        }

        if (resultadoTitulo) {
            resultadoTitulo.textContent = "As cores começam a se integrar";
        }

        if (resultado) {
            resultado.textContent =
                "Com a rotação mais rápida, as informações luminosas das diferentes regiões do disco chegam aos olhos em uma sequência mais rápida.";
        }

        if (statusIcon) {
            statusIcon.textContent = "◑";
        }

    }


    // Velocidade alta
    else {

        if (speedLabel) {
            speedLabel.textContent = "ROTAÇÃO ALTA";
        }

        if (resultadoTitulo) {
            resultadoTitulo.textContent = "Mistura visual das cores";
        }

        if (resultado) {
            resultado.innerHTML =
                "A rotação rápida faz com que as cores sejam percebidas de maneira mais integrada. <strong>É aqui que podemos observar o princípio demonstrado pelo Disco de Newton.</strong>";
        }

        if (statusIcon) {
            statusIcon.textContent = "●";
        }

    }


    // Se estiver girando, atualiza a velocidade da animação
    if (girando) {
        aplicarAnimacao();
    }

}


// ------------------------------------------------------
// Aplica a animação de rotação
// ------------------------------------------------------

function aplicarAnimacao() {

    if (!disco || velocidade <= 0) {
        return;
    }

    /*
        Quanto maior a velocidade escolhida,
        menor o tempo de uma volta.
    */

    const duracao = Math.max(
        0.08,
        1.5 - (velocidade / 100) * 1.4
    );

    disco.style.animationDuration = `${duracao}s`;

    disco.classList.add("disco-girando");
}


// ------------------------------------------------------
// Para a animação
// ------------------------------------------------------

function pararAnimacao() {

    if (!disco) {
        return;
    }

    disco.classList.remove("disco-girando");
}


// ------------------------------------------------------
// Botão GIRAR
// ------------------------------------------------------

if (btnGirar) {

    btnGirar.addEventListener("click", () => {

        if (velocidade === 0) {

            // Se estiver parado, começa com velocidade inicial
            velocidade = 30;

            if (speedRange) {
                speedRange.value = velocidade;
            }

            atualizarVelocidade(velocidade);
        }

        girando = true;

        aplicarAnimacao();

        if (btnGirar) {
            btnGirar.classList.add("ativo");
        }

        if (btnPausar) {
            btnPausar.classList.remove("ativo");
        }

    });

}


// ------------------------------------------------------
// Botão PAUSAR
// ------------------------------------------------------

if (btnPausar) {

    btnPausar.addEventListener("click", () => {

        girando = false;

        pararAnimacao();

        if (btnPausar) {
            btnPausar.classList.add("ativo");
        }

        if (btnGirar) {
            btnGirar.classList.remove("ativo");
        }

        if (speedLabel && velocidade > 0) {
            speedLabel.textContent = "DISCO PAUSADO";
        }

    });

}


// ------------------------------------------------------
// Botão REINICIAR
// ------------------------------------------------------

if (btnResetar) {

    btnResetar.addEventListener("click", () => {

        girando = false;
        velocidade = 0;

        pararAnimacao();

        if (speedRange) {
            speedRange.value = 0;
        }

        if (speedValue) {
            speedValue.textContent = "0%";
        }

        if (speedLabel) {
            speedLabel.textContent = "DISCO PARADO";
        }

        if (resultadoTitulo) {
            resultadoTitulo.textContent = "Disco parado";
        }

        if (resultado) {
            resultado.textContent =
                "Aumente a velocidade para iniciar a experiência.";
        }

        if (statusIcon) {
            statusIcon.textContent = "○";
        }

        if (btnGirar) {
            btnGirar.classList.remove("ativo");
        }

        if (btnPausar) {
            btnPausar.classList.remove("ativo");
        }

    });

}


// ------------------------------------------------------
// Controle deslizante de velocidade
// ------------------------------------------------------

if (speedRange) {

    speedRange.addEventListener("input", () => {

        const valor = Number(speedRange.value);

        atualizarVelocidade(valor);

        if (valor > 0 && !girando) {

            // Apenas mostra a velocidade escolhida,
            // sem iniciar automaticamente.

            pararAnimacao();

        }

    });

}


// ======================================================
// 6. MODAL DOS CONCEITOS
// ======================================================

const conceptCards = document.querySelectorAll(".concept-card");

const conceptModal = document.getElementById("conceptModal");
const modalClose = document.getElementById("modalClose");

const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");


conceptCards.forEach(card => {

    card.addEventListener("click", () => {

        const titulo = card.dataset.modalTitle;
        const texto = card.dataset.modalText;

        if (modalTitle) {
            modalTitle.textContent = titulo;
        }

        if (modalText) {
            modalText.textContent = texto;
        }

        if (conceptModal) {

            conceptModal.classList.add("modal-aberto");

            conceptModal.setAttribute("aria-hidden", "false");

        }

    });

});


function fecharModal() {

    if (!conceptModal) {
        return;
    }

    conceptModal.classList.remove("modal-aberto");

    conceptModal.setAttribute("aria-hidden", "true");
}


if (modalClose) {
    modalClose.addEventListener("click", fecharModal);
}


// Fecha clicando fora da caixa
if (conceptModal) {

    conceptModal.addEventListener("click", event => {

        if (event.target === conceptModal) {
            fecharModal();
        }

    });

}


// Fecha com ESC
document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        fecharModal();
    }

});


// ======================================================
// 7. QUIZ
// ======================================================

const perguntas = [

    {
        pergunta:
            "O que acontece com a percepção das cores quando o Disco de Newton gira rapidamente?",

        opcoes: [
            "As cores podem ser percebidas de forma mais integrada.",
            "Todas as cores desaparecem fisicamente.",
            "O disco começa a produzir luz própria.",
            "A luz deixa de existir."
        ],

        correta: 0,

        explicacao:
            "A rotação rápida faz com que os diferentes estímulos coloridos sejam apresentados em rápida sequência, influenciando a percepção visual."
    },


    {
        pergunta:
            "Qual é a principal relação do Disco de Newton com a luz?",

        opcoes: [
            "Ele demonstra uma relação entre diferentes cores do espectro visível.",
            "Ele transforma qualquer objeto em uma fonte de luz.",
            "Ele impede a luz de chegar aos olhos.",
            "Ele demonstra apenas o funcionamento de um motor."
        ],

        correta: 0,

        explicacao:
            "O disco reúne diferentes cores do espectro visível e permite observar como elas podem ser percebidas quando o disco gira."
    },


    {
        pergunta:
            "O que é dispersão da luz?",

        opcoes: [
            "A separação da luz em diferentes componentes.",
            "A ausência total de luz.",
            "A transformação da luz em som.",
            "O aumento da massa da luz."
        ],

        correta: 0,

        explicacao:
            "A dispersão está relacionada à separação dos componentes da luz, como podemos observar na passagem da luz por um prisma."
    },


    {
        pergunta:
            "Qual sistema do corpo participa diretamente da percepção das cores?",

        opcoes: [
            "Sistema visual.",
            "Sistema digestório.",
            "Sistema muscular.",
            "Sistema respiratório."
        ],

        correta: 0,

        explicacao:
            "A percepção visual depende da interação entre os olhos, especialmente a retina, e o cérebro."
    }

];


let perguntaAtual = 0;
let pontuacao = 0;
let respondeu = false;


const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
const quizNext = document.getElementById("quizNext");

const quizProgress = document.getElementById("quizProgress");
const quizBar = document.getElementById("quizBar");


// ------------------------------------------------------
// Carrega pergunta
// ------------------------------------------------------

function carregarPergunta() {

    respondeu = false;

    const pergunta = perguntas[perguntaAtual];

    if (!pergunta) {
        finalizarQuiz();
        return;
    }


    if (quizQuestion) {
        quizQuestion.textContent = pergunta.pergunta;
    }


    if (quizOptions) {

        quizOptions.innerHTML = "";

        pergunta.opcoes.forEach((opcao, indice) => {

            const botao = document.createElement("button");

            botao.type = "button";

            botao.className = "quiz-option";

            botao.textContent = opcao;

            botao.addEventListener("click", () => {
                responderPergunta(indice);
            });

            quizOptions.appendChild(botao);

        });

    }


    if (quizFeedback) {
        quizFeedback.textContent = "";
        quizFeedback.className = "quiz-feedback";
    }


    if (quizNext) {
        quizNext.disabled = true;
        quizNext.textContent =
            perguntaAtual === perguntas.length - 1
                ? "Ver resultado"
                : "Próxima →";
    }


    if (quizProgress) {
        quizProgress.textContent =
            `Questão ${perguntaAtual + 1} de ${perguntas.length}`;
    }


    if (quizBar) {

        const progresso =
            (perguntaAtual / perguntas.length) * 100;

        quizBar.style.width = `${progresso}%`;
    }

}


// ------------------------------------------------------
// Responde pergunta
// ------------------------------------------------------

function responderPergunta(indiceEscolhido) {

    if (respondeu) {
        return;
    }

    respondeu = true;

    const pergunta = perguntas[perguntaAtual];

    const botoes =
        quizOptions.querySelectorAll(".quiz-option");


    botoes.forEach(botao => {
        botao.disabled = true;
    });


    if (indiceEscolhido === pergunta.correta) {

        pontuacao++;

        botoes[indiceEscolhido].classList.add("correta");

        if (quizFeedback) {

            quizFeedback.className =
                "quiz-feedback feedback-correto";

            quizFeedback.innerHTML =
                `✓ <strong>Correto!</strong> ${pergunta.explicacao}`;

        }

    } else {

        botoes[indiceEscolhido].classList.add("incorreta");

        botoes[pergunta.correta].classList.add("correta");

        if (quizFeedback) {

            quizFeedback.className =
                "quiz-feedback feedback-erro";

            quizFeedback.innerHTML =
                `✕ <strong>Quase!</strong> ${pergunta.explicacao}`;

        }

    }


    if (quizNext) {
        quizNext.disabled = false;
    }


    if (quizBar) {

        const progresso =
            ((perguntaAtual + 1) / perguntas.length) * 100;

        quizBar.style.width = `${progresso}%`;

    }

}


// ------------------------------------------------------
// Próxima pergunta
// ------------------------------------------------------

if (quizNext) {

    quizNext.addEventListener("click", () => {

        if (!respondeu) {
            return;
        }

        perguntaAtual++;

        carregarPergunta();

    });

}


// ------------------------------------------------------
// Resultado final
// ------------------------------------------------------

function finalizarQuiz() {

    if (quizQuestion) {

        quizQuestion.innerHTML = `
            🎉 Quiz concluído!
        `;

    }


    if (quizOptions) {

        let mensagem = "";

        if (pontuacao === perguntas.length) {

            mensagem =
                "Excelente! Você demonstrou domínio dos conceitos principais do Disco de Newton.";

        } else if (pontuacao >= 3) {

            mensagem =
                "Muito bom! Você compreendeu a maior parte dos conceitos.";

        } else if (pontuacao >= 2) {

            mensagem =
                "Bom começo! Vale revisar alguns conceitos antes da apresentação.";

        } else {

            mensagem =
                "Vale revisar o conteúdo do site e tentar novamente.";

        }


        quizOptions.innerHTML = `
            <div class="quiz-final">
                <div class="final-score">
                    ${pontuacao}/${perguntas.length}
                </div>

                <h3>${mensagem}</h3>

                <button
                    class="btn-primary"
                    id="reiniciarQuiz"
                    type="button">
                    ↻ Refazer quiz
                </button>
            </div>
        `;


        const reiniciarQuiz =
            document.getElementById("reiniciarQuiz");


        if (reiniciarQuiz) {

            reiniciarQuiz.addEventListener("click", () => {

                perguntaAtual = 0;
                pontuacao = 0;

                carregarPergunta();

            });

        }

    }


    if (quizFeedback) {
        quizFeedback.textContent = "";
    }


    if (quizNext) {
        quizNext.style.display = "none";
    }


    if (quizProgress) {
        quizProgress.textContent = "Quiz concluído";
    }


    if (quizBar) {
        quizBar.style.width = "100%";
    }

}


// Inicia o quiz
if (quizQuestion && quizOptions) {
    carregarPergunta();
}


// ======================================================
// 8. ANIMAÇÃO DE ENTRADA DAS SEÇÕES
// ======================================================

const secoes = document.querySelectorAll(".section");

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("section-visible");

                observador.unobserve(entrada.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


secoes.forEach(secao => {
    observador.observe(secao);
});


// ======================================================
// 9. EFEITO DE DESTAQUE NO DISCO CONFORME A VELOCIDADE
// ======================================================

if (speedRange && disco) {

    speedRange.addEventListener("input", () => {

        const valor = Number(speedRange.value);

        /*
            O brilho é apenas uma representação visual.
            Não significa que o disco esteja realmente
            emitindo luz branca.
        */

        if (valor >= 80) {

            disco.classList.add("mistura-alta");

        } else {

            disco.classList.remove("mistura-alta");

        }

    });

}


// ======================================================
// 10. ACESSIBILIDADE PELO TECLADO
// ======================================================

document.addEventListener("keydown", event => {

    // Barra de espaço controla o disco
    if (
        event.code === "Space" &&
        document.activeElement === document.body
    ) {

        event.preventDefault();

        if (!girando) {

            if (velocidade === 0) {
                velocidade = 30;

                if (speedRange) {
                    speedRange.value = 30;
                }

                atualizarVelocidade(30);
            }

            girando = true;
            aplicarAnimacao();

        } else {

            girando = false;
            pararAnimacao();

        }

    }

});


// ======================================================
// FIM DO SCRIPT
// ======================================================
