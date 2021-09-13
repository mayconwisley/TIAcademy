import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Card, CardBody, CardHeader, CardText, Container } from "reactstrap"
import { api } from '../../../config';

export const VisualizarServicoId = (props) => {
    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: "",
        messege: ""
    });

    const apagarServico = async (id) => {
        const headers = {
            'Content-Type': 'application/json'
        }
        await axios.delete(`${api}/apagarservicoid/${id}`, { headers })
            .then((response) => {
                getServico2();
                setStatus({
                    type: 'Success',
                    message: 'response.data.message'
                })
            })
            .catch(() => {
                setStatus({
                    type: "Error",
                    message: "response.data.message"
                });
            });
    }
    const getServico = async () => {
        await axios.get(`${api}/servico/${id}`)
            .then((response) => {
                setData(response.data.servicos);
            })
            .catch(() => {
                setStatus({
                    type: "Error",
                    message: "Erro: não foi possivel conectar a API"
                });
            });
    }


    const getServico2 = async () => {
        await axios.get(`${api}/listaservicos`)
            .then((response) => {
                setData(response.data.servicos);
            })
            .catch(() => {
                setStatus({
                    type: "Error",
                    message: "Erro: não foi possivel conectar a API"
                });
            });
    }

    useEffect(() => {
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
                </div>
                <div className="p-2">
                    <Link to={`/visualizarservico`}
                        className="btn btn-outline-primary btn-sm"> Voltar
                    </Link>
                </div>

                <div>
                    <Card>
                        <CardHeader tag="h5">
                            {data.id} - {data.nome}
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                {data.descricao}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="d-Flex p-2">
                    <Link to={`/editarservicoid/${data.id}`}
                        className="btn btn-outline-primary btn-sm"> Editar
                    </Link>
                    <Link to={`/ExcluirServicoId/${data.id}`}
                        className="btn btn-outline-danger btn-sm"> Excluir
                    </Link>
                </div>
            </Container>
        </div>
    )
}