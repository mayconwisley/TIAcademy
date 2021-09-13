import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container } from "reactstrap"
import { api } from '../../../config';

export const ExcluirPedidoId = (props) => {

    
    const [id] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: "",
        message: ""
    });

    useEffect(() => {
        const getServicoId = async () => {
            await axios.delete(`${api}/apagarpedidoid/${id}`)
                .then((response) => {
                    
                    setStatus({
                        type: 'Success',
                        message: 'Pedido Excluido'
                    })
                })
                .catch(() => {
                    setStatus({
                        type: "Error",
                        message: "Erro: não foi possivel conectar a API"
                    });
                });
        }
        getServicoId();
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
                    <Link to={`/VisualizarPedido`}
                        className="btn btn-outline-primary btn-sm"> Voltar
                    </Link>
                </div>
            </Container>
        </div>
    )
}