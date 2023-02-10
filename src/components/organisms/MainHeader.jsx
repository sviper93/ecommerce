import Logo from "../molecules/header/Logo"
import MainMenu from "../molecules/header/MainMenu"

const MainHeader = () => {
    return (
        <div>
            <Logo/>
            <MainMenu/>
        </div>
    )
}

export default MainHeader

// 1. Creamos los componentes "Logo.jsx" y "MainMenu.jsx" para atomizar este código
// <div>
//     <div>Logo</div>
//     <nav>
//         <ul>
//             <li>Inicio</li>
//            <li>Productos</li>
//             <li>Ofertas</li>
//             <li>Contacto</li>
//         </ul>
//     </nav>
// </div>