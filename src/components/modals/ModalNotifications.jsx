import React, { useContext, useState } from 'react'

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import { toast } from 'react-toastify';
import { ModalContext } from '../../hooks/ModalContext';
import { AuthContext } from '../../hooks/AuthContext';
import { Button, FormControlLabel, TextField, ThemeProvider, Tooltip, createTheme } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';

const ModalNotifications = () => {
    //TODO: Change background circle -> color
    //TODO: Modularizar
    
    const {modalNotifications,handleModalNotifications} = useContext(ModalContext);
    const {unAuthorize} = useContext(AuthContext);
    const [checkedNews, setCheckedNews] = useState(false);
    const [checkedOffers, setCheckedOffers] = useState(false);
    const [checkedCatalogue, setCheckedCatalogue] = useState(false);
    const [checkedOrderState, setCheckedOrderState] = useState(false);
    const [checkedAccountState, setCheckedAcountState] = useState(false);

    const handleChangeNews = (event) => {
        setCheckedNews(!checkedNews );
    };
    const handleChangeOffers = (event) => {
        setCheckedOffers(!checkedOffers);
    };
    const handleChangeCatalogue = (event) => {
        setCheckedCatalogue(!checkedCatalogue);
    };
    const handleChangeOrderState = (event) => {
        setCheckedOrderState(!checkedOrderState);
    };
    const handleChangeAccountState = (event) => {
        setCheckedAcountState(!checkedAccountState);
    };

    const cancelOption = () => {
        handleModalNotifications()
    }
    const confirmOption = () => {
        handleModalNotifications()
        unAuthorize()
    }

    //Diseño Modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // width: 700,
        boxShadow: 24,
        p: 4
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
        open={modalNotifications}
        onClose={handleModalNotifications}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
            backdrop: {
                timeout: 500,
            },
        }}
    >
        <Fade in={modalNotifications}>
            <Box sx={style} className="rounded-xl bg-black relative">
                <CancelIcon className='absolute top-4 right-4 text-red-600 hover:cursor-pointer hover:text-red-300' style={{fontSize:25}} onClick={handleModalNotifications}/>

                <div className='flex flex-col p-4'>
            
                <div className='flex-1 flex-col'>
                    <div>
                        <h1 className='font-mono hidden sm:block text-lg tracking-widest text-center font-semibold text-slate-300 p-1'>Seleccione la información que desea recibir</h1>
                    
                    </div>
                    
                    <div className='flex w-full justify-center'>
                        <form className='mt-5 p-4 flex flex-col sm:flex-wrap justify-center w-full sm:w-11/12 bg-slate-200 rounded-xl shadow-md shadow-black'>
                            <div className='flex justify-left items-center content-center'>
                                <Tooltip title="Se ejecuta cada 15 días a las 20:00 hs." placement="bottom-start">
                                    <FormControlLabel
                                        className='flex items-center justify-center content-center'
                                        control={
                                            <Checkbox
                                                checked={checkedNews}
                                                onChange={handleChangeNews}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                        } 
                                        label="Novedades en Productos" 
                                    />
                                </Tooltip>
                            </div>
                            <div className='flex justify-left items-center'>
                                <Tooltip title="Se ejecuta cada 15 días a las 8:00 hs." placement="bottom-start">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checkedOffers}
                                                onChange={handleChangeOffers}
                                            />
                                        } 
                                        label="Ofertas de Productos" 
                                    />
                                </Tooltip>
                            </div>
                            <div className='flex justify-left items-center'>
                                <Tooltip title="Se ejecuta todos los días a las 3:00 hs." placement="bottom-start">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checkedCatalogue}
                                                onChange={handleChangeCatalogue}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                        } 
                                        label="Catálogo de Productos" 
                                    />
                                </Tooltip>
                            </div>
                            <div className='flex justify-left items-center'>
                                <Tooltip title="Se ejecuta todos los lunes a las 8:00 hs." placement="bottom-start">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checkedOrderState}
                                                onChange={handleChangeOrderState}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                        } 
                                        label="Estado de Pedidos" 
                                    />
                                </Tooltip>
                            </div>
                            <div className='flex justify-left items-center '>
                                <Tooltip title="Se ejecuta todos los domingos a las 23:00 hs." placement="bottom-start">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checkedAccountState}
                                                onChange={handleChangeAccountState}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                        } 
                                        label="Estado de Cuenta" 
                                    />
                                </Tooltip>
                            </div>

                        
                        </form>
                    </div>
                    <div className='flex justify-center w-11/12 mt-5'>
                        <p className='text-slate-300 font-mono font-semibold text-sm'>
                            La información se enviará por mail en formato PDF
                        </p>
                    </div>
                    
                    <div className='flex justify-between gap-10 mt-10'>
                        <button type="button" className="bg-green-800 hover:bg-green-700 rounded-md w-[100px] h-10 text-white font-mono text-lg cursor-pointer" onClick={confirmOption}>
                            Guardar
                        </button>
                        <button type="button" className="border-2 border-red-900 hover:bg-red-900 rounded-md w-[100px] h-10 text-white font-mono text-lg cursor-pointer" onClick={cancelOption}>
                            Cancelar
                        </button>
                    </div>
                </div>
                
                </div>
            </Box>
        </Fade>
    </Modal>
    </ThemeProvider>
  )
}

export default ModalNotifications