import { Alert, Button, Col, Container, Form, FormGroup, Input, Label, Row, Spinner } from "reactstrap"
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import { api } from '../../../config';
import React from 'react';
export const CadastrarCliente = () => {

    const [cliente, setCliente] = useState({
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
    const valorInput = e => setCliente({
        ...cliente,

        [e.target.name]: e.target.value
    });


    const CadCliente = async e => {

        e.preventDefault();

        setStatus({
            formSave: true
        });

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(`${api}/adicionarcliente`, cliente, { headers })
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
                        <h1>Cadastro do Cliente</h1>
                    </div>
                </div>
                <div className="p-2">
                    <Link to={`/visualizarcliente`}
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

                <Form className="p-2" onSubmit={CadCliente}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" onChange={valorInput} placeholder="Nome do Cliente" />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Endereço</Label>
                        <Input type="text" name="endereco" onChange={valorInput} placeholder="Endereço" />
                    </FormGroup>
                    <Row form>
                        <Col md={5}>
                            <FormGroup className="p-2">
                                <Label>Cidade</Label>
                                <Input type="text" name="cidade" onChange={valorInput} placeholder="Cidade" />
                            </FormGroup>
                        </Col>
                        <Col md={5}>
                            <FormGroup className="p-2">
                                <Label>UF</Label>
                                <Input type="text" name="uf" onChange={valorInput} placeholder="Estado" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                        </Col>
                    </Row>
                    <FormGroup className="p-2" >
                        <Label>Data Nascimento</Label>
                        <Input type="date" name="nascimento" onChange={valorInput} placeholder="Data de Nascimento" />
                    </FormGroup>
                    {status.formSave ?
                        <Button type="submit" outline color="primary" desabled > Cadastrar
                            <Spinner type="grow" size="sm" color="secondary" />
                        </Button> :
                        <Button type="submit" outline color="primary" > Cadastrar </Button>
                    }

                    <Button type="reset" outline color="primary" >Limpar</Button>
                </Form>
            </Container>
        </div>
    )
}