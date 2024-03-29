import { Tooltip } from '@mui/material'
import Link from 'next/link'
import React, { useContext } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ModalContext } from '../../../hooks/ModalContext';


const UserOptionsBtn = () => {
    const {handleModalLogOut,handleModalNotifications} = useContext(ModalContext)

  return (
    <div>
        <Tooltip
            classes={{ tooltip: 'custom-tooltip' }}
            title={
                <div className="flex flex-col space-y--10"  style={{ backgroundColor: '#262626', padding: '10px', borderRadius: '5px'  }}>
                    <Link href={"/datos"}><button className='uppercase text-xs md:text-lg 2xl:text-2xl btnMenuOption font-mono p-2'>Mis Datos</button></Link>
                    <button className='uppercase text-xs md:text-lg 2xl:text-2xl btnMenuOption font-mono p-2'
                        onClick={handleModalNotifications}
                    >Notificaciones</button>
                    <button className='uppercase text-xs md:text-lg 2xl:text-2xl btnMenuOption font-mono p-2'>Cambiar Contraseña</button>
                    <button className='uppercase text-xs md:text-lg 2xl:text-2xl btnMenuOption font-mono p-2'
                        onClick={handleModalLogOut}
                    >Cerrar Sesión</button>
                </div>
            }
            placement="bottom"
            arrow
        >
            <button className='uppercase font-semibold btnMenu 2xl:mr-10'> 
                <div className='sm:hidden'>
                    <AccountCircleIcon style={{fontSize:25}}/>
                </div>
                <div className='hidden sm:block 2xl:hidden'>
                    <AccountCircleIcon style={{fontSize:30}}/>
                </div>
                <div className='hidden 2xl:block'>
                    <AccountCircleIcon style={{fontSize:40}}/>
                </div>
            </button>
        </Tooltip>
    </div>
  )
}

export default UserOptionsBtn