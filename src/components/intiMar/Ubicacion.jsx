import styles from '../../styles/IntiMar.module.css'

const Ubicacion = () => {
    return (
      <section id="ubicacion" className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <div className={styles.mapHeader}>
            <h3 className={styles.mapTitle}>
              <span className={styles.mapTitleUbicacion}>Ubicación</span> del{' '}
              <span className={styles.mapTitleRestaurante}>Restaurante</span>
            </h3>
            <p className={styles.mapDescription}>
              Encuéntranos en la hermosa Bahía de Paracas, con vista privilegiada al mar
            </p>
          </div>
          <div className={styles.mapWrapper}>
            <iframe
              className={styles.mapFrame}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.8234567890123!2d-76.2500000!3d-13.8333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDUwJzAwLjAiUyA3NsKwMTUnMDAuMCJX!5e0!3m2!1ses!2spe!4v1234567890123!5m2!1ses!2spe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Inti-MAR en Paracas Bay"
            ></iframe>
          </div>
        </div>
      </section>
    )
}
export default Ubicacion