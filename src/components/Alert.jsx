import React from 'react'
import './styles/Alert.css'


const Alert = ({isAlertDisable,setIsAlertDisable, isEdit,isAlertDelete}) => {
    const handleAcept =()=>{
        setIsAlertDisable(true)
    }
  return (
    <div className={`alert-container ${isAlertDisable && 'alert__disable'}`}>
        <h3>{`${isEdit && 'Editar' || 'Crear'} usuario`}</h3>
        <span>{`'El usuario se ha '${isEdit && 'actualizado' || isAlertDelete && 'eliminado' || 'creado'}`}</span>
        <button onClick={handleAcept}>Aceptar</button>
    </div>
  )
}

export default Alert