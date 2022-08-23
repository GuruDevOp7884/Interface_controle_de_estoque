function adicionar()
{
    produto = document.getElementById('nome_produto').value
    quantidade = document.getElementById('quantidade_produto').value
    descricao = document.getElementById('descricao_produto').value
    validate = document.getElementById('validacao')

    if(produto.length > 0 && quantidade.length > 0 && descricao.length > 0)
    {
        var tabela = document.getElementById('estoque')
        var nova_celula = tabela.insertRow(0)
        // var celula_item = nova_celula.insertCell(0)
        var celula_nome = nova_celula.insertCell(0)
        var celula_quantidade = nova_celula.insertCell(1)
        var celula_codigo = nova_celula.insertCell(2)
        var celula_descricao = nova_celula.insertCell(3)
        

        celula_nome.innerHTML = produto[0].toUpperCase() + produto.slice(1) //<coloca a primeira letra maiuscula
        celula_quantidade.innerHTML = quantidade[0].toUpperCase() + quantidade.slice(1)
        celula_descricao.innerHTML = descricao[0].toUpperCase() + descricao.slice(1)
        celula_codigo.innerHTML = "#" + Math.floor(Math.random() * 100)

        // celula_item.innerHTML = result(0)

        document.getElementById('nome_produto').value = ''
        document.getElementById('quantidade_produto').value = ''
        document.getElementById('descricao_produto').value = ''

        validate.innerHTML = ""
    }
    else
    {
        validate.innerHTML = 'Por favor preencha todos os campos'
    }
}

function remover()
{
    var tabela = document.getElementById('estoque').deleteRow(0)
    var novaTabela = nova_celula.deleteRow(0)
}