import React from 'react'
import '../styles/Section2.css';

function Section2(props) {
    return (
        <section class="section2-2">
            <div class="row">
                <div class="col-12 col-lg-6 d-flex justify-content-center align-items-center  ">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="3000">
                            <img src="src/assets/tokio noche.jpg" class="d-block w-100 img-fluid" alt="..."/>
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                            <img src="src/assets/carrusel1.png" class="d-block w-100 img-fluid" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="src/assets/carrusel2.png" class="d-block w-100 img-fluid" alt="..."/>
                        </div>
                    </div>
                </div>
                </div>
                <div class="col-12 col-lg-6 " id="cont2">
                    <h2 class="titulo1 text-center text-sm-center text-md-center text-lg-center ">Objetivo y solución
                    </h2>
                    <h3 class=" subtrin ps-3 d-flex justify-content-start"> Objetivo:</h3>
                    <p class="parrafo2 p-3">
                        {props.objetivo}
                    </p>
                    <hr />
                    <h3 class=" subtrin ps-2 d-flex justify-content-start">Solución:</h3>
                    <div class="d-flex zi">
                        <h5 class=" subtrin ps-2 pe-2">Educación:</h5>
                        <p class="parrafo2 pe-2">{props.educacion}</p>
                    </div>
                    <div class="d-flex zi">
                        <h5 class=" subtrin ps-2 pe-2">Simplificación: </h5>
                        <p class="parrafo2 pe-2">{props.simplificacion}</p>
                    </div>
                    <div class="d-flex zi">
                        <h5 class=" subtrin ps-2 pe-2">Fiscalización: </h5>
                        <p class="parrafo2 pe-2"> Las autoridades competentes deben garantizar el cumplimiento y la
                            fiscalización
                            del respeto a las señales de tránsito reglamentarias. Esto puede ser llevado a cabo mediante la
                            utilización de cámaras de vigilancia, multas y sanciones para los infractores.</p>
                    </div>

                </div>
            </div>
            <hr />
        </section>

    )
}

export default Section2