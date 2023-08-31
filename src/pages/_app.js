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
              <ToastContainer closeOnClick /> 
              <Layout>
                <Component {...pageProps}/>
              </Layout>
            </ProductProvider>
          </HeaderProvider>
      </ModalProvider>
    </AuthProvider>
  ) : null
  
        
}

export default MyApp
