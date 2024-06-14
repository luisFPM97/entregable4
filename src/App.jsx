import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'
import Alert from './components/Alert'
import Bascula from './components/Bascula'
import { SerialPort } from 'serialport'





function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const [isDisable, setIsDisable] = useState(true)
  const [isEdit, setIsEdit] = useState(true)
  const [isAlertDisable, setIsAlertDisable] = useState(true)
  const [isAlertDelete, setIsAlertDelete] = useState(true)
  const url= 'https://users-crud-a9jo.onrender.com'
  const [ users, getUsers, createUser, deleteUser, updateUser ]= useCrud(url)


  useEffect(() => {
    getUsers('/users')
  }, [])
  
  console.log(users)

const handleNewUser =()=>{
  setIsDisable(false)
  setIsEdit(false)
  setIsAlertDelete(false)
}




//basculaaaaa
const port = new SerialPort8('COM1',{
  baudRate:9600,
  dataBits:8,
  parity:'none',
  stopBits:1,
  flowControl: false
});
// Open the port
port.open((error) => {
  if (error) {
    console.error('Error al abrir el puerto COM:', error);
    return;
  }

  console.log('Puerto COM abierto');

  // Set up event listeners
  port.on('data', (data) => {
    console.log('Datos recibidos:', data.toString());
  });

  port.on('error', (error) => {
    console.error('Error en el puerto COM:', error);
  });

  port.on('close', () => {
    console.log('Puerto COM cerrado');
  });
});



  return (
    <div className='app'>
      <div className='image'></div>
      <header className='header_app'>
      <button onClick={handleNewUser} className='btn_app'>+</button>
      <h1 className='title_app'>User list</h1>
      
      </header>
      <FormUsers
       createUser = {createUser}
       infoUpdate={infoUpdate}
       updateUser={updateUser}
       setInfoUpdate={setInfoUpdate}
       isDisable={isDisable}
       setIsDisable={setIsDisable}
       setIsEdit={setIsEdit}
       isEdit={isEdit}
       setIsAlertDisable={setIsAlertDisable}
      />
      
      <div className='users__container'>
        {
          users?.map(user => (
            <UserCard 
            key={user.id}
            user={user} 
            deleteUser ={deleteUser}
            setInfoUpdate={setInfoUpdate}
            setIsDisable={setIsDisable}
            setIsEdit={setIsEdit}
            setIsAlertDisable={setIsAlertDisable}
            setIsAlertDelete={setIsAlertDelete}
            
            />
            ))
          }
      </div>
          <Alert
          isAlertDisable={isAlertDisable}
          setIsAlertDisable={setIsAlertDisable}
          isEdit={isEdit}
          isAlertDelete={isAlertDelete}
          />
      <Bascula/>

    </div>
  )
}

export default App
