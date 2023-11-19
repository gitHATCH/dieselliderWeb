/* Construccion inicial de la APP */
import { useState, useEffect } from 'react';
import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout';
import { HeaderProvider } from '../hooks/HeaderContext';
import { ToastContainer } from 'react-toastify';
import { ModalProvider } from '../hooks/ModalContext';
import { AuthProvider } from '../hooks/AuthContext';
import { ProductProvider } from '../hooks/ProductContext';
import { OrderProvider } from '../hooks/OrderContext';

function MyApp({ Component, pageProps }) {
  const [paginaLista, setPaginaLista] = useState(false)

  useEffect(() => {
    setPaginaLista(true)
  }, [])

  return paginaLista ? (
    
    <AuthProvider>
      <ModalProvider>
          <HeaderProvider>
            <ProductProvider>
              <OrderProvider>
                <ToastContainer closeOnClick autoClose={1000} position="bottom-right"/> 
                <Layout>
                  <Component {...pageProps}/>
                </Layout>
              </OrderProvider>
            </ProductProvider>
          </HeaderProvider>
      </ModalProvider>
    </AuthProvider>
  ) : null
  
        
}

export default MyApp
