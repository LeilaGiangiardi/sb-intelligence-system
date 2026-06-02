document.addEventListener("DOMContentLoaded", function() {
    
    // Filtro de Busca Cruzada (Texto + Probabilidade)
    const searchEditais = document.getElementById('searchEditais');
    const filterMatch = document.getElementById('filterMatch');

    if (searchEditais) searchEditais.addEventListener('keyup', filterTable);
    if (filterMatch) filterMatch.addEventListener('change', filterTable);

    function filterTable() {
        let textFilter = document.getElementById('searchEditais').value.toLowerCase();
        let matchFilter = document.getElementById('filterMatch').value;
        let rows = document.querySelectorAll('#editaisTableBody tr');
        
        rows.forEach(row => {
            let rowText = row.innerText.toLowerCase();
            let rowMatch = row.getAttribute('data-match');
            
            let matchesText = rowText.includes(textFilter);
            let matchesMatch = matchFilter === "" || rowMatch === matchFilter;

            row.style.display = (matchesText && matchesMatch) ? '' : 'none';
        });
    }

    // Funções do Sino de Notificação
    window.toggleNotif = function() {
        const menu = document.getElementById('notifMenu');
        if (menu) menu.classList.toggle('active');
        const bell = document.querySelector('.notification-bell');
        if (bell) bell.classList.remove('has-notification');
    };

    window.onclick = function(event) {
        if (!event.target.matches('.notification-bell')) {
            document.querySelectorAll(".notif-menu").forEach(m => m.classList.remove('active'));
        }
    };
});

// ==========================================
// FUNÇÕES GLOBAIS DE INTERAÇÃO (MODAL E AÇÕES)
// ==========================================

// Função de Abertura do Modal injetando dados do SAD
window.openClientModal = function(btn) {
    let tr = btn.closest('tr');
    
    document.getElementById('mId').innerText = tr.getAttribute('data-id');
    document.getElementById('mTitle').innerText = "Edital: " + tr.querySelector('strong').innerText;
    document.getElementById('mOrg').innerText = tr.getAttribute('data-org');
    document.getElementById('mPortal').innerText = tr.getAttribute('data-portal');
    document.getElementById('mObjeto').innerText = tr.getAttribute('data-objeto');
    document.getElementById('mAbertura').innerText = tr.getAttribute('data-abertura');
    document.getElementById('mValue').innerText = tr.getAttribute('data-valor');
    
    // Injeção dos dados preditivos no Modal
    document.getElementById('mModalProb').innerText = tr.getAttribute('data-prob');
    document.getElementById('mModalReason').innerText = "Justificativa da IA: " + tr.getAttribute('data-reason');

    let status = tr.getAttribute('data-status');
    let actionsArea = document.getElementById('modalActions');

    if (status === "Novo Match") {
        actionsArea.innerHTML = `
            <button class="btn-table" onclick="alert('Baixando edital original...')">Baixar Edital PDF</button>
            <button class="btn-novo" style="background:var(--sucesso);" onclick="autorizar(this, '${tr.getAttribute('data-id')}')">Autorizar Consultoria a Participar</button>
        `;
    } else if (status === "Autorizado") {
        actionsArea.innerHTML = `<button class="btn-table" onclick="document.getElementById('clientModal').classList.remove('active')">Fechar Aba</button>`;
    } else if (status === "Em Disputa") {
        actionsArea.innerHTML = `<button class="btn-novo" style="background:var(--dourado);" onclick="alert('Abrindo sala de disputa ao vivo...')">Visualizar Sala de Lances 🔴</button>`;
    }

    document.getElementById('clientModal').classList.add('active');
};

// Fecha a janela modal
window.closeModal = function(event) {
    if (event.target.id === "clientModal") {
        document.getElementById('clientModal').classList.remove('active');
    }
};

// Função para simular o cliente autorizando a participação da SB
window.autorizar = function(btn, id) {
    btn.innerHTML = "Participação Autorizada ✓";
    btn.style.backgroundColor = "var(--texto-secundario)";
    btn.disabled = true;
    alert(`O edital ${id} foi enviado com sucesso para a esteira comercial da SB Intelligence!`);
    
    setTimeout(() => {
        document.getElementById('clientModal').classList.remove('active');
        let tr = document.querySelector(`tr[data-id="${id}"]`);
        if (tr) {
            let badge = tr.querySelector('.badge');
            badge.className = "badge ok";
            badge.style.background = "#FFF3E0";
            badge.style.color = "var(--alerta)";
            badge.innerText = "Análise SB (SAD)";
            tr.setAttribute('data-status', 'Autorizado');
            tr.querySelector('.btn-novo').outerHTML = `<button class="btn-table" onclick="openClientModal(this)">Ver Detalhes</button>`;
        }
    }, 600);
};