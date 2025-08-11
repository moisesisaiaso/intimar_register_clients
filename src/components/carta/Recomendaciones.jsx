import styles from '../../styles/Carta.module.css'
import { menuData } from '../../utils/menuData'

const Recomendaciones = ({categoriaActiva, renderEstrellas}) => {
    return (
        <section className={styles.recomendacionesSection}>
                <div className={styles.recomendacionesBackground}>
                  <img 
                    src="/images/romantic-ocean-dinner.png" 
                    alt="Cena romántica junto al mar"
                    className={styles.recomendacionesBackgroundImage}
                  />
                  <div className={styles.recomendacionesOverlay}></div>
                </div>
                <div className={styles.recomendacionesContent}>
                  <h3 className={styles.recomendacionesTitle}>
                    🌟 Recomendaciones del Chef
                  </h3>
                  <p className={styles.recomendacionesDescription}>
                    Nuestros platos más populares, preparados con ingredientes frescos del mar de Paracas
                  </p>
                  <div className={styles.recomendacionesGrid}>
                    {menuData[categoriaActiva]
                      .filter(item => item.destacado)
                      .slice(0, 3)
                      .map(item => (
                        <div key={item.id} className={styles.recomendacionCard}>
                          <img src={item.imagen || "/placeholder.svg"} alt={item.nombre} className={styles.recomendacionImagen} />
                          <div className={styles.recomendacionInfo}>
                            <h4>{item.nombre}</h4>
                            <div className={styles.recomendacionRating}>
                              {renderEstrellas(item.rating)}
                            </div>
                            <span className={styles.recomendacionPrecio}>S/ {item.precio.toFixed(2)}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
        </section>
        
    )
}

export default Recomendaciones