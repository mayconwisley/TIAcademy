import {msgLog} from '../Modulos/script.js';
window.onload = function () {
    //import { msgLog, Produtos } from "./Modulos/script.js";
    msgLog("Teste");

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


    var n = 'ee';

    try {
        n = Number(n);
        if (isNaN(n)) {
            throw "Este valor não é um numero";
        }

    } catch (error) {
        console.log(`Erro: ${error}`);
    }
    finally {
        console.log("Terminando");
    }






};