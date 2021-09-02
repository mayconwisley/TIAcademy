import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from './pages/Home/';

import { VisualizarCliente } from './pages/Cliente/';
import { EditarClienteId } from './pages/Cliente/editarClienteId.js';
import { ExcluirClienteId } from './pages/Cliente/excluirClienteId.js';

import { VisualizarPedido } from './pages/Pedido/';
import { EditarPedidoId } from './pages/Pedido/editarPedidoId.js';
import { EditarPedidoClienteId } from './pages/Pedido/editarPedidoClienteId.js';
import { PedidoPorClienteId } from './pages/Pedido/pedidoPorClienteId.js';
import { ExcluirPedidoId } from './pages/Pedido/excluirPedidoId.js';

import { VisualizarServico } from './pages/Servico';
import { EditarServicoId } from './pages/Servico/editarServicoId.js';
import { EditarServicoClienteId } from './pages/Servico/editarServicoClienteId.js';
import { ExcluirServicoId } from './pages/Servico/excluirServicoId.js';

import { Menu } from './components/Menu/';

function App() {
  return (
    <div>
      <Menu />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/visualizarcliente" component={VisualizarCliente} />
          <Route path="/editarclienteid" component={EditarClienteId} />
          <Route path="/excluirclienteid" component={ExcluirClienteId} />

          <Route path="/visualizarpedido" component={VisualizarPedido} />
          <Route path="/editarpedidoid" component={EditarPedidoId} />
          <Route path="/editarpedidoclienteid" component={EditarPedidoClienteId} />
          <Route path="/pedidoporclienteid" component={PedidoPorClienteId} />
          <Route path="/excluirpedidoid" component={ExcluirPedidoId} />

          <Route path="/visualizarservico" component={VisualizarServico} />
          <Route path="/editarservicoid" component={EditarServicoId} />
          <Route path="/editarservicoclienteid" component={EditarServicoClienteId} />
          <Route path="/excluirservicoid" component={ExcluirServicoId} />



        </Switch>
      </Router>
    </div>
  );
}

export default App;
