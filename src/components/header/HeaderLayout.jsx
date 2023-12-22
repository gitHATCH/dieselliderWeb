
import React, {useContext, useEffect, useState} from 'react'
import { HeaderContext } from '../../hooks/HeaderContext';
import { ModalContext } from '../../hooks/ModalContext';
import { AuthContext } from '../../hooks/AuthContext';
import { useRouter } from 'next/router';
import ModalLogOut from '../modals/ModalLogOut';
import 'react-toastify/dist/ReactToastify.css';
import ProductMenuHeader from '../subheaders/ProductMenuHeader';
import ModalNotifications from '../modals/ModalNotifications';
import DataMenuHeader from '../subheaders/DataMenuHeader';
import UserOptionsBtn from './btns/UserOptionsBtn';
import ShoppingCartBtn from './btns/ShoppingCartBtn';
import MenuBtn from './btns/MenuBtn';
import HeaderLogo from './HeaderLogo';

//TODO: Modularizar
const HeaderLayout = () => {
    const {collaps, handleCollaps, showStatus, okShowStatus, hideShowStatus, actualPage, modal, handleOpenModal, dataPage, handleDataPage} = useContext(HeaderContext)
    const {auth} = useContext(AuthContext);
    const {modalLogOut, handleModalLogOut,modalNotifications,handleModalNotifications} = useContext(ModalContext)
    const router = useRouter()

   
      return (
        <>
        {auth && (
            <>
                <div className='shadow-md shadow-black header' >
                    <div position="static">
                        <div className='p-2 px-6 2xl:p-5 2xl:ml-10'>
                                <div className='flex items-center w-full'>
                                    <HeaderLogo/>
                                    <MenuBtn/>
                                    <div className='justify-end flex flex-row'>
                                        <ShoppingCartBtn/>
                                        <UserOptionsBtn/>
                                    </div>
                                    
                                </div>
                        </div>
                        
                    </div>
                </div>
                {(!actualPage.split("/")[1] || actualPage.split("/")[1] === "novedades" || actualPage.split("/")[1] === "ofertas" || actualPage.split("/")[1] === "precios") && <ProductMenuHeader/>}
                {(actualPage.split("/")[1] === "datos") && <DataMenuHeader option={dataPage} change={handleDataPage}/>}

            </>
            )}
            {modalLogOut && <ModalLogOut/>}
            {modalNotifications && <ModalNotifications/>}
        </>
  )
}

export default HeaderLayout