import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../css/components/TeamNavBar.css';
import Submenu from './SubmenuNavBar';
import LoginForm from './LoginForm'; // Asegúrate de importar tus componentes modales
import RegisterForm from './RegisterForm';
import LogoNavbar from '../../img/LogoNavbar.png';

export default function NavigationBar() {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [placeholderText, setPlaceholderText] = useState('Buscar...');
    const [searchText, setSearchText] = useState('');
    const [showLogin, setShowLogin] = useState(false); // Nuevo estado para el modal de inicio de sesión
    const [showRegister, setShowRegister] = useState(false); // Nuevo estado para el modal de registro

    const handleOpen = () => setOpen(!open);

    const handleSearch = () => {
        setIsLoading(true);
        setPlaceholderText('Buscando...');
        setSearchText('');
        setTimeout(() => {
          setIsLoading(false);
          setPlaceholderText('Buscar...');
        }, 2000);
      };

    const onLoginClick = () => setShowLogin(true); // Nueva función para abrir el modal de inicio de sesión
    const onRegisterClick = () => setShowRegister(true); // Nueva función para abrir el modal de registro

    return (
        <Navbar className="navbar" expand="lg" >
            <img src={LogoNavbar} alt="Logo" id='LogoNavbar' /> {/* Ajusta el tamaño según tus necesidades */}
            <Navbar.Brand id="tituloweb" className="BarraNav" href="#home">Sintetix</Navbar.Brand>
            <Form >
                <FormControl id="searchBar" type="text" placeholder={placeholderText} className="mr-2" value={searchText} onChange={e => setSearchText(e.target.value)} />
            </Form>
            <Button id="searchBarButton" onClick={handleSearch} className="d-none d-sm-block" aria-label="Buscar">
                {isLoading ? (<span className="spinner-border spinner-border-sm"></span>) : 
                (<i className="bi bi-search"></i>)}
            </Button>
            <Nav className="ml-auto">
                <Nav.Link id="NavLink" href="#blog">Blog</Nav.Link>
                <Nav.Link  id="NavLink" href="#hub-ai">Hub AI</Nav.Link>
            </Nav>
            <Navbar.Toggle  className="ml-7"/>
            <Navbar.Collapse>
                <Nav >
                    {/* Aqui se llama al submenu */}
                    <Submenu  handleOpen={handleOpen} /> 
                    
                </Nav>
            </Navbar.Collapse>
            <LoginForm show={showLogin} onHide={() => setShowLogin(false)} /> {/* Asegúrate de pasar las props correctas a tus componentes modales */}
            <RegisterForm show={showRegister} onHide={() => setShowRegister(false)} />
        </Navbar>
    );
}
