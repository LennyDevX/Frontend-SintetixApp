<<<<<<< HEAD
import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/TeamCarousel.css';

const MyCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="../Img/ReactLogo.png"
                    alt="Primera imagen"
                    style={{objectFit: 'cover', height: '500px'}}
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="../Img/GeminiPro1.webp"
                    alt="Segunda imagen"
                    style={{objectFit: 'cover', height: '500px'}}
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="ruta/a/tu/imagen3.jpg"
                    alt="Tercera imagen"
                    style={{objectFit: 'cover', height: '500px'}}
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="ruta/a/tu/imagen4.jpg"
                    alt="Cuarta imagen"
                    style={{objectFit: 'cover', height: '500px'}}
                />
            </Carousel.Item>
        </Carousel>
    );
};

=======
import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/components/TeamCarousel.css';

const MyCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item interval={3000}>
            <iframe className="d-block w-100" src="https://www.youtube.com/embed/UIZAiXYceBI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>            </Carousel.Item>
        </Carousel>
    );
};

>>>>>>> 04558f33e6a113a9c660acbe5ac56c22d880a19e
export default MyCarousel;