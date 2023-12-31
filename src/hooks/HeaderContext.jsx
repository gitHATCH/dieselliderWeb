/* Contexto del Header */

import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


const HeaderContext = React.createContext([{}, ()=>{}])

const HeaderProvider = (props) => {
    const [collaps, setCollaps] = useState(true)
    const [showStatus, setShowStatus] = useState(false)
    const [modalUser, setModalUser] = useState(false)
    const [actualPage, setActualPage] = useState("")
    const [dataPage, setDataPage] = useState(0)
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
    
    const handleOpenModalUser = () => {
        setModalUser(true)
    }
   
    const handleCloseModalUser = () => {
        setModalUser(false)
    }
    const handleDataPage = (page) => {
        setDataPage(page)
    }

    return (
        <HeaderContext.Provider value={{collaps, handleCollaps, showStatus, okShowStatus, hideShowStatus, actualPage, modalUser, handleOpenModalUser, handleCloseModalUser, dataPage, handleDataPage}}>
            {props.children}
        </HeaderContext.Provider>
    )      
}

export {HeaderContext, HeaderProvider}