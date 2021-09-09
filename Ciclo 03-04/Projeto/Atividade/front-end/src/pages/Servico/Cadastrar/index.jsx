import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import { api } from '../../../config';
export const CadastrarServico = () => {

    const [servico, setServico] = useState({
        nome: '',
        descricao: ''
    });

    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });
    const valorInput = e => setServico({
        ...servico,

        [e.target.name]: e.target.value
    });


    const CadServico = async e => {

        e.preventDefault();

        setStatus({
            formSave: true
        });

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(`${api}/servicos`, servico, { headers })
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
                        <h1>Cadastrar do Serviço</h1>
                    </div>
                </div>
                <div className="p-2">
                        <Link to={`/visualizarservico`}
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

                <Form className="p-2" onSubmit={CadServico}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" onChange={valorInput} placeholder="Nome do Serviço" />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Descrição</Label>
                        <Input type="text" name="descricao" onChange={valorInput} placeholder="Nome da Descrição" />
                    </FormGroup>
                    {status.formSave ? <Button type="submit" outline color="primary" >Cadastrar</Button> :
                        <Button type="submit" outline color="primary" >Cadastrar</Button>
                    }

                    <Button type="reset" outline color="primary" >Limpar</Button>
                </Form>
            </Container>
        </div>
    )
}