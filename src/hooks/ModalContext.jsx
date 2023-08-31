import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const ModalContext = React.createContext([{}, ()=>{}])

const ModalProvider = (props) => {
    const [modalLogOut, setModalLogOut] = useState(false)
    const [modalNotifications, setModalNotifications] = useState(false)

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
    
    return (
        <ModalContext.Provider value={{handleModalLogOut, modalLogOut,handleModalNotifications,modalNotifications}}>
            {props.children}
        </ModalContext.Provider>
    )      
}

export {ModalContext, ModalProvider}