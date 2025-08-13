import styles from '../../styles/IntiMar.module.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FormGroup, Col, Row, Button, Alert } from "reactstrap";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCrud } from "../../hooks/useCrud";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Registro = ({}) => {
  const { handleSubmit, register, reset, setValue, getValues, formState: { errors, isSubmitting } } = useForm();
  const [showOptionalFields, setShowOptionalFields] = useState(false)
  const [serverErrors, setServerErrors] = useState({});
  const [showError, setShowError] = useState(false);
  const [documentType, setDocumentType] = useState('dni');
  const [ ,createClient] = useCrud();
  const navigate = useNavigate();

  

  /*esta función se usa justo antes de enviar datos al backend, para evitar enviar campos vacíos que podrían causar errores o sobrescribir información existente con valores nulos.*/
  const removeEmptyFields = (data) => {
    return Object.entries(data)
        // .filter(([key, value]) => value !== "")
        .filter(([key, value]) => value) 
        .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
  };

  /*Envio de datos */
  const submit = async (data) => {
    data = removeEmptyFields(data); // Filtra los campos vacíos

    if (!data.name || !data.lastname || !data.cellphone) {
        toast.error("Por favor, ingresa nombre, apellido y teléfono.");
        return;
    }

    if (data.cellphone.length < 10) {
        toast.error("El número de teléfono debe tener al menos 10 dígitos.");
        return;
    }

    setServerErrors({});
    setShowError(false);

    // Separar el código de país del número de teléfono
    const fullPhoneNumber = getValues('cellphone');
    const countryCode = getValues('countryCode');
    const phoneWithoutCountryCode = countryCode && fullPhoneNumber.startsWith(countryCode) ? fullPhoneNumber.slice(countryCode.length) : fullPhoneNumber;

    data.cellphone = phoneWithoutCountryCode;
    data.countryCode = countryCode;



    try {
       
            await createClient("/intimar/client", data);
            
            // Mostrar notificación fija en la pantalla
            toast.success(`Registro exitoso. 
              Un administrador gestionará su reserva en breve y se le notificará oportunamente`, {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              style: {
                width: '22rem',
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 9999
              }
            });

            // Resetear el formulario
            reset({
                name: "",
                lastname: "",
                email: "",
                countryCode: "",
                cellphone: "",
                address: "",
                allergies: "",
                dni: "",
                ruc: "",
                numero_pasaporte: "",
                languaje: "es", 
            });
        
           /*Logica de redireccion */
       
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleError = (errors) => {
    // Mostrar el primer error encontrado
    const firstError = Object.values(errors)[0];
    if (firstError) {
      toast.error(firstError.message || 'Por favor, completa todos los campos requeridos', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 9999
        }
      });
    }
  };
  function handleKeyDown(event, type) {
    if (type === "name" || type === "lastname") {
        // Permitir solo letras y espacios
        if (!/[A-Za-z\s]/.test(event.key)) {
            event.preventDefault();
        }
    } else if (type === "dni" || type === "ruc") {
        // Permitir solo números y teclas especiales de borrar
        if (!/\d/.test(event.key) && event.key !== "Backspace" && event.key !== "Delete") {
            event.preventDefault();
        }
    }
  }

      
    return (
        <section id="registro" className={styles.formSection}>
                <div className={styles.formBackground}>
                  <img 
                    src="/images/oceanfront-dinner.png" 
                    alt="Experiencia gastronómica frente al mar"
                    className={styles.formBackgroundImage}
                  />
                  <div className={styles.formOverlay}></div>
                </div>
                <div className={styles.formContainer}>
                  <div className={styles.formCard}>
                    <div className={styles.formHeader}>
                      <h3 className={styles.formTitle}>
                        <span className={styles.formTitleClientse}> Comienza tu experiencia</span>
                        <span className={styles.formTitleRegistro}> Inti</span> 
                        <span className={styles.logoTextMar}>-MAR</span>
                      </h3>
                      <p className={styles.formDescription}>
                      Completa tus datos para reservar.
                      </p>
                    </div>
                    <div className={styles.formContent}>
                      <form onSubmit={handleSubmit(submit)} className={styles.formGrid}>
                        {/* Campos Obligatorios */}
                        <div className={styles.formRow}>
                          <div className={styles.fieldGroup}>
                            <label className={styles.label}>
                              Nombre <span className={styles.required}>*</span>
                            </label>
                            <input
                              type="text"
                              className={styles.input}
                              placeholder="Tu nombre"
                              onKeyDown={(e) => handleKeyDown(e, "name")}
                              {...register('name', { 
                                required: 'El nombre es requerido',
                                minLength: { value: 2, message: 'Mínimo 2 caracteres' },
                                pattern: {
                                  value: /^[A-Za-z\s]+$/,
                                  message: "El nombre solo debe contener letras y espacios"
                              }
                              })}
                            />
                            {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                          </div>
                          <div className={styles.fieldGroup}>
                            <label className={styles.label}>
                              Apellido <span className={styles.required}>*</span>
                            </label>
                            <input
                              type="text"
                              className={styles.input}
                              placeholder="Tu apellido"
                              onKeyDown={(e) => handleKeyDown(e, "lastname")}
                              {...register('lastname', { 
                                required: 'El apellido es obligatorio',
                                minLength: { value: 2, message: 'Mínimo 2 caracteres' },
                                pattern: {
                                  value: /^[A-Za-z\s]+$/,
                                  message: "El apellido solo debe contener letras y espacios"
                              }
                              })}
                            />
                            {errors.lastname && <span className={styles.error}>{errors.lastname.message}</span>}
                          </div>
                          {showError && (
                            <Alert color="danger">
                                Este cliente ya existe. Por favor, introduzca un nombre y apellido diferentes.
                            </Alert>
                          )}
                        </div>
        
                        <div className={styles.formRow}>
                         <div className={styles.fieldGroup}>
                            <label className={styles.label}>
                              Teléfono <span className={styles.required}>*</span>
                            </label>
                            <FormGroup className={styles.phoneInputContainer}>
                                    <PhoneInput className={styles.phoneInput}
                                        country={'pe'}
                                        value={getValues('cellphone')}
                                        onChange={(phone, country) => {
                                            setValue('cellphone', phone);
                                            setValue('countryCode', country.dialCode);
                                        }}
                                        inputProps={{
                                            name: 'cellphone',
                                            required: true,
                                            autoFocus: true
                                        }}
                                        containerStyle={{ width: '100%', height: '3rem' }}
                                        inputStyle={{ width: '100%',height: '3rem' }}
                                        
                                    />
                                    {(errors.telefono || errors.codigoPais) && (
                                    <span className={styles.error}>
                                    {errors.telefono?.message || errors.codigoPais?.message}
                                    </span>
                                    )}
                            </FormGroup>
                            
                          </div>
                          <div className={styles.fieldGroup}>
                            <label className={styles.label}>
                              Correo <span className={styles.required}>*</span>
                            </label>
                            <input
                              type="email"
                              className={styles.input}
                              placeholder="tu@email.com"
                              {...register('email', { 
                                required: 'El correo es obligatorio',
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: 'Formato de correo inválido'
                                }
                              })}
                            />
                            {errors.email && <span className={styles.error}>{errors.email?.message}</span>}
                          </div>
                        </div>
        
                        <div className={styles.formRow}>
                          <div className={styles.fieldGroup}>
                            <label className={styles.label}>
                              Alergias
                            </label>
                            <textarea
                              className={styles.textarea}
                              placeholder="Describe tus alergias alimentarias o escribe 'Ninguna'"
                              {...register('allergies')}
                            />
                            {errors.allergies && <span className={styles.error}>{errors.allergies.message}</span>}
                          </div>
                          <div className={styles.fieldGroup}>
                            <label className={styles.label}>
                              Idioma
                            </label>
                            <select
                              className={styles.select}
                              {...register('language')}
                              defaultValue="es"
                            >
                              <option value="">Seleccionar idioma</option>
                              <option value="español">Español</option>
                              <option value="ingles">Inglés</option>
                              <option value="frances">Francés</option>
                              <option value="portugues">Portugués</option>
                              <option value="italiano">Italiano</option>
                              <option value="aleman">Alemán</option>
                            </select>
                            {errors.language && <span className={styles.error}>{errors.language.message}</span>}
                          </div>
                        </div>
        
                        {/* Botón para mostrar campos opcionales */}
                        <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
                          <button
                            type="button"
                            onClick={() => setShowOptionalFields(!showOptionalFields)}
                            className={styles.optionalButton}
                          >
                            {showOptionalFields ? 'Ocultar' : 'Mostrar'} campos opcionales
                          </button>
                        </div>
        
                        {/* Campos Opcionales */}
                        {showOptionalFields && (
                          <div className={styles.optionalFields}>
                            <h4 className={styles.optionalTitle}>Información Adicional</h4>
                          
        
                            <div className={styles.formRow}>
                              <div className={styles.fieldGroup}>
                                <label className={styles.label}>Tipo de Documento</label>
                                <div className={styles.radioGroup}>
                                  <label className={styles.radioLabel}>
                                    <input
                                      type="radio"
                                      name="documentType"
                                      value="dni"
                                      checked={documentType === 'dni'}
                                      onChange={() => setDocumentType('dni')}
                                      className={styles.radioInput}
                                    />
                                    <span className={styles.radioCustom}></span>
                                    DNI
                                  </label>
                                  <label className={styles.radioLabel}>
                                    <input
                                      type="radio"
                                      name="documentType"
                                      value="pasaporte"
                                      checked={documentType === 'pasaporte'}
                                      onChange={() => setDocumentType('pasaporte')}
                                      className={styles.radioInput}
                                    />
                                    <span className={styles.radioCustom}></span>
                                    Pasaporte
                                  </label>
                                </div>
                              </div>
                              <div className={styles.fieldGroup}>
                                {documentType === 'dni' ? (
                                  <>
                                    <label className={styles.label}>DNI</label>
                                    <input
                                      type="text"
                                      className={styles.input}
                                      placeholder="12345678"
                                      onKeyDown={(e) => handleKeyDown(e, "dni")}
                                      {...register('dni', {
                                        pattern: {
                                          value: /^[0-9]*$/,
                                          message: 'El DNI solo debe contener números'
                                        },
                                        minLength: {
                                          value: 8,
                                          message: "El DNI debe tener al menos 8 dígitos"
                                        }
                                      })}
                                    />
                                    {errors.dni && <span className={styles.error}>{errors.dni.message}</span>}
                                  </>
                                ) : (
                                  <>
                                    <label className={styles.label}>Pasaporte</label>
                                    <input
                                      type="text"
                                      className={styles.input}
                                      placeholder="ABC123456"
                                      {...register('numero_pasaporte', {
                                        pattern: {
                                          value: /^[a-zA-Z0-9]+$/,
                                          message: 'El pasaporte solo debe contener letras y números'
                                        },
                                        minLength: {
                                          value: 8,
                                          message: "El pasaporte debe tener al menos 8 caracteres"
                                        }
                                      })}
                                    />
                                    {errors.numero_pasaporte && (
                                      <span className={styles.error}>{errors.numero_pasaporte.message}</span>
                                    )}
                                  </>
                                )}
                              </div>
                            </div>
                            
                            <div className={styles.formRow}>
                              <div className={styles.fieldGroup}>
                                <label className={styles.label}>RUC</label>
                                <input
                                  type="text"
                                  className={styles.input}
                                  placeholder="12345678901"
                                  onKeyDown={(e) => handleKeyDown(e, "ruc")}
                                  {...register('ruc', {
                                    pattern: {
                                      value: /^[0-9]*$/,
                                      message: 'El RUC solo debe contener números'
                                    },
                                    minLength: {
                                      value: 10,
                                      message: "El RUC debe tener al menos 10 dígitos"
                                    }
                                  })}
                                />
                                {errors.ruc && <span className={styles.error}>{errors.ruc.message}</span>}
                              </div>
                              
                              <div className={styles.fieldGroup}>
                                <label className={styles.label}>Dirección</label>
                                <input
                                  type="text"
                                  className={styles.input}
                                  placeholder="Tu dirección completa"
                                  {...register('address')}
                                />
                              </div>
                            </div>
                          </div>
                        )}
        
                        <button 
                          type="submit" 
                          className={styles.submitButton}
                          disabled={isSubmitting}
                        >
                          👤 {isSubmitting ? 'Registrando...' : 'Registrar Cliente'}
                        </button>
                        
                      </form>
                    </div>
                  </div>
                </div>
        </section>
    )
}

export default Registro;