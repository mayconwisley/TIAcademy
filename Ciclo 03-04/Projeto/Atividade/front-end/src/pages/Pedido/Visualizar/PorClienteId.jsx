import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from "reactstrap"
import { api } from '../../../config';

export const VisualizarPedidoClienteId = (props) => {
    
    const [data, setData] = useState([]);
    const [id, setId] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: "",
        messege: ""
    });

    useEffect(() => {
        const getPedidoId = async () => {
            await axios.get(`${api}/pedidoid/${id}`)
                .then((response) => {
                    console.log(`${api}/pedidoid/${id}`);
                    console.log(response.data.pedido);
                    //setId(response.id.servicos);
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
        getPedidoId();
    }, [id]);


    return (
        <div>
            <Container>
                {
                    status.type === "Error" ?
                        <Alert color="danger">
                            {status.messege}
                        </Alert> :
                        ""
                }
                
                <Table striped hover>
                    <thead>
                        <tr>

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

                        <tr key={data.id} >
                            
                            <td>{data.ClienteId}</td>
                            <td>{data.ClienteId}</td>
                            <td>{data.ServicoId}</td>
                            <td>{data.ServicoId}</td>
                            <td>{data.valor}</td>
                            <td>{data.data}</td>
                            <td className="text-center">
                                <Link to={`/visualizarpedido`}
                                    className="btn btn-outline-primary btn-sm"> Consultar
                                </Link>
                                <Link to={`/visualizarpedido`}
                                    className="btn btn-outline-primary btn-sm"> Editar
                                </Link>
                                <Link to={`/visualizarpedido`}
                                    className="btn btn-outline-danger btn-sm"> Excluir
                                </Link>
                            </td>
                        </tr>

                    </tbody>
                </Table>
            </Container>

        </div>
    )
}