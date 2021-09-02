import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from './pages/Home/';

import { VisualizarCliente } from './pages/Cliente/Visualizar/';
import { EditarClienteId } from './pages/Cliente/Editar/';
import { ExcluirClienteId } from './pages/Cliente/Excluir/';

import { VisualizarPedido } from './pages/Pedido/Visualizar';
import { EditarPedidoId } from './pages/Pedido/Editar/PedidoId.jsx';
import { EditarPedidoClienteId } from './pages/Pedido/Editar/PedidoClienteId.jsx';
import { PedidoPorClienteId } from './pages/Pedido/Visualizar/PorClienteId.jsx';
import { ExcluirPedidoId } from './pages/Pedido/Excluir/';

import { VisualizarServico } from './pages/Servico/Visualizar';
import { EditarServicoId } from './pages/Servico/Editar/ServicoId.jsx';
import { EditarServicoClienteId } from './pages/Servico/Editar/ServicoClienteId.jsx';
import { ExcluirServicoId } from './pages/Servico/Excluir/';

import { Menu } from './components/Menu/index.jsx';

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
