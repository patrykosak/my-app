export default function validateInfo(values){
    let errors = {}

    if(!values.username.trim()){
        errors.username ="Musisz podać nazwę użytkownika"
    }

    if(!values.email){
        errors.email = "Musisz podać adres email"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Adres email jest nieprawidłowy"
    }

    if(!values.password){
        errors.password = "Musisz podać hasło"
    } else if (values.password.length <8){
        errors.password = "Hasło musi mieć conajmniej 8 znaków"
    }

    if(!values.password2){
        errors.password2 = "Musisz potwierdzić hasło"
    } else if (values.password !== values.password2){
        errors.password2  = "Podane hasła nie są takie same"
    }
    return errors;
}