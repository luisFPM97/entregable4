import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import './styles/FormUser.css'

const FormUsers =( { createUser, infoUpdate, updateUser, setInfoUpdate, isDisable, setIsDisable, setIsEdit, isEdit,setIsAlertDisable })=>{



const { handleSubmit, register, reset } = useForm()

useEffect(() => {
  reset(infoUpdate)
}, [infoUpdate])

const handleConfirm =()=>{
  setIsAlertDisable(false)
}

const submit = data =>{
    if(infoUpdate){
        //update
        if (data.image_url=="") {
          data.image_url="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
        }
        updateUser('/users', infoUpdate.id, data)
        setInfoUpdate(data)
        
        setIsEdit(true)
        console.log(data)
    }else{
        createUser('/users',data)
    }
    setIsDisable(true)
    
    reset({
        email: '',
        password: '',
        first_name:'',
        last_name:'',
        birthday:'',
        image_url:'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg'
    })
}
    const handleExit =()=>{
        setIsDisable(true)
        reset({
            email: '',
            password: '',
            first_name:'',
            last_name:'',
            birthday:'',
            image_url:'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg'
        })
        setInfoUpdate()
    }

  return (
    <div className={`form-container ${isDisable && 'form__disable'}`}>
      <form className="form" onSubmit={handleSubmit(submit)}>
        <h2 className="form__title">{`${isEdit && 'Editar' || 'Nuevo' } usuario`}</h2>
        <div onClick={handleExit} className="form__x" >
          <i className="bx bx-x-circle"></i>
        </div>
        <label className="form__label">
          <span className="form__span">Email</span>
          <input
            className="form__input"
            {...register("email")}
            type="email"
            placeholder="E-mail"
            required
          />
        </label>
        <label className="form__label">
          <span className="form__span">Password</span>
          <input
            className="form__input"
            {...register("password")}
            type="password"
            placeholder="Password"
            required
          />
        </label>
        <label className="form__label">
          <span className="form__span">First name</span>
          <input
            className="form__input"
            {...register("first_name")}
            type="text"
            placeholder="First Name"
            required
          />
        </label>
        <label className="form__label">
          <span className="form__span">Last name</span>
          <input
            className="form__input"
            {...register("last_name")}
            type="text"
            placeholder="Last Name"
            required
          />
        </label>
        <label className="form__label">
          <span className="form__span">Birthday</span>
          <input
            className="form__input"
            {...register("birthday")}
            type="date"
          />
        </label>
        <label className="form__label">
          <span className="form__span">Imagen</span>
          <input
            className="form__input"
            {...register("image_url")}
            type="text"
            placeholder="url imagen"
            value="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"          />
        </label>
        <button onClick={handleConfirm} className="form__btn">Submit</button>
      </form>
    </div>
  );
}

export default FormUsers