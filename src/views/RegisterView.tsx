import { Link } from 'react-router-dom'

export default function RegisterView() {
  return (
    <>
        <div>RegisterView</div>
        <nav>
            <p>¿Ya tienes una cuenta? <Link to="/auth/login">Iniciar Sesión.</Link></p>
        </nav>
    </>
  )
}
