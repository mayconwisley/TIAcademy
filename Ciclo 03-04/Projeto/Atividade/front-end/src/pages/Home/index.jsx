import { Container } from 'reactstrap';

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Pagina Inicial</h1>
                    </div>
                    <div className="p-2">
                        <a href="/visualizarCliente" className="btn btn-outline-primary btn-sm">Cliente</a>
                    </div>
                    <div className="p-2">
                        <a href="/visualizarServico" className="btn btn-outline-primary btn-sm">Serviço</a>
                    </div>
                </div>
            </Container>
        </div>
    )
}