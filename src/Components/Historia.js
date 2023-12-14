import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import headerImg from '../assets/img/trex.png';
import { ArrowRightCircle } from "react-bootstrap-icons";
import React from 'react'
import card1 from '../assets/img/hist.jpg';
import card2 from '../assets/img/hist2.jpg';

export const Historia = () => {
  return (
    <section className="hist" id="hist">
        <Container>
            <Row>
                <h1>Museo de Historia</h1>
                <Col>
                   <p>Un museo de historia es una institución cultural que se dedica a la recopilación, preservación, exhibición y estudio de objetos y materiales relacionados con eventos, personas y períodos históricos. Estos museos están diseñados para proporcionar a los visitantes una comprensión más profunda de la historia, permitiéndoles explorar y aprender sobre diversas culturas, sociedades y momentos significativos a lo largo del tiempo.</p>
                   <img src={card1} class="card-img-top"  alt="..."/>
                </Col>
                <Col>
                    <img src={card2} class="card-img-top"  alt="..."/>
                  <p>Colección y Preservación: Adquisición y preservación de objetos, artefactos, documentos y otras formas de material histórico. Los museos se esfuerzan por mantener estos elementos en condiciones óptimas para su conservación a largo plazo.

                      Exhibición: Presentación de colecciones en forma de exhibiciones y galerías temáticas. Estas exhibiciones pueden ser permanentes, centrándose en la historia general de una región o período, o temporales, destacando eventos o temas específicos por un tiempo limitado.

                    Investigación y Estudio: Llevan a cabo investigaciones para profundizar en la comprensión de los objetos de su colección. Estos estudios pueden incluir la historia social, cultural, política y económica, entre otras disciplinas.

                      Educación: Ofrecen programas educativos, visitas guiadas, charlas y actividades para promover la educación histórica. Muchos museos de historia están comprometidos con la enseñanza y el aprendizaje, sirviendo como recursos valiosos para escuelas y grupos educativos.</p>

                     
                </Col>
            </Row>

        </Container>
        <div>
        </div>

    </section>
  )
}
