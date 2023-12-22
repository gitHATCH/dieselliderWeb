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
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [paginaLista, setPaginaLista] = useState(false)

  useEffect(() => {
    setPaginaLista(true)
  }, [])

  return (
    <>
      <Head>
        <title>Diesel Lider</title>
        <meta name="description" content="Diesel Lider Ecommerce" />
      </Head>
      {
        paginaLista && (
          <AuthProvider>
            <ModalProvider>
                <HeaderProvider>
                  <ProductProvider>
                    <OrderProvider>
                      <ToastContainer closeOnClick autoClose={3000} position="bottom-right"/> 
                      <Layout>
                        <Component {...pageProps}/>
                      </Layout>
                    </OrderProvider>
                  </ProductProvider>
                </HeaderProvider>
            </ModalProvider>
          </AuthProvider>
        )
      }
      
    </>
  )
        
}

export default MyApp
