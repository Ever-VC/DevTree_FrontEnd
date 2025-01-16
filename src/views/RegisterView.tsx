import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import type { RegisterForm } from '../types'
import ErrorMessage from '../components/ErrorMessage'

export default function RegisterView() {

	const initialValues : RegisterForm = {
		name: '',
		email: '',
		handle: '',
		password: '',
		password_confirmation: ''
	}

	const { register, watch, handleSubmit, formState: { errors } } = useForm({defaultValues: initialValues})

	const password = watch('password')
	
	const handleRegister = (data : RegisterForm) => {
		console.log(data)
	}

  return (
    <>
        <h1 className='text-4xl text-white font-bold'>Crear Cuenta</h1>
		<form 
			onSubmit={handleSubmit(handleRegister)}
			className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
		>
			<div className="grid grid-cols-1 space-y-3">
				<label htmlFor="name" className="text-2xl text-slate-500">Nombre</label>
				<input
					id="name"
					type="text"
					placeholder="Tu nombre completo"
					className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
					{...register('name', { required: "El nombre es obligatorio" })}
				/>
				{errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
			</div>
			<div className="grid grid-cols-1 space-y-3">
				<label htmlFor="email" className="text-2xl text-slate-500">E-mail</label>
				<input
					id="email"
					type="email"
					placeholder="Tu correo electrónico"
					className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
					{...register('email', { 
						required: "El email es obligatorio",
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: "E-mail no válido",
						},
					})}
				/>
				{errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
			</div>
			<div className="grid grid-cols-1 space-y-3">
				<label htmlFor="handle" className="text-2xl text-slate-500">Handle</label>
				<input
					id="handle"
					type="text"
					placeholder="Nombre de usuario: sin espacios"
					className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
					{...register('handle', { required: "El handle es obligatorio" })}
				/>
				{errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}
			</div>
			<div className="grid grid-cols-1 space-y-3">
				<label htmlFor="password" className="text-2xl text-slate-500">Contraseña</label>
				<input
					id="password"
					type="password"
					placeholder="Contraseña de registro"
					className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
					{...register('password', { 
						required: "La contraseña es obligatoria",
						minLength: {
							value: 8,
							message: "La contraseña debe tener al menos 8 caracteres"
						}
					})}
				/>
				{errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
			</div>

			<div className="grid grid-cols-1 space-y-3">
				<label htmlFor="password_confirmation" className="text-2xl text-slate-500">Repetir Contraseña</label>
				<input
					id="password_confirmation"
					type="password"
					placeholder="Repetir contraseña"
					className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
					{...register('password_confirmation', { 
						required: "La contraseña de confirmación es obligatoria",
						validate: value => value === password || "Las contraseñas no coinciden"
					})}
				/>
				{errors.password_confirmation && <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>}
			</div>

			<input
				type="submit"
				className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
				value='Crear Cuenta'
			/>  
		</form>
        <nav className='mt-10'>
            <p className='text-center text-white text-lg block'>¿Ya tienes una cuenta? <Link to="/auth/login">Iniciar Sesión.</Link></p>
        </nav>
    </>
  )
}
