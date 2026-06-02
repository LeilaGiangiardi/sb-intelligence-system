document.addEventListener("DOMContentLoaded", function() {
    
    // Captura os elementos de filtro da tela de Clientes e GED
    const searchClient = document.getElementById('searchClient');
    const filterPlan = document.getElementById('filterPlan');
    const filterStatus = document.getElementById('filterStatus');

    // Adiciona os escutadores de eventos se os elementos existirem
    if (searchClient) searchClient.addEventListener('keyup', filterCRMTable);
    if (filterPlan) filterPlan.addEventListener('change', filterCRMTable);
    if (filterStatus) filterStatus.addEventListener('change', filterCRMTable);

    // Função de filtragem cruzada
    function filterCRMTable() {
        let textFilter = searchClient ? searchClient.value.toLowerCase() : "";
        let planFilter = filterPlan ? filterPlan.value.toLowerCase() : "";
        let statusFilter = filterStatus ? filterStatus.value.toLowerCase() : "";

        let rows = document.querySelectorAll('#clientTableBody tr');
        
        rows.forEach(row => {
            let rowText = row.innerText.toLowerCase();
            
            let matchesText = rowText.includes(textFilter);
            let matchesPlan = planFilter === "" || rowText.includes(planFilter);
            let matchesStatus = statusFilter === "" || rowText.includes(statusFilter);

            if (matchesText && matchesPlan && matchesStatus) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    // Configuração do Sino de Notificação (Global)
    window.toggleNotif = function() {
        const menu = document.getElementById('notifMenu');
        if (menu) {
            menu.classList.toggle('active');
            const bell = document.querySelector('.notification-bell');
            if (bell) bell.classList.remove('has-notification');
        }
    };

    // Fechar notificação ao clicar fora
    window.onclick = function(event) {
        if (!event.target.matches('.notification-bell')) {
            document.querySelectorAll(".notif-menu").forEach(m => m.classList.remove('active'));
        }
    };
});