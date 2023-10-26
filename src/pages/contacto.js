import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContactForm from '../components/forms/ContactForm';

//TODO: Modularizar

const Contacto = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center'>
      <div className=' w-full text-center mt-10'>
        <h1 className='font-mono font-semibold text-5xl'>Centro de Atención</h1>
      </div>

      <div className='flex flex-row w-1/2 bg-slate-300 rounded-md shadow-md shadow-black mt-7 p-4'>
        <div className='w-1/2 flex flex-col items-center justify-center h-full'>
          <div className='rounded-full bg-blue shadow-lg shadow-black p-2 text-green-900'>
            <PhoneIcon style={{fontSize:60}}/>
          </div>
          <div className='mt-10'>
          <div className='text-center'>
            <p className='text-lg font-mono font-medium mb-1'>351 422-7861 (Arg)</p>
            <p className='text-lg font-mono font-medium mb-1'>0054 351 422-7861 (Ext)</p>
            <p className='text-lg font-mono font-medium'>351 424-8876 (Fax)</p>
          </div>
          </div>          
        </div>
        <div className='w-1/2 flex flex-col items-center justify-center h-full'>
          <div className='rounded-full bg-blue shadow-lg shadow-black p-2 text-green-900'>
            <WhatsAppIcon style={{fontSize:60}}/>
          </div>
          <div className='mt-10 text-center flex flex-col'>
            <p className='text-lg font-mono font-medium mb-1'>+54 9 351 2005843</p>
            <p className='text-lg font-mono font-medium mb-1'>+54 9 351 2006173</p>
            <p className='text-lg font-mono font-medium'>+54 9 351 2003408</p>
          </div>
        </div>
      </div>

      <div className='flex flex-row w-2/3 bg-slate-300 rounded-lg shadow-md shadow-black mt-10 p-4'>
        <div className='w-full flex flex-col items-center justify-center h-full'>
          <div className='rounded-full bg-blue shadow-lg shadow-black p-2 text-green-900'>
            <MailOutlineIcon style={{fontSize:60}}/>
          </div>
          <div className='w-full text-center mt-10'>
            <h2 className='font-mono font-semibold text-3xl'>Clientes</h2>
          </div>
          <div className='mt-5 flex flex-row w-full'>
            <div className='w-1/2 text-center items-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Nacional</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-lg font-mono font-medium mb-1'>ventas@diesellider.com.ar</p>
                <p className='text-lg font-mono font-medium mb-1'>ventas1@diesellider.com.ar</p>
                <p className='text-lg font-mono font-medium'>ventas2@diesellider.com.ar </p>
              </div>
            </div>
            <div className='w-1/2 text-center items-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Nacional Potencial</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-lg font-mono font-medium mb-1'>ventas.diesellider@gmail.com</p>
                <p className='text-lg font-mono font-medium mb-1'>ventas1.diesellider@gmail.com</p>
                <p className='text-lg font-mono font-medium'>ventas2.diesellider@gmail.com</p>
              </div>
            </div>
          </div>

          <div className='mt-10 flex flex-row w-full'>
            <div className='w-1/2 text-center items-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Exterior</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-lg font-mono font-medium mb-1'>ilardone@diesellider.com.ar</p>
              </div>
            </div>
            <div className='w-1/2 text-center items-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Exterior Potencial</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-lg font-mono font-medium mb-1'>ilardone.diesellider@gmail.com</p>
              </div>
            </div>
          </div>

          <div className='w-full text-center mt-10'>
            <h2 className='font-mono font-semibold text-3xl'>Proveedores</h2>
          </div>

          <div className='mt-10 flex flex-row w-full'>
            <div className='w-1/2 text-center items-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Nacional</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-lg font-mono font-medium mb-1'>compras@diesellider.com.ar</p>
              </div>
            </div>
            <div className='w-1/2 text-center items-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Nacional Potencial</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-lg font-mono font-medium mb-1'>compras@diesellider.com.ar</p>
              </div>
            </div>
          </div>

          <div className='mt-10 flex flex-row w-full'>
            <div className='w-1/2 text-center items-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Exterior</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-lg font-mono font-medium mb-1'>comex@diesellider.com.ar</p>
                <p className='text-lg font-mono font-medium'>comex1@diesellider.com.ar</p>
              </div>
            </div>
            <div className='w-1/2 text-center items-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Exterior Potencial</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-lg font-mono font-medium mb-1'>comex.diesellider@gmail.com</p>
                <p className='text-lg font-mono font-medium'>comex1.diesellider@gmail.com</p>
              </div>
            </div>
          </div>

          <div className='w-full text-center mt-10'>
            <h2 className='font-mono font-semibold text-3xl'>Otras áreas</h2>
          </div>

          <div className='mt-10 flex flex-row w-full'>
            <div className='w-1/2 text-center items-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Recursos Humanos</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-lg font-mono font-medium mb-1'>rrhh@diesellider.com.ar</p>
              </div>
            </div>
            <div className='w-1/2 text-center items-center'>
              <p className='font-mono font-extrabold uppercase text-center items-center'>
                <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Administración</span>
              </p>
              <div className='mt-5 text-center flex flex-col'>
                <p className='text-lg font-mono font-medium mb-1'>administracion@diesellider.com.ar</p>
                <p className='text-lg font-mono font-medium'>adm.diesellider@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='mt-10 w-full text-center items-center'>
            <p className='font-mono font-extrabold uppercase text-center items-center'>
              <span className='bg-prim shadow-md shadow-black text-black hover:opacity-80 cursor-default p-2 rounded-xl'>Gerencia</span>
            </p>
            <div className='mt-5 text-center flex flex-col'>
              <p className='text-lg font-mono font-medium mb-1'>diesellider@diesellider.com.ar</p>
              <p className='text-lg font-mono font-medium'>diesellider@gmail.com</p>
            </div>
          </div>
                    
        </div>
        
        
      </div>
      <div className='w-full text-center mt-10'>
            <h2 className='font-mono font-semibold text-3xl'>Contáctenos</h2>
      </div>
      <div className='mt-5 mb-20 w-1/2 bg-slate-300 rounded-xl shadow-md shadow-black'>
       <ContactForm/> 
      </div>

    </div>
  )
}

export default Contacto