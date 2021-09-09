import { Alert, Button, Col, Container, Form, FormGroup, Input, Label, Row, Spinner } from "reactstrap"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from '../../../config';
export const CadastrarPedido = () => {

    const [pedido, setPedido] = useState({
        nome: '',
        endereco: '',
        cidade: '',
        uf: '',
        nascimento: ''
    });
    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });
    const valorInput = e => setPedido({
        ...pedido,
        [e.target.name]: e.target.value
    });

    const CadPedido = async e => {
        e.preventDefault();

        setStatus({
            formSave: true
        });

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(`${api}/adicionarcliente`, pedido, { headers })
            .then((response) => {
                if (response.data.error) {
                    setStatus({
                        formSave: false,
                        type: 'Error',
                        message: response.data.message
                    })
                }
                else {
                    setStatus({
                        formSave: false,
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
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>

                        </Input>
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Serviço</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <Row form>
                        <Col md={5}>
                            <FormGroup className="p-2">
                                <Label>Valor</Label>
                                <Input type="text" name="cidade" onChange={valorInput} placeholder="Valor" />
                            </FormGroup>
                        </Col>
                        <Col md={5}>
                            <FormGroup className="p-2" >
                                <Label>Data</Label>
                                <Input type="date" name="data" onChange={valorInput} placeholder="Data de Nascimento" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                        </Col>
                    </Row>

                    {status.formSave ?
                        <Button type="submit" outline color="primary" > Cadastrar
                            <Spinner size="sm" color="secondary" />
                        </Button> :
                        <Button type="submit" outline color="primary" > Cadastrar</Button>
                    }

                    <Button type="reset" outline color="primary" >Limpar</Button>
                </Form>
            </Container>
        </div>
    )
}