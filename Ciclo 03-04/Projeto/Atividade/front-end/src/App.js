import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from './pages/Home/';

import { VisualizarCliente } from './pages/Cliente/Visualizar/';
import { VisualizarClienteId } from './pages/Cliente/Visualizar/ClienteId.jsx';
import { CadastrarCliente } from './pages/Cliente/Cadastrar';
import { EditarCliente } from './pages/Cliente/Editar/';
import { ExcluirClienteId } from './pages/Cliente/Excluir/';

import { VisualizarPedido } from './pages/Pedido/Visualizar';
import { VisualizarPedidoClienteId } from './pages/Pedido/Visualizar/PorClienteId.jsx';
import { CadastrarPedido } from './pages/Pedido/Cadastro';
import { VisualizarPedidoServicoId } from './pages/Pedido/Visualizar/PorServicoId.jsx';
import { EditarPedido } from './pages/Pedido/Editar/PedidoId.jsx';
/* import { PedidoPorClienteId } from './pages/Pedido/Visualizar/PorClienteId.jsx'; */
import { ExcluirPedidoId } from './pages/Pedido/Excluir/';

import { VisualizarServico } from './pages/Servico/Visualizar';
import { VisualizarServicoId } from './pages/Servico/Visualizar/servicoId.jsx';
import { CadastrarServico } from './pages/Servico/Cadastrar';
import { EditarServico } from './pages/Servico/Editar/';
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
          <Route path="/CadastrarCliente" component={CadastrarCliente} />
          <Route path="/editarclienteid/:id" component={EditarCliente} />
          <Route path="/excluirclienteid/:id" component={ExcluirClienteId} />

          <Route path="/visualizarpedido" component={VisualizarPedido} />
          <Route path="/visualizarpedidoclienteid/:id" component={VisualizarPedidoClienteId} />
          <Route path="/visualizarpedidoservicoid/:id" component={VisualizarPedidoServicoId} />
          <Route path="/CadastrarPedido" component={CadastrarPedido} />
          <Route path="/editarpedidoid/:id" component={EditarPedido} />
          {/* <Route path="/pedidoporclienteid" component={PedidoPorClienteId} /> */}
          <Route path="/excluirpedidoid/:id" component={ExcluirPedidoId} />

          <Route path="/visualizarservico" component={VisualizarServico} />
          <Route path="/visualizarservicoid/:id" component={VisualizarServicoId} />
          <Route path="/CadastrarServico" component={CadastrarServico} />
          <Route path="/editarservicoid/:id" component={EditarServico} />
          <Route path="/editarservicoclienteid" component={EditarServicoClienteId} />
          <Route path="/excluirservicoid/:id" component={ExcluirServicoId} />



        </Switch>
      </Router>
    </div>
  );
}

export default App;
