import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Card, CardBody, CardHeader, CardText, Container, } from "reactstrap"
import { api } from '../../../config';

export const VisualizarClienteId = (props) => {
    console.log(1);

    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: "",
        messege: ""
    });

    useEffect(() => {
        const getClienteId = async () => {
            await axios.get(`${api}/consultaClienteId/${id}`)
                .then((response) => {
                    setData(response.data.cliente);
                })
                .catch(() => {
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

                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do Cliente</h1>
                    </div>
                </div>
                <div className="p-2">
                    <Link to={`/VisualizarCliente`}
                        className="btn btn-outline-primary btn-sm"> Voltar
                    </Link>
                </div>
                <div>
                    <Card>
                        <CardHeader tag="h2">
                            {data.id} - {data.nome}
                        </CardHeader>
                        <CardBody>
                            <Card>
                                <CardHeader tag="h4" >Dados</CardHeader>
                                <CardBody>
                                    <CardText>
                                        {data.endereco} - {data.cidade} - {data.uf}
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader tag="h4">Nascimento</CardHeader>
                                <CardBody>
                                    <CardText>
                                        {data.nascimento}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </CardBody>
                    </Card>
                </div>
                <div className="d-Flex p-2">
                    <Link to={`/EditarClienteId/${data.id}`}
                        className="btn btn-outline-primary btn-sm"> Editar
                    </Link>
                    <Link to={`/ExcluirClienteId/${data.id}`}
                        className="btn btn-outline-danger btn-sm"> Excluir
                    </Link>
                </div>
            </Container>
        </div>
    )
}