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

/* app.get('/listaservicos', async (req, res) => {
    await servico.findAll({
        raw: true
    }).then(function (servicos) {
        res.json({
            servicos
        })
    });
});
 */
//Lista Serviços
app.get('/listaservicos', async (req, res) => {
    await servico.findAll({
        order: [['nome', 'DESC']]
    }).then((servicos) => {
        res.json({
            servicos
        })
    });
});
//////////////////////////////////////////////////////////////////////////////////////

//Lista Cliente - OK
app.get('/listaclientes', async (req, res) => {
    await cliente.findAll({
        raw: true
    }).then((cliente) => {
        res.json({
            cliente
        })
    });
});

//Lista Cliente Antigo ok
app.get('/listaclientesAntigo', async (req, res) => {
    await cliente.findAll({
        order: [['createdAt', 'ASC']]
    }).then((cliente) => {
        res.json({
            cliente
        })
    });
});

//Total de cliente ok
app.get('/totalcliente', async (req, res) => {
    await cliente.count('id').then((cliente) => {
        res.json(cliente)
    });
});


//Todos Pedidos ok - ok
app.get('/todospedidos', async (req, res) => {
    await pedido.findAll({
        raw: true
    }).then((pedido) => {
        res.json({
            pedido
        })
    });
});

//Todos Pedidos Crescente - Ok
app.get('/listapedidosCrescente', async (req, res) => {
    await pedido.findAll({
        order: [['id', 'ASC']]
    }).then((pedido) => {
        res.json({
            pedido
        })
    });
});
/**/
//Total Pedidos - Ok
app.get('/totalpedidos', async (req, res) => {
    await pedido.count('id').then((pedido) => {
        res.json(pedido)
    });
});

////////////////////////////////////////////////////////////////////////
app.get('/ofertas', async (req, res) => {
    await servico.count('id').then((servicos) => {
        res.json(servicos)
    });
});

//Serviços Id
app.get('/servico/:id', async (req, res) => {
    await servico.findByPk(req.params.id)
        .then((servicos) => {
            return res.json({
                error: false,
                servicos
            })
        }).catch((erro) => {
            return res.status(400).json({
                error: true,
                message: "Codigo não cadastrado"
            });
        });
});

//Total Gasto por Cliente
app.get('/pedido/:id', async (req, res) => {
    await pedido.sum('valor', {where: {ClienteId: req.params.id}})
        .then((pedido) => {
            return res.json({
                pedido
            })
        });
});

let port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
    console.log('Servidor ok');
});

