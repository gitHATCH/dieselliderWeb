import { Tooltip } from '@mui/material'
import Link from 'next/link'
import React, { useContext } from 'react'
import { HeaderContext } from '../../../hooks/HeaderContext'
import { useRouter } from 'next/router'

const MenuBtn = () => {
    const {collaps, handleCollaps, showStatus, okShowStatus, hideShowStatus, actualPage, modal, handleOpenModal, dataPage, handleDataPage} = useContext(HeaderContext)
    const router = useRouter()

    const handleMenu = (page) => {
       router.push(page)
    }

  return (
    <div className='hidden 2xl:ml-20 sm:flex justify-between w-full gap-5 lg:flex-row lg:justify-start lg:gap-10 px-5 lg:px-10'>

        <Tooltip
            classes={{ tooltip: 'custom-tooltip' }}
            title={
                <div className="flex flex-col space-y-2"  style={{ backgroundColor: '#262626', padding: '10px', borderRadius: '5px'  }}>
                    <Link href={"/"}><button className='uppercase text-xs md:text-lg 2xl:text-2xl btnMenuOption font-mono p-2'>Catálogo</button></Link>
                    <Link href={"/novedades"}><button className='uppercase text-xs md:text-lg 2xl:text-2xl btnMenuOption font-mono p-2'>Novedades</button></Link>
                    <Link href={"/ofertas"}><button className='uppercase text-xs md:text-lg 2xl:text-2xl btnMenuOption font-mono p-2'>Ofertas</button></Link>
                    <Link href={"/precios"}><button className='uppercase text-xs md:text-lg 2xl:text-2xl btnMenuOption font-mono p-2'>Lista de Precios</button></Link>
                </div>
            }
            placement="bottom"
            arrow
        >
            <button 
                className={`uppercase text-sm sm:text-lg lg:text-xl 2xl:text-3xl font-semibold btnMenu ${(actualPage.split("/")[1] === "precios" || actualPage.split("/")[1] === "ofertas" || actualPage.split("/")[1] === "novedades" || !actualPage.split("/")[1]) && "btnMenuActive"}`}
            >
                <Link href={"/"}>
                    <p style={{ whiteSpace: 'nowrap' }}>Productos</p>                                                  
                </Link>
            </button>
        </Tooltip>
        
        
        <div className='flex items-center'>
            <Link href={"/pedidos"}>
                <button 
                    className={` uppercase text-sm sm:text-lg lg:text-xl 2xl:text-3xl font-semibold btnMenu ${(actualPage.split("/")[1] === "pedidos") && "btnMenuActive"}`}
                >
                    <p style={{ whiteSpace: 'nowrap' }}>Mis Pedidos</p>                                                  
                </button>
            </Link>
        </div>
        <div className=' flex items-center'>
            <Link href={"/cuentaCorriente"}>
                <button 
                    className={`uppercase text-sm sm:text-lg lg:text-xl 2xl:text-3xl font-semibold btnMenu ${(actualPage.split("/")[1] === "cuentaCorriente") && "btnMenuActive"}`}
                >
                    <p style={{ whiteSpace: 'nowrap' }}>Cuenta Corriente</p>                                                  
                </button>
            </Link>
        </div>
        <div className='flex items-center'>
            <Link href={"/contacto"}>
                <button 
                    className={`uppercase text-sm sm:text-lg lg:text-xl 2xl:text-3xl font-semibold btnMenu ${(actualPage.split("/")[1] === "contacto") && "btnMenuActive"}`}
                >
                    <p style={{ whiteSpace: 'nowrap' }}>Contacto</p>                                                  
                </button>
            </Link>
        </div>
        <div className='w-1/4'>

        </div>
        

    </div>
  )
}

export default MenuBtn