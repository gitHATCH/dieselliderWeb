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

const ModalLogOut = () => {
    const {modalLogOut,handleModalLogOut} = useContext(ModalContext);
    const {unAuthorize} = useContext(AuthContext);
    const cancelOption = () => {
        handleModalLogOut()
    }
    const confirmOption = () => {
        handleModalLogOut()
        unAuthorize()
    }

    //Diseño Modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
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
        open={modalLogOut}
        onClose={handleModalLogOut}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
            backdrop: {
                timeout: 500,
            },
        }}
    >
        <Fade in={modalLogOut}>
            <Box sx={style} className="rounded-xl bg-black">
                <div className='flex'>
                <div className='flex-1 flex-col'>
                    <Typography id="transition-modal-title" className='text-slate-300 font-mono font-semibold' variant="h6" component="h2">
                        ¿Deseas Cerrar Sesión?
                    </Typography>
                    <div className='flex justify-between mt-10'>
                        <button type="button" className="bg-green-800 hover:bg-green-700 rounded-md w-1/4 h-10 text-white font-mono text-lg cursor-pointer" onClick={confirmOption}>
                            Si
                        </button>
                        <button type="button" className="border-2 border-red-900 hover:bg-red-900 rounded-md w-1/4 h-10 text-white font-mono text-lg cursor-pointer" onClick={cancelOption}>
                            No
                        </button>
                    </div>
                </div>
                <div className=''>
                    <CancelIcon className='text-red-700 hover:cursor-pointer hover:text-red-500' onClick={handleModalLogOut} style={{fontSize:25}}/>
                </div>
                </div>
            </Box>
        </Fade>
    </Modal>
    </ThemeProvider>
  )
}

export default ModalLogOut