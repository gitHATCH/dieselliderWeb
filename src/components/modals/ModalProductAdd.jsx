import React, { useContext } from 'react'


import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import CircleIcon from '@mui/icons-material/Circle';
import Zoom from '@mui/material/Zoom';
import { toast } from 'react-toastify';
import { ModalContext } from '../../hooks/ModalContext';
import { FormControl, InputLabel, OutlinedInput, TextField, ThemeProvider, Tooltip, createTheme } from '@mui/material';
import { OrderContext } from '../../hooks/OrderContext';
import { useRouter } from 'next/router';
const ModalProductAdd = ({product}) => {
    const {modalProductAdd,handleModalProductAdd} = useContext(ModalContext);
    const {addProduct,order,checkAlreadyExist,deleteProduct} = useContext(OrderContext)
    const router = useRouter()

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1000,
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

    const handleAddProduct = () => {
        checkAlreadyExist(product.code) ? deleteProduct(product.code) : addProduct(product)
        handleModalProductAdd()
    }
    const handleAddProductAndOrder = () => {
        handleAddProduct()
        router.push('/pedido')
    }
    const handleCancel = () => {
        handleModalProductAdd()
    }
      
  return (
    <ThemeProvider theme={theme}>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalProductAdd}
        onClose={handleModalProductAdd}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
            backdrop: {
                timeout: 500,
            },
        }}
    >
        <Fade in={modalProductAdd}>
            <Box sx={style} className="rounded-xl bg-black">
                <div className='flex'>
                <div className='flex-1 flex-col'>
                    <Typography id="transition-modal-title" className='text-white font-mono font-semibold' variant="h4" component="h2">
                        Añadir producto
                    </Typography>
                    <div className='flex justify-between mt-5'>
                        
                        <div className='w-full px-4'>
                            <div className='w-full bg-slate-400 rounded-md shadow-sm shadow-black p-4 flex justify-between gap-6'>
                                <div className='w-1/2'>
                                    <p className='text-lg font-semibold'>Código DL:<span className='ml-2 font-normal text-base'>{product.code}</span></p>
                                    <p className='text-lg font-semibold'>Marca: <span className='ml-2 font-normal text-base'>{product.brand}</span></p>
                                    <p className='text-lg font-semibold'>Tipo de Producto: <span className='ml-2 font-normal text-base'>{product.type}</span></p>
                                    <div>
                                        <TextField
                                            id="count" 
                                            label="Cantidad" 
                                            variant="outlined" 
                                            value={1}
                                            disabled
                                        />
                                    </div>
                                </div> 
                                <div className='w-1/2'>
                                    <div className='flex flex-row items-center'>
                                        <div className='w-1/3'><p className='text-lg font-semibold'>Precio:</p></div>
                                        <div><p className='ml-10 font-normal text-base rounded-lg bg-slate-500 p-1 px-3 shadow-black shadow-sm'>{product.price}</p></div>
                                    </div>
                                    <div className='flex flex-row items-center mt-2'>
                                        <div className='w-1/3'><p className='text-lg font-semibold'>Descuento:</p></div>
                                        <div><p className='ml-10 font-normal text-base rounded-lg bg-slate-500 p-1 px-3 shadow-black shadow-sm'>%{product.disc}</p></div>
                                    </div>
                                    <div className='flex flex-row items-center mt-2'>
                                        <div className='w-1/3'><p className='text-lg font-semibold'>Precio Neto:</p></div>
                                        <div><p className='ml-10 font-normal text-base bg-green-700 shadow-black shadow-sm rounded-lg p-1 px-3'>{product.charge}</p></div>
                                    </div>
                                    <div className='flex flex-row items-center mt-2'>
                                        <div className='w-1/3'><p className='text-lg font-semibold mt-2'>Stock:</p></div>
                                        <div className='flex justify-center ml-10'>
                                            <Tooltip title={product.stock ? "Disponible" : "No Disponible"} TransitionComponent={Zoom} arrow>
                                                <CircleIcon style={{fontSize:30, color:product.stock ? "green" : "red"}}/>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-5 w-full flex justify-between gap-10'>
                                    <div className='flex items-center w-1/3'>
                                        <button type="button" className="bg-orange-700 hover:bg-orange-800 border-2 border-transparent rounded-md h-auto w-full text-white font-mono text-lg cursor-pointer uppercase py-2" onClick={handleAddProduct}>
                                            {checkAlreadyExist(product.code) ? "Quitar" : "Añadir y seguir comprando"}
                                        </button>
                                    </div>
                                    {!checkAlreadyExist(product.code) && (
                                        <div className='flex items-center w-1/3'>
                                            <button type="button" className="bg-blue-700 hover:bg-blue-800 border-2 border-transparent rounded-md h-auto w-full text-white font-mono text-lg cursor-pointer uppercase py-2" onClick={handleAddProductAndOrder}>
                                                {checkAlreadyExist(product.code) ? "Quitar" : "Añadir e ir al pedido"}
                                            </button>
                                        </div>
                                    )}
                                    
                                    <div className='flex items-center w-1/3'>
                                        <button type="button" className="bg-transparent hover:bg-red-700 border-2 border-red-700 rounded-md h-auto w-full text-white font-mono text-lg cursor-pointer uppercase py-2" onClick={handleCancel}>
                                            Cancelar
                                        </button>
                                    </div>
                                </div>
                            
                        </div>
                        
                        
                    </div>
                </div>
                <div className=''>
                    <CancelIcon className='text-red-700 hover:cursor-pointer hover:text-red-500' onClick={handleModalProductAdd} style={{fontSize:25}}/>
                </div>
                </div>
            </Box>
        </Fade>
    </Modal>
    </ThemeProvider>
  )
}

export default ModalProductAdd