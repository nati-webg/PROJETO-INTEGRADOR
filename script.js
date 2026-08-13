// --- FUNÇÃO DE ACESSIBILIDADE: ALTO CONTRASTE ---
function alternarContraste() {
    // Liga ou desliga a classe de alto contraste na tag body
    document.body.classList.toggle('alto-contraste');
    
    // Salva a escolha do usuário no navegador
    const estaAtivo = document.body.classList.contains('alto-contraste');
    localStorage.setItem('altoContraste', estaAtivo);
}

// Verifica se o usuário já usou o alto contraste antes e mantém ativo
if (localStorage.getItem('altoContraste') === 'true') {
    document.body.classList.add('alto-contraste');
}


// --- LÓGICA DO SIMULADOR INTERATIVO ---
function ejecutarSimulacao() {
    const disco = document.getElementById('disco');
    const resultado = document.getElementById('resultado');
    const btn = document.getElementById('btnGirar');

    // Desativa o botão temporariamente durante o giro
    btn.disabled = true;
    resultado.textContent = "Girando e misturando frequências de luz...";
    
    // Adiciona a classe CSS que faz o disco rodar via Animation
    disco.classList.add('disco-girando');

    // Simula a fusão das cores após 2.5 segundos de rotação
    setTimeout(() => {
        // Para a animação de rotação
        disco.classList.remove('disco-girando');
        
        // Altera o fundo do disco para cinza claro (ilusão óptica da mistura das 7 cores voltando a ser "luz branca")
        disco.style.background = '#e0e0e0'; 
        
        // Exibe a explicação científica e a relação teórica com o projeto
        resultado.innerHTML = `
            <span style="color: #2e7d32;">✓ Mistura Óptica Concluída!</span><br>
            O reflexo gerou a ilusão da luz branca. Logo, provamos que uma superfície <strong>PRETA</strong> (reverso) fará o oposto: absorverá 100% dessas mesmas cores, garantindo uma eficiência térmica de até <strong>94% no aquecimento solar da piscina!</strong>
        `;
        
        // Reseta o disco de volta para o padrão colorido após 5 segundos para permitir novos testes
        setTimeout(() => {
            disco.style.background = 'conic-gradient(red, orange, yellow, green, blue, indigo, violet, red)';
            btn.disabled = false;
        }, 5000);

    }, 2500);
}

