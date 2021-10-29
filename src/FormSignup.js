import React from 'react'
import useForm from './UseForm'
import validate from './validateInfo';
import './Form.css';

const FormSignup = (submitForm) => {
    const {handleChange, values, handleSubmit, errors} = 
    useForm(submitForm, validate);



    return (
       <div className="form-content-right">
           <form className="form" onSubmit={handleSubmit}>
               <h1>Get started with us today! Create your 
                   account by filling out the information below. </h1>
                   <div className="form-inputs">
                       <label htmlFor="username"
                       className="form-label">
                           Nazwa użytkownika
                       </label>
                       <input 
                       type="text" 
                        name="username" 
                        className="form-input"
                        placeholder="Podaj nazwę użytkownika"
                        value={values.username}
                        onChange={handleChange} 
                        />
{errors.username && <p>{errors.username}</p>}
                   </div>
                   <div className="form-inputs">
                       <label htmlFor="email"
                       className="form-label">
                           Email
                       </label>
                       <input 
                       type="email" 
                       name="email" 
                       className="form-input"
                       placeholder="Podaj adres email"
                        value={values.email}
                        onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}       
                   </div>
                   <div className="form-inputs">
                       <label htmlFor="password"
                       className="form-label">
                           Hasło
                       </label>
                       <input 
                       type="password" 
                       name="password" 
                       className="form-input"
                       placeholder="Podaj adres email"  
                        value={values.password}
                        onChange={handleChange} />
{errors.password && <p>{errors.password2}</p>}
                   </div>
                   <div className="form-inputs">
                       <label htmlFor="password2"
                       className="form-label">
                           Powtórz hasło
                       </label>
                       <input 
                       type="password" 
                       name="password2" 
                       className="form-input"
                       placeholder="Podaj ponownie hasło" 
                        value={values.password2}
                        onChange={handleChange}/>
                   </div>
                   <button className="form-input-btn" type="submit">
                       Zarejestruj się
                   </button>
                   <span className="form-input-login">
                       Masz już konto? Zaloguj się<a href="#"> tutaj </a>
                   </span>
           </form>
       </div>
    )
}

export default FormSignup;
