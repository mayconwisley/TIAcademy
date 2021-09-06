import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from "reactstrap"
import { api } from '../../../config';

export const VisualizarServico = () => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: "",
        messege: ""
    });

    const getServico = async () => {
        await axios.get(`${api}/listaservicos`)
            .then((response) => {
                console.log(response.data.servicos);
                setData(response.data.servicos);
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
        getServico();
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
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Serviço</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id} >
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td className="text-center">
                                    <Link to={`visualizarservicoid/${item.id}`}
                                        className="btn btn-outline-primary btn-sm"> Consultar
                                    </Link>
                                    <Link to={`visualizarservicoid/${item.id}`}
                                        className="btn btn-outline-primary btn-sm"> Editar
                                    </Link>
                                    <Link to={`visualizarservicoid/${item.id}`}
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