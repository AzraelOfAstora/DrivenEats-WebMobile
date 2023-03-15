const pedidos = document.querySelectorAll('.boxPedido');
pedidos.forEach(Element => Element.addEventListener('click', selecionarPedido));
function selecionarPedido(e) {
    if (this.classList.contains("selecionado")) {
        return;
    } else {
        if (this.id == 'prato') {
            const pratos = document.querySelectorAll('#prato');
            for (let i =0; i<pratos.length; i++){
                if (pratos[i].classList.contains('selecionado')){
                    const elemento = document.querySelectorAll('#prato #check');
                    elemento.forEach(check => check.remove())
                }
            }
            pratos.forEach(prato => prato.classList.remove('selecionado'));
        }
        if (this.id == 'bebida') {
            const bebidas = document.querySelectorAll('#bebida');
            for (let i =0; i<bebidas.length; i++){
                if (bebidas[i].classList.contains('selecionado')){
                    const elemento = document.querySelectorAll('#bebida #check');
                    elemento.forEach(check => check.remove())
                }
            }
            bebidas.forEach(bebida => bebida.classList.remove('selecionado'));
        }
        if (this.id == 'sobremesa') {
            const sobremesas = document.querySelectorAll('#sobremesa');
            for (let i =0; i<sobremesas.length; i++){
                if (sobremesas[i].classList.contains('selecionado')){
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