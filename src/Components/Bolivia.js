import React from 'react';
import { Container, Col, Row, } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import ReactPlayer from 'react-player';
import meter1 from '../assets/img/car1.jpg';
export const Bolivia = () => {
    const vidUrl="https://www.youtube.com/watch?v=HNL2As-qkAI&t=3s"
  return (
    <section className="cas" id="boli">
        <Container>
            <Row>
                <h1 className="h12">Casa Nacional de Moneda</h1>
                <Col>
                   
                   <p className="pp">Ubicación: La Casa Nacional de Moneda se encuentra en la ciudad de Potosí, en el suroeste de Bolivia. Potosí es conocida por ser una ciudad históricamente vinculada a la minería de plata.

                    Historia: La Casa de la Moneda de Bolivia tiene sus orígenes en el periodo colonial durante la época de dominio español en América. Fue fundada en 1753 y se construyó para acuñar monedas a partir de los ricos depósitos de plata encontrados en la región.

                    Arquitectura: El edificio de la Casa Nacional de Moneda es una muestra de la arquitectura colonial. Es considerado uno de los mejores ejemplos de arquitectura barroca en América Latina. El edificio es famoso por su imponente fachada y sus patios internos.

                    Función Histórica: Durante la colonia, la Casa de la Moneda tenía la responsabilidad de acuñar monedas a partir de los minerales preciosos extraídos en la región. Potosí fue un importante centro minero durante ese tiempo.

                    Museo: En la actualidad, la Casa Nacional de Moneda funciona como un museo que exhibe una colección de arte, objetos históricos y, por supuesto, información sobre la acuñación de monedas durante la colonia. Los visitantes pueden aprender sobre la historia económica y cultural de la región.

                    Patrimonio Cultural: Debido a su importancia histórica y arquitectónica, la Casa Nacional de Moneda de Bolivia ha sido declarada Patrimonio Cultural de la Humanidad por la UNESCO.</p>
                </Col>
                <Col>
                   <ReactPlayer
                   url={vidUrl}
                   playing={false}
                   volume={0.5}
                   />
                     
                </Col>
            </Row>

        </Container>

    </section>
  )
}