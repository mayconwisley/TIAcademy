window.onload = function () {
    const btn = document.querySelector("#btn");
    const p = document.querySelector(".legenda");
    const txt = document.querySelector("#txt");

    //Evento onclick
    btn.addEventListener('click', () => {
        p.innerHTML = txt.value;
    });

    p.addEventListener('click', () => {
        p.innerHTML = "";
    });

    //MouseMove, mouseout
    p.addEventListener('mousemove', () => {
        //alert("teste");
    });

    //Ver Senha
    const btnVerSenha = document.querySelector("#btnVerSenha");
    const txtVerSenha = document.querySelector("#psdVerSenha");

    btnVerSenha.addEventListener('click', () => {

        if (txtVerSenha.getAttribute('type') === 'password') {
            txtVerSenha.setAttribute('type', 'text')
        }
        else {
            txtVerSenha.setAttribute('type', 'password');
        }

    });


    //Alterar a cor da caixa de texto;
    const txtSimples = document.querySelector("#txtSimples");

    txtSimples.addEventListener('blur', () => {
        txtSimples.setAttribute('class', 'cor');
    });

    //Somando valores
    const txtValor1 = document.querySelector("#txtValor1");
    const txtValor2 = document.querySelector("#txtValor2");
    const btnCalcular = document.querySelector("#btnCalcular");
    const resultado = document.querySelector("#resultado");

    btnCalcular.addEventListener('click', () => {
        var vlr1 = Number(txtValor1.value);
        var vlr2 = Number(txtValor2.value);

        var res = vlr1 + vlr2;

        resultado.innerHTML = "Resultado:" + res;
    });

    //Modal

    const btnModal = document.querySelector("#btnModal");
    const divModal = document.querySelector("#janModal");
    const btnFechar = document.querySelector("#btnFechar");
    btnModal.addEventListener('click', () => {

        divModal.setAttribute('class', 'modal');

    });
    btnFechar.addEventListener('click', () => {
        divModal.removeAttribute('class');
    });

    console.log(btnFechar);
    console.log(txtVerSenha);
}