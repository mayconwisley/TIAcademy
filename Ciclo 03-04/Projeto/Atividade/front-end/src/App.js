import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from './pages/Home/';

import { VisualizarCliente } from './pages/VisualizarCliente/';
import { EditarClienteId } from './pages/VisualizarCliente/editarClienteId.js';
import { ExcluirClienteId } from './pages/VisualizarCliente/excluirClienteId.js';

import { VisualizarPedido } from './pages/VisualizarPedido/';
import { EditarPedidoId } from './pages/VisualizarPedido/editarPedidoId.js';
import { EditarPedidoClienteId } from './pages/VisualizarPedido/editarPedidoClienteId.js';
import { PedidoPorClienteId } from './pages/VisualizarPedido/pedidoPorClienteId.js';
import { ExcluirPedidoId } from './pages/VisualizarPedido/excluirPedidoId.js';

import { VisualizarServico } from './pages/VisualizarServico';
import { EditarServicoId } from './pages/VisualizarServico/editarServicoId.js';
import { EditarServicoClienteId } from './pages/VisualizarServico/editarServicoClienteId.js';
import { ExcluirServicoId } from './pages/VisualizarServico/excluirServicoId.js';


function App() {
  return (
    <div>
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
