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
import SubTotal from '../order/SubTotal';
import MyOrderTable from '../tables/MyOrderTable';

const ModalMyOrdersData = ({myOrder}) => {
    const {modalMyOrdersData,handleModalMyOrdersData} = useContext(ModalContext);
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

    const handleCancel = () => {
        handleModalMyOrdersData()
    }
      
  return (
    <ThemeProvider theme={theme}>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalMyOrdersData}
        onClose={handleModalMyOrdersData}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
            backdrop: {
                timeout: 500,
            },
        }}
    >
        <Fade in={modalMyOrdersData}>
            <Box sx={style} className="rounded-xl bg-black">
                <div className='flex'>
                <div className='flex-1 flex-col'>
                    <Typography id="transition-modal-title" className='text-white font-mono font-semibold' variant="h4" component="h2">
                        Detalle Pedido
                    </Typography>
                    <div className='flex justify-between mt-5'>
                        
                        <div className='w-full px-4'>
                            <div className='w-full bg-slate-400 rounded-md shadow-sm shadow-black p-2 flex justify-between'>
                                <div className='w-full'>
                                    <p className='text-lg font-semibold'>Número de Pedido:<span className='ml-2 font-normal text-base'>{myOrder.number}</span></p>
                                    <p className='text-lg font-semibold'>Fecha del Pedido: <span className='ml-2 font-normal text-base'>{myOrder.date}</span></p>
                                </div>
                                <div className='w-8/12'>
                                    <p className='text-lg font-semibold'>Moneda:<span className='ml-2 font-normal text-base'>{myOrder.money}</span></p>
                                    <p className='text-lg font-semibold'>Estado del Pedido: <span className='ml-2 font-normal text-base'>{myOrder.state}</span></p>
                                </div> 
                            </div>
                            <div className='flex justify-center'>
                                <div className='mt-0 w-full'>
                                    <MyOrderTable/>
                                </div>
                            </div>

                            <div className='mt-4 w-full bg-slate-400 rounded-md shadow-sm shadow-black p-2 flex justify-between'>
                                <div className='w-2/3'>
                                    <p className='text-lg font-semibold'>Facturar el Día:<span className='ml-2 font-normal text-base'>{myOrder.invoiceDate}</span></p>
                                    <p className='text-lg font-semibold'>Horario de Envío: <span className='ml-2 font-normal text-base'>{myOrder.hour}</span></p>
                                    <p className='text-lg font-semibold'>Domimcilio de Envío: <span className='ml-2 font-normal text-base'>{myOrder.address}</span></p>
                                    <p className='text-lg font-semibold'>Transporte: <span className='ml-2 font-normal text-base'>{myOrder.transport}</span></p>
                                    <p className='text-lg font-semibold'>Pago de Transporte: <span className='ml-2 font-normal text-base'>{myOrder.payment}</span></p>

                                </div>
                                <div className='w-1/2 p-6'>
                                    <div className='flex flex-row'>
                                        <div className='flex-1'>
                                        <h2 className='text-lg font-bold'>Subtotal Neto:</h2>
                                        </div>
                                        <div className='flex-1 text-right'>
                                        <h2 className='text-lg font-bold'>${myOrder.subtotal}</h2>
                                        </div>
                                    </div>
                                    <div className='mt-5 flex flex-row'>
                                        <div className='flex-1'>
                                        <h2 className='text-lg font-bold'>Otros Impuestos:</h2>
                                        </div>
                                        <div className='flex-1 text-right'>
                                        <h2 className='text-lg font-bold'>${myOrder.taxes}</h2>
                                        </div>
                                    </div>
                                    <hr className='border-black mt-2' />

                                    <div className='mt-2 flex flex-row'>
                                        <div className='flex-1'>
                                        <h2 className='text-xl font-extrabold'>Importe Total:</h2>
                                        </div>
                                        <div className='flex-1 text-right'>
                                        <h2 className='text-xl font-extrabold'>${myOrder.total}</h2>
                                        </div>
                                    </div>

                                </div> 
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className=''>
                    <CancelIcon className='text-red-700 hover:cursor-pointer hover:text-red-500' onClick={handleModalMyOrdersData} style={{fontSize:25}}/>
                </div>
                </div>
            </Box>
        </Fade>
    </Modal>
    </ThemeProvider>
  )
}

export default ModalMyOrdersData