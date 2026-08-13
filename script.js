// --- FUNÇÃO DE ACESSIBILIDADE: ALTO CONTRASTE ---
function alternarContraste() {
    document.body.classList.toggle('alto-contraste');
    const estaAtivo = document.body.classList.contains('alto-contraste');
    localStorage.setItem('altoContraste', estaAtivo);
}

if (localStorage.getItem('altoContraste') === 'true') {
    document.body.classList.add('alto-contraste');
}


// --- LÓGICA DO SIMULADOR INTERATIVO ---
function executarSimulacao() {
    const disco = document.getElementById('disco');
    const resultado = document.getElementById('resultado');
    const btn = document.getElementById('btnGirar');

    btn.disabled = true;
    resultado.textContent = "Girando e misturando frequências de luz...";
    
    disco.classList.add('disco-girando');

    setTimeout(() => {
        disco.classList.remove('disco-girando');
        disco.style.background = '#e0e0e0'; 
        
        resultado.innerHTML = `
            <span style="color: #2e7d32;">✓ Mistura Óptica Concluída!</span><br>
            O reflexo gerou a ilusão da luz branca. Logo, provamos que uma superfície <strong>PRETA</strong> (reverso) fará o oposto: absorverá 100% dessas mesmas cores, garantindo uma eficiência térmica de até <strong>94% no aquecimento solar da piscina!</strong>
        `;
        
        setTimeout(() => {
            disco.style.background = 'conic-gradient(red, orange, yellow, green, blue, indigo, violet, red)';
            btn.disabled = false;
        }, 5000);

    }, 2500);
}


