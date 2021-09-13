import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { api } from "../../../config";

export const EditarServico = (props) => {

    const [id] = useState(props.match.params.id);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    })
   
    const getServico2 = async () => {
        await axios.get(`${api}/listaservicos`)
            .then((response) => {
                setNome(response.data.servicos.nome);
                setDescricao(response.data.servicos.descricao)
            })
            .catch(() => {
                console.log("Erro: Não foi possivel conectar a API");
            })
    }
    

    const editServico = async e => {
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
                getServico2();
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possivel conectar na API'
                })
            })
    }

    useEffect(() => {
        const getServico = async () => {
            await axios.get(`${api}/servico/${id}`)
                .then((response) => {
                    setNome(response.data.servicos.nome);
                    setDescricao(response.data.servicos.descricao)
                })
                .catch(() => {
                    console.log("Erro: Não foi possivel conectar a API");
                })
        }
        getServico();
        
    }, [id])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do Serviço</h1>
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

                <Form className="p-2" onSubmit={editServico} >
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Nome do Serviço" value={nome} onChange={e => setNome(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Descrição</Label>
                        <Input type="text" name="descricao" placeholder="Nome da Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
                    </FormGroup>
                    <Button type="submit" outline color="primary" > Salvar </Button>
                </Form>
            </Container>
        </div>
    )
}