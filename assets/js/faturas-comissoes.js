// ==========================================
// FUNÇÕES DE GESTÃO DE ASSINATURA (SaaS) E FATURAS
// ==========================================

// Controle do Modal de Planos
window.openPlanModal = function() {
    document.getElementById('planModal').classList.add('active');
};

window.closePlanModal = function(event) {
    if (!event || event.target.id === "planModal") {
        document.getElementById('planModal').classList.remove('active');
    }
};

// Lógica de simulação de Troca de Plano (Upgrade/Downgrade)
window.mudarPlanoPara = function(nomePlano, precoPlano) {
    let confirma = confirm(`Confirma a alteração da sua assinatura para o "${nomePlano}"?`);
    if(confirma) {
        // Modifica a interface dinamicamente
        document.getElementById('headerPlanBadge').innerText = "Plano " + nomePlano;
        document.getElementById('kpiPlanTitle').innerText = "Plano " + nomePlano;
        document.querySelector('.table-plan-cell').innerText = "Plano " + nomePlano;
        document.querySelector('.table-price-cell').innerText = precoPlano;
        
        alert(`Plano atualizado com sucesso para ${nomePlano}!\n\nAs novas permissões de robô já foram carregadas no seu perfil.`);
        document.getElementById('planModal').classList.remove('active');
        
        // Atualiza a seleção visual no modal
        document.querySelectorAll('.plan-option-card').forEach(card => card.classList.remove('current'));
        if(nomePlano === 'Básico') document.getElementById('card-basic').classList.add('current');
        if(nomePlano === 'Premium') document.getElementById('card-premium').classList.add('current');
    }
};

// Simulação de Cancelamento da Assinatura (Churn)
window.cancelarPlano = function() {
    let justificativa = prompt("Poxa, que pena que deseja nos deixar! 😢\n\nPor favor, digite o motivo do cancelamento para nos ajudar a melhorar o sistema:");
    if (justificativa !== null) {
        alert("Sua solicitação de cancelamento foi aberta!\n\nSeu acesso ao Portal continuará ativo até o fim do período de faturamento atual. Nossa equipe entrará em contato.");
        document.getElementById('kpiPlanTitle').innerText = "Cancelamento Solicitado";
        document.getElementById('kpiPlanTitle').style.color = "var(--erro)";
    }
};

// Lógica de Simulação de Pagamento (Gateway)
window.pagarFatura = function(btnElement, metodo, faturaNome) {
    let container = btnElement.parentElement;
    
    if (metodo === 'Pix') {
        if(confirm(`Gerar PIX Copia e Cola para a fatura "${faturaNome}"?`)) {
            alert("Código PIX copiado!\n\n0002012636BR.GOV.BCB.PIX0114...");
            confirmarPagamentoVisual(container, 'Pix');
        }
    } else if (metodo === 'Cartão de Crédito') {
        if(confirm(`Deseja cobrar o valor da "${faturaNome}" no cartão cadastrado final 4890?`)) {
            alert("Processando transação com a operadora de crédito...");
            confirmarPagamentoVisual(container, 'Cartão');
        }
    } else if (metodo === 'Boleto Bancário') {
        alert("Boleto gerado com sucesso!\n\nCódigo de barras: 34191.79001 01043.513184 91020.150008 7 97230000050000");
        if(confirm("Deseja simular a baixa automática deste boleto para o teste de apresentação?")) {
            confirmarPagamentoVisual(container, 'Boleto');
        }
    }
};

// Modifica o DOM após pagamento realizado
function confirmarPagamentoVisual(containerElement, metodoUsado) {
    // Substitui botões por confirmação
    containerElement.outerHTML = `<span style="font-size: 12px; color: var(--sucesso); font-weight: 600;">✅ Pago via ${metodoUsado}</span>`;
    
    // Atualiza a tabela
    let tr = containerElement.closest('tr');
    if(tr) {
        let badge = tr.querySelector('.badge');
        if(badge) {
            badge.className = "badge ok";
            badge.innerText = "Liquidado";
            badge.style.backgroundColor = "#E8F5E9";
            badge.style.color = "var(--sucesso)";
        }
    }
}