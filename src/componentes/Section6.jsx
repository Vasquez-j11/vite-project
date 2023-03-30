import React from 'react'
import '../styles/Section6.css'

function Section6(props) {
  return (
    <section className='section3' id="section3">
        <div className='row'>
            <div className='col-12 d-flex align-items-center justify-content-center' id="btnxd">
                <button type="button" class="btn " id="btnzy">
                    {props.juego}
                </button>
            </div>
        </div>
    </section>
  )
}

export default Section6