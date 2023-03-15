const pedidos = document.querySelectorAll('.boxPedido');
const botao = document.getElementById('fecharPedido');
pedidos.forEach(Element => Element.addEventListener('click', selecionarPedido));
function selecionarPedido(e) {
    if (this.classList.contains("selecionado")) {
        return;
    } else {
        if (this.id == 'prato') {
            const pratos = document.querySelectorAll('#prato');
            for (let i = 0; i < pratos.length; i++) {
                if (pratos[i].classList.contains('selecionado')) {
                    const elemento = document.querySelectorAll('#prato #check');
                    elemento.forEach(check => check.remove())
                }
            }
            pratos.forEach(prato => prato.classList.remove('selecionado'));
        }
        if (this.id == 'bebida') {
            const bebidas = document.querySelectorAll('#bebida');
            for (let i = 0; i < bebidas.length; i++) {
                if (bebidas[i].classList.contains('selecionado')) {
                    const elemento = document.querySelectorAll('#bebida #check');
                    elemento.forEach(check => check.remove())
                }
            }
            bebidas.forEach(bebida => bebida.classList.remove('selecionado'));
        }
        if (this.id == 'sobremesa') {
            const sobremesas = document.querySelectorAll('#sobremesa');
            for (let i = 0; i < sobremesas.length; i++) {
                if (sobremesas[i].classList.contains('selecionado')) {
                    const elemento = document.querySelectorAll('#sobremesa #check');
                    elemento.forEach(check => check.remove())
                }
            }
            sobremesas.forEach(sobremesa => sobremesa.classList.remove('selecionado'));
        }
        const check = document.createElement('ion-icon');
        check.setAttribute('name', 'checkmark-circle');
        check.setAttribute('id', 'check');
        this.classList.add('selecionado');
        this.children[3].appendChild(check);
    }
}
window.addEventListener('click', ativarBotao);
function ativarBotao() {
    const pedidosSelecionados = document.querySelectorAll('.selecionado');
    if (pedidosSelecionados.length == 3) {
        botao.removeAttribute('id', 'fecharPedido');
        botao.setAttribute('class', 'fecharPedido');
        botao.textContent = "Fechar pedido";
        let pedidoFinal = [];
        for(let i = 0; i< pedidosSelecionados.length; i++){
            pedidoFinal.push(pedidosSelecionados[i].children[1].textContent);
        }
        let precoFinal = 0;
        for (let i = 0; i<pedidosSelecionados.length;i++){
           precoFinal += parseFloat(pedidosSelecionados[i].children[3].children[0].lastChild.innerText.replace(',', '.'));
        }
        let precoFinalFixed = precoFinal.toFixed(2);
        let mensagemDoPedido = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ${pedidoFinal[0]}\n- Bebida: ${pedidoFinal[1]}\n- Sobremesa: ${pedidoFinal[2]}\nTotal: R$ ${precoFinalFixed}`);
        botao.addEventListener('click', function (){
            window.location.assign(`https://wa.me/5511960386578?text=${mensagemDoPedido}`);
        })
    }
}