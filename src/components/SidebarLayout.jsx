
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import React, {useContext, useEffect, useState} from 'react'
import Link from 'next/link';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { HeaderContext } from '../hooks/HeaderContext';
import { ModalContext } from '../hooks/ModalContext';
import ModalLogOut from './Modals/ModalLogOut';
import { AuthContext } from '../hooks/AuthContext';
import { useRouter } from 'next/router';

import Logo from "../assets/images/LogoDL.png"


import { Button, Container, Tooltip } from '@mui/material';
import Image from 'next/image';
import ProductMenuHeader from './ProductMenuHeader';





//Comprobar autorizar

const SidebarLayout = () => {
    const [collaps, handleCollaps, showStatus, okShowStatus, hideShowStatus, actualPage, modal, handleOpenModal] = useContext(HeaderContext)
    const [modalDelete, modalEdit, handleModalDelete, handleModalEdit, handleModalLogOut, modalLogOut] = useContext(ModalContext)
    const {auth} = useContext(AuthContext);
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
                                            width={180}
                                            height={110}
                                            alt='Diesel Lider Logo'
                                        />
                                    </div>
                                                                
                                    <div className='md:ml-10 2xl:ml-20 flex flex-row w-full'>
                                        <Tooltip
                                            classes={{ tooltip: 'custom-tooltip' }}
                                            title={
                                                <div className="flex flex-col space-y-2"  style={{ backgroundColor: '#1c5560', padding: '10px', borderRadius: '5px'  }}>
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
                                        <div className='ml-10'>
                                            <Link href={"/servicios"}>
                                                <button 
                                                    className={`uppercase md:text-xl 2xl:text-3xl font-semibold btnMenu ${(actualPage.split("/")[1] === "servicios") && "btnMenuActive"}`}
                                                >
                                                    <p>Servicios</p>                                                  
                                                </button>
                                            </Link>

                                        </div>
                                        <div className='ml-10'>
                                            <Link href={"/consultas"}>
                                                <button 
                                                    className={`uppercase md:text-xl 2xl:text-3xl font-semibold btnMenu ${(actualPage.split("/")[1] === "consultas") && "btnMenuActive"}`}
                                                >
                                                    <p>Consultas</p>                                                  
                                                </button>
                                            </Link>

                                        </div>
                                        <div className='ml-10'>
                                            <Link href={"/contacto"}>
                                                <button 
                                                    className={`uppercase md:text-xl 2xl:text-3xl font-semibold btnMenu ${(actualPage.split("/")[1] === "contacto") && "btnMenuActive"}`}
                                                >
                                                    <p>Contacto</p>                                                  
                                                </button>
                                            </Link>

                                        </div>
                                        

                                    </div>
                                    <div className='w-full justify-end flex flex-row'>
                                        <button className='uppercase md:mr-10 2xl:mr-20 font-semibold btnMenu'>
                                            <div className='2xl:hidden'>
                                                <ShoppingCartIcon style={{fontSize:40}}/>
                                            </div>
                                            <div className='hidden 2xl:block'>
                                                <ShoppingCartIcon style={{fontSize:50}}/>
                                            </div>
                                        </button>
                                        <button className='uppercase font-semibold btnMenu 2xl:mr-10'>
                                            <div className='2xl:hidden'>
                                                <AccountCircleIcon style={{fontSize:40}}/>
                                            </div>
                                            <div className='hidden 2xl:block'>
                                                <AccountCircleIcon style={{fontSize:50}}/>
                                            </div>
                                        </button>
                                    </div>
                                    
                                </div>
                        </div>
                        
                    </div>
                </div>
                {(!actualPage.split("/")[1] || actualPage.split("/")[1] === "novedades" || actualPage.split("/")[1] === "ofertas" || actualPage.split("/")[1] === "precios") && <ProductMenuHeader/>}
            </>
            )}
        </>
  )
}

export default SidebarLayout


