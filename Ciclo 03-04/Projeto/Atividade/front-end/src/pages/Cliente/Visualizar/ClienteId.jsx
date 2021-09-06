import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from "reactstrap"
import { api } from '../../../config';

export const VisualizarClienteId = (props) => {
    console.log(1);

    const [data, setData] = useState([]);
    const [id, setId] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: "",
        messege: ""
    });

    useEffect(() => {
        const getClienteId = async () => {
            await axios.get(`${api}/consultaClienteId/${id}`)
                .then((response) => {
                    console.log(`${api}/consultaClienteId/${id}`);
                    console.log(response.data.cliente);
                    //setId(response.id.servicos);
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
        getClienteId();
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
                {/*   <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do Serviço</h1>
                    </div>
                    <div className="p-2">
                    <Link to={`/visualizarservico`}
                        className="btn btn-outline-primary btn-sm"> Voltar
                    </Link>
                </div>

                </div>
                
                <dl className="row">

                    <dt className="col-sm-3">Nome</dt>
                    <dt className="col-sm-9">{data.nome}</dt>
                </dl>
                <dl className="row">

                    <dt className="col-sm-3">Descrição</dt>
                    <dt className="col-sm-9">{data.descricao}</dt>
                </dl> */}
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>cidade</th>
                            <th>UF</th>
                            <th>Nascimento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr key={data.id} >
                            <td>{data.nome}</td>
                            <td>{data.endereco}</td>
                            <td>{data.cidade}</td>
                            <td>{data.uf}</td>
                            <td>{data.nascimento}</td>
                            <td className="text-center">
                                <Link to={`/VisualizarCliente`}
                                    className="btn btn-outline-primary btn-sm"> Voltar
                                </Link>
                            </td>
                        </tr>

                    </tbody>
                </Table>
            </Container>

        </div>
    )
}