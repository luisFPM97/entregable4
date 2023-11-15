import React from 'react'
import './styles/Alert.css'


const Alert = ({isAlertDisable,setIsAlertDisable, isEdit,isAlertDelete}) => {
    const handleAcept =()=>{
        setIsAlertDisable(true)
    }
  return (
    <div className={`alert-container ${isAlertDisable && 'alert__disable'}`}>
        <section className='alert-containerinfo'>
        <h3 className='litle-info'>{`${isEdit && 'Actualizar' || isAlertDelete && 'Eliminar' || 'Crear'} usuario`}</h3>
        <span className='alert-info'>{`'El usuario se ha '${isEdit && 'actualizado' || isAlertDelete && 'eliminado' || 'creado'}`}</span>
        <button className='btn_app' onClick={handleAcept}>Aceptar</button>
        </section>
    </div>
  )
}

export default Alert