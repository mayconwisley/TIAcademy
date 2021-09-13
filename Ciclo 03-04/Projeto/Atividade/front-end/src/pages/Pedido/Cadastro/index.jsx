import { Alert, Button, Col, Container, Form, FormGroup, Input, Label, Row, Spinner, Table } from "reactstrap"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Select from 'react-select';
import axios from "axios";
import { api } from '../../../config';


export const CadastrarPedido = () => {

    const [pedido, setPedido] = useState({
        ClienteId: '',
        ServicoId: '',
        valor: '',
        data: ''
    });
    const [status, setStatus] = useState({
       
        type: '',
        message: ''
    });
    const valorInput = e => setPedido({
        ...pedido,
        [e.target.name]: e.target.value
    });

    const CadPedido = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(`${api}/pedido`, pedido, { headers })
            .then((response) => {
                if (response.data.error) {
                    setStatus({
                      
                        type: 'Error',
                        message: response.data.message
                    })
                }
                else {
                    setStatus({
                       
                        type: 'Success',
                        message: response.data.message
                    })
                }
                console.log(status);
            })
            .catch(() => {
                setStatus({
                    formSave: false,
                    type: 'Error',
                    message: 'Erro: não foi possivel conectar a API'
                })
            });
    }

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Cadastro do Pedido</h1>
                    </div>
                </div>
                <div className="p-2">
                    <Link to={`/visualizarpedido`}
                        className="btn btn-outline-primary btn-sm"> Listar
                    </Link>
                </div>

                <hr className="m-1" />

                {status.type === "Error" ?
                    <Alert color="danger"> {status.message} </Alert> :
                    ""
                }
                {status.type === "Success" ?
                    <Alert color="success"> {status.message} </Alert> :
                    ""
                }

                <Form className="p-2" onSubmit={CadPedido}>
                    <Row form>
                        <Col md={2}>
                            <FormGroup className="p-2">
                                <Label>Código Cliente</Label>
                                <Input type="text" name="ClienteId" onChange={valorInput} placeholder="Código Cliente" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup className="p-2">
                                <Label> Códido Serviço</Label>
                                <Input type="text" name="ServicoId" onChange={valorInput} placeholder="Código Serviço" />
                            </FormGroup>
                        </Col>

                        <Col md={2}>
                            <FormGroup className="p-2">
                                <Label>Valor</Label>
                                <Input type="text" name="valor" onChange={valorInput} placeholder="Valor" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup className="p-2" >
                                <Label>Data</Label>
                                <Input type="date" name="data" onChange={valorInput} placeholder="Data" />
                            </FormGroup>
                        </Col>
                       
                    </Row>

                    <Button type="submit" outline color="primary" > Cadastrar</Button>

                    <Button type="reset" outline color="primary" >Limpar</Button>
                </Form>
            </Container>
        </div>
    )
}