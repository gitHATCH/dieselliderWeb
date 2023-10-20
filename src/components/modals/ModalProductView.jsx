import React, { useContext, useState } from 'react'


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
import { ThemeProvider, Tooltip, createTheme } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image';
import Im1 from "../../assets/images/imagen1.jpeg"
import Im2 from "../../assets/images/imagen2.jpg"
import Im3 from "../../assets/images/imagen3.jpg"

const ModalProductView = ({product}) => {
    const {modalProductView,handleModalProductView} = useContext(ModalContext);
    const [isZoomed, setIsZoomed] = useState(false);
    const handleMouseEnter = () => {
        setIsZoomed(true);
      };
    
      const handleMouseLeave = () => {
        setIsZoomed(false);
      };
    console.log(product);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
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
        open={modalProductView}
        onClose={handleModalProductView}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
            backdrop: {
                timeout: 500,
            },
        }}
    >
        <Fade in={modalProductView}>
            <Box sx={style} className="rounded-xl bg-black">
                <div className='flex'>
                <div className='flex-1 flex-col'>
                    <div className='flex items-center justify-center'>
                    <div className='p-2 px-5'>
                        <Carousel width={"100%"} infiniteLoop dynamicHeight autoFocus >
                            <div
                                className={`zoomable-image ${isZoomed ? 'zoomed' : ''}`}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Image
                                    src={Im1}
                                    alt="Imagen 1"
                                    width={480}
                                    height={420}
                                    className={`${isZoomed ? 'zoomed' : ''} rounded-xl`}
                                />
                            </div>
                            <div>
                            <Image
                                    src={Im2}
                                    alt="Imagen 2"
                                    layout='fill'
                                    className={`${isZoomed ? 'zoomed' : ''} rounded-xl`}
                                />                            
                            </div>
                            <div>
                            <Image
                                    src={Im3}
                                    alt="Imagen 3"
                                    layout='fill'
                                    className={`${isZoomed ? 'zoomed' : ''} rounded-xl`}
                                />                            </div>
                        </Carousel>
                    </div>
                    </div>
                </div>
                <div className=''>
                    <CancelIcon className='text-red-700 hover:cursor-pointer hover:text-red-500' onClick={handleModalProductView} style={{fontSize:25}}/>
                </div>
                </div>
            </Box>
        </Fade>
    </Modal>
    </ThemeProvider>
  )
}

export default ModalProductView