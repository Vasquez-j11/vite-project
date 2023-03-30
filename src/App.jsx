import { useState } from 'react'
import './App.css'
import Header from './componentes/Header'
import Section1 from './componentes/Section1'
import Section2 from './componentes/Section2'
import Section3 from './componentes/Section3'
import Section4 from './componentes/Section4'
import Section5 from './componentes/Section5'
import Section6 from './componentes/Section6'
import Footer from './componentes/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header
      
      />
      <Section1
      problematica="En
      la actualidad evidenciamos una gran problemática y es que a el
      95% de
      laspersonas se les dificulta comprender todas las señales de tránsito reglamentarias, ya que
      son
      muchas y es difícil recordar su funcionalidad. Además, el 98% de las personas encuestadas
      piensan que las señales de transito reglamentarias no son respetadas, por el simple hecho de
      que
      la mayor parte de la sociedad no comprende cual es su significado ni para qué sirven."
      />
      <Section2
      objetivo="Resolver la problemática de la falta de comprensión y respeto hacia las señales de tránsito
      reglamentarias por parte de la sociedad."
      educacion="Es fundamental implementar campañas educativas y de
      concientización sobre la importancia de conocer y respetar las señales de tránsito
      reglamentarias. Estas campañas pueden ser llevadas a cabo por las autoridades competentes,
      escuelas y otros organismos encargados de la seguridad vial."
      simplificacion="Es posible simplificar el diseño y la cantidad de señales de tránsito
      reglamentarias, de modo que sean más fáciles de comprender y recordar para la mayoría de las
      personas. Esto puede ser realizado por expertos en diseño de señalización vial."
      />
      <Section3
      santiagro="Santiago Vasquez Jaramillo enfocado en la programacion
      y siendo el programador en jefe."
      juamanue="Juan Manuel Acevedo enfocado en la programacion y
      siendo el programador en jefe."
      />
      <Section4
      wiqaya="Wiqaya es una empresa que se dedica a la enseñanza y explicación del
      funcionamiento de las señales reglamentarias. Su objetivo principal es ayudar a los conductores
      a comprender el significado de las señales y cómo deben interpretarlas en diferentes situaciones
      de tráfico.
      <br/>
      En resumen, Wiqaya es una empresa dedicada a mejorar la seguridad vial al enseñar y explicar el
      funcionamiento de las señales reglamentarias, lo que ayuda a los conductores a tomar decisiones
      informadas y reducir los accidentes de tráfico."
      />
      <Section5
      rigobertus="Rigobertus es un hombre de contextura
      delgada, mide aproximadamente unos 1.75m
      de altura, su cabello es totalmente negro, al
      igual que su color de ojos, piel morena, nacido
      en Medellín, Colombia, y tiene 23 años de edad.
      Es un poco alergico al polvo y al frío, es un poco
      tímido, pero no es un impedimento para
      cumplir sus objetivos y metas."
      albeiro="Albeiro es un policia de aproximadame 35 años de
      los cuales 14 a prestado servicio a la patria, es de
      contextura delgada con piel clara, tiene unos 182cm
      de estatura, ojos color marron, su cabello es rojizo
      con tonalidades amarillas, nacido en la comuna 13,
      Medellin, Colombia, es levemente alergico a la piña,
      es muy extrovertido y se reta diariamente para conseguir logros nuevos
      en su vida tanto para el como
      para los que lo rodean."
      />
      <Section6
      juego="Juega ahora!"
      />
      <Footer
      
      />
    </div>
  )
}

export default App
