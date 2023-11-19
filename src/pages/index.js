import { useContext, useState } from 'react';
import { AuthContext } from '../hooks/AuthContext';

import LoginLayout from '../components/login/LoginLayout';
import Products from '../components/products/ProductsSearchTypeSelector';

export default function Home() {
  const {loading,auth} = useContext(AuthContext);
  
  return (
    <>
      {!loading && (
        !auth ? <LoginLayout/> : (
          <div className=''>
            <Products/>
          </div>
        )
      )}
    </>
  ) 
}

//TODO: Change pedido, pedidos, orders, cuentaCorriente-forms, app