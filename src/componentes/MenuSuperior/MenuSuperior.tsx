import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDesign } from '../../contexts/useDesign';
import { Link } from 'react-router-dom';

export const MenuSuperior: React.FC = () => {
    const TEMA = useDesign();

    return (
        <Navbar expand="lg" style={{ backgroundColor: TEMA.paletaCores.marromPrimario }}>
            <Container>
                <Navbar.Brand href="#home" className='fw-bold' style={{ color: TEMA.paletaCores.corFontePrimaria }} >Native Coffee.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="" style={{ color: TEMA.paletaCores.corFontePrimaria }}>Inicio.</Nav.Link>
                        <Nav.Link as={Link} to="/cadastroDeProduto" style={{ color: TEMA.paletaCores.corFontePrimaria }}>Cadastros.</Nav.Link>
                        <Nav.Link as={Link} to="/cafesCadastrados" style={{ color: TEMA.paletaCores.corFontePrimaria }}>Cafés.</Nav.Link>
                        <Nav.Link as={Link} to="/aperitivosCadastrados" style={{ color: TEMA.paletaCores.corFontePrimaria }}>Aperitivos.</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MenuSuperior;