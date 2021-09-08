import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from './pages/Home/';

import { VisualizarCliente } from './pages/Cliente/Visualizar/';
import { VisualizarClienteId } from './pages/Cliente/Visualizar/ClienteId.jsx';
import { EditarClienteId } from './pages/Cliente/Editar/';
import { ExcluirClienteId } from './pages/Cliente/Excluir/';

import { VisualizarPedido } from './pages/Pedido/Visualizar';
import { VisualizarPedidoClienteId } from './pages/Pedido/Visualizar/PorClienteId.jsx';
import { VisualizarPedidoServicoId } from './pages/Pedido/Visualizar/PorServicoId.jsx';
import { EditarPedidoId } from './pages/Pedido/Editar/PedidoId.jsx';
import { PedidoPorClienteId } from './pages/Pedido/Visualizar/PorClienteId.jsx';
import { ExcluirPedidoId } from './pages/Pedido/Excluir/';

import { VisualizarServico } from './pages/Servico/Visualizar';
import { VisualizarServicoId } from './pages/Servico/Visualizar/servicoId.jsx';
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
          <Route path="/visualizarclienteId/:id" component={VisualizarClienteId} />
          <Route path="/editarclienteid" component={EditarClienteId} />
          <Route path="/excluirclienteid" component={ExcluirClienteId} />

          <Route path="/visualizarpedido" component={VisualizarPedido} />
          <Route path="/visualizarpedidoclienteid/:id" component={VisualizarPedidoClienteId} />
          <Route path="/visualizarpedidoservicoid/:id" component={VisualizarPedidoServicoId} />
          <Route path="/editarpedidoid" component={EditarPedidoId} />
          {/* <Route path="/pedidoporclienteid" component={PedidoPorClienteId} /> */}
          <Route path="/excluirpedidoid" component={ExcluirPedidoId} />

          <Route path="/visualizarservico" component={VisualizarServico} />
          <Route path="/visualizarservicoid/:id" component={VisualizarServicoId} />
          <Route path="/editarservicoid" component={EditarServicoId} />
          <Route path="/editarservicoclienteid" component={EditarServicoClienteId} />
          <Route path="/excluirservicoid" component={ExcluirServicoId} />



        </Switch>
      </Router>
    </div>
  );
}

export default App;
