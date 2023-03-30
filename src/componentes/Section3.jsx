import React from 'react'
import '../styles/Section3.css';
function Section3(props) {
    return (
        <section className='section2 pt-5' id="section2">
        <div className='container-fluid'>
            <h1 className='titutrin text-center text-sm-center text-md-center text-lg-center'>Equipo Wiqaya</h1>
            <div className='row d-flex justify-content-evenly align-items-center' id="contimg">
                <div className='col-12 col-sm-6 col-lg-6 p-3' id="contyo">
                    <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#santiagro">
                        <img className='img-fluid' src="src/assets/Santiagro.png" alt=""/>
                        <h2 className='text-center subtxt2'>Santiago</h2>
                    </button>
                    {/* <!-- Modal rigobertus --> */}
                    <div className='modal fade' id="santiagro" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className='modal-dialog'>
                            <div className='modal-content bg-dark'>
                                <div className='modal-header'>
                                    <h1 className='chimbilin fs-5' id="exampleModalLabel">Nuestro Equipo</h1>
                                    <button type="button" className='btn-close' data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="card bg-dark">
                                        <img src="src/assets/Santiagro.png" className='card-img-top' alt="..."/>
                                        <div className='card-body'>
                                            <h5 className='card-title text-center'>Santiago</h5>
                                            <p className='card-text'>{props.santiagro}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--fin Modal --> */}
                </div>
                <div className='col-12 col-sm-6 col-lg-6 p-3' id="contyo">
                    <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#juamanue">
                        <img className='img-fluid' src="src/assets/juanma.png" alt=""/>
                        <h2 className='text-center subtxt2'>Juan Manuel</h2>
                    </button>
                    {/* <!-- Modal rigobertus --> */}
                    <div className='modal fade' id="juamanue" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className='modal-dialog'>
                            <div className='modal-content bg-dark'>
                                <div className='modal-header'>
                                    <h1 className='chimbilin fs-5' id="exampleModalLabel">Nuestro Equipo</h1>
                                    <button type="button" className='btn-close' data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="card bg-dark">
                                        <img src="src/assets/juanma.png" className='card-img-top' alt="..."/>
                                        <div className='card-body'>
                                            <h5 className='card-title text-center'>Juan Manuel</h5>
                                            <p className='card-text'>{props.juamanue}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--fin Modal --> */}
                </div>
            </div>
        </div>
    </section>
    )
}

export default Section3