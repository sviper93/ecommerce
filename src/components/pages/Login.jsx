import axios from "axios"
import { API_URL } from "../../constants/env"
import { setToken } from "../../helpers/auth"
import { Link, useNavigate } from "react-router-dom" // 1.1.
import { useState } from "react"
import LoginTemplate from "../templates/LoginTemplate"

const Login = () => {
    
    const nav = useNavigate() // 1.2. Con esto puedo usar las redirecciones

    const[error, setError] = useState() // 1.3.

    const handleSubmit = e => {
        e.preventDefault()
        setError() // 1.4. El error inicia vacío

        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        axios.post(`${API_URL}/public/login`, data)

        // .then(resp => setToken(resp.data.data.token)) 1.5. Cambiamos la estructura para redirigir la página
        .then((resp) => { // en caso de el valor del token sea el correcto
            setToken(resp.data.data.token)
            nav("/")
        })
        // .catch(error => console.error(error))
        .catch((err) => {
            setError(err) // 1.6. Al momento de encontrar un error, se almacena dentro de setError
        })
    }

    // el <form></form> también podría ser atomizado creando otro componente 
    return (
        <LoginTemplate>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        name="email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        required
                    />
                </div>
                <div className="text-center pt-1 mb-12 pb-1">
                    <button className="bg-gradient w-full" type="submit">
                        Ingresar
                    </button>
                    <Link className="text-gray-500" to="/registro">
                        ¿Deseas registrarte?
                    </Link>
                </div>
                    {error && (
                    <p className="text-center p-2 bg-red-100 text-red-800">
                        {error?.response?.data?.data}
                    </p>
                    )}
            </form>
        </LoginTemplate>
    )
}

export default Login

// Así estaba antes de añadir los estilos

// <div className="pt-16 max-w-256 m-auto">
//     <form onSubmit={handleSubmit}>
//         <input type="email" name="email" placeholder="Correo Electrónico" required/>
//         <input type="password" name="password" placeholder="Contraseña" required/>
//        <button type="submit">Ingresar</button>
//     </form>
// </div>

// 1.7. En una primera instancia, antes de atomizar el código, el diseño estaba así:

// <section className="h-full gradient-form bg-gray-200 md:h-screen">
//             <div className="container m-auto py-12 px-6 h-full">
//                 <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
//                     <div className="xl:w-10/12">
//                        <div className="block bg-white shadow-lg rounded-lg">
//                        <div className="lg:flex lg:flex-wrap g-0">
//                            <div className="lg:w-6/12 px-4 md:px-0">
//                                <div className="md:p-12 md:mx-6">
//                                    <div className="text-center">
//                                        <img
//                                            className="mx-auto w-48 mb-4 pt-4"
//                                            src="https://ed.team/images/logo/logo.svg"
//                                            alt="logo"
//                                        />
//                                        <h4 className="text-xl font-semibold mt-1 mb-8 pb-1">
//                                            Iniciar sesión
//                                       </h4>
//                                    </div>
//
//                                    <form onSubmit={handleSubmit}>
//                                        <div className="mb-4">
//                                        <input
//                                            type="email"
//                                            placeholder="Correo electrónico"
//                                            name="email"
//                                            required
//                                       />
//                                        </div>
//                                        <div className="mb-4">
//                                       <input
//                                            type="password"
//                                            placeholder="Contraseña"
//                                            name="password"
//                                            required
//                                        />
//                                       </div>
//                                       <div className="text-center pt-1 mb-12 pb-1">
//                                        <button className="bg-gradient w-full" type="submit">
//                                            Ingresar
//                                        </button>
//                                        <Link className="text-gray-500" to="/registro">
//                                            ¿Deseas registrarte?
//                                        </Link>
//                                        </div>
//                                        {error && (
//                                        <p className="text-center p-2 bg-red-100 text-red-800">
//                                           {error?.response?.data?.data}
//                                       </p>
//                                        )}
//                                    </form>
//                                </div>
//                            </div>
//                               <div className="bg-gradient lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
//                                    <div className="text-white px-2 mx-6 my-16 md:px-12 md:mx-6">
//                                        <span className="text-xl font-semibold mb-6">
//                                        Más que un e-commerce...
//                                        </span>
//                                       <h4 className="text-4xl">somos una tienda en línea</h4>
//                                    </div>
//                                </div>
//                            </div>
//                        </div>
//                    </div>
//                </div>
//            </div>
//        </section>