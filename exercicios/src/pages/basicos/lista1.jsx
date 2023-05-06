/*
Gere uma div
dentro da div uma lista de 10 valores span
*/
export default function exportacaodelista() {
  return <div>{fazlista(10)}</div>;
}

function fazlista(tamanho) {
  var lista = [];
  for (var i = 1; i <= tamanho; i++) {
    lista.push(<span>{i},</span>);
  }
  return lista;
}
