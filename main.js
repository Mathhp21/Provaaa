const form = document.getElementById('form-gasto');
const tabela = document.querySelector('#lista-gastos tbody');
const totalSpan = document.getElementById('total');

let gastos = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const descricao = document.getElementById('descricao').value;
  const valor = parseFloat(document.getElementById('valor').value);
  const categoria = document.getElementById('categoria').value;

  if (descricao && !isNaN(valor) && categoria) {
    const novoGasto = { descricao, valor, categoria };
    gastos.push(novoGasto);
    atualizarTabela();
    form.reset();
  }
});