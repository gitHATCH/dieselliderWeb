import React, { useContext, useEffect } from 'react'
import ProductMenuHeader from './ProductMenuHeader'
import { SlidebarContext } from '../hooks/SlidebarContext'
import { useRouter } from 'next/router'
const ProductsLayout = ({children}) => {
  const [collaps, handleCollaps, showStatus, okShowStatus, hideShowStatus, actualPage, modal, handleOpenModal] = useContext(SlidebarContext)
  const router = useRouter()
  const handlePage = () => {
    const page = router.pathname.split("/")[1]
    if(!page) return "catálogo"
    else if(page === "novedades") return "Novedades"
    else if(page === "ofertas") return "Ofertas"
    else if(page === "precios") return "Lista de Precios"
  }
  
  console.log(handlePage());

  return (
    <div>
      <ProductMenuHeader page={handlePage()}/>
      {children}
    </div>
  )
}

export default ProductsLayout