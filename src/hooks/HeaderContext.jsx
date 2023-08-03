/* Contexto del Header */

import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


const HeaderContext = React.createContext([{}, ()=>{}])

const HeaderProvider = (props) => {
    const [collaps, setCollaps] = useState(true)
    const [showStatus, setShowStatus] = useState(false)
    const [modal, setModal] = useState(false)
    const [actualPage, setActualPage] = useState("")
    const router = useRouter()

    
    useEffect(() => {
      actualPage !== router.pathname ? setActualPage(router.pathname) : null
    }, [router.pathname])
   
    const handleCollaps = (state) => {
        setCollaps(state)
    }
    
    const okShowStatus = () => {
        setShowStatus(true)
    }
  
    const hideShowStatus = () => {
        setShowStatus(false)
    }
    
    const handleOpenModal = () => {
        setModal(true)
    }
   
    const handleCloseModal = () => {
        setModal(false)
    }

    return (
        <HeaderContext.Provider value={[collaps, handleCollaps, showStatus, okShowStatus, hideShowStatus, actualPage, modal, handleOpenModal, handleCloseModal]}>
            {props.children}
        </HeaderContext.Provider>
    )      
}

export {HeaderContext, HeaderProvider}