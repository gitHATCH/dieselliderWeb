import { useContext, useState } from 'react';
import { AuthContext } from '../hooks/AuthContext';

import Login from '../components/Login';
import Products from '../components/Products';

export default function Home() {
  const {loading,auth} = useContext(AuthContext);
  
  return (
    <>
      {!loading && (
        !auth ? <Login/> : <Products/>
      )}
    </>
  ) 
}

