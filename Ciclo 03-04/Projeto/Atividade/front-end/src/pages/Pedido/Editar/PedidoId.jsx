import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Alert, Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"
import { api } from "../../../config";

export const EditarPedido = (props) => {

    const [id] = useState(props.match.params.id);
	const [ClienteId, setClienteId] = useState('');
	const [ServicoId, setServicoId] = useState('');
	const [valor, setValor] = useState(''); 
	const [data, setData] = useState('');
    
    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    })
   
    const getPedido2 = async () => {
        await axios.get(`${api}/todospedidos`)
            .then((response) => {
                setClienteId(response.data.pedido.ClienteId);
                setServicoId(response.data.pedido.ServicoId);
                setData(response.data.pedido.data);
                setValor(response.data.pedido.valor);
            })
            .catch(() => {
                console.log("Erro: Não foi possivel conectar a API");
            })
    }
    

    const editPedido = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        }

       

        await axios.put(`${api}/editarpedido`, { id, ClienteId, ServicoId, valor, data }, { headers })
            .then((response) => {
                setStatus({
                    type: 'Success',
                    message: 'Editado com Sucesso'
                })
                getPedido2();
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possivel conectar na API'
                })
            })
    }

    useEffect(() => {
        const getPedido = async () => {
            await axios.get(`${api}/pedidoId/${id}`)
                .then((response) => {
                    setClienteId(response.data.pedido.ClienteId);
                    setServicoId(response.data.pedido.ServicoId);
                    setValor(response.data.pedido.valor);
                    setData(response.data.pedido.data);
                })
                .catch(() => {
                    console.log("Erro: Não foi possivel conectar a API");
                })
        }
        getPedido();
        
    }, [id])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do Pedido</h1>
                    </div>
                </div>
                <div className="p-2">
                    <Link to={`/visualizarpedido`}
                        className="btn btn-outline-primary btn-sm"> Voltar
                    </Link>
                </div>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Editar</h1>
                    </div>
                </div>

                <hr className="m-1" />

                {
                    status.type === "Error" ?
                        <Alert color="danger"> {status.message} </Alert> :
                        ""
                }

                {
                    status.type === "Success" ?
                        <Alert color="success"> {status.message} </Alert> :
                        ""
                }

                <Form className="p-2" onSubmit={editPedido}>
                    <Row form>
                        <Col md={2}>
                            <FormGroup className="p-2">
                                <Label>Código Cliente</Label>
                                <Input type="text" name="ClienteId" value={ClienteId} onChange={e => setClienteId(e.target.value)} placeholder="Código Cliente" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup className="p-2">
                                <Label> Códido Serviço</Label>
                                <Input type="text" name="ServicoId" value={ServicoId} onChange={e => setServicoId(e.target.value)} placeholder="Código Serviço" />
                            </FormGroup>
                        </Col>

                        <Col md={2}>
                            <FormGroup className="p-2">
                                <Label>Valor</Label>
                                <Input type="text" name="valor" value={valor} onChange={e => setValor(e.target.value)} placeholder="Valor" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup className="p-2" >
                                <Label>Data</Label>
                                <Input type="date" name="data" value={data} onChange={e => setData(e.target.value)} placeholder="Data" />
                            </FormGroup>
                        </Col>
                       
                    </Row>

                    <Button type="submit" outline color="primary" > Salvar</Button>

                    
                </Form>
            </Container>
        </div>
    )
}