import React, { useState, useEffect, useCallback } from 'react';
import TeamCards  from './Cards'; 
import { DataTeamCards } from '../data/DataTeamCard'; 
import NavBar from './NavBar'; 
import RegisterForm from './RegisterForm'; 
import LoginForm from './LoginForm';

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
                {DataTeamCards.map((team) => ( 
                    <TeamCards
                        key={team.title} // Cambiado a un valor único
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