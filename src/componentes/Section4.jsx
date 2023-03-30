import React from 'react'
import '../styles/Section4.css'

function Section4(props) {
  return (
    <section className='container-fluid sectionvideo'>
        <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-12 col-lg-6 d-flex justify-content-center p-0'>
                <video width="400px" height="300px" controls autoplay muted>
                    <source src="src/assets/sgrombomdri2.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className='col-12 col-lg-6 p-0'>
                <h2 className='titulo-1 text-center mt-4'>Que es wiqaya</h2>
                <div className='zi2 mt-3'>
                    <p className='diavlo p-4'>{props.wiqaya}
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section4