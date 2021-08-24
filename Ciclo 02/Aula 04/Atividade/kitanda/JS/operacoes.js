window.onload = function () {
    (() => {
        let mostrarProdutoCliente = document.querySelector("#content-produtos > ul#produtos");
        for (let idx in produtos) {
            mostrarProdutoCliente.innerHTML += `<li class = "itemProduto" data-preco=${produtos[idx].prodPreco}> ${produtos[idx].prodDesc} </li> `;
        }
        console.log(mostrarProdutoCliente);
    })(produtos);

    const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");
    const cestaCliente = document.querySelector("ul#cestaDoCliente");
    const mostraTotalCompta = document.querySelector("#mostraTotalCompra");
    const armazenaItens = [];
    var totalPedido = 0;


    itemProduto.forEach((item) => {
        item.addEventListener('click', () => {
            if (armazenaItens.indexOf(item.textContent) == -1) {
                li = document.createElement("li")
                li.setAttribute("class", "itemProduto");
                li.setAttribute("data-preco", item.dataset.preco);
                armazenaItens.push(item.textContent);
                cestaCliente.appendChild(li).textContent = item.textContent;

                totalPedido += Number(item.dataset.preco);
                mostraTotalCompta.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            } else {
                alert(`Este item ${item.textContent} já esta na sua cesta!`);
            }
            console.log(li);
        });
    });

    const cestaCliente1 = document.querySelectorAll("ul#cestaDoCliente > li.itemProduto");
    const list = document.querySelector("ul#cestaDoCliente");

    cestaCliente1.forEach((item) => {
        item.addEventListener('click', (itemCesta) => {
            var idx = armazenaItens.indexOf(itemCesta.target.textContent);

            if (idx > -1) {

                armazenaItens.splice(idx, 1);
                cestaCliente.removeChild(list.childNodes[idx]);

                totalPedido -= Number(item.dataset.preco);
                //     totalPedido -= Number(item.dataset.preco);
                //     mostraTotalCompta.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            }


            // li = document.createElement("li");

            // if (armazenaItens.indexOf(item.textContent) == -1) {
            //     armazenaItens.push(item.textContent);
            //     cestaCliente.appendChild(li).textContent = item.textContent;
            //     totalPedido += Number(item.dataset.preco);
            //     mostraTotalCompta.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            // } else {
            //     alert(`Este item ${item.textContent} já esta na sua cesta!`);
            // }
            console.log(`Indice: ${idx}`);
            console.log(armazenaItens);
            console.log(itemCesta.target.textContent);
            console.log(item.dataset.preco);

        });
    });

};