import { Link } from 'react-router-dom'

export default function LoginView() {
  return (
    <>
        <div>LoginView</div>
        <nav>
            <p>¿Aun no tienes una cuenta? <Link to="/auth/register">Registrarse.</Link></p>
        </nav>
    </>
  )
}
