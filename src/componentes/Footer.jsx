import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer id="footer">
        <div className='row pt-2 ' id="grupo1">
            <div className='col-12 col-lg-4' id="cosacont">
                <figure>
                    <a href="#section1">
                        <img className='logopie img-fluid mx-auto d-block' src="src/assets/wiqayalogoytexto final.png" alt=""/>
                    </a>
                </figure>
            </div>
            <div className='col-12 col-lg-4' id="cosacont">
                <h2 className='tituconpie text-center text-sm-center text-md-center text-lg-center'>CONTACTO</h2>
                <p className='numcont text-center text-sm-center text-md-center text-lg-center pt-3'>Numero de contacto:
                    <i>+57 305-226-60-45</i>
                </p>
            </div>
            <div className='col-12 col-lg-4' id="cosacont">
                <h2 className='redtext text-center text-sm-center text-md-center text-lg-center'>SIGUENOS EN</h2>
                <div className='redcont'>
                    <div className=''>
                        <a href="#"><img className='icon mx-auto d-block' src="src/assets/fb.png" alt=""/></a>
                    </div>
                    <div>
                        <a href="#"><img className='icon mx-auto d-block' src="src/assets/ins.png" alt=""/></a>
                    </div>
                    <div>
                        <a href="#"><img className='icon mx-auto d-block' src="src/assets/tw.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="grupo2">
            <small>&copy; 2022 <b class="wiqaya">Wiqaya</b> - Todos los Derechos Reservados.</small>
        </div>


    </footer>
  )
}

export default Footer