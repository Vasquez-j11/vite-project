import React from 'react'
import '../styles/Header.css'

function Header() {
  return (
    <header className='sticky-top'>
        <div className='row d-flex'>
            <div className='col-12 d-flex justify-content-between'>
                <div>
                    <a href="#footer"><img className='logohead img-fluid m-3' src="src/assets/wiqayalogoytexto final.png"
                            alt=""/></a>
                </div>

                <div className='menu d-flex align-items-center justify-content-end'>
                    <ul className='nav nav-pills text-holyfat fondo-menu navbar navbar-expand-lg'>
                        <button className='navbar-toggler' type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id="navbarSupportedContent">
                            <div className='navbar-nav me-auto mb-2'>
                                <li className='nav-item pe-4'>
                                    <a className='nav-link text-center' href="#section1">Inicio</a>
                                </li>
                                <li className='nav-item pe-4'>
                                    <a className='nav-link text-center' href="#section2">Nosotros</a>
                                </li>
                                <li className='nav-item pe-4'>
                                    <a className='nav-link text-center' href="#section3">Jugar</a>
                                </li>

                            </div>
                        </div>
                    </ul>
                </div>

            </div>



        </div>
        
    </header>
  )
}

export default Header