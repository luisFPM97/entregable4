import React from 'react'
import './styles/Alert.css'


const Alert = ({isAlertDisable,setIsAlertDisable, isEdit,isAlertDelete}) => {
    const handleAcept =()=>{
        setIsAlertDisable(true)
    }
  return (
    <div className={`alert-container ${isAlertDisable && 'alert__disable'}`}>
        <section className='alert-containerinfo'>
        <h3 className='litle-info'>{`${isEdit && 'Update' || isAlertDelete && 'Delete' || 'Create'} user`}</h3>
        <span className='alert-info'>{`the user has been ${isEdit && 'successfully updated' || isAlertDelete && 'successfully deleted' || 'creado correctamente'}`}</span>
        <button className='btn_app_alert' onClick={handleAcept}>Done</button>
        </section>
    </div>
  )
}

export default Alert