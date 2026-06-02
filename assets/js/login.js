// Aguarda o HTML ser carregado
document.addEventListener("DOMContentLoaded", function() {
    
    const formLogin = document.getElementById("form-login");
    const emailInput = document.getElementById("email");
    const erroEmail = document.getElementById("erro-email");

    if (formLogin) {
        formLogin.addEventListener("submit", function(evento) {
            evento.preventDefault(); // Evita recarregar a página

            // Validação customizada do formato do E-mail
            if (emailInput && erroEmail && !emailInput.validity.valid) {
                erroEmail.style.display = "block";
                emailInput.style.borderColor = "var(--erro)";
                emailInput.focus();
                return; // Para o código aqui se o e-mail estiver errado
            } else if (emailInput && erroEmail) {
                erroEmail.style.display = "none";
                emailInput.style.borderColor = "var(--borda)";
            }

            // Redirecionamento de Rotas
            const perfilSelecionado = document.getElementById("perfil").value;

            if (perfilSelecionado === "gestor") {
                window.location.href = "views/gestor/dashboard-admin.html";
            } else if (perfilSelecionado === "cliente") {
                window.location.href = "views/cliente/dashboard-cliente.html";
            }
        });
    }

    // Tira o aviso de erro assim que o usuário digita novamente
    if (emailInput && erroEmail) {
        emailInput.addEventListener("input", function() {
            erroEmail.style.display = "none";
            emailInput.style.borderColor = "var(--borda)";
        });
    }
});