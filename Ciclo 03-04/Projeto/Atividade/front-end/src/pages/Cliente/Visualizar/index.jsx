import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from "reactstrap"
import { api } from '../../../config';


export const VisualizarCliente = () =>{
    
    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: "",
        messege: ""
    });

    const getCliente = async () => {
        await axios.get(`${api}/listaclientes`)
            .then((response) => {
                console.log(response.data.cliente);
                setData(response.data.cliente);
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
        getCliente();
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
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>Nascimento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id} >
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.endereco}</td>
                                <td>{item.cidade}</td>
                                <td>{item.uf}</td>
                                <td>{item.nascimento}</td>
                                <td className="text-center">
                                    <Link to={`visualizarclienteId/${item.id}`}
                                        className="btn btn-outline-primary btn-sm"> Consultar
                                    </Link>
                                    <Link to={`visualizarclienteId/${item.id}`}
                                        className="btn btn-outline-primary btn-sm"> Editar
                                    </Link>
                                    
                                    <Link to={`visualizarclienteId/${item.id}`}
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
