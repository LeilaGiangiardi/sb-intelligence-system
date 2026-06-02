document.addEventListener("DOMContentLoaded", function() {
    
    // Função para atualizar a saudação baseada na hora do dia
    function atualizarSaudacao() {
        const horaAtual = new Date().getHours();
        let saudacao = "";
        let emoji = "";

        if (horaAtual >= 5 && horaAtual < 12) {
            saudacao = "Bom dia";
            emoji = "☕";
        } else if (horaAtual >= 12 && horaAtual < 18) {
            saudacao = "Boa tarde";
            emoji = "☀️";
        } else {
            saudacao = "Boa noite";
            emoji = "🌙";
        }

        const greetingElement = document.getElementById("greetingTitle");
        if(greetingElement) {
            greetingElement.innerHTML = `${saudacao}, Gestão SB! ${emoji}`;
        }
    }

    // Executa a função imediatamente
    atualizarSaudacao();

    // Configuração do Sino de Notificação (Global da Página)
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