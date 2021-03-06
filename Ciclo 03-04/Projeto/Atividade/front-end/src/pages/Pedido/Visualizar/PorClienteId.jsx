import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from "reactstrap"
import { api } from '../../../config';

export const VisualizarPedidoClienteId = (props) => {

    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: "",
        messege: ""
    });

    useEffect(() => {
        const getPedidoClienteId = async () => {
            await axios.get(`${api}/pedidoporclienteid/${id}`)
                .then((response) => {
                    console.log(`${api}/pedidoporclienteid/${id}`);
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
        getPedidoClienteId();
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
                 <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do Pedido</h1>
                    </div>
                </div>
                <div className="p-2">
                    <Link to={`/VisualizarPedido`}
                        className="btn btn-outline-primary btn-sm"> Voltar
                    </Link>
                </div>
                <Table striped hover>
                    <thead>
                        <tr>

                            <th>Cliente Id</th>
                            <th>Nome</th>
                            <th>Serviço Id</th>
                            <th>Descricao</th>
                            <th>Valor R$</th>
                            <th>Data</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item => (
                                <tr key={item.id} >

                                    <td>{item.ClienteId}</td>
                                    <td>{item.Cliente.nome}</td>
                                    <td>{item.ServicoId}</td>
                                    <td>{item.Servico.descricao}</td>
                                    <td>{item.valor}</td>
                                    <td>{item.data}</td>
                                    
                                </tr>
                            ))
                        }


                    </tbody>
                </Table>
            </Container>

        </div>
    )
}