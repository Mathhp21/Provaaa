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
function atualizarTabela() {
    tabela.innerHTML = '';
    let total = 0;
  
    gastos.forEach((gasto, index) => {
      const tr = document.createElement('tr');
  
      const classeValor = gasto.valor > 100 ? 'valor-alto' : '';
  
      tr.innerHTML = `
        <td>${gasto.descricao}</td>
        <td class="${classeValor}">R$ ${gasto.valor.toFixed(2)}</td>
        <td>${gasto.categoria}</td>
        <td><button class="remover" onclick="removerGasto(${index})">Excluir</button></td>
      `;
  
      tabela.appendChild(tr);
      total += gasto.valor;
    });
  
    totalSpan.textContent = total.toFixed(2);
  }
  
  function removerGasto(index) {
    gastos.splice(index, 1);
    atualizarTabela();
  }