import React from 'react'


const Alert = ({isDisable, setIsDisable}) => {
    const handleAcept =()=>{
        setIsDisable(true)
    }
  return (
    <div className={`alert-container ${isDisable && 'alert__disable'}`}>
        <h3>Eliminar/Actualizar/Crear usuario</h3>
        <span>El usuario X se ha actualizado/creado/eliminado</span>
        <button onClick={handleAcept}>Aceptar</button>
    </div>
  )
}

export default Alert