import React from 'react'
import card1 from '../assets/img/mtso.jpg';
import card2 from '../assets/img/casalibertadsucre.jpg';
import card3 from '../assets/img/Musef-HDR-1.jpg';
import card4 from '../assets/img/Asur-SoySucre-1.jpg';
import card5 from '../assets/img/coca.jpg';
import card6 from '../assets/img/instrumentos.jpg';
import card7 from '../assets/img/museo-nacional-de-arte-2.jpg';
import card8 from '../assets/img/Museo-paleontologico-Tarija-LV-1.jpg';
import card9 from '../assets/img/entrada-do-museu-nacional.jpg';


export const ContentHome = () => {
  return (
    <section className="bb" id="mus">
        <h1 className="mb">Museos en Bolivia</h1>
        <div class="conteiner">
            <div class="row row-cols- row-cols-md-5 g-5">
                <div class="card">
                    <img src={card1} class="card-img-top"  alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Museo del Tesoro</h5>
                        <p class="card-text">El museo es un tributo a la belleza. Muestra el arte y la técnica del oro, la plata y las piedras preciosas de Bolivia.</p>
                        <p class="card-text"><small class="text-muted">Se encuentra en Sucre</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src={card2} class="card-img-top"  alt="..."/> 
                    <div class="card-body">
                        <h5 class="card-title">Museo Casa de la Libertad</h5>
                        <p class="card-text">Museo Casa de la Libertad. Museo histórico nacional de Bolivia situado en la ciudad de Sucre.</p>
                        <p class="card-text"><small class="text-muted">Se encuentra en Sucre</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src={card3} class="card-img-top"  alt="..."/> 
                    <div class="card-body">
                        <h5 class="card-title">Museo Nacional de Etnografía y Folklore</h5>
                        <p class="card-text">El Museo Nacional de Etnografía y Folklore es uno de los principales centros de difusión de la etnografía de Bolivia.</p>
                        <p class="card-text"><small class="text-muted">Se encuentra en La Paz</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src={card4} class="card-img-top"  alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Museo de Arte Indigena ASUR</h5>
                        <p class="card-text">El museo cuenta con nueve salas de exhibición. Se puede ver una tejedora en vivo demostrando las antiguas técnicas para realizar diseños</p>
                        <p class="card-text"><small class="text-muted">Se encuentra en Sucre</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src={card5} class="card-img-top"  alt="..."/> 
                    <div class="card-body">
                        <h5 class="card-title">Museo de la Coca</h5>
                        <p class="card-text">El Museo de la Coca es un pequeño museo privado en el centro histórico de la ciudad de La Paz</p>
                        <p class="card-text"><small class="text-muted">Se encuentra en La Paz</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src={card6} class="card-img-top"  alt="..."/> 
                    <div class="card-body">
                        <h5 class="card-title">Museo de Instrumentos Musicales</h5>
                        <p class="card-text">Actualmente cuenta con 2000 instrumentos de diversos orígenes de Bolivia y del mundo, también prehispánicos, expuestos en 10 salas destinadas a cada orden, incluyendo innovados e inventados</p>
                        <p class="card-text"><small class="text-muted">Se encuentra en La Paz</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src={card7} class="card-img-top"  alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Museo Nacional de Arte</h5>
                        <p class="card-text">El Museo Nacional de Arte, Palacio Díez de Medina es un museo de la ciudad de La Paz, Bolivia. El mismo cuenta con una importante colección permanente de pintura colonial, lienzos de Melchor Pérez de Holguín, pintor del siglo XVII, y de Gregorio Gamarra, pintor peruano del siglo XVII.</p>
                        <p class="card-text"><small class="text-muted">Se encuentra en La Paz</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src={card8} class="card-img-top"  alt="..."/> 
                    <div class="card-body">
                        <h5 class="card-title">Museo Paleontológico y Arqueológico</h5>
                        <p class="card-text"> Museo en el que se exponen colecciones de mamíferos fósiles, invertebrados, mineralogía, petrografía, antropología y arqueología </p>
                        <p class="card-text"><small class="text-muted">Se encuentra en Tarija</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src={card9} class="card-img-top"  alt="..."/> 
                    <div class="card-body">
                        <h5 class="card-title">Museo Nacional de Arqueología</h5>
                        <p class="card-text">El Museo Nacional de Arqueología es un museo público boliviano que forma parte de la Unidad de Arqueología y Museos dependiente de la Dirección General de Patrimonio Cultural del Ministerio de Culturas y Turismo</p>
                        <p class="card-text"><small class="text-muted">Se encuentra en La Paz</small></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
