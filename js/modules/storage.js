// Módulo responsável exclusivamente pelo Web Storage (localStorage)

export function salvarDados(chave, dados) {
  try {
    localStorage.setItem(chave, JSON.stringify(dados));
  } catch (erro) {
    console.error("Erro ao salvar no localStorage:", erro);
  }
}

export function carregarDados(chave) {
  try {
    const dados = localStorage.getItem(chave);
    return dados ? JSON.parse(dados) : [];
  } catch (erro) {
    console.error("Erro ao ler do localStorage, retornando padrão:", erro);
    return [];
  }
}