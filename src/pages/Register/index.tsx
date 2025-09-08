import {useForm, type SubmitHandler} from "react-hook-form"
import type{ IUser } from "../../types/IUser";
import RegisterService from "../../services/Register.Service";
import styles from "./Register.module.css"

const Register = () => {

    const { register, handleSubmit, formState: {errors} } = useForm<IUser>()

    const onSubmit: SubmitHandler<IUser> = async (data) => {
        try{
            const newUser = await RegisterService.postRegisterUser(data);
            alert(`Utilizador ${newUser.name} criado com sucesso!`);
            //colocar o redirect para o login
        }catch(error){
            alert("Falha ao criar a conta." + error);
        }
    }

return (
    <div className={styles.registerContainer}>
        <h2>Registre-se</h2>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formCard}>
        <div className={styles.inputGroup}>
        <label>nome</label>
        <input {...register("name", { required: true })} />
        </div>
        <div className={styles.inputGroup}>
        <label>email</label>
        <input 
        {...register("email", { required: "Email Address is required" })} 
        />
        </div>
        <div className={styles.errorMessage}>
          {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
        </div>
        <div className={styles.inputGroup}>
       <label>password</label>
        <input 
        {...register("password", { required: true, minLength: 8, maxLength: 20 })} 
        />
        </div>
        <div className={styles.inputGroup}>
        <label>Nivel</label>
        <select {...register("role")}>
            <option value="user">User</option>
            <option value="adm">Adm</option>
        </select>
        </div>
        <input type="submit" placeholder="Cadastrar"  className={styles.submitButton}/>
    </form>
    </div>
)
}

export default Register;
