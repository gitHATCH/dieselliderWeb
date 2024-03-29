/* Layout que divide entre Header y contenido */
import React, { useContext } from 'react'
import HeaderLayout from './header/HeaderLayout'
import { HeaderContext } from '../hooks/HeaderContext'




import { ProductProvider } from '../hooks/ProductContext';
import { ClientProvider } from '../hooks/ClientContext';
import { OrderProvider } from '../hooks/OrderContext';
import { AuthContext } from '../hooks/AuthContext';
import StoreIcon from '@mui/icons-material/Store';
import HeaderMobile from './header/HeaderMobile';


const Layout = ({children}) => {
  const {collaps} = useContext(HeaderContext)
  const {auth, loading} = useContext(AuthContext);

  return (
    <>
      {!loading && (
          <>
            <div className='flex flex-col h-screen w-full mb-0'>
              {auth && (
                <div className={`w-full h-1/9 `}>
                  <HeaderLayout/>
                </div>
              )}
              <div className={`w-full mb-10 sm:mb-0 h-full overflow-y-auto`}>
                {children}
              </div>
              <HeaderMobile/>
            </div>  
          </>
      )}
    </>
      
  )
}

export default Layout