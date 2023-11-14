import React from 'react'
import './styles/UserCard.css'

const UserCard = ({user, deleteUser, setInfoUpdate, setIsDisable,setIsEdit}) => {

    const handleDelete = ()=>{
        deleteUser('/users', user.id)
    }
    const handleEdit =()=>{
        setInfoUpdate(user)
        setIsDisable(false)
        setIsEdit(true)
    }
  return (
    <article className="user">
      <header className="user__header">
        <img className="img__user" src={user.image_url} alt="user-img" />
      </header>
      <section className='info_container'>
        <h3 className='user__name'>
          {user.first_name} {user.last_name}
        </h3>
        <ul>
          <li className='user__info'>
            <span className='litle__item' >Email</span>
            <span>{user.email}</span>
          </li>
          <li className='user__info'>
            <span className='litle__item' >Birthday</span>
            <span>{user.birthday}</span>
          </li>
        </ul>
        <footer className='btns_form'>
        <button className='btn_delete' onClick={handleDelete}>
          <i className="bx bxs-trash"></i>
        </button>
        <button  className='btn_edit' onClick={handleEdit}>
          <i className="bx bxs-edit-alt"></i>
        </button>
        </footer>
      </section>
    </article>
  );
}

export default UserCard