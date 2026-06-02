document.addEventListener("DOMContentLoaded", function() {
    
    // Filtro de Busca Dinâmico
    const searchDocs = document.getElementById('searchDocs');
    const filterStatus = document.getElementById('filterStatus');

    if (searchDocs) searchDocs.addEventListener('keyup', filterTable);
    if (filterStatus) filterStatus.addEventListener('change', filterTable);

    function filterTable() {
        let textFilter = searchDocs ? searchDocs.value.toLowerCase() : "";
        let statusFilter = filterStatus ? filterStatus.value.toLowerCase() : "";
        // Ignora a linha de categoria (.doc-category)
        let rows = document.querySelectorAll('#docsTableBody tr:not(:has(.doc-category))'); 
        
        rows.forEach(row => {
            let rowText = row.innerText.toLowerCase();
            let docStatus = row.getAttribute('data-status') ? row.getAttribute('data-status').toLowerCase() : "";
            
            let matchesText = rowText.includes(textFilter);
            let matchesStatus = statusFilter === "" || docStatus === statusFilter;

            row.style.display = (matchesText && matchesStatus) ? '' : 'none';
        });
    }

    // Configuração do Sino de Notificação (Caso adicione na tela depois)
    window.toggleNotif = function() {
        const menu = document.getElementById('notifMenu');
        if (menu) {
            menu.classList.toggle('active');
            const bell = document.querySelector('.notification-bell');
            if (bell) bell.classList.remove('has-notification');
        }
    };

    window.onclick = function(event) {
        if (!event.target.matches('.notification-bell')) {
            document.querySelectorAll(".notif-menu").forEach(m => m.classList.remove('active'));
        }
    };
});

// ==========================================
// FUNÇÕES GLOBAIS DE INTERAÇÃO DO GED
// ==========================================

// Simulação do clique de Upload
window.triggerUpload = function() {
    alert("A janela de seleção de arquivos do seu computador será aberta.\nO ComplianceService lerá o arquivo PDF automaticamente para checar a validade.");
};

// Simulação de Assinatura Digital do Cliente
window.assinarDocumento = function(btnElement) {
    let confirma = confirm("Deseja utilizar seu Certificado Digital (A1/A3) ou Assinatura Eletrônica para assinar este documento legalmente?");
    if(confirma) {
        btnElement.outerHTML = `<span class="badge ok">Assinado Legalmente</span>`;
        alert("Assinatura validada com sucesso! A Consultoria SB já foi notificada.");
    }
};