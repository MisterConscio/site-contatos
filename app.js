const form = document.getElementById("form-contato")
const nomes = []
const telefones = []

let linhas = ""

form.addEventListener('submit', function(e) {

  e.preventDefault()

  adicionaLinha()
  atualizaTabela()

})

function adicionaLinha() {

  const inputNomeContato = document.getElementById('nome-contato')
  const inputTelContato = document.getElementById('telefone-contato')

  if (telefones.includes(inputTelContato.value)) {
    alert(` O número ${inputTelContato.value} ja foi inserido.`)
  } else {
    nomes.push(inputNomeContato.value)
    telefones.push(parseFloat(inputTelContato.value))

    let linha = "<tr>"
    linha += `<td>${inputNomeContato.value}</td>`
    linha += `<td>${inputTelContato.value}</td>`
    linha += "</tr>"

    linhas += linha
  }

  inputTelContato.value = ""
  inputNomeContato.value = ""

}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody")
  corpoTabela.innerHTML = linhas
}

