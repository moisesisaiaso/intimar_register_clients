import styles from '../../styles/Carta.module.css'
const Categorias = ({ categoriaActiva, setCategoriaActiva, setPaginaActual, setBusqueda, setFiltroPrecios}) => {

    const categorias = [
        { id: 'entradas', nombre: 'Entradas', icono: '🥗' },
        { id: 'principales', nombre: 'Platos Principales', icono: '🍽️' },
        { id: 'postres', nombre: 'Postres', icono: '🍰' },
        { id: 'bebidas', nombre: 'Bebidas', icono: '🥤' }
      ]

      const cambiarCategoria = (categoria) => {
        setCategoriaActiva(categoria)
        setPaginaActual(1)
        setBusqueda('')
        setFiltroPrecios('todos')
      }
    
    return (
        <section className={styles.categoriesSection}>
                <div className={styles.categoriesContainer}>
                  <div className={styles.categoriesNav}>
                    {categorias.map((categoria) => (
                      <button
                        key={categoria.id}
                        className={`${styles.categoryButton} ${
                          categoriaActiva === categoria.id ? styles.categoryButtonActive : ''
                        }`}
                        onClick={() => cambiarCategoria(categoria.id)}
                      >
                        <span className={styles.categoryIcon}>{categoria.icono}</span>
                        <span className={styles.categoryName}>{categoria.nombre}</span>
                      </button>
                    ))}
                  </div>
                </div>
        </section>
    )
}

export default Categorias