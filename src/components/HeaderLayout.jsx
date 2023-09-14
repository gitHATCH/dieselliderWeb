
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import React, {useContext, useEffect, useState} from 'react'
import Link from 'next/link';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { HeaderContext } from '../hooks/HeaderContext';
import { ModalContext } from '../hooks/ModalContext';
import { AuthContext } from '../hooks/AuthContext';
import { useRouter } from 'next/router';

import Logo from "../assets/images/LogoDL.png"
import ModalLogOut from './Modals/ModalLogOut';
import { Button, Container, Tooltip } from '@mui/material';
import Image from 'next/image';
import ProductMenuHeader from './ProductMenuHeader';
import ModalNotifications from './Modals/ModalNotifications';





//Comprobar autorizar

const HeaderLayout = () => {
    const [collaps, handleCollaps, showStatus, okShowStatus, hideShowStatus, actualPage, modal, handleOpenModal] = useContext(HeaderContext)
    const {auth} = useContext(AuthContext);
    const {modalLogOut, handleModalLogOut,modalNotifications,handleModalNotifications} = useContext(ModalContext)
    const router = useRouter()
   
    const swapPage = (toPage) => {
      router.push(toPage)
    }
  
    const swapPageProduct = (toPage) => {
      handleCloseProductMenu()
      handleActualPage("Productos")
      //navigation.navigate(toPage);
    }

      return (
        <>
        {auth && (
            <>
                <div className='shadow-md shadow-black header'>
                    <div position="static">
                        <div className='p-2 px-6 2xl:p-5 2xl:ml-10'>
                                <div className='flex items-center w-full'>
                                    <div className='hover:cursor-pointer' onClick={() => router.push("/")}>
                                        {/* 2xl Resolution */}
                                        <div className='hidden 2xl:block'>
                                            <Image
                                                src={Logo}
                                                width={300}
                                                height={170}
                                                alt='Diesel Lider Logo'
                                            />
                                        </div>
                                        {/* Other Resolution */}
                                        <div className='2xl:hidden'>
                                            <Image
                                                src={Logo}
                                                width={150}
                                                height={80}
                                                alt='Diesel Lider Logo'
                                            />
                                        </div>
                                    </div>
                                    
                                                                
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
                                       
                                        {/* <div className='ml-10'>
                                            <Link href={"/servicios"}>
                                                <button 
                                                    className={`uppercase md:text-xl 2xl:text-3xl font-semibold btnMenu ${(actualPage.split("/")[1] === "servicios") && "btnMenuActive"}`}
                                                >
                                                    <p>Servicios</p>                                                  
                                                </button>
                                            </Link>

                                        </div> */}
                                        {/* <div className='ml-10'>
                                            <Link href={"/consultas"}>
                                                <button 
                                                    className={`uppercase md:text-xl 2xl:text-3xl font-semibold btnMenu ${(actualPage.split("/")[1] === "consultas") && "btnMenuActive"}`}
                                                >
                                                    <p>Consultas</p>                                                  
                                                </button>
                                            </Link>

                                        </div> */}
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
                                    <div className='justify-end flex flex-row'>
                                        <button className='uppercase md:mr-10 2xl:mr-20 font-semibold btnMenu'>
                                            <div className='2xl:hidden'>
                                                <Link href={"/pedido"}>
                                                    <ShoppingCartIcon style={{fontSize:30}}/>
                                                </Link>
                                            </div>
                                            <div className='hidden 2xl:block'>
                                                <Link href={"/pedido"}>
                                                    <ShoppingCartIcon style={{fontSize:40}}/>
                                                </Link>
                                            </div>
                                        </button>
                                        
                                        <Tooltip
                                            classes={{ tooltip: 'custom-tooltip' }}
                                            title={
                                                <div className="flex flex-col space-y--10"  style={{ backgroundColor: '#1c5560', padding: '10px', borderRadius: '5px' , opacity:"80%"  }}>
                                                    <Link href={"/datos"}><button className='uppercase text-lg 2xl:text-2xl btnMenuOption font-mono p-2'>Mis Datos</button></Link>
                                                    <button className='uppercase text-lg 2xl:text-2xl btnMenuOption font-mono p-2'
                                                        onClick={handleModalNotifications}
                                                    >Notificaciones</button>
                                                    <button className='uppercase text-lg 2xl:text-2xl btnMenuOption font-mono p-2'>Cambiar Contraseña</button>
                                                    <button className='uppercase text-lg 2xl:text-2xl btnMenuOption font-mono p-2'
                                                        onClick={handleModalLogOut}
                                                    >Cerrar Sesión</button>
                                                </div>
                                            }
                                            placement="bottom"
                                            arrow
                                        >
                                            <button className='uppercase font-semibold btnMenu 2xl:mr-10'> 
                                                <div className='2xl:hidden'>
                                                    <AccountCircleIcon style={{fontSize:30}}/>
                                                </div>
                                                <div className='hidden 2xl:block'>
                                                    <AccountCircleIcon style={{fontSize:40}}/>
                                                </div>
                                            </button>
                                                                          
                                            
                                        </Tooltip>
                                    </div>
                                    
                                </div>
                        </div>
                        
                    </div>
                </div>
                {(!actualPage.split("/")[1] || actualPage.split("/")[1] === "novedades" || actualPage.split("/")[1] === "ofertas" || actualPage.split("/")[1] === "precios") && <ProductMenuHeader/>}
            </>
            )}
            {modalLogOut && <ModalLogOut/>}
            {modalNotifications && <ModalNotifications/>}
        </>
  )
}

export default HeaderLayout


