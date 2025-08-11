import styles from '../../styles/Carta.module.css'

const Paginacion = ({ paginaActual, totalPaginas, setPaginaActual }) => {
    return (
        <>
        {totalPaginas > 1 && (
            <div className={styles.paginacion}>
              <button
                className={`${styles.paginaButton} ${paginaActual === 1 ? styles.paginaButtonDisabled : ''}`}
                onClick={() => setPaginaActual(prev => Math.max(prev - 1, 1))}
                disabled={paginaActual === 1}
              >
                ← Anterior
              </button>
              
              <div className={styles.paginaNumeros}>
                {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(pagina => (
                  <button
                    key={pagina}
                    className={`${styles.paginaNumero} ${paginaActual === pagina ? styles.paginaNumeroActiva : ''}`}
                    onClick={() => setPaginaActual(pagina)}
                  >
                    {pagina}
                  </button>
                ))}
              </div>
              
              <button
                className={`${styles.paginaButton} ${paginaActual === totalPaginas ? styles.paginaButtonDisabled : ''}`}
                onClick={() => setPaginaActual(prev => Math.min(prev + 1, totalPaginas))}
                disabled={paginaActual === totalPaginas}
              >
                Siguiente →
              </button>
            </div>
          )}
        </>
    )
}

export default Paginacion