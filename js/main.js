// Ficheiro principal (Orquestrador da aplicação)

import { navegarPara, renderizarRota } from './modules/router.js';
import { salvarDados, carregarDados } from './modules/storage.js';
import { validarEmail, validarCampoVazio } from './modules/validation.js';

// Função para inicializar o gráfico da Chart.js
function inicializarGraficoVendas() {
  const ctx = document.getElementById('graficoVendas');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr'],
      datasets: [{
        label: 'Vendas em R$',
        data: [1200, 1900, 3000, 2500],
        backgroundColor: '#3498db'
      }]
    },
    options: {
      responsive: true
    }
  });
}

// Event Delegation para captura de links e envios de formulário
document.addEventListener("DOMContentLoaded", () => {
  renderizarRota();

  // Captura cliques de navegação (SPA)
  document.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navegarPara(e.target.getAttribute("href"));
      if (window.location.pathname === "/dashboard") {
        inicializarGraficoVendas();
      }
    }
  });

  // Captura submissão de formulário dinâmico
  document.addEventListener("submit", (e) => {
    if (e.target.id === "formCadastro") {
      e.preventDefault(); // Impede o reload da página

      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;

      if (!validarCampoVazio(nome) || !validarEmail(email)) {
        alert("Por favor, preencha os campos corretamente!");
        return;
      }

      const usuarios = carregarDados("usuarios");
      usuarios.push({ nome, email });
      salvarDados("usuarios", usuarios);

      alert("Usuário cadastrado com sucesso!");
      e.target.reset();
    }
  });

  // Suporte aos botões voltar/avançar do navegador
  window.addEventListener("popstate", () => {
    renderizarRota();
    if (window.location.pathname === "/dashboard") {
      inicializarGraficoVendas();
    }
  });
});