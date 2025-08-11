import styles from '../../styles/Carta.module.css'
import { menuData } from '../../utils/menuData'
import { useState, useMemo } from 'react'
import { useEffect } from 'react'

const FiltroBusqueda = ({ categoriaActiva, itemsFiltrados,setItemsFiltrados, busqueda, setBusqueda, filtroPrecios, setFiltroPrecios }) => {

      

      const filtrosPrecio = [
        { id: 'todos', nombre: 'Todos los precios' },
        { id: 'economico', nombre: 'Hasta S/ 20', max: 20 },
        { id: 'medio', nombre: 'S/ 21 - S/ 40', min: 21, max: 40 },
        { id: 'premium', nombre: 'Más de S/ 40', min: 41 }
      ]
    
    
    // Filtrar y paginar items
      useEffect(() => {
        let items = menuData[categoriaActiva] || []
        
        // Filtrar por búsqueda
        if (busqueda) {
          items = items.filter(item => 
            item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            item.descripcion.toLowerCase().includes(busqueda.toLowerCase())
          )
        }
        
        // Filtrar por precio
        if (filtroPrecios !== 'todos') {
          const filtro = filtrosPrecio.find(f => f.id === filtroPrecios)
          items = items.filter(item => {
            if (filtro.min && filtro.max) {
              return item.precio >= filtro.min && item.precio <= filtro.max
            } else if (filtro.max) {
              return item.precio <= filtro.max
            } else if (filtro.min) {
              return item.precio >= filtro.min
            }
            return true
          })
        }
        
        setItemsFiltrados(items)
        
    }, [categoriaActiva, busqueda, filtroPrecios])
    
   

    return (
         <section className={styles.filtrosSection}>
                <div className={styles.filtrosContainer}>
                  <div className={styles.filtrosGrid}>
                    <div className={styles.busquedaContainer}>
                      <input
                        type="text"
                        placeholder="Buscar platos..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        className={styles.busquedaInput}
                      />
                      <span className={styles.busquedaIcon}>🔍</span>
                    </div>
                    
                    <select
                      value={filtroPrecios}
                      onChange={(e) => setFiltroPrecios(e.target.value)}
                      className={styles.filtroSelect}
                    >
                      {filtrosPrecio.map(filtro => (
                        <option key={filtro.id} value={filtro.id}>
                          {filtro.nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className={styles.resultadosInfo}>
                    Mostrando {itemsFiltrados?.length} platos de {categoriaActiva}
                  </div>
                </div>
              </section>
    )
}

export default FiltroBusqueda
