import React, { useState, useEffect, useCallback } from 'react';
import TeamCards  from './Cards'; 
import { DataTeamCards } from '../data/DataTeamCard'; 
import NavBar from './NavBar'; 
import RegisterForm from './RegisterForm'; 
import LoginForm from './LoginForm';
import Carousel from './Carousel';
import Image1 from '../../Img/conectando.gif';
import Image2 from '../../Img/conectando2.gif';
import image3 from '../../Img/conectando4.gif';

function HomePage() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const onLoginClick = useCallback(() => {
        setShowLogin(true);
    }, []);

    const onRegisterClick = useCallback(() => {
        setShowRegister(true);
    }, []);

    return (
        <div>
            <NavBar onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} />

            <section className="gridcard">
            
            <Carousel imageSrc={Image1} altText="Primera imagen" />
            <Carousel imageSrc={Image2} altText="Segunda imagen" />
            <Carousel imageSrc={image3} altText="Tercera imagen" />
                {DataTeamCards.map((team) => ( 
                    <TeamCards
                        key={team.index}
                        // Cambiado a un valor único
                        title={team.title}
                        description={team.description}
                        link={team.link}
                        buttonText={team.ButtonText}
                        logo={team.logo}
                    />
                ))}
            </section>

            <LoginForm show={showLogin} onHide={() => setShowLogin(false)} />
            <RegisterForm show={showRegister} onHide={() => setShowRegister(false)} />
            
        </div>
    );
}

export default HomePage; // Agregado React.memo para evitar renderizados innecesarios