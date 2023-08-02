import { useContext, useState } from 'react';
import { AuthContext } from '../hooks/AuthContext';

import Login from '../components/Login';
import ProductsLayout from '../components/ProductsLayout';
import Search from '../components/Search';

export default function Home() {
  const {loading,auth} = useContext(AuthContext);
  
  return (
    <>
      {!loading && (
        !auth ? <Login/> : (
          <>
            <Search/>
          </>
        )
      )}
    </>
  ) 
}

