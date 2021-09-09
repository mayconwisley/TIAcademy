import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Card, CardBody, CardHeader, CardText, Container, } from "reactstrap"
import { api } from '../../../config';

export const ExcluirClienteId = (props) => {

    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: "",
        message: ""
    });

    useEffect(() => {
        const getClienteId = async () => {
            await axios.delete(`${api}/apagarclienteid/${id}`)
                .then((response) => {
                    setData(response);
                    setStatus({
                        type: 'Success',
                        message: 'Cliente Excluido'
                    })
                })
                .catch(() => {
                    setStatus({
                        type: "Error",
                        message: "Erro: não foi possivel conectar a API"
                    });
                });
        }
        console.log(`${api}/excluircliente/${id}`);
        getClienteId();
    }, [id]);

    return (
        <div>
            <Container>
                {status.type === "Error" ?
                    <Alert color="danger"> {status.message} </Alert> :
                    ""
                }
                {status.type === "Success" ?
                    <Alert color="success"> {status.message} </Alert> :
                    ""
                }
                <div className="p-2">
                    <Link to={`/VisualizarCliente`}
                        className="btn btn-outline-primary btn-sm"> Voltar
                    </Link>
                </div>
            </Container>
        </div>
    )
}