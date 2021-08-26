window.onload = function () {

    const btnBuscar = document.querySelector("#btnBuscar");
    const txtCep = document.querySelector("#txtCep");

    const dadosCep = async function (cepUrl) {

        var url = await fetch(`https://viacep.com.br/ws/${cepUrl}/json/`);
        var dadosCep = await (url.json());

        for (var campo in dadosCep) {

            if (document.querySelector(`#${campo}`)) {
                document.querySelector(`#${campo}`).value = dadosCep[campo];
            }
        }
    }

    btnBuscar.addEventListener('click', () => {
        let cep = txtCep.value;
        dadosCep(cep);
    });
}