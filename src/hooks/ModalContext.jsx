import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const ModalContext = React.createContext([{}, ()=>{}])

const ModalProvider = (props) => {
    const [modalLogOut, setModalLogOut] = useState(false)
    const [modalNotifications, setModalNotifications] = useState(false)
    const [modalProductData, setModalProductData] = useState(false)

    const router = useRouter()

    useEffect(() => {
        setModalNotifications(false)
        setModalLogOut(false)
      }, [router.pathname])

   
    const handleModalNotifications = () => {
        setModalNotifications(!modalNotifications)
    }

    const handleModalLogOut = () => {
        setModalLogOut(!modalLogOut)
    }

    const handleModalProductData = () => {
        setModalProductData(!modalProductData)
    }
    
    return (
        <ModalContext.Provider value={{handleModalLogOut, modalLogOut,handleModalNotifications,modalNotifications,handleModalProductData,modalProductData}}>
            {props.children}
        </ModalContext.Provider>
    )      
}

export {ModalContext, ModalProvider}