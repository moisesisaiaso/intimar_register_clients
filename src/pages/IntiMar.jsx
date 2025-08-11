import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/IntiMar.module.css'
import stylesCarta from '../styles/Carta.module.css'
import Inicio from '../components/intiMar/Inicio'
import Registro from '../components/intiMar/Registro'
import Informacion from '../components/intiMar/Informacion'
import Ubicacion from '../components/intiMar/Ubicacion'
import Footer from '../components/Footer'
import PagoModal from '../components/PagoModal'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IntiMar = () => {
    const [mostrarModalPago, setMostrarModalPago] = useState(false)
  
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

  

  return (
    <div className={styles.container}>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        style={{
          position: 'fixed',
          top: '80px',
          right: '20px',
          zIndex: 9999
        }}
      />
      {/* Botón Flotante Ver Carta */}
      <Link to="/carta" className={styles.floatingCartaButton}>
        🍽️ Ver Carta
      </Link>

       {/* Botón flotante para información de pago */}
       <button style={{ background: 'linear-gradient(135deg, #ffc107, #f57c00)', padding: '0.1rem 1.3rem 0.4rem 1.3rem' }} className={stylesCarta.floatingPaymentButton} onClick={() => setMostrarModalPago(true)}>
          <span style={{ fontSize: '2rem', marginRight: 0, }} className={stylesCarta.paymentIcon}>💳</span>
      </button>

      {/* Modal de información de pago */}
      <PagoModal mostrarModalPago={mostrarModalPago} setMostrarModalPago={setMostrarModalPago} />

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <div className={styles.logoText}>
              <h1>
                <span className={styles.logoTextInti}>Inti</span>
                <span className={styles.logoTextMar}>-MAR</span>
              </h1>
              <p>PARACAS BAY</p>
            </div>
          </div>
          <nav className={styles.nav}>
            <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio') }}>
              Inicio
            </a>
            <a href="#registro" onClick={(e) => { e.preventDefault(); scrollToSection('registro') }}>
              Registro
            </a>
            <a href="#informacion" onClick={(e) => { e.preventDefault(); scrollToSection('informacion') }}>
              Información
            </a>
            <a href="#ubicacion" onClick={(e) => { e.preventDefault(); scrollToSection('ubicacion') }}>
              Ubicación
            </a>
            <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto') }}>
              Contacto
            </a>
          </nav>
        </div>
      </header>

     {/*Secciones*/}
     {/* Hero Section */}
      <Inicio />

      {/* Formulario de Registro */}
      <Registro />

      {/* Información del Restaurante */}
      <Informacion />

      {/* Sección del Mapa */}
      <Ubicacion />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default IntiMar
