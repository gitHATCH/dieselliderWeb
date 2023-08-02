/* Layout que divide entre slidebar y contenido */
import React, { useContext } from 'react'
import SidebarLayout from './SidebarLayout'
import { SlidebarContext } from '../hooks/SlidebarContext'




import { ProductProvider } from '../hooks/ProductContext';
import { ClientProvider } from '../hooks/ClientContext';
import { DriverProvider } from '../hooks/DriverContext';
import { OrderProvider } from '../hooks/OrderContext';
import { TruckProvider } from '../hooks/TruckContext';
import { AuthContext } from '../hooks/AuthContext';


const Layout = ({children}) => {
  const [collaps] = useContext(SlidebarContext)
  const {auth, loading} = useContext(AuthContext);
  console.log(auth);
  return (
    <>
      {!loading && (
          <>
            <div className='flex flex-col h-screen w-full'>
              
              <div className={`w-full h-1/9`}>
                <SidebarLayout/>
              </div>
            
              <div className={`w-full h-full overflow-y-auto`}>
                {children}
              </div>
            </div>  
          </>
      )}
    </>
      
  )
}

export default Layout