import { Alert, Button, Col, Container, Form, FormGroup, Input, Label, Row, Spinner } from "reactstrap"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from '../../../config';
import React from 'react';

export const EditarCliente = (props) => {

    const [id] = useState(props.match.params.id);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    })

    const getCliente2 = async () => {
        await axios.get(`${api}/listaservicos`)
            .then((response) => {
                setNome(response.data.servicos.nome);
                setDescricao(response.data.servicos.descricao)
            })
            .catch(() => {
                console.log("Erro: Não foi possivel conectar a API");
            })
    }


    const editCliente = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        }



        await axios.put(`${api}/editarservico`, { id, nome, descricao }, { headers })
            .then((response) => {
                setStatus({
                    type: 'Success',
                    message: 'Editado com Sucesso'
                })
                getCliente2();
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possivel conectar na API'
                })
            })
    }

    useEffect(() => {
        const getCliente = async () => {
            await axios.get(`${api}/servico/${id}`)
                .then((response) => {
                    setNome(response.data.servicos.nome);
                    setDescricao(response.data.servicos.descricao)
                })
                .catch(() => {
                    console.log("Erro: Não foi possivel conectar a API");
                })
        }
        getCliente();

    }, [id])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do Cliente</h1>
                    </div>
                </div>
                <div className="p-2">
                    <Link to={`/visualizarservicoid/${id}`}
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

                <Form className="p-2" onSubmit={editCliente}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Nome do Cliente" />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Endereço</Label>
                        <Input type="text" name="endereco" placeholder="Endereço" />
                    </FormGroup>
                    <Row form>
                        <Col md={5}>
                            <FormGroup className="p-2">
                                <Label>Cidade</Label>
                                <Input type="text" name="cidade" placeholder="Cidade" />
                            </FormGroup>
                        </Col>
                        <Col md={5}>
                            <FormGroup className="p-2">
                                <Label>UF</Label>
                                <Input type="text" name="uf" placeholder="Estado" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup className="p-2" >
                                <Label>Data Nascimento</Label>
                                <Input type="date" name="nascimento" placeholder="Data de Nascimento" />
                            </FormGroup>

                        </Col>
                    </Row>

                    <Button type="submit" outline color="primary" > Cadastrar </Button>


                    <Button type="reset" outline color="primary" >Limpar</Button>
                </Form>
            </Container>
        </div>
    )
}