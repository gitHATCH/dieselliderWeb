import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const MailInfo = () => {
  return (
    <div className='flex flex-row w-2/3 bg-slate-300 rounded-lg shadow-md shadow-black mt-5 sm:mt-10 py-4 p-2'>
        <div className='w-full flex flex-col items-center justify-center h-full'>
          <div className='text-green-900'>
            <MailOutlineIcon style={{fontSize:50}}/>
          </div>
          <div className='w-full text-center mt-5'>
            <h2 className='font-mono font-semibold text-3xl'>Clientes</h2>
          </div>


          <div className='mt-5 flex flex-wrap justify-center gap-5 w-full'>
          <div className='w-[300px] text-center flex flex-col items-center justify-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Nacional</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-xs sm:text-base font-mono font-medium mb-1'>ventas@diesellider.com.ar</p>
                <p className='text-xs sm:text-base font-mono font-medium mb-1'>ventas1@diesellider.com.ar</p>
                <p className='text-xs sm:text-base font-mono font-medium'>ventas2@diesellider.com.ar </p>
              </div>
            </div>
            <div className='w-[300px] text-center flex flex-col items-center justify-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Nacional Potencial</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-xs sm:text-base font-mono font-medium mb-1'>ventas.diesellider@gmail.com</p>
                <p className='text-xs sm:text-base font-mono font-medium mb-1'>ventas1.diesellider@gmail.com</p>
                <p className='text-xs sm:text-base font-mono font-medium'>ventas2.diesellider@gmail.com</p>
              </div>
            </div>
          </div>


          <div className='mt-5 flex flex-wrap justify-center gap-5 w-full'>
          <div className='w-[300px] text-center flex flex-col items-center justify-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Exterior</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-xs sm:text-base font-mono font-medium mb-1'>ilardone@diesellider.com.ar</p>
              </div>
            </div>
            <div className='w-[300px] text-center flex flex-col items-center justify-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Exterior Potencial</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-xs sm:text-base font-mono font-medium mb-1'>ilardone.diesellider@gmail.com</p>
              </div>
            </div>
          </div>

          <div className='w-full text-center mt-10'>
            <h2 className='font-mono font-semibold text-3xl'>Proveedores</h2>
          </div>

          <div className='mt-5 flex flex-wrap justify-center gap-5 w-full'>
          <div className='w-[300px] text-center flex flex-col items-center justify-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Nacional</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-xs sm:text-base font-mono font-medium mb-1'>compras@diesellider.com.ar</p>
              </div>
            </div>
            <div className='w-[300px] text-center flex flex-col items-center justify-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Nacional Potencial</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-xs sm:text-base font-mono font-medium mb-1'>compras@diesellider.com.ar</p>
              </div>
            </div>
          </div>

          <div className='mt-5 flex flex-wrap justify-center gap-5 w-full'>
            <div className='w-[300px] text-center flex flex-col items-center justify-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Exterior</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-xs sm:text-base font-mono font-medium mb-1'>comex@diesellider.com.ar</p>
                <p className='text-xs sm:text-base font-mono font-medium'>comex1@diesellider.com.ar</p>
              </div>
            </div>
            <div className='w-[300px] text-center flex flex-col items-center justify-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Exterior Potencial</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-xs sm:text-base font-mono font-medium mb-1'>comex.diesellider@gmail.com</p>
                <p className='text-xs sm:text-base font-mono font-medium'>comex1.diesellider@gmail.com</p>
              </div>
            </div>
          </div>

          <div className='w-full text-center mt-10'>
            <h2 className='font-mono font-semibold text-3xl'>Otras áreas</h2>
          </div>

          <div className='mt-5 flex flex-wrap justify-center gap-5 w-full'>
          <div className='w-[300px] text-center flex flex-col items-center justify-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Recursos Humanos</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-xs sm:text-base font-mono font-medium mb-1'>rrhh@diesellider.com.ar</p>
              </div>
            </div>
            <div className='w-[300px] text-center flex flex-col items-center justify-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Administración</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-xs sm:text-base font-mono font-medium mb-1'>administracion@diesellider.com.ar</p>
                <p className='text-xs sm:text-base font-mono font-medium'>adm.diesellider@gmail.com</p>
              </div>
            </div>
            <div className='w-[300px] text-center flex flex-col items-center justify-center'>
                <p className='font-mono font-extrabold uppercase text-center items-center'>
                    <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Gerencia</span>
                </p>
                <div className='mt-5 text-center flex flex-col'>
                    <p className='text-xs sm:text-base font-mono font-medium mb-1'>diesellider@diesellider.com.ar</p>
                    <p className='text-xs sm:text-base font-mono font-medium'>diesellider@gmail.com</p>
                </div>
            </div>
         
          </div>
                    
        </div>
        
        
      </div>
  )
}

export default MailInfo