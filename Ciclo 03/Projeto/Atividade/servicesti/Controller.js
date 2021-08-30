const express = require('express');
const cors = require('cors');

const models = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let servico = models.Servico;
let pedido = models.Pedido;

app.get('/', function (req, res) {
    res.send("Olá Mundo!");
});

/* app.get('/pedido', async (req, res) => {
   let create = await pedido.create({
       idCliente: 1,
       idServico: 1,
       valor: 4.20,
       data: '2021-08-27'

   });
   res.send('Cliente foi inserido');
});

app.get('/cliente', async (req, res) => {
   let create = await cliente.create({
       nome: 'Jão da Cunha',
       endereco: 'Rua dos magos, 25',
       cidade: 'Maringá',
       uf: 'PR',
       nascimento: '1992-05-20'

   });
   res.send('Cliente foi inserido');
});
*/
/* app.get('/servicos', async (req, res) => {
    let create = await servico.create({
        nome: 'HTML/CSS',
        descricao: 'Criação de página estática'

    });
    res.send('Serviço foi inserido');
});
 */

app.post('/pedido', async (req, res) => {
    let create = await pedido.create(
        req.body
    );
    res.send('Pedido foi inserido');
});

app.post('/cliente', async (req, res) => {
    let create = await cliente.create(
        req.body
    );
    res.send('Cliente foi inserido');
});

app.post('/servicos', async (req, res) => {
    let create = await servico.create(
        req.body
    );
    res.send('Serviço foi inserido');
});

let port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
    console.log('Servidor ok');
});

