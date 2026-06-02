// Função para abrir o Modal de Detalhes do Edital
function openModal(cardElement) {
    let id = cardElement.getAttribute('data-id');
    let portal = cardElement.getAttribute('data-portal');
    let objeto = cardElement.getAttribute('data-objeto');
    let abertura = cardElement.getAttribute('data-abertura');
    let regime = cardElement.getAttribute('data-regime');
    let operator = cardElement.getAttribute('data-operador');
    
    let title = cardElement.querySelector('.k-card-title').innerText;
    let client = cardElement.querySelector('.k-card-client').innerText;
    let org = cardElement.querySelector('.k-card-org').innerText;
    let value = cardElement.querySelector('.k-card-value').innerText;
    let stage = cardElement.parentElement.getAttribute('data-stage');

    document.getElementById('mId').innerText = id;
    document.getElementById('mTitle').innerText = title;
    document.getElementById('mClient').innerText = "Empresa Blindada: " + client;
    document.getElementById('mOrg').innerText = org.replace("Órgão: ", "");
    document.getElementById('mPortal').innerText = portal;
    document.getElementById('mObjeto').innerText = objeto;
    document.getElementById('mAbertura').innerText = abertura;
    document.getElementById('mRegime').innerText = regime;
    document.getElementById('mValue').innerText = value;
    document.getElementById('mOperator').innerText = operator;

    let sadProb = cardElement.getAttribute('data-sad-prob');
    let sadPreco = cardElement.getAttribute('data-sad-preco');
    let sadBlock = document.getElementById('mSadBlock');
    
    if (sadProb && sadPreco) {
        sadBlock.style.display = 'block';
        document.getElementById('mSadProb').innerText = sadProb;
        document.getElementById('mSadPreco').innerText = sadPreco;
    } else {
        sadBlock.style.display = 'none';
    }

    let actionsArea = document.getElementById('modalActions');
    actionsArea.innerHTML = ""; 

    if (stage === "Captação") {
        actionsArea.innerHTML = `<button class="btn-novo" style="background:var(--azul-principal);" onclick="moveAlert()">Enviar para Inteligência SAD</button>`;
    } else if (stage === "Análise SAD") {
        actionsArea.innerHTML = `
            <button class="btn-table" style="color:var(--erro); border-color:var(--erro);" onclick="moveAlert()">Rejeitar Margem</button>
            <button class="btn-novo" onclick="moveAlert()">Homologar Preço</button>`;
    } else if (stage === "Validação GED") {
        actionsArea.innerHTML = `<button class="btn-novo" style="background:var(--erro);" onclick="alert('Notificação de inconformidade disparada ao cliente!')">Disparar Notificação</button>`;
    } else if (stage === "Sala de Disputa") {
        actionsArea.innerHTML = `<button class="btn-novo" style="background:var(--sucesso);" onclick="moveAlert()">Declarar Vitória</button>`;
    } else if (stage === "Vitória Homologada") {
        actionsArea.innerHTML = `<button class="btn-novo" onclick="alert('Enviado para conciliação automática no BillingService!')">Sincronizar Comissão</button>`;
    }

    document.getElementById('kanbanModal').classList.add('active');
}

// Função para fechar o Modal clicando fora
function closeModal(event) {
    if (event.target.id === "kanbanModal") {
        document.getElementById('kanbanModal').classList.remove('active');
    }
}

// Função de alerta para os botões do Modal
function moveAlert() {
    alert("Ação computada! O microserviço correspondente atualizará o estágio da licitação em tempo real.");
    document.getElementById('kanbanModal').classList.remove('active');
}

// Evento do Filtro de Busca (Executa apenas após o HTML carregar)
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchKanban');
    
    if(searchInput) {
        searchInput.addEventListener('keyup', function() {
            let filter = this.value.toLowerCase();
            document.querySelectorAll('.kanban-card').forEach(card => {
                let text = card.innerText.toLowerCase();
                card.style.display = text.includes(filter) ? 'flex' : 'none';
            });
        });
    }
});