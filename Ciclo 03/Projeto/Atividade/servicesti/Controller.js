const express = require('express');
const cors = require('cors');
const { Op } = require('sequelize');

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
    await pedido.sum('valor', {
        where: {
            ClienteId: req.params.id
        }
    }).then((pedido) => {
        return res.json({
            pedido
        })
    });
});

//Total Gasto por Cliente usando Operador sequelize
app.get('/pedidoop/:id', async (req, res) => {
    await pedido.sum('valor', {
        where: {
            ClienteId: {
                [Op.eq]: req.params.id
            }
        }
    }).then((pedido) => {
        return res.json({
            pedido
        })
    });
});

//Atualizar dados no banco
//Get
app.get('/atualizaservico/:id', async (req, res) => {
    await servico.findByPk(req.params.id)
        .then((servico) => {
            servico.nome = req.body.nome; //"HTML/CSS/JS";
            servico.descricao = req.body.descricao; //"Criação de página estática e com JS para tornar a pagina mais dinamica";
            servico.save();
            return res.json({ servico });

        });
});

//Put
app.put('/editarservico', (req, res) => {
    servico.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Servico Alterado com Sucesso"
        });
    }).catch(() => {
        return res.status(400).json(
            {
                error: true,
                message: "Erro na alteração do serviço"

            });
    });
});

app.get('/servicopedidos/:id', async (req, res) => {
    await servico.findByPk(req.params.id, {
        include: [{ all: true }]
    }).then((servico) => {
        return res.json({ servico });
    });
});

//put edição do pedido através do serviço

app.put('/editarpedido', (req, res) => {
    pedido.update(req.body, {
        where: {
            ServicoId: req.body.ServicoId
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Pedido Atualizado"
        })
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao atualizar"
        })
    })
});
/////////////////////////Exercicio 01 ////////////////////////////////////////
//Busca Cliente
app.get('/buscacliente', async (req, res) => {
    await pedido.findAll({
        where: {
            ClienteId: req.body.ClienteId
        }
    }).then((pedido) => {
        return res.json({ pedido })
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao atualizar"
        })
    })
});
//////////////////////////////////////////////////////////////////////////
//////////////////Exercicio 02 /////////////////////////////////////////////////

//Consulta Cliente
app.get('/consultaCliente/:id', async (req, res) => {
    await cliente.findByPk(req.params.id).then((cliente) => {
        return res.json({ cliente });
    });
});
//Put Cliente
app.put('/editarcliente', (req, res) => {
    cliente.update(req.body, {
        where: {
            Id: req.body.id
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Cliente Atualizado"
        })
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao atualizar"
        })
    })
});
//////////////////////////////////////////////////////////////////
///////////////////Exercicio 03 ///////////////////////

//localhost:3000/todospedidos

//Put Pedido
app.put('/editarpedidoput', (req, res) => {
    pedido.update(req.body, {
        where: {
            Id: req.body.id
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Pedido Atualizado"
        })
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao atualizar"
        })
    })
});
//////////////////////////////////////////////////////

app.get('/excluircliente', (req, res) => {
    cliente.destroy({
        where: {
            id: req.body.id
        }
    }).then(() => {
        return req.json({ cliente });
    })
});

app.delete('/apagarcliente/:id', (req, res) => {
    cliente.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Cliente excluido"
        });
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir cliente"
        });
    });
});

/*
Desafio Aula 04
Faça uma rota que liste todos os pedidos de um cliente
*/
app.get('/pedidoporcliente/:id', async (req, res) => {
    await pedido.findAll({
        include: [{ all: true }]
    },
        {
            where: {
                ClienteId: req.params.id
            }
        }).then((pedido) => {
            return res.json({ pedido })
        }).catch((erro) => {
            return res.status(400).json({
                error: true,
                message: "Erro ao atualizar"
            })
        })
});

/*
    Crie uma nova rota que permite alterar esses pedido utilizando o ClienteId
*/
app.put('/editarpedidoporcliente', (req, res) => {
    pedido.update(req.body, {
        where: {
            ClienteId: req.body.ClienteId
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Pedido Atualizado"
        })
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao atualizar"
        })
    })
});



let port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
    console.log('Servidor ok');
});

