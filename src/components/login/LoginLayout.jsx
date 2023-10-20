import LoginLogo from './LoginLogo';
import LoginForm from '../forms/LoginForm';

const LoginLayout = () => {
  return (
    <>
      <div className='flex h-full w-full items-center justify-center'>
        <div className='md:p-5 2xl:p-12 rounded-2xl w-1/3 formLogin 2xl:bg-slate-100 shadow-xl shadow-black'>
          <LoginLogo/>
          <h1 className='text-center md:text-3xl 2xl:text-6xl md:font-semibold tracking-widest md:mt-5 2xl:mt-10'>Iniciar Sesión</h1>
          <LoginForm/>
        </div>
      </div>
    </>
  ) 
}

export default LoginLayout
