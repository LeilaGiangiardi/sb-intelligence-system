// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    const searchFinance = document.getElementById('searchFinance');
    const filterMonth = document.getElementById('filterMonth');
    const filterStatus = document.getElementById('filterStatus');

    // Associa os eventos de digitação e mudança (filtros)
    if (searchFinance) searchFinance.addEventListener('keyup', filterTables);
    if (filterMonth) filterMonth.addEventListener('change', filterTables);
    if (filterStatus) filterStatus.addEventListener('change', filterTables);

    // Função de filtro cruzado das tabelas
    function filterTables() {
        let textFilter = searchFinance ? searchFinance.value.toLowerCase() : "";
        let monthFilter = filterMonth ? filterMonth.value.toLowerCase() : "";
        let statusFilter = filterStatus ? filterStatus.value.toLowerCase() : "";

        // Filtrar Tabela de Comissões
        document.querySelectorAll('#commissionTableBody tr').forEach(row => {
            let rowText = row.innerText.toLowerCase();
            let matchesText = rowText.includes(textFilter);
            let matchesMonth = monthFilter === "" || rowText.includes(monthFilter);
            let matchesStatus = statusFilter === "" || rowText.includes(statusFilter);

            row.style.display = (matchesText && matchesMonth && matchesStatus) ? '' : 'none';
        });

        // Filtrar Tabela de Assinaturas (Adimplência)
        document.querySelectorAll('#subscriptionTableBody tr').forEach(row => {
            let rowText = row.innerText.toLowerCase();
            // Para as assinaturas, o filtro de mês e status do select foca nas comissões,
            // então usamos apenas o filtro de texto.
            row.style.display = rowText.includes(textFilter) ? '' : 'none';
        });
    }
});