
import {useForm, type SubmitHandler} from "react-hook-form"
import type{ IUser } from "../../types/IUser";
import RegisterService from "../../services/Register.Service";

const Register = () => {

    const { register, handleSubmit } = useForm<IUser>()

    const onSubmit: SubmitHandler<IUser> = async (data) => {
        try{
            const newUser = await RegisterService.postRegisterUser(data);
            alert(`Utilizador ${newUser.name} criado com sucesso!`);
        }catch(error){
            alert("Falha ao criar a conta. Tente novamente.");
        }
    }

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>nome</label>
        <input {...register("name", { required: true })} />
        <label>email</label>
        <input 
        {...register("email", { required: "Email Address is required" })} 
      />
       <label>password</label>
        <input 
        {...register("password", { required: true, minLength: 8, maxLength: 20 })} 
      />
        <label>Nivel</label>
        <select {...register("role")}>
            <option value="user">User</option>
            <option value="adm">Adm</option>
        </select>
        <input type="submit" placeholder="Cadastrar" />
    </form>
)
}

export default Register;
