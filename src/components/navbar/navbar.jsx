import "./navbar.css"
import logo from '../../images/Logo.png'
const Navbar = () => {
  return (
     <nav className="navbar">
     <div className="navbar__logo">
       <img src={logo} alt="Logo" />
     </div>
     <div className="navbar__buttons">
       <button className="login-button">LOG IN</button>
       <button style={{background: "#0135d3"}} className="register-button">REGISTER</button>
     </div>
   </nav>
  )
}

export default Navbar
