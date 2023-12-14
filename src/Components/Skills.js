import { Container, Col, Row, } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import meter1 from '../assets/img/car1.jpg';
import meter2 from '../assets/img/car2.jpg';
import meter3 from '../assets/img/car4.jpg';
import meter4 from '../assets/img/cae3.jpg';
import meter5 from '../assets/img/car5.jpg';
import fondo from '../assets/img/color-sharp.png';

export const Skills = ()=>{
    const responsive = {
        superLargeDesktop:{ 
            breakpoint:{ max: 4000,min: 3000 },
            items:5

        },
        desktop:{
            breakpoint: { max: 3000, min: 1024 },
            items:3
        },
        tablet:{
            breakpoint: {max: 1024, min: 464 },
            items:2
        },
        mobile:{
            breakpoint: {max: 464, min: 0 },
            items:1
        }

    };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Imagenes</h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">  
                                <div className="item">
                                    <img src={meter1} alt="image"/>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="image"/>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="image"/>    
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="image"/>    
                                </div>
                                <div className="item">
                                    <img src={meter5} alt="image"/>    
                                </div>
                                
                                
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={fondo}/>
            <p className="parafo">Un museo es una institución cultural que alberga y exhibe una diversidad de objetos significativos, representativos de la historia, la cultura, la ciencia o el arte. Estos objetos, conocidos como "colecciones", pueden incluir obras de arte, artefactos históricos, documentos, fósiles, especímenes naturales, entre otros. Los museos desempeñan un papel crucial en la preservación, estudio y presentación de la herencia cultural y el conocimiento humano. A través de sus exhibiciones y programas educativos, los museos ofrecen a los visitantes la oportunidad de aprender, reflexionar y apreciar la riqueza y diversidad del patrimonio cultural y científico de la humanidad. Además, los museos pueden ser espacios dinámicos que fomentan el diálogo, la exploración y la conexión con el pasado, el presente y el futuro.</p>
        </section>
    )
}