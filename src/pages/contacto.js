import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactForm from '../components/forms/ContactForm';
import MailInfo from '../components/contact/MailInfo';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

//TODO: Modularizar

const Contacto = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center'>
      <div className=' w-full text-center mt-10'>
        <h1 className='font-mono font-semibold text-xl sm:text-3xl lg:text-4xl'>Centro de Atención</h1>
      </div>

      <div className='flex flex-wrap justify-center gap-10 lg:justify-between lg:px-20 w-1/2 bg-slate-300 rounded-md shadow-md shadow-black mt-7 p-4'>
        <div className='flex flex-col items-center justify-center h-full'>
          <div className='text-green-900 '>
            <CallOutlinedIcon style={{fontSize:50}}/>
          </div>
          <div className='mt-5 text-center flex flex-col' style={{ whiteSpace: 'nowrap' }}>
            <p className='text-xs sm:text-base font-mono font-medium mb-1'>351 422-7861 (Arg)</p>
            <p className='text-xs sm:text-base font-mono font-medium mb-1'>0054 351 422-7861 (Ext)</p>
            <p className='text-xs sm:text-base font-mono font-medium'>351 424-8876 (Fax)</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center h-full'>
          <div className='text-green-900'>
            <WhatsAppIcon style={{fontSize:50}}/>
          </div>
          <div className='mt-5 text-center flex flex-col' style={{ whiteSpace: 'nowrap' }}>
            <p className='text-xs sm:text-base font-mono font-medium mb-1'>+54 9 351 2005843</p>
            <p className='text-xs sm:text-base font-mono font-medium mb-1'>+54 9 351 2006173</p>
            <p className='text-xs sm:text-base font-mono font-medium'>+54 9 351 2003408</p>
          </div>
        </div>
      </div>

      <MailInfo/>

      <div className='w-full text-center mt-5 sm:mt-20'>
            <h2 className='font-mono font-semibold text-3xl'>Contáctenos</h2>
      </div>
      <div className='mt-5 mb-20 w-11/12 sm:w-4/5 bg-slate-300 rounded-xl shadow-md shadow-black'>
       <ContactForm/> 
      </div>

    </div>
  )
}

export default Contacto