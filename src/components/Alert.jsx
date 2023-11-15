import React from 'react'
import './styles/Alert.css'


const Alert = ({isAlertDisable,setIsAlertDisable}) => {
    const handleAcept =()=>{
        setIsAlertDisable(true)
    }
  return (
    <div className={`alert-container ${isAlertDisable && 'alert__disable'}`}>
        <h3>Eliminar/Actualizar/Crear usuario</h3>
        <span>El usuario X se ha actualizado/creado/eliminado</span>
        <button onClick={handleAcept}>Aceptar</button>
    </div>
  )
}

export default Alert