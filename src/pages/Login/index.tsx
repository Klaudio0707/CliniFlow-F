import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import type { IUser } from "../../types/IUser";
import styles from "./Login.module.css";


const fakeLoginAPI = (data: IUser): Promise<{ success: boolean }> => {
    console.log("Simulando login com:", data);
  
    return new Promise(resolve => {
        // Espera 2 segundos (2000 milissegundos) para dar a sensação de carregamento
        setTimeout(() => {
           
            resolve({ success: true });
        }, 2000);
    });
}

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<IUser>();

    
    const onSubmit: SubmitHandler<IUser> = async (data) => {
        try {
          
            const response = await fakeLoginAPI(data);
            
            if (response.success) {
                alert(`Login simulado com sucesso! Redirecionando...`);
                
                navigate('/dashboard'); 
            }
        } catch (error) {
            alert("Falha na simulação de login.");
        }
    }

    return (
        <div className={styles.registerContainer}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formCard}>
                <div className={styles.inputGroup}>
                    <label>email</label>
                    <input 
                        type="email"
                        {...register("email", { required: "O campo e-mail é obrigatório" })} 
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>password</label>
                    <input 
                        type="password"
                        {...register("password", { required: "A senha é obrigatória" })} 
                    />
                </div>
               
                <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                    {isSubmitting ? "Acessando..." : "Login"}
                </button>
            </form>
            <div className={styles.errorMessageContainer}>
                {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
                {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
            </div>
        </div>
    )
}

export default Login;