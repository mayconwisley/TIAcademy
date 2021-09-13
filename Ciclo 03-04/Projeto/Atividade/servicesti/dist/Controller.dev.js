"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require('express');

var cors = require('cors');

var _require = require('sequelize'),
    Op = _require.Op;

var models = require('./models');

var _require2 = require('./models'),
    sequelize = _require2.sequelize;

var app = express();
app.use(cors());
app.use(express.json());
var cliente = models.Cliente;
var servico = models.Servico;
var pedido = models.Pedido;
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

/*
    Desafio aula 02
    Implemente o cadastro de pedidos

 */
//Cadastrando pedido com informações enviadas pelo body

app.post('/pedido', function _callee(req, res) {
  var create;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(pedido.create(req.body));

        case 2:
          create = _context.sent;
          res.send('Pedido foi inserido');

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
app["delete"]('/apagarpedidoid/:id', function (req, res) {
  pedido.destroy({
    where: {
      id: req.params.id
    }
  }).then(function () {
    return res.json({
      error: false,
      message: "Pedido excluido"
    });
  })["catch"](function (erro) {
    return res.status(400).json({
      error: true,
      message: "Erro ao excluir cliente"
    });
  });
});
/*
    Desafio aula 02
    Implemente o cadastro de clientes
    
 */
//Cadastrando cliente com as informações enviadas pelo body

app.post('/adicionarcliente', function _callee2(req, res) {
  var aguardar;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          aguardar = function _ref(ms) {
            return new Promise(function (resolve) {
              setTimeout(resolve, ms);
            });
          };

          ;
          _context2.next = 4;
          return regeneratorRuntime.awrap(aguardar(3000));

        case 4:
          _context2.next = 6;
          return regeneratorRuntime.awrap(cliente.create(req.body).then(function () {
            return res.json({
              error: false,
              message: 'Cliente foi inserido'
            });
          }));

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}); //Excluindo Cliente

app["delete"]('/apagarclienteid/:id', function (req, res) {
  cliente.destroy({
    where: {
      id: req.params.id
    }
  }).then(function () {
    return res.json({
      error: false,
      message: "Cliente excluido"
    });
  })["catch"](function (erro) {
    return res.status(400).json({
      error: true,
      message: "Erro ao excluir cliente"
    });
  });
});
app.get('/excluircliente/:id', function (req, res) {
  cliente.destroy({
    where: {
      id: req.params.id
    }
  }).then(function () {
    return req.json({
      cliente: cliente
    });
  });
}); //Cadastrando serviço com as informações enviadas pelo body

app.post('/servicos', function _callee3(req, res) {
  var aguardar;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          aguardar = function _ref2(ms) {
            return new Promise(function (resolve) {
              setTimeout(resolve.ms);
            });
          };

          ;
          _context3.next = 4;
          return regeneratorRuntime.awrap(servico.create(req.body).then(function () {
            return res.json({
              error: false,
              message: 'Serviço foi inserido'
            });
          }));

        case 4:
          _context3.next = 6;
          return regeneratorRuntime.awrap(aguardar(3000));

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
});
app["delete"]('/apagarservicoid/:id', function (req, res) {
  servico.destroy({
    where: {
      id: req.params.id
    }
  }).then(function () {
    return res.json({
      error: false,
      message: "Servico excluido"
    });
  })["catch"](function (erro) {
    return res.status(400).json({
      error: true,
      message: "Erro ao excluir cliente"
    });
  });
}); //Listando os Serviços de modo geral.

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
//Lista Serviços por ordem de nomes

app.get('/listaservicos', function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(servico.findAll({
            order: [['nome', 'ASC']]
          }).then(function (servicos) {
            res.json({
              servicos: servicos
            });
          }));

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
}); //////////////////////////////////////////////////////////////////////////////////////
//Lista Cliente - OK

app.get('/listaclientes', function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(cliente.findAll({
            raw: true
          }).then(function (cliente) {
            res.json({
              cliente: cliente
            });
          }));

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  });
}); //Lista Cliente Antigo ok

app.get('/listaclientesAntigo', function _callee6(req, res) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(cliente.findAll({
            order: [['createdAt', 'ASC']]
          }).then(function (cliente) {
            res.json({
              cliente: cliente
            });
          }));

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  });
}); //Total de cliente ok

app.get('/totalcliente', function _callee7(req, res) {
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(cliente.count('id').then(function (cliente) {
            res.json(cliente);
          }));

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  });
}); //Todos Pedidos ok - ok

app.get('/todospedidos', function _callee8(req, res) {
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(pedido.findAll({
            raw: true
          }).then(function (pedido) {
            res.json({
              pedido: pedido
            });
          }));

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  });
});
app.get('/todospedidosCliente', function _callee9(req, res) {
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap(pedido.findAll({
            include: [{
              all: true
            }]
          }).then(function (pedido) {
            res.json({
              pedido: pedido
            });
          }));

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  });
});
app.get('/todospedidosCliente/:id', function _callee10(req, res) {
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return regeneratorRuntime.awrap(pedido.findAll({
            where: {},
            include: [{
              all: true
            }]
          }).then(function (pedido) {
            res.json({
              pedido: pedido
            });
          }));

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  });
}); //Todos Pedidos Crescente - Ok

app.get('/listapedidosCrescente', function _callee11(req, res) {
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return regeneratorRuntime.awrap(pedido.findAll({
            order: [['id', 'ASC']]
          }).then(function (pedido) {
            res.json({
              pedido: pedido
            });
          }));

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  });
}); //Total Pedidos - Ok

app.get('/totalpedidos', function _callee12(req, res) {
  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return regeneratorRuntime.awrap(pedido.count('id').then(function (pedido) {
            res.json(pedido);
          }));

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  });
}); ////////////////////////////////////////////////////////////////////////
//Lista a quantidade de serviços

app.get('/totalservicos', function _callee13(req, res) {
  return regeneratorRuntime.async(function _callee13$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return regeneratorRuntime.awrap(servico.count('id').then(function (servicos) {
            res.json(servicos);
          }));

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  });
}); //Listar por Serviços Id

app.get('/servico/:id', function _callee14(req, res) {
  return regeneratorRuntime.async(function _callee14$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return regeneratorRuntime.awrap(servico.findByPk(req.params.id).then(function (servicos) {
            return res.json({
              error: false,
              servicos: servicos
            });
          })["catch"](function (erro) {
            return res.status(400).json({
              error: true,
              message: "Codigo não cadastrado"
            });
          }));

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  });
});
/* 
    Desafio Aula 03
    Qual é o total que o cliente X gastou na ServicesTI
*/
//Total de pedido Gasto por Cliente

app.get('/pedidoId/:id', function _callee15(req, res) {
  return regeneratorRuntime.async(function _callee15$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return regeneratorRuntime.awrap(pedido.findAll({
            where: {
              Id: req.params.id
            },
            include: [{
              all: true
            }]
          }).then(function (pedido) {
            return res.json({
              pedido: pedido
            });
          }));

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  });
});
/* 
    Desafio Aula 03
    Qual é o total que o cliente X gastou na ServicesTI
    Operador Sequelize
*/
//Total de pedido Gasto por Cliente usando Operador sequelize

app.get('/pedidoop/:id', function _callee16(req, res) {
  return regeneratorRuntime.async(function _callee16$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return regeneratorRuntime.awrap(pedido.sum('valor', {
            where: {
              ClienteId: _defineProperty({}, Op.eq, req.params.id)
            }
          }).then(function (pedido) {
            return res.json({
              pedido: pedido
            });
          }));

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  });
}); //Atualizar dados no banco
//Atualizar serviço pelo Id
//Get

app.get('/atualizaservico/:id', function _callee17(req, res) {
  return regeneratorRuntime.async(function _callee17$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return regeneratorRuntime.awrap(servico.findByPk(req.params.id).then(function (servico) {
            servico.nome = req.body.nome; //"HTML/CSS/JS";

            servico.descricao = req.body.descricao; //"Criação de página estática e com JS para tornar a pagina mais dinamica";

            servico.save();
            return res.json({
              servico: servico
            });
          }));

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  });
}); //Atualizar serviço pelo Id
//Put

app.put('/editarservico', function (req, res) {
  servico.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(function () {
    return res.json({
      error: false,
      message: "Servico Alterado com Sucesso"
    });
  })["catch"](function () {
    return res.status(400).json({
      error: true,
      message: "Erro na alteração do serviço"
    });
  });
});
app.put('/editarpedido', function (req, res) {
  pedido.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(function () {
    return res.json({
      error: false,
      message: "Pedido Alterado com Sucesso"
    });
  })["catch"](function () {
    return res.status(400).json({
      error: true,
      message: "Erro na alteração do serviço"
    });
  });
}); //Listar todos os serviços por id os dados atrelado a ele

app.get('/servicopedidos/:id', function _callee18(req, res) {
  return regeneratorRuntime.async(function _callee18$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return regeneratorRuntime.awrap(servico.findByPk(req.params.id, {
            include: [{
              all: true
            }]
          }).then(function (servico) {
            return res.json({
              servico: servico
            });
          }));

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  });
}); //put edição do pedido através do serviço

app.put('/editarpedido', function (req, res) {
  pedido.update(req.body, {
    where: {
      ServicoId: req.body.ServicoId
    }
  }).then(function () {
    return res.json({
      error: false,
      message: "Pedido Atualizado"
    });
  })["catch"](function (erro) {
    return res.status(400).json({
      error: true,
      message: "Erro ao atualizar"
    });
  });
}); /////////////////////////Exercicio 01 ////////////////////////////////////////
//Busca Cliente

app.get('/buscapedidoporcliente', function _callee19(req, res) {
  return regeneratorRuntime.async(function _callee19$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return regeneratorRuntime.awrap(pedido.findAll({
            where: {
              ClienteId: req.body.ClienteId
            }
          }).then(function (pedido) {
            return res.json({
              pedido: pedido
            });
          })["catch"](function (erro) {
            return res.status(400).json({
              error: true,
              message: "Erro ao atualizar"
            });
          }));

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  });
}); //////////////////////////////////////////////////////////////////////////
//////////////////Exercicio 02 /////////////////////////////////////////////////
//Consulta Cliente

app.get('/consultaClienteId/:id', function _callee20(req, res) {
  return regeneratorRuntime.async(function _callee20$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return regeneratorRuntime.awrap(cliente.findByPk(req.params.id).then(function (cliente) {
            return res.json({
              cliente: cliente
            });
          }));

        case 2:
        case "end":
          return _context20.stop();
      }
    }
  });
}); //Put Cliente

app.put('/editarcliente', function (req, res) {
  cliente.update(req.body, {
    where: {
      Id: req.body.id
    }
  }).then(function () {
    return res.json({
      error: false,
      message: "Cliente Atualizado"
    });
  })["catch"](function (erro) {
    return res.status(400).json({
      error: true,
      message: "Erro ao atualizar"
    });
  });
}); //////////////////////////////////////////////////////////////////
///////////////////Exercicio 03 ///////////////////////
//localhost:3000/todospedidos
//Put Pedido

app.put('/atualizarpedido', function (req, res) {
  pedido.update(req.body, {
    where: {
      Id: req.body.id
    }
  }).then(function () {
    return res.json({
      error: false,
      message: "Pedido Atualizado"
    });
  })["catch"](function (erro) {
    return res.status(400).json({
      error: true,
      message: "Erro ao atualizar"
    });
  });
}); //////////////////////////////////////////////////////

/* app.delete('/apagarclienteid/:id', (req, res) => {
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
 */

/*
Desafio Aula 04
Faça uma rota que liste todos os pedidos de um cliente
*/

app.get('/pedidoporclienteid/:id', function _callee21(req, res) {
  return regeneratorRuntime.async(function _callee21$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return regeneratorRuntime.awrap(pedido.findAll({
            where: {
              ClienteId: req.params.id
            },
            include: [{
              all: true
            }]
          }).then(function (pedido) {
            return res.json({
              pedido: pedido
            });
          })["catch"](function (erro) {
            return res.status(400).json({
              error: true,
              message: "Erro ao atualizar"
            });
          }));

        case 2:
        case "end":
          return _context21.stop();
      }
    }
  });
});
app.get('/pedidoporservicoid/:id', function _callee22(req, res) {
  return regeneratorRuntime.async(function _callee22$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return regeneratorRuntime.awrap(pedido.findAll({
            where: {
              ServicoId: req.params.id
            },
            include: [{
              all: true
            }]
          }).then(function (pedido) {
            return res.json({
              pedido: pedido
            });
          })["catch"](function (erro) {
            return res.status(400).json({
              error: true,
              message: "Erro ao atualizar"
            });
          }));

        case 2:
        case "end":
          return _context22.stop();
      }
    }
  });
});
/*
    Crie uma nova rota que permite alterar esses pedido utilizando o ClienteId
*/

app.put('/editarpedidoporcliente', function (req, res) {
  pedido.update(req.body, {
    where: {
      ClienteId: req.body.ClienteId
    }
  }).then(function () {
    return res.json({
      error: false,
      message: "Pedido Atualizado"
    });
  })["catch"](function (erro) {
    return res.status(400).json({
      error: true,
      message: "Erro ao atualizar"
    });
  });
});
var port = process.env.PORT || 3001;
app.listen(port, function (req, res) {
  console.log('Servidor ok');
});