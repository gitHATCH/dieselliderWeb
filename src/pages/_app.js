/* Construccion inicial de la APP */
import { useState, useEffect } from 'react';
import '../styles/globals.css'
import Layout from '../components/Layout';
import { SlidebarProvider } from '../hooks/SlidebarContext';
import { ToastContainer } from 'react-toastify';
import { ModalProvider } from '../hooks/ModalContext';
import { AuthProvider } from '../hooks/AuthContext';

function MyApp({ Component, pageProps }) {
  const [paginaLista, setPaginaLista] = useState(false)

  useEffect(() => {
    setPaginaLista(true)
  }, [])

  return paginaLista ? (
    <AuthProvider>
      <ModalProvider>
          <SlidebarProvider>
            <ToastContainer closeOnClick /> 
            <Layout>
              <Component {...pageProps}/>
            </Layout>
          </SlidebarProvider>
      </ModalProvider>
    </AuthProvider>
  ) : null
  
        
}

export default MyApp
