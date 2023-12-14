import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import headerImg from '../assets/img/trex.png';
import { ArrowRightCircle } from "react-bootstrap-icons";
import React from 'react'
import card1 from '../assets/img/ciencia2.jpg';
import card2 from '../assets/img/cienci3.jpeg';

export const Ciencia = () => {
  return (
    <section className="mus" id="ciencia">
        <Container>
            <Row>
                <h1>Museo de Ciencia</h1>
                <Col>
                   
                   <p>Un museo de ciencia es un museo dedicado principalmente a la ciencia. Los antiguos museos científicos solían concentrarse en exposiciones estáticas de objetos relacionados con la historia natural, la paleontología, la geología, la industria y la maquinaria industrial, etc. Las tendencias modernas en museología han ampliado la gama de temas e introducido muchas exposiciones interactivas. Los museos científicos modernos, cada vez más denominados «centros de ciencia» o «centros de descubrimiento», también incorporan tecnología.Aunque las declaraciones de intenciones de los centros científicos y los museos modernos pueden variar, por lo general son lugares que hacen accesible la ciencia y fomentan la emoción del descubrimiento</p>
                   <img src={card1} class="card-img-top"  alt="..."/>
                </Col>
                <Col>
                <img src={card2} class="card-img-top"  alt="..."/> 
                   <p>Museos de ciencia modernos
                    Parece que el pionero de los modernos museos científicos interactivos fue el Deutsches Museum de Múnich (Museo Alemán de Obras Maestras de la Ciencia y la Tecnología) a principios del siglo xx. Este museo contaba con exposiciones móviles en las que se animaba a los visitantes a pulsar botones y accionar palancas. En Francia el Museo Ampère, creado en 1931, es el primer museo científico interactivo, seguido en 1937 por el Palais de la Découverte. El concepto fue llevado a Estados Unidos por Julius Rosenwald, presidente de Sears, Roebuck and Company, que visitó el Deutsches Museum con su hijo pequeño en 1911. Quedó tan cautivado por la experiencia que decidió construir un museo similar en su ciudad natal.4​ El Museo de la Ciencia y la Industria de Chicago se inauguró por fases entre 1933 y 1940.</p>

                     
                </Col>
            </Row>

        </Container>
        
    </section>
    
  )
}
