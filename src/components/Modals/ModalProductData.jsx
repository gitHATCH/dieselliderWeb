import React, { useContext } from 'react'


import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import { toast } from 'react-toastify';
import { ModalContext } from '../../hooks/ModalContext';
import { AuthContext } from '../../hooks/AuthContext';
import { ThemeProvider, createTheme } from '@mui/material';

const ModalProductData = ({product}) => {
    const {modalProductData,handleModalProductData} = useContext(ModalContext);
    const cancelOption = () => {
        handleModalProductData()
    }
    const confirmOption = () => {
        handleModalProductData()
    }
    console.log(product);
    //Diseño Modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1100,
        boxShadow: 24,
        p: 4,
      };    

    const theme = createTheme({
        components: {
            MuiBackdrop: {
                styleOverrides: {
                    root: {
                        backdropFilter: 'blur(5px)',
                    },
                },
            },
        },
    });
      
  return (
    <ThemeProvider theme={theme}>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalProductData}
        onClose={handleModalProductData}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
            backdrop: {
                timeout: 500,
            },
        }}
    >
        <Fade in={modalProductData}>
            <Box sx={style} className="rounded-xl bg-black">
                <div className='flex'>
                <div className='flex-1 flex-col'>
                    <Typography id="transition-modal-title" className='text-slate-300 font-mono font-semibold' variant="h5" component="h2">
                        Detalles del producto
                    </Typography>
                    <div className='flex justify-between mt-10'>
                        
                        <div className='w-full p-5'>
                            <div className='flex justify-between'>
                                <p className='text-lg font-semibold w-2/3 text-white'>Código DL: <span className='ml-2 font-normal bg-slate-300 shadow-black shadow-inner rounded-xl p-2 text-black'>{product.code}</span></p>
                                <p className='text-lg font-semibold w-1/2'>Marca: <span className='ml-2 font-normal  bg-slate-300 shadow-black shadow-inner rounded-xl p-2'>{product.brand}</span></p>
                            </div>
                            <p className='text-lg font-semibold '>Descripción: <span className='ml-2 font-normal  bg-slate-300 shadow-black shadow-inner rounded-xl p-2'>{product.descr}</span></p>

                            <div className='flex justify-between'>
                                <p className='text-lg font-semibold w-2/3'>Tipo de Producto: <span className='ml-2 font-normal  bg-slate-300 shadow-black shadow-inner rounded-xl p-2'>{product.type}</span></p>
                                <p className='text-lg font-semibold w-1/2'>Sección: <span className='ml-2 font-normal  bg-slate-300 shadow-black shadow-inner rounded-xl p-2'>{product.section}</span></p>
                            </div> 
                            <p className='text-lg font-semibold '>Grupo: <span className='ml-2 font-normal  bg-slate-300 shadow-black shadow-inner rounded-xl p-2'>{product.group}</span></p>
                            <p className='text-lg font-semibold '>Subgrupo: <span className='ml-2 font-normal  bg-slate-300 shadow-black shadow-inner rounded-xl p-2'>{product.subgroup}</span></p>
                            <p className='text-lg font-semibold '>N° de Parte: <span className='ml-2 font-normal  bg-slate-300 shadow-black shadow-inner rounded-xl p-2'>{product.partNumb}</span></p>
                            <p className='text-lg font-semibold '>Unidad de Medida: <span className='ml-2 font-normal  bg-slate-300 shadow-black shadow-inner rounded-xl p-2'>{product.unity}</span></p>
                            <div className='flex justify-between'>
                                <p className='text-lg font-semibold w-2/3'>Precio: <span className='ml-2 font-normal  bg-slate-300 shadow-black shadow-inner rounded-xl p-2'>{product.price}</span></p>
                                <p className='text-lg font-semibold w-1/2'>Descuento: <span className='ml-2 font-normal  bg-slate-300 shadow-black shadow-inner rounded-xl p-2'>%{product.disc}</span></p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-lg font-semibold w-2/3'>Precio Neto: <span className='ml-2 font-normal  bg-slate-300 shadow-black shadow-inner rounded-xl p-2'>{product.charge}</span></p>
                                <p className='text-lg font-semibold w-1/2'>Stock: <span className='ml-2 font-normal  bg-slate-300 shadow-black shadow-inner rounded-xl p-2'>{product.stock ? "True" : "False"}</span></p>
                            </div>
                            
                        </div>
                        <div className=''>
                            <p className='text-2xl ml-2 text-white font-semibold font-mono mb-0'>NOTAS</p>
                            <div className='bg-slate-300 rounded-xl p-2 shadow-black shadow-inner'>
                                <p>Observaciones:</p>
                                <p className='mt-5'>{product.obs}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className=''>
                    <CancelIcon className='text-red-700 hover:cursor-pointer hover:text-red-500' onClick={handleModalProductData} style={{fontSize:25}}/>
                </div>
                </div>
            </Box>
        </Fade>
    </Modal>
    </ThemeProvider>
  )
}

export default ModalProductData