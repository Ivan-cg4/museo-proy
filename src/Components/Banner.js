import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import headerImg from '../assets/img/trex.png';
import { ArrowRightCircle } from "react-bootstrap-icons";


export const Banner =()=>{
    const [loopnum, setloopnum] = useState(0);
    const [isDeleting, setDeleting] = useState(false);
    const toRotate = [""];
    const [text, setText] = useState("");
    const tiempo = 1000;
    const [delta, setDelta] =useState(300 - Math.random()*100);

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return()=>{clearInterval(ticker)};
    },[text])
    
    
    const tick= ()=>{
        let i=loopnum % toRotate.length;
        let fulltext = toRotate[i];
        let updateText = isDeleting ? fulltext.substring(0,text.length-1) : fulltext.substring(0,fulltext.length+1);
    
        setText(updateText);
        
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
    
        }
        if(!isDeleting && updateText === fulltext){
            setDeleting(true);
            setDelta(tiempo);
        }else{
            if(isDeleting && updateText ===''){
                setDeleting(false);
                setloopnum(loopnum+1);
                setDelta(500);
    
            }
    
        }
    
    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Museos</span>
                        <h1>{'¿Que es un Museo?'}<span className="wrap">{text}</span></h1>
                        <p>Un museo es una institución cultural dedicada a la recopilación, preservación, estudio y exhibición de objetos y artefactos significativos para la historia, la cultura, la ciencia o el arte. Estos objetos, también conocidos como "colecciones", pueden incluir obras de arte, artefactos históricos, documentos, fósiles, especímenes naturales, entre otros.
                            Los museos desempeñan un papel importante en la sociedad al proporcionar un espacio donde la gente puede aprender sobre el pasado, la diversidad cultural, la ciencia y el arte. Además de exhibir colecciones permanentes, muchos museos también organizan exposiciones temporales que exploran temas específicos o presentan obras de artistas contemporáneos.
                            Además de su función educativa, los museos también tienen un papel en la preservación y conservación de los objetos que albergan. Los museos pueden ser especializados en diferentes áreas, como historia natural, arte moderno, ciencia, tecnología, historia local, entre otros</p>
                        <button>Mas Informacion<ArrowRightCircle size={25}/></button>
                        
                    </Col>
                    <Col>
                         <img src={headerImg} alt="Header"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}