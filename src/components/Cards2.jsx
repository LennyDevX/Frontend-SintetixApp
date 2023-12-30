import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/components/coverStyled.css'; // Importación del archivo CSS sin asignación a una variable

export function TeamCards2({ title, description, buttonText, link }) {
    return (
        <Card>
            <Card.Body  >
                {/* Ajusta el tamaño según tus necesidades */}
                <div className='container cover1 '> {/* Corrección aquí */}

                <Card.Title>  <>{title}</></Card.Title>
                <Card.Text className="Card-Text">{description}</Card.Text>
                <Button  id="CardButton" href={link}>{buttonText}</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

TeamCards2.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    link: PropTypes.string,
    logo: PropTypes.string,
    logo2: PropTypes.string, // Asegúrate de agregar logo2 a tus PropTypes si lo estás utilizando
}

export default TeamCards2;