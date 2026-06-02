// ==========================================
// FUNÇÕES DE SUPORTE E ATENDIMENTO
// ==========================================

// Função para envio simulado de formulário (Abertura de Ticket)
window.enviarMensagem = function(event) {
    event.preventDefault(); // Evita recarregar a página
    
    let assunto = document.getElementById('assunto').value;
    let mensagem = document.getElementById('mensagem').value;

    if(assunto && mensagem) {
        alert(`✅ Ticket Aberto com Sucesso!\n\nSua mensagem sobre "${assunto}" foi enviada diretamente para o painel da Consultora Samara. Retornaremos o contato em breve.`);
        document.getElementById('supportForm').reset(); // Limpa o formulário
    }
};

// Função para simular o redirecionamento dos botões de contato (WhatsApp/Meet/Email)
window.abrirLink = function(canal) {
    if(canal === 'WhatsApp') {
        alert("Redirecionando para o WhatsApp Web...\nIniciando conversa segura com a Consultora Técnica.");
    } else if (canal === 'Google Meet') {
        alert("Abrindo agenda inteligente (Calendly)...\nEscolha o melhor dia e horário para a reunião em vídeo.");
    } else if (canal === 'Email') {
        alert("Abrindo seu cliente de e-mail padrão...");
    }
};

// Função de Acordeão para o FAQ (Abre e fecha as respostas)
window.toggleFaq = function(element) {
    let answer = element.nextElementSibling;
    let arrow = element.querySelector('span:last-child');

    if (answer.style.display === "block") {
        answer.style.display = "none";
        arrow.innerText = "▼";
        element.style.backgroundColor = "#F8FAFC";
    } else {
        answer.style.display = "block";
        arrow.innerText = "▲";
        element.style.backgroundColor = "#E3F2FD";
    }
};

// Função do Sino de Notificação (Global)
document.addEventListener("DOMContentLoaded", function() {
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