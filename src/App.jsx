import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'
import Alert from './components/Alert'

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

  return (
    <div>
      <header className='header_app'>
      <h1 className='title_app'>Usuarios</h1>
      <button onClick={handleNewUser} className='btn_app'>+ Crear nuevo usuario</button>
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
      
    </div>
  )
}

export default App
