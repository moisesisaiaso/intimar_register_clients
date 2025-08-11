import styles from '../../styles/Carta.module.css'
import { useState } from 'react'

const Menus = ({itemsFiltrados, renderEstrellas,paginaActual, itemsPorPagina }) => {
    const [favoritos, setFavoritos] = useState([])
    const [carrito, setCarrito] = useState([])
    const [mostrarInfo, setMostrarInfo] = useState(null)

    const itemsPaginados = itemsFiltrados.slice(
        (paginaActual - 1) * itemsPorPagina,
        paginaActual * itemsPorPagina
      )

    const toggleFavorito = (itemId) => {
        setFavoritos(prev => 
          prev.includes(itemId) 
            ? prev.filter(id => id !== itemId)
            : [...prev, itemId]
        )
      }
    
    const agregarAlCarrito = (item) => {
        setCarrito(prev => {
          const existente = prev.find(p => p.id === item.id)
          if (existente) {
            return prev.map(p => 
              p.id === item.id ? { ...p, cantidad: p.cantidad + 1 } : p
            )
          }
          return [...prev, { ...item, cantidad: 1 }]
        })
      }

    const renderPicante = (nivel) => {
          const chiles = []
          for (let i = 0; i < 3; i++) {
            chiles.push(
              <span key={i} className={`${styles.chile} ${i < nivel ? styles.chileActivo : ''}`}>
                🌶️
              </span>
            )
          }
          return chiles
        }
    return (
        <>
        {itemsPaginados.map((item) => (
                      <div 
                        key={item.id} 
                        className={styles.menuItem}
                      >
                        {item.destacado && (
                          <div className={styles.destacadoBadge}>
                            ⭐ Recomendado
                          </div>
                        )}
                        
                        <button
                          className={`${styles.favoritoButton} ${favoritos.includes(item.id) ? styles.favoritoActivo : ''}`}
                          onClick={() => toggleFavorito(item.id)}
                        >
                          {favoritos.includes(item.id) ? '❤️' : '🤍'}
                        </button>
        
                        <div className={styles.menuItemImage}>
                          <img 
                            src={item.imagen || "/placeholder.svg"} 
                            alt={item.nombre}
                            className={styles.platoImage}
                          />
                          <div className={styles.imageOverlay}>
                            <button 
                              className={styles.infoButton}
                              onClick={() => setMostrarInfo(mostrarInfo === item.id ? null : item.id)}
                            >
                              ℹ️ Info
                            </button>
                          </div>
                        </div>
        
                        <div className={styles.menuItemContent}>
                          <div className={styles.menuItemHeader}>
                            <h3 className={styles.menuItemNombre}>{item.nombre}</h3>
                            <span className={styles.menuItemPrecio}>S/ {item.precio.toFixed(2)}</span>
                          </div>
                          
                          <div className={styles.menuItemMeta}>
                            <div className={styles.rating}>
                              {renderEstrellas(item.rating)}
                              <span className={styles.ratingNumero}>({item.rating})</span>
                            </div>
                            {item.picante > 0 && (
                              <div className={styles.picante}>
                                {renderPicante(item.picante)}
                              </div>
                            )}
                          </div>
        
                          <p className={styles.menuItemDescripcion}>{item.descripcion}</p>
                          
                          <div className={styles.ingredientesContainer}>
                            <h4 className={styles.ingredientesTitle}>Ingredientes:</h4>
                            <div className={styles.ingredientes}>
                              {item.ingredientes.map((ingrediente, index) => (
                                <span key={index} className={styles.ingrediente}>
                                  {ingrediente}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
        </>
    )
}

export default Menus