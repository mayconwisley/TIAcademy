window.onload = function () {
    const btn = document.querySelector("#btn");
    const txt = document.querySelector("#txtTexto");;
    const link = document.querySelector("#link");

    link.addEventListener('click', () => {
        alert("Teste");
    });

    btn.addEventListener('click', () => {
        txt.value = "Teste";
    });

    txt.addEventListener('click', () => {
        txt.value = "";
    });


};