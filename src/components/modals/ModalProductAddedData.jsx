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
import { AuthContext } from '../../hooks/AuthContext';
import { TextField, ThemeProvider, Tooltip, createTheme } from '@mui/material';
const ModalProductAddedData = ({product}) => {
    const {modalProductAddedData,handleModalProductAddedData} = useContext(ModalContext);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
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
        open={modalProductAddedData}
        onClose={handleModalProductAddedData}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
            backdrop: {
                timeout: 500,
            },
        }}
    >
        <Fade in={modalProductAddedData}>
            <Box sx={style} className="rounded-xl bg-black">
                <div className='flex'>
                <div className='flex-1 flex-col'>
                    <Typography id="transition-modal-title" className='text-white font-mono font-semibold' variant="h4" component="h2">
                        Detalles del producto
                    </Typography>
                    <div className='flex justify-between mt-5'>
                        
                        <div className='w-full px-4'>
                            <div className='bg-slate-300 rounded-md p-1 shadow-inner shadow-black'>
                                <p className='text-lg font-semibold'>Código DL: <span className='ml-2 font-normal text-base'>{product.code}</span></p>
                                <p className='text-lg font-semibold'>Marca: <span className='ml-2 font-normal text-base'>{product.brand}</span></p>
                                <p className='text-lg font-semibold'>N° de Parte: <span className='ml-2 font-normal text-base'>{product.partNumb}</span></p>
                                <p className='text-lg font-semibold'>Unidad de Medida: <span className='ml-2 font-normal text-base'>{product.unity}</span></p>
                            </div>
                            <div className='w-full mt-4'>
                                <p className='text-2xl ml-2 text-white font-normal font-mono mb-0'>DESCRIPCIÓN</p>
                                <div className='bg-slate-300 rounded-xl p-2 shadow-black shadow-inner h-max-40 overflow-y-scroll'>
                                    <p className=''>{product.descr}</p>
                                </div>                            
                            </div> 
                            <div className='mt-4 bg-slate-400 rounded-md p-2 shadow-inner shadow-black'>
                                <div className='flex flex-row items-center'>
                                    <div className='w-1/4'><p className='text-lg font-semibold'>Precio Unitario:</p></div>
                                    <div><p className='ml-5 font-normal text-base rounded-lg bg-slate-500 p-1 px-3 shadow-black shadow-sm'>{product.price}</p></div>
                                </div>
                                <div className='flex flex-row items-center mt-2'>
                                    <div className='w-1/4'><p className='text-lg font-semibold'>Cantidad:</p></div>
                                    <div>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '15ch', marginLeft: 2 },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            id="standard-number"
                                            type="number"
                                            variant="standard"
                                            defaultValue={0}
                                            value={product.count}
                                            InputProps={{
                                                inputProps: { 
                                                    min: 0, 
                                                    style: { 
                                                        WebkitAppearance: 'none',
                                                        MozAppearance: 'textfield',
                                                    } 
                                                }
                                            }}
                                        />
                                        </Box>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center mt-2'>
                                    <div className='w-1/4'><p className='text-lg font-semibold'>Precio Neto:</p></div>
                                    <div><p className='ml-5 font-normal text-base bg-green-700 shadow-black shadow-sm rounded-lg p-1 px-3'>{product.charge}</p></div>
                                </div>
                                <div className='flex flex-row items-center mt-2'>
                                    <div className='w-1/5'><p className='text-lg font-semibold mt-2'>Stock:</p></div>
                                    <div className='ml-12 flex justify-center'>
                                        <Tooltip title={product.stock ? "Disponible" : "No Disponible"} TransitionComponent={Zoom} arrow>
                                            <CircleIcon style={{fontSize:30, color:product.stock ? "green" : "red"}}/>
                                        </Tooltip>
                                    </div>
                                </div> 
                            </div>
                        
                            
                        </div>
                        
                        
                    </div>
                </div>
                <div className=''>
                    <CancelIcon className='text-red-700 hover:cursor-pointer hover:text-red-500' onClick={handleModalProductAddedData} style={{fontSize:25}}/>
                </div>
                </div>
            </Box>
        </Fade>
    </Modal>
    </ThemeProvider>
  )
}

export default ModalProductAddedData