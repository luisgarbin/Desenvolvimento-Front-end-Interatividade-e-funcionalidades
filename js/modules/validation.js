// Módulo isolado para validações de formulário e regras de negócio

export function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validarCampoVazio(texto) {
  return texto.trim() !== "";
}