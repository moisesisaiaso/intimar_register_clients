import styles from '../styles/IntiMar.module.css'
import stylesCarta from '../styles/Carta.module.css'
const PagoModal = ({mostrarModalPago, setMostrarModalPago}) => {
    return (

        <>
        {/* Modal de información de pago */}
        {mostrarModalPago && (
                  <div className={styles.modalOverlay} onClick={() => setMostrarModalPago(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                      <div className={styles.modalHeader}>
                        <h3 className={styles.modalTitle}>
                          <span className={styles.paymentIcon}>💳</span>
                          Información de Pago
                        </h3>
                        <p className={styles.modalSubtitle}>Elige tu método de pago preferido</p>
                        <button 
                          className={styles.modalClose} 
                          onClick={() => setMostrarModalPago(false)}
                          aria-label="Cerrar modal"
                        >
                          &times;
                        </button>
                      </div>
                      
                      <div className={styles.modalBody}>
                        <div className={styles.bankInfo}>
                          {/* Tarjeta BCP */}
                          <div className={stylesCarta.paymentCard}>
                            <div className={`${stylesCarta.cardHeader} ${stylesCarta.bcpGradient}`}>
                              <span className={stylesCarta.bankIcon}>🏦</span>
                              <h4>Banco de Crédito del Perú</h4>
                            </div>
                            <div className={stylesCarta.cardBody}>
                              <div className={stylesCarta.infoRow}>
                                <span className={stylesCarta.infoLabel}>Cuenta:</span>
                                <div className={stylesCarta.infoValue}>
                                  <span>194-2345678-0-12</span>
                                  <button 
                                    className={stylesCarta.copyButton}
                                    onClick={() => {
                                      navigator.clipboard?.writeText('194-2345678-0-12');
                                      showToast('¡Número de cuenta copiado!');
                                    }}
                                    aria-label="Copiar número de cuenta"
                                  >
                                    📋
                                  </button>
                                </div>
                              </div>
                              <div className={stylesCarta.infoRow}>
                                <span className={stylesCarta.infoLabel}>CCI:</span>
                                <div className={stylesCarta.infoValue}>
                                  <span>002-194-002345678012-34</span>
                                  <button 
                                    className={stylesCarta.copyButton}
                                    onClick={() => {
                                      navigator.clipboard?.writeText('002-194-002345678012-34');
                                      showToast('¡CCI copiado!');
                                    }}
                                    aria-label="Copiar CCI"
                                  >
                                    📋
                                  </button>
                                </div>
                              </div>
                              <div className={stylesCarta.infoRow}>
                                <span className={stylesCarta.infoLabel}>Titular:</span>
                                <span className={stylesCarta.infoValue}>Inti-MAR Paracas Bay S.A.C.</span>
                              </div>
                            </div>
                          </div>
          
                          {/* Tarjeta Interbank */}
                          <div className={stylesCarta.paymentCard}>
                            <div className={`${stylesCarta.cardHeader} ${stylesCarta.interbankGradient}`}>
                              <span className={stylesCarta.bankIcon}>💳</span>
                              <h4>Interbank</h4>
                            </div>
                            <div className={stylesCarta.cardBody}>
                              <div className={stylesCarta.infoRow}>
                                <span className={stylesCarta.infoLabel}>Cuenta:</span>
                                <div className={stylesCarta.infoValue}>
                                  <span>898-3012345678</span>
                                  <button 
                                    className={stylesCarta.copyButton}
                                    onClick={() => {
                                      navigator.clipboard?.writeText('898-3012345678');
                                      showToast('¡Número de cuenta copiado!');
                                    }}
                                    aria-label="Copiar número de cuenta"
                                  >
                                    📋
                                  </button>
                                </div>
                              </div>
                              <div className={stylesCarta.infoRow}>
                                <span className={stylesCarta.infoLabel}>CCI:</span>
                                <div className={stylesCarta.infoValue}>
                                  <span>003-898-013012345678-91</span>
                                  <button 
                                    className={stylesCarta.copyButton}
                                    onClick={() => {
                                      navigator.clipboard?.writeText('003-898-013012345678-91');
                                      showToast('¡CCI copiado!');
                                    }}
                                    aria-label="Copiar CCI"
                                  >
                                    📋
                                  </button>
                                </div>
                              </div>
                              <div className={stylesCarta.infoRow}>
                                <span className={stylesCarta.infoLabel}>Titular:</span>
                                <span className={stylesCarta.infoValue}>Inti-MAR Paracas Bay S.A.C.</span>
                              </div>
                            </div>
                          </div>
          
                          {/* Tarjeta Yape/Plin */}
                          <div className={stylesCarta.paymentCard}>
                            <div className={`${stylesCarta.cardHeader} ${stylesCarta.yapeGradient}`}>
                              <span className={stylesCarta.bankIcon}>📱</span>
                              <h4>Yape / Plin</h4>
                            </div>
                            <div className={stylesCarta.cardBody}>
                              <div className={stylesCarta.infoRow}>
                                <span className={stylesCarta.infoLabel}>Número:</span>
                                <div className={stylesCarta.infoValue}>
                                  <span>+51 999 123 456</span>
                                  <button 
                                    className={stylesCarta.copyButton}
                                    onClick={() => {
                                      navigator.clipboard?.writeText('+51999123456');
                                      showToast('¡Número de teléfono copiado!');
                                    }}
                                    aria-label="Copiar número de teléfono"
                                  >
                                    📋
                                  </button>
                                </div>
                              </div>
                              <div className={stylesCarta.infoRow}>
                                <span className={stylesCarta.infoLabel}>Nombre:</span>
                                <span className={stylesCarta.infoValue}>Inti-MAR Paracas</span>
                              </div>
                              <div className={stylesCarta.actionButtons}>
                                <a 
                                  href="https://wa.me/51999123456?text=Hola%20Inti-MAR,%20acabo%20de%20realizar%20el%20pago%20de%20mi%20reserva." 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className={`${stylesCarta.whatsappButton}`}
                                >
                                  💬 Enviar comprobante
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className={stylesCarta.note}>
                          <p>💡 Después de realizar el pago, por favor envíanos el comprobante por WhatsApp para confirmar tu reserva.</p>
                        </div>
                      </div>
                    </div>
                  </div>
               )}
            </>
               
    )
}

export default PagoModal
