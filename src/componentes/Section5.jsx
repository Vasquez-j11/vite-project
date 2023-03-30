import React from 'react'
import '../styles/Section5.css'

function Section5(props) {
    return (
        <section className='section2-1'>
            <div className='container-fluid'>
                <h1 className='titutrin text-center text-sm-center text-md-center text-lg-center mt-5'>Personajes Wiqaya</h1>
                <div className='row d-flex justify-content-evenly align-items-center' id="contimg">
                    <div className='col-12 col-lg-6 p-3' id="contnaje">
                        <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#chimbilin">
                            <img className='img-fluid' src="src/assets/chimbilin.png" alt="" />
                            <h2 className='text-center subtxt'>Albeiro</h2>
                        </button>
                        {/* <!-- Modal rigobertus --> */}
                        <div className='modal fade' id="chimbilin" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className='modal-dialog'>
                                <div className='modal-content bg-dark'>
                                    <div className='modal-header'>
                                        <h1 className='chimbilin fs-5' id="exampleModalLabel">Ficha Tecnica</h1>
                                        <button type="button" className='btn-close' data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="card bg-dark">
                                            <img src="src/assets/chimbilin.png" className='card-img-top' alt="..." />
                                            <div className='card-body'>
                                                <h5 className='card-title text-center'>Albeiro</h5>
                                                <p className='card-text'>{props.albeiro}</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--fin Modal --> */}
                    </div>
                    <div className='col-12 col-lg-6 p-3' id="contnaje">
                        <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#Rigobertus">
                            <img className='img-fluid' src="src/assets/RIGOBERTUS.png" alt="" />
                            <h2 className='text-center subtxt'>Rigobertus</h2>
                        </button>
                        {/* <!-- Modal rigobertus --> */}
                        <div className='modal fade' id="Rigobertus" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className='modal-dialog'>
                                <div className='modal-content bg-dark'>
                                    <div className='modal-header'>
                                        <h1 className='chimbilin fs-5' id="exampleModalLabel">Ficha Tecnica</h1>
                                        <button type="button" className='btn-close' data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="card bg-dark">
                                            <img src="src/assets/RIGOBERTUS.png" className='card-img-top' alt="..." />
                                            <div className='card-body'>
                                                <h5 className='card-title text-center'>Rigobertus</h5>
                                                <p className='card-text'>{props.rigobertus}</p>

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

export default Section5