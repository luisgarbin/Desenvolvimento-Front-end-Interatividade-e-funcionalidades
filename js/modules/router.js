// Módulo responsável pelo roteamento dinâmico de uma Single Page Application (SPA)

const rotas = {
  "/": "<h1>Página Inicial</h1><p>Bem-vindo à nossa aplicação SPA!</p>",
  "/dashboard": `
    <h1>Dashboard de Vendas</h1>
    <canvas id="graficoVendas" width="400" height="200"></canvas>
  `,
  "/cadastro": `
    <h1>Formulário de Cadastro</h1>
    <form id="formCadastro">
      <input type="text" id="nome" placeholder="Nome completo" required>
      <input type="email" id="email" placeholder="E-mail" required>
      <button type="submit">Salvar</button>
    </form>
  `
};

export function navegarPara(url) {
  window.history.pushState(null, null, url);
  renderizarRota();
}

export function renderizarRota() {
  const caminho = window.location.pathname;
  const app = document.getElementById("app");
  app.innerHTML = rotas[caminho] || "<h1>404 - Página não encontrada</h1>";
}