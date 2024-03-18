document.getElementById('calcular').addEventListener('click', function () {
  var seValue = parseFloat(document.getElementById('se').value);
  var equivaleValue = parseFloat(document.getElementById('equivale').value);
  var entãoValue = parseFloat(document.getElementById('então').value);

  if (isNaN(seValue) || isNaN(equivaleValue) || isNaN(entãoValue)) {
    alert('Por favor, insira valores válidos em todos os campos.');
    return;
  }

  var resultado = (entãoValue * equivaleValue) / seValue;

  var resultadoFormatado = resultado.toFixed(2).replace('.', ',');

  document.getElementById('result').innerHTML = resultadoFormatado;
});
