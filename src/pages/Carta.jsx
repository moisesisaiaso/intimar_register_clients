import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Carta.module.css'
import Categorias from '../components/carta/Categorias'
import FiltroBusqueda from '../components/carta/FiltroBusqueda'
import Menus from '../components/carta/Menus'
import Paginacion from '../components/carta/Paginacion'
import Recomendaciones from '../components/carta/Recomendaciones'
import PagoModal from '../components/PagoModal'
import Footer from '../components/Footer'

const Carta = () => {
  // Estado para controlar qué categoría está activa
  const [categoriaActiva, setCategoriaActiva] = useState('entradas')
  const [paginaActual, setPaginaActual] = useState(1)
  const [busqueda, setBusqueda] = useState('')
  const [filtroPrecios, setFiltroPrecios] = useState('todos')
  const [itemsFiltrados, setItemsFiltrados] = useState([])
  const [mostrarModalPago, setMostrarModalPago] = useState(false)
  
  const itemsPorPagina = 4

  const totalPaginas = Math.ceil(itemsFiltrados.length / itemsPorPagina)
  

  const renderEstrellas = (rating) => {
    const estrellas = []
    const estrellasCompletas = Math.floor(rating)
    const tieneMediaEstrella = rating % 1 !== 0
    
    for (let i = 0; i < estrellasCompletas; i++) {
      estrellas.push(<span key={i} className={styles.estrella}>⭐</span>)
    }
    
    if (tieneMediaEstrella) {
      estrellas.push(<span key="media" className={styles.estrella}>⭐</span>)
    }
    
    return estrellas
  }

  

  return (
    <div className={styles.container}>
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
            <Link to="/" className={styles.backButton}>
              ← Volver al Inicio
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero con imagen de fondo */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img 
            src="/images/paracas-bay-restaurant-sunset.png" 
            alt="Atardecer en Paracas Bay"
            className={styles.heroBackgroundImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            🍽️ Sabores Auténticos de Paracas
          </span>
          <h2 className={styles.heroTitle}>
            <span className={styles.heroTitleNuestra}>Nuestra</span>{' '}
            <span className={styles.heroTitleCarta}>Carta</span>
          </h2>
          <p className={styles.heroDescription}>
            Descubre los sabores únicos del mar peruano en cada plato, 
            preparados con ingredientes frescos y técnicas tradicionales en un ambiente paradisíaco.
          </p>
        </div>
      </section>

      {/* Navegación de Categorías */}
      <Categorias   categoriaActiva={categoriaActiva} setCategoriaActiva={setCategoriaActiva} setPaginaActual={setPaginaActual} setBusqueda={setBusqueda} setFiltroPrecios={setFiltroPrecios}/>

      {/* Filtros y Búsqueda */}
     <FiltroBusqueda  categoriaActiva={categoriaActiva} setItemsFiltrados={setItemsFiltrados} itemsFiltrados={itemsFiltrados} busqueda={busqueda} setBusqueda={setBusqueda} filtroPrecios={filtroPrecios} setFiltroPrecios={setFiltroPrecios}/>

      {/* Menú con imagen de fondo */}
      <section className={styles.menuSection}>
        <div className={styles.menuBackground}>
          <img 
            src="/images/oceanfront-dinner.png" 
            alt="Cena frente al océano"
            className={styles.menuBackgroundImage}
          />
          <div className={styles.menuOverlay}></div>
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.menuGrid}>
            {/*  */}
            <Menus itemsFiltrados={itemsFiltrados} renderEstrellas={renderEstrellas} paginaActual={paginaActual} itemsPorPagina={itemsPorPagina} />
          </div>

          {/* Paginación */}
          <Paginacion paginaActual={paginaActual} totalPaginas={totalPaginas} setPaginaActual={setPaginaActual} />
        </div>
      </section>

      {/* Sección de Recomendaciones con fondo */}
      <Recomendaciones categoriaActiva={categoriaActiva} renderEstrellas={renderEstrellas}/>

      {/* Botón flotante para información de pago */}
      <button 
        className={styles.floatingPaymentButton}
        onClick={() => setMostrarModalPago(true)}
      >
        <span className={styles.paymentIcon}>💳</span>
        <span>Información de Pago</span>
      </button>

      {/* Modal de información de pago */}
      <PagoModal mostrarModalPago={mostrarModalPago} setMostrarModalPago={setMostrarModalPago}/>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Carta
