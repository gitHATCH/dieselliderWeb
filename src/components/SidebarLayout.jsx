import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import PersonIcon from '@mui/icons-material/Person';
import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import React, {useContext, useEffect, useState} from 'react'
import Link from 'next/link';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SlidebarContext } from '../hooks/SlidebarContext';
import { ModalContext } from '../hooks/ModalContext';
import ModalLogOut from './Modals/ModalLogOut';
import { AuthContext } from '../hooks/AuthContext';
import { useRouter } from 'next/router';

import Logo from "../assets/images/LogoDL.png"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, Tooltip } from '@mui/material';
import Image from 'next/image';





//Comprobar autorizar

const SidebarLayout = () => {
    const [collaps, handleCollaps, showStatus, okShowStatus, hideShowStatus, actualPage, modal, handleOpenModal] = useContext(SlidebarContext)
    const [modalDelete, modalEdit, handleModalDelete, handleModalEdit, handleModalLogOut, modalLogOut] = useContext(ModalContext)
    const {auth} = useContext(AuthContext);
    const router = useRouter()

    /*
    useEffect(() => {
        if(!auth && router.pathname !== '/') {
            toast.error("No estas autorizado")
            router.push("/")
        }
    }, [router.pathname])
    */
    



    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElProducts, setAnchorElProducts] = React.useState(null);
   
    
    const pages = ['Servicios', 'Consultas', 'Contacto'];
    console.log(actualPage);
   
    const handleProfile = () => {
      handleModal()
      handleCloseUserMenu()
    }
  
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = (event) => {
      setAnchorElUser(null);
    };
  
    const handleOpenProductMenu = (event) => {
      setAnchorElProducts(event.currentTarget);
    };
  
    const handleCloseProductMenu = () => {
      setAnchorElProducts(null);
    };
  
    const swapPage = (toPage) => {
      handleActualPage(toPage)
      //navigation.navigate(toPage);
    }
  
    const swapPageProduct = (toPage) => {
      handleCloseProductMenu()
      handleActualPage("Productos")
      //navigation.navigate(toPage);
    }



    
    const logout = () => {
        handleModalLogOut()  
    }

      return (
        <>
        {auth && (
            <div className='shadow-lg shadow-black'>
                <AppBar position="static" className='' style={{padding:6, backgroundColor:"#001f36"}}>
                    <Container maxWidth="4xl">
                        <Toolbar disableGutters>
                            <div className=''>
                                <Image
                                    src={Logo}
                                    width={140}
                                    height={100}
                                    alt=''
                                />
                            </div>
                          
                            <div className='ml-10'>
                                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}}}>
                                    <Box sx={{ flexGrow: 0 }}>
                                        <Button
                                            sx={{ my: 2, color: 'white', display: 'block', fontSize: 20, fontWeight:600, marginRight:2}}
                                            onClick={handleOpenProductMenu}
                                            style={{color:(actualPage === "/" || actualPage === "/products") ? "#79ae92" : ""}}
                                        >
                                            <p>Productos</p>
                                        </Button>
                                        {/* <Menu
                                            sx={{ mt: '40px', ml:"70px" }}
                                            anchorEl={anchorElProducts}
                                            anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                            }}
                                            open={Boolean(anchorElProducts)}
                                            onClose={handleCloseProductMenu}
                                        >
                                            <MenuItem onClick={() => swapPageProduct("Productos")}>
                                            <Typography textAlign="center">Catálogo</Typography>
                                            </MenuItem>
                                            <MenuItem onClick={() => swapPageProduct("Novedades")}>
                                            <Typography textAlign="center">Novedades</Typography>
                                            </MenuItem>
                                            <MenuItem onClick={() => swapPageProduct("Ofertas")}>
                                            <Typography textAlign="center">Ofertas</Typography>
                                            </MenuItem>
                                            <MenuItem onClick={() => swapPageProduct("Precios")}>
                                            <Typography textAlign="center">Lista de Precios</Typography>
                                            </MenuItem>
                                        </Menu> */}
                                    </Box>
                                    <Button
                                        sx={{ my: 2, color: 'white', display: 'block', fontSize: 20, fontWeight:600, marginRight:2 }}
                                        style={{color:(actualPage === "/services") ? "#79ae92" : ""}}
                                    >
                                        <p>Servicios</p>
                                    </Button>
                                    <Button
                                        sx={{ my: 2, color: 'white', display: 'block', fontSize: 20, fontWeight:600, marginRight:2 }}
                                        style={{color:(actualPage === "/querys") ? "#79ae92" : ""}}
                                    >
                                        <p>Consultas</p>
                                    </Button>
                                    <Button
                                        sx={{ my: 2, color: 'white', display: 'block', fontSize: 20, fontWeight:600, marginRight:2 }}
                                        style={{color:(actualPage === "/contact") ? "#79ae92" : ""}}
                                    >
                                        <p>Contacto</p>
                                    </Button>
                                </Box>
                            </div>
                        
                            <div className='w-full justify-end flex'>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Ver Pedido">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ marginRight:5 }}>
                                        <ShoppingCartIcon style={{color:"white", fontSize:45}} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Configuración de Usuario">
                                    <IconButton onClick={handleOpenUserMenu} sx={{}}>
                                        <AccountCircleIcon style={{color:"white", fontSize:45}} />
                                    </IconButton>
                                </Tooltip>
                                {/* <Menu
                                    sx={{ mt: '40px' }}
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <MenuItem onClick={() => handleProfile()}>
                                        <Typography textAlign="center">Perfil</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Cerrar Sesión</Typography>
                                    </MenuItem>
                                </Menu> */}
                            </Box>
                            </div>
                        </Toolbar>
                    </Container>
                    
                </AppBar>
                {modalLogOut && <ModalLogOut/>}
            </div>
            )}
        </>
  )
}

export default SidebarLayout


