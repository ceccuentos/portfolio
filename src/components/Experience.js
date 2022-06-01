import React from 'react';

const Experience = () => {
  return (
    <div className='experience' id="experience">
      <div className='d-flex justify-content-center my-5'>
        <h1>Experiencia</h1>
      </div>
      <div className='container experience-wrapper'>
      <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3 >2020-2022</h3>
            <p>Proyectos de CIberSeguridad con estándares ISO27000 y NERC CIP para industrias bancarias y eléctricas.</p>
          </div>
      </div>
      <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3 className='h3left'>2019-2020</h3>
            <p> 
            Lideré células ágiles con framework SCRUM compuestas por desarrolladores, Devops, QA y UX/UI, en proyectos de transformación digital.
            <br />Participé en el Desarrollo del Proyecto Mach-Core / Pincenter de Banco BCI que permite la recarga de servicios de prepago (celular, tv, entre otros) que hoy continúa presente en la Plataforma.
            </p>
          </div>
        </div>
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2018</h3>
            <p> 
            Obtuve la Certificación <strong>Project Management Professional (PMP)®</strong>   de la PMI.org <br />  ¡Es el estándar mundial más importante para la dirección de proyectos!
            </p>
          </div>
        </div>
        {/* - */}
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3 className='h3left'>2015</h3>
            <p>Proyecto ERP en Banco Estado Microempresas (BEME), implementado módulos de gestión presupuestaria además de la integración vía API con distintas plataformas del banco. </p>
           
          </div>
        </div>
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2015-2014</h3>
            <p>Varios Proyectos en el Banco Estado Cobranzas entre los cuales destaco el Control de Garantías Estatales, Gestión de Títulos y Workflow de Ley de Quiebras (.NET - SQL Server - Javascript)</p>
          </div>
        </div>
        {/* - */}
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3 className='h3left'>2010-2011</h3>
            <p>Proyecto SISILHIA en la Superintendecia de Seguridad Social, es un workflow para la gestión de licencias médicas que realice con la plataforma QBiz en conjunto 
              con la empresa SONDA (.NET - SQLServer)
           </p>
          </div>
        </div>
        {/* - */}
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2011</h3>
            <p>Título de <strong>Ingeniero Civil Industrial</strong> en la Universidad Central de Chile, Mi Seminario de título fué “Herramientas de Ingeniería para Pymes”, iniciativa 
              que acercaba herramientas estadísticas y Matemáticas para interpretar y predecir fenómenos de mercado por medio de una aplicación en .NET
           </p>
          </div>
        </div>
        {/* - */}
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3 className='h3left'>2005-2010</h3>
            <p>Jefe de Proyectos ERP trabajando con equipos de consultoría y desarrollo bajo metodología tradicional.  Programamos mucho con SQL Server diseñando y modelando
              el ERP QBIZ en distintas empresas de distintos rubros, comerciales, importación, educacional, entre otros.  
            </p>
          </div>
        </div>
        {/* - */}
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2001-2004</h3>
            <p>Desarrollador Senior en Visual Basic 6 y Jefe de Producto para la suite comercial de ERP Flexline (Ventas, Compras, Inventario y Producción), estuve a cargo de un equipo de desarrollo y testing para el producto, aprendí mucho 
              y crecí trabajando en equipo.
            </p>
          </div>
        </div>
        {/* - */}
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3 className='h3left'>2000</h3>
            <p><strong>Título Ingeniero Informático</strong>, en donde realicé un seminario de título llamado "Facturación Electrónica DTE".  
              Trabaje en programación de controladores lógicos (PLC), usé mucho C++!!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
