import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { HeaderContext } from '../../hooks/HeaderContext';


const HeaderMobile = () => {
    const router = useRouter()
    const { actualPage } = useContext(HeaderContext)


    const handleRouter = (page) => {
      router.push(page)
    }
  return (
    <div className='sm:hidden fixed bottom-0 left-0 w-full items-center flex justify-between'>
        <div className='w-full p-1 bg-sec flex justify-center items-center rounded-tl-3xl hover:cursor-pointer hover:opacity-90' onClick={() => handleRouter("/")}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-[50px] ${(actualPage.split("/")[1] === "precios" || actualPage.split("/")[1] === "ofertas" || actualPage.split("/")[1] === "novedades" || !actualPage.split("/")[1]) && "fill-white"}`} viewBox="0 0 24 24"><title>Productos</title><path d="M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z" /></svg>
        </div>
        <div className='w-full p-1 bg-sec flex justify-center items-center  hover:cursor-pointer hover:opacity-90' onClick={() => handleRouter("/pedidos")}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-[50px] ${(actualPage.split("/")[1] === "pedidos") && "fill-white"}`} viewBox="0 0 24 24"><title>Mis Pedidos</title><path d="M4 2A2 2 0 0 0 2 4V20A2 2 0 0 0 4 22H12.41A7 7 0 0 0 16 23A7 7 0 0 0 23 16A7 7 0 0 0 18 9.3V8L12 2H4M4 4H11V9H16A7 7 0 0 0 9 16A7 7 0 0 0 10.26 20H4V4M16 11A5 5 0 0 1 21 16A5 5 0 0 1 16 21A5 5 0 0 1 11 16A5 5 0 0 1 16 11M15 12V17L18.61 19.16L19.36 17.94L16.5 16.25V12H15Z" /></svg>
        </div>
        <div className='w-full p-1 bg-sec flex justify-center  items-center hover:cursor-pointer hover:opacity-90' onClick={() => handleRouter("/cuentaCorriente")}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-[50px] ${(actualPage.split("/")[1] === "cuentaCorriente") && "fill-white"}`} viewBox="0 0 24 24"><title>Cuenta Corriente</title><path d="M15 10C15 9.45 15.45 9 16 9C16.55 9 17 9.45 17 10S16.55 11 16 11 15 10.55 15 10M8 9H13V7H8V9M22 7.5V14.47L19.18 15.41L17.5 21H12V19H10V21H4.5C4.5 21 2 12.54 2 9.5S4.46 4 7.5 4H12.5C13.41 2.79 14.86 2 16.5 2C17.33 2 18 2.67 18 3.5C18 3.71 17.96 3.9 17.88 4.08C17.74 4.42 17.62 4.81 17.56 5.23L19.83 7.5H22M20 9.5H19L15.5 6C15.5 5.35 15.59 4.71 15.76 4.09C14.79 4.34 14 5.06 13.67 6H7.5C5.57 6 4 7.57 4 9.5C4 11.38 5.22 16.15 6 19H8V17H14V19H16L17.56 13.85L20 13.03V9.5Z" /></svg>
        </div>
        <div className='w-full p-1 bg-sec flex justify-center items-center rounded-tr-3xl hover:cursor-pointer hover:opacity-90' onClick={() => handleRouter("/contacto")}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-[50px] ${(actualPage.split("/")[1] === "contacto") && "fill-white"}`} viewBox="0 0 24 24"><title>Contacto</title><path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H9.18C9.6,1.84 10.7,1 12,1C13.3,1 14.4,1.84 14.82,3H19M12,3A1,1 0 0,0 11,4A1,1 0 0,0 12,5A1,1 0 0,0 13,4A1,1 0 0,0 12,3M7,7V5H5V19H19V5H17V7H7M12,9A2,2 0 0,1 14,11A2,2 0 0,1 12,13A2,2 0 0,1 10,11A2,2 0 0,1 12,9M8,17V16C8,14.9 9.79,14 12,14C14.21,14 16,14.9 16,16V17H8Z" /></svg>
        </div>
    </div>
  )
}

export default HeaderMobile