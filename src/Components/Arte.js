import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import headerImg from '../assets/img/trex.png';
import { ArrowRightCircle } from "react-bootstrap-icons";
import card1 from '../assets/img/musart1.jpg';
import card2 from '../assets/img/musart2.jpg';
import card3 from '../assets/img/musart3.jpg';

export const Arte = () => {
  return (
    <section className="art" id="arte">
        <Container>
            <Row>
                <h1>Museo de Arte Moderno</h1>
                <Col>
                   
                   <p>Un museo de arte es una institución cultural que se dedica a la preservación, exhibición y estudio de obras de arte. Estas instituciones tienen como objetivo principal reunir, conservar y presentar al público colecciones de obras de arte, que pueden incluir pinturas, esculturas, fotografías, grabados, instalaciones, entre otras formas de expresión artística.</p>
                   <img src={card3} class="card-img-top"  alt="..."/>
                   <p>Coleccionar y Conservar: Los museos de arte adquieren y conservan obras de arte, asegurándose de mantenerlas en condiciones óptimas para la posteridad. Esto implica un cuidado especializado para garantizar la preservación a largo plazo.

                    Exhibir: Los museos exhiben sus colecciones al público a través de exposiciones y galerías. Estas exposiciones pueden ser permanentes, mostrando obras de la colección principal del museo, o temporales, presentando obras específicas por un período limitado.

                    Investigar y Estudiar: Los museos de arte también juegan un papel importante en la investigación y el estudio de las obras que poseen. Esto implica la investigación histórica, artística y contextual para comprender y documentar el significado y la importancia de cada obra.

                    Educar: Los museos de arte desempeñan un papel educativo al proporcionar programas educativos, charlas, visitas guiadas y talleres. Estos programas están destinados a aumentar la comprensión del público sobre el arte y la cultura.

                    Interactuar con la Comunidad: Los museos suelen ser centros culturales y comunitarios que promueven la participación y la interacción con la comunidad local. Esto puede incluir eventos especiales, colaboraciones con artistas locales y actividades que fomentan el diálogo cultural.</p>
                </Col>
                <Col className="imgart">
                    <img src={card2} class="card-img-top"  alt="..." height="5" width="5"  />


                </Col>
            </Row>

        </Container> 

    </section>
  )
}

