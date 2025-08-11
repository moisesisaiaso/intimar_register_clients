import styles from '../../styles/IntiMar.module.css'

const Inicio = () => {
    return (
        <section id="inicio" className={styles.hero}>
                <div className={styles.heroBackground}>
                  <img 
                    src="/images/paracas-bay-restaurant-sunset.png" 
                    alt="Atardecer en Paracas Bay"
                    className={styles.heroBackgroundImage}
                  />
                  <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                  <div className={styles.heroTextContainer}>
                    <span className={styles.badge}>
                      🌊 Experiencia Gastronómica en Paracas Bay
                    </span>
                    <h2 className={styles.heroTitle}>
                      <span className={styles.heroTitleWelcome}>Bienvenido a </span> 
                      <span className={styles.heroTitleInti}>Inti</span>
                      <span className={styles.heroTitleMar}>-MAR</span>
                    </h2>
                    <p className={styles.heroDescription}>
                      Disfruta de la mejor gastronomía marina en la hermosa Bahía de Paracas. 
                      Sabores auténticos, ambiente único y la brisa del mar en cada experiencia culinaria.
                    </p>
                  </div>
                </div>
        </section>
    )
}

export default Inicio