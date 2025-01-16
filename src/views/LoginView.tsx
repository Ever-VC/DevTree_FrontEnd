import { Link } from 'react-router-dom'

export default function LoginView() {
  return (
    <>
		<h1 className='text-4xl text-white font-bold'>Iniciar Sesión</h1>
        <nav className='mt-10'>
            <p className='text-center text-white text-lg block'>¿Aun no tienes una cuenta? <Link to="/auth/register">Registrarse.</Link></p>
        </nav>
    </>
  )
}
