import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from "reactstrap"
import { api } from '../../../config';

export const VisualizarPedido = () => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: "",
        messege: ""
    });

    const getPedido = async () => {
        await axios.get(`${api}/todospedidosCliente`)
            .then((response) => {
                console.log(response.data.pedido);
                setData(response.data.pedido);
            })
            .catch(() => {
                console.log("Erro: não foi possivel conectar a API");

                setStatus({
                    type: "Error",
                    message: "Erro: não foi possivel conectar a API"
                });
            });
    }

    useEffect(() => {
        getPedido();
    }, []);


    return (
        <div>
            <Container>
                {status.type === "Error" ?
                    <Alert color="danger">
                        {status.messege}
                    </Alert> :
                    ""
                }

                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do Pedido</h1>
                    </div>
                </div>
                <div className="p-2">
                    <Link to={`/CadastrarPedido`}
                        className="btn btn-outline-primary btn-sm"> Cadastrar
                    </Link>
                </div>
                <hr className="m-1" />
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Cliente Id</th>
                            <th>Nome</th>
                            <th>Serviço Id</th>
                            <th>Descricao</th>
                            <th>Valor R$</th>
                            <th>Data</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id} >
                                <td>{item.id}</td>
                                <td>{item.ClienteId}</td>
                                <td>{item.Cliente.nome}</td>
                                <td>{item.ServicoId}</td>
                                <td>{item.Servico.descricao}</td>
                                <td>{item.valor}</td>
                                <td>{item.data}</td>
                                <td className="text-center">
                                    <Link to={`VisualizarPedidoClienteId/${item.ClienteId}`}
                                        className="btn btn-outline-primary btn-sm"> Cons. Cliente
                                    </Link>
                                    <Link to={`VisualizarPedidoServicoId/${item.ServicoId}`}
                                        className="btn btn-outline-primary btn-sm"> Cons. Serviço
                                    </Link>
                                    <Link to={`editarpedidoid/${item.id}`}
                                        className="btn btn-outline-primary btn-sm"> Editar
                                    </Link>
                                    <Link to={`ExcluirPedidoId/${item.id}`}
                                        className="btn btn-outline-danger btn-sm"> Excluir
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>

        </div>

    )
}