import styles from '../styles/IntiMar.module.css'
import stylesCarta from '../styles/Carta.module.css'
const Footer = () => {
    return (
        <footer id="contacto" className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.footerLogo}>
                <div className={styles.footerLogoText}>
                  <h4>Inti-MAR</h4>
                  <p>PARACAS BAY</p>
                </div>
              </div>
              <p className={styles.footerDescription}>
                Experiencia gastronómica única en la Bahía de Paracas, donde cada plato cuenta una historia del océano peruano.
              </p>
            </div>

            <div className={styles.footerSection}>
              <h5>Contacto</h5>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <span className={styles.contactText}>+51 999 123 456</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>✉️</span>
                  <span className={styles.contactText}>info@intimar-paracas.com</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <span className={styles.contactText}>Malecón Costero 123, Paracas</span>
                </div>
              </div>
            </div>

            <div className={styles.footerSection}>
              <h5>Síguenos</h5>
              <div className={styles.socialButtons}>
                <button className={styles.socialButton}>📘</button>
                <button className={styles.socialButton}>📷</button>
                <button className={styles.socialButton}>📱</button>
              </div>
              <div className={stylesCarta.whatsappContainer}>
                 <a 
                    href="https://wa.me/51999123456?text=Hola,%20me%20interesa%20hacer%20una%20reserva%20en%20Inti-MAR" 
                    className={stylesCarta.whatsappButton}
                    target="_blank"
                    rel="noopener noreferrer"
                 >
                 <span className={stylesCarta.whatsappIcon}>📱</span>
                 <span className={stylesCarta.whatsappNumber}>+51 999 123 456</span>
                 </a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© 2024 Inti-MAR Paracas Bay. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer
