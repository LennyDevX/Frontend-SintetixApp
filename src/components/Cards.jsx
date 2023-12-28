import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/components/TeamCards.css';

export function TeamCards({ title, description, buttonText, link, logo, logo2 }) {
  return (
    <Card>
      <Card.Body >
        {/* Ajusta el tamaño según tus necesidades */}
        <div className='container'>

        <Card.Title>  <>{title}</></Card.Title>
        <img src={logo} alt="Logo" id='logoCards' />
        <Card.Text className="Card-Text">{description}</Card.Text>
        <Button  id="CardButton" href={link}>{buttonText}</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

TeamCards.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  link: PropTypes.string,
  logo: PropTypes.string,
}

export default TeamCards;