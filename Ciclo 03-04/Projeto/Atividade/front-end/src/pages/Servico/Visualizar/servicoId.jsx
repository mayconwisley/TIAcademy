import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from "reactstrap"
import { api } from '../../../config';

export const VisualizarServicoId = (props) => {
    console.log(1);

    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: "",
        messege: ""
    });

    useEffect(() => {
        const getServico = async () => {
            await axios.get(`${api}/servico/${id}`)
                .then((response) => {
                    console.log(`${api}/servico/${id}`);
                    console.log(response.data.servicos);
                    //setId(response.id.servicos);
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
        getServico();
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
                    <dd className="col-sm-9">{data.nome}</dd>
                </dl>
                <dl className="row">

                    <dt className="col-sm-3">Descrição</dt>
                    <dd className="col-sm-9">{data.descricao}</dd>
                </dl>


                <Table sdriped hover>
                    <thead>
                        <tr>
                            <th>Serviço</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr key={data.id} >
                            <td>{data.nome}</td>
                            <td>{data.descricao}</td>
                            <td className="text-center">
                                <Link to={`/visualizarservico`}
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