// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // Configuração do Filtro de Busca Cruzada
    const searchEditais = document.getElementById('searchEditais');
    const filterMatch = document.getElementById('filterMatch');

    if (searchEditais) searchEditais.addEventListener('keyup', filterTable);
    if (filterMatch) filterMatch.addEventListener('change', filterTable);

    function filterTable() {
        let textFilter = searchEditais ? searchEditais.value.toLowerCase() : "";
        let matchFilter = filterMatch ? filterMatch.value : "";
        let rows = document.querySelectorAll('#editaisTableBody tr');

        rows.forEach(row => {
            let rowText = row.innerText.toLowerCase();
            let rowMatch = row.getAttribute('data-match');
            
            let matchesText = rowText.includes(textFilter);
            let matchesMatch = matchFilter === "" || rowMatch === matchFilter;

            row.style.display = (matchesText && matchesMatch) ? '' : 'none';
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

// Funções de Ação Gerencial (Globais)
function vincularCRM(btn, id) {
    btn.innerHTML = "Vinculado ✓";
    btn.style.backgroundColor = "var(--texto-secundario)";
    btn.disabled = true;
    alert(`Sucesso! A oportunidade ${id} foi injetada diretamente na primeira coluna (Captação) do Pipeline CRM do consultor responsável.`);
}

function descartarEdital(btn) {
    if(confirm("Deseja ocultar este edital devido à baixa probabilidade de ganho?")) {
        let tr = btn.closest('tr');
        if (tr) {
            tr.style.opacity = '0.4';
            btn.disabled = true;
            btn.innerText = "Descartado";
        }
    }
}