import React, { useState, useEffect, useCallback } from 'react';
import { DataTeamCards2 } from '../data/DataTeamCard2'; 
import NavBar from './NavBar'; 
import RegisterForm from './RegisterForm'; 
import LoginForm from './LoginForm';
import TeamCards2 from './CArds2'; // Importación corregida

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
                {DataTeamCards2.map((team, index) => ( 
                    <TeamCards2 className="cover1" key={index} title={team.title} description={team.description} link={team.link} buttonText={team.ButtonText} logo={team.logo} />
                ))}
                {DataTeamCards2.map((team, index) => ( 
                    <TeamCards2 key={index} title={team.title} description={team.description} link={team.link} buttonText={team.ButtonText} logo={team.logo} />
                ))}
            </section>

            <LoginForm show={showLogin} onHide={() => setShowLogin(false)} />
            <RegisterForm show={showRegister} onHide={() => setShowRegister(false)} />
        </div>
    );
}

export default HomePage; // Agregado React.memo para evitar renderizados innecesarios