import React from 'react'
import '../styles/Section1.css';
function Section1(props) {
  return (
    <section className='section1'  id="section1">
        <div className='container-fluid'>
            <div className='row mt-5 mb-5'>
                <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center' id="cont">
                    <div>
                        <h2 className='titulo1 text-center text-sm-center text-md-center text-lg-center'>Problemática</h2>
                        <p className='parrafo1  ms-4 me-4 '>{props.problematica}
                        </p>
                    </div>
                </div>
                <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center '>
                <img className='img-fluid'  src="src\assets\stopxd.jpg" alt=""/>
                </div>
            </div>
        </div>
        <hr/>

    </section >
  )
}

export default Section1