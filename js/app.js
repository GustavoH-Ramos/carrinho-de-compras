let total = 0;
limpar();

function adicionar(){
    //recuperar valores produto, quantidade e valor

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    //calcular o preço
    let preco = quantidade * valorUnitario;

    //adicionar no carrinho
    if(quantidade > 0){
    let itens = document.getElementById('lista-produtos');
    itens.innerHTML = itens.innerHTML + `<section class="carrinho__produtos__produto">
                            <span class="texto-azul">${quantidade}X</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
                        </section>`;
    }else{
        alert('Você deve inserir a quantidade do pruduto.');
    }

    //atualizar o valor total
    total = total + preco;

    let textoTotal = document.getElementById('valor-total');
    textoTotal.textContent = `R$ ${total}`;
    document.getElementById('quantidade').value = '';
}

function limpar(){
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

