document.addEventListener('DOMContentLoaded', () => {
    const botao = document.querySelector('button');
    const r1 = document.querySelector('.r1');
    const r2 = document.querySelector('.r2');
  
    let resposta = '';
    let numeroDeContas = 0;
    let valTotal = 0;
  
    botao.addEventListener('click', (e) => {
      e.preventDefault();
  
      const descricao = document.querySelector('.descricao').value;
      const valor = Number(document.querySelector('.valor').value);
  
      numeroDeContas++;
      valTotal += valor;
      resposta += descricao + ' - R$: ' + valor.toFixed(2) + '\n';
  
      r1.innerText = resposta + '-----------------------------------------------------';
      r2.innerText = numeroDeContas + ' Total R$: ' + (valTotal).toFixed(2);
  
      document.querySelector('.descricao').value = '';
      document.querySelector('.valor').value = '';
    });
  });
  