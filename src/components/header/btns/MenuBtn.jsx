import { Tooltip } from '@mui/material'
import Link from 'next/link'
import React, { useContext } from 'react'
import { HeaderContext } from '../../../hooks/HeaderContext'

const MenuBtn = () => {
    const {collaps, handleCollaps, showStatus, okShowStatus, hideShowStatus, actualPage, modal, handleOpenModal, dataPage, handleDataPage} = useContext(HeaderContext)

  return (
    <div className='md:ml-10 2xl:ml-20 flex flex-row w-full'>
        <Tooltip
            classes={{ tooltip: 'custom-tooltip' }}
            title={
                <div className="flex flex-col space-y-2"  style={{ backgroundColor: '#1c5560', padding: '10px', borderRadius: '5px', opacity:"80%"  }}>
                    <Link href={"/"}><button className='uppercase text-lg 2xl:text-2xl btnMenuOption font-mono p-2'>Catálogo</button></Link>
                    <Link href={"/novedades"}><button className='uppercase text-lg 2xl:text-2xl btnMenuOption font-mono p-2'>Novedades</button></Link>
                    <Link href={"/ofertas"}><button className='uppercase text-lg 2xl:text-2xl btnMenuOption font-mono p-2'>Ofertas</button></Link>
                    <Link href={"/precios"}><button className='uppercase text-lg 2xl:text-2xl btnMenuOption font-mono p-2'>Lista de Precios</button></Link>
                </div>
            }
            placement="bottom"
            arrow
        >
            <button 
                className={`uppercase md:text-xl 2xl:text-3xl font-semibold btnMenu ${(actualPage.split("/")[1] === "precios" || actualPage.split("/")[1] === "ofertas" || actualPage.split("/")[1] === "novedades" || !actualPage.split("/")[1]) && "btnMenuActive"}`}
            >
                <Link href={"/"}>
                    <p>Productos</p>                                                  
                </Link>
            </button>
        </Tooltip>
        
        
        <div className='ml-10 flex items-center'>
            <Link href={"/pedidos"}>
                <button 
                    className={` uppercase md:text-xl 2xl:text-3xl font-semibold btnMenu ${(actualPage.split("/")[1] === "pedidos") && "btnMenuActive"}`}
                >
                    <p>Mis Pedidos</p>                                                  
                </button>
            </Link>
        </div>
        <div className='ml-10 flex items-center'>
            <Link href={"/cuentaCorriente"}>
                <button 
                    className={`uppercase md:text-xl 2xl:text-3xl font-semibold btnMenu ${(actualPage.split("/")[1] === "cuentaCorriente") && "btnMenuActive"}`}
                >
                    <p>Cuenta Corriente</p>                                                  
                </button>
            </Link>
        </div>
        <div className='ml-10 flex items-center'>
            <Link href={"/contacto"}>
                <button 
                    className={`uppercase md:text-xl 2xl:text-3xl font-semibold btnMenu ${(actualPage.split("/")[1] === "contacto") && "btnMenuActive"}`}
                >
                    <p>Contacto</p>                                                  
                </button>
            </Link>
        </div>
        <div className='w-1/4'>

        </div>
        

    </div>
  )
}

export default MenuBtn