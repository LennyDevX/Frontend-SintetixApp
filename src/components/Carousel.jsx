import React from 'react';
import '../css/components/coverStyled.css';

const Carousel = ({ imageSrc, altText }) => {
    return (
        <div>
            <img src={imageSrc} alt={altText} className="cover1" />
            {/* Resto de tu código */}
        </div>
    );
}

export default Carousel;