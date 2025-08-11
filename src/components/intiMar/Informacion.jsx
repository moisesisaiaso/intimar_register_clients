
import styles from '../../styles/IntiMar.module.css'

const Informacion = () => {
    return (
    <section id="informacion" className={styles.infoSection}>
            <div className={styles.infoBackground}>
              <img 
                src="/images/romantic-ocean-dinner.png" 
                alt="Ambiente romántico del restaurante"
                className={styles.infoBackgroundImage}
              />
              <div className={styles.infoOverlay}></div>
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.infoHeader}>
                <h3 className={styles.infoTitle}>
                  <span className={styles.infoTitleInfo}>Información</span> del{' '}
                  <span className={styles.infoTitleRestaurante}>Restaurante</span>
                </h3>
                <p className={styles.infoSubtitle}>Todo lo que necesitas saber sobre Inti-MAR</p>
              </div>
    
              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}>🕒</span>
                  <h4 className={styles.infoCardTitle}>Horarios</h4>
                  <div className={styles.infoCardContent}>
                    <p><strong>Lunes - Jueves:</strong></p>
                    <p>12:00 PM - 3:00 PM</p>
                    <p>7:00 PM - 11:00 PM</p>
                    <p><strong>Viernes - Domingo:</strong></p>
                    <p>12:00 PM - 11:00 PM</p>
                  </div>
                </div>
    
                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}>📍</span>
                  <h4 className={styles.infoCardTitle}>Ubicación</h4>
                  <div className={styles.infoCardContent}>
                    <p><strong>Paracas Bay</strong></p>
                    <p>Malecón Costero 123</p>
                    <p>Vista al Mar</p>
                    <p>Estacionamiento disponible</p>
                  </div>
                </div>
    
                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}>⭐</span>
                  <h4 className={styles.infoCardTitle}>Especialidades</h4>
                  <div className={styles.infoCardContent}>
                    <p>🐟 Pescados frescos</p>
                    <p>🦐 Mariscos del día</p>
                    <p>🥘 Ceviches artesanales</p>
                    <p>🍷 Carta de vinos</p>
                  </div>
                </div>
    
                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}>👥</span>
                  <h4 className={styles.infoCardTitle}>Capacidad</h4>
                  <div className={styles.infoCardContent}>
                    <p><strong>Salón principal:</strong> 80 personas</p>
                    <p><strong>Terraza:</strong> 40 personas</p>
                    <p><strong>Eventos privados</strong></p>
                    <p>Reservas grupales</p>
                  </div>
                </div>
              </div>
            </div>
    </section>
          )
}

export default Informacion
