import Image from 'next/image'
import React from 'react'
import Logo from "../../assets/images/log11.png"


const LoginLogo = () => {
  return (
    <div className='flex justify-center'>
        {/* Other Resolution */}
        <div className='2xl:hidden'>
            <Image
                src={Logo}
                width={150}
                height={100}
                alt='Diesel Lider Logo'
            />
        </div>
        {/* 2xl Resolution */}
        <div className='hidden 2xl:block'>
            <Image
                src={Logo}
                width={250}
                height={200}
                alt='Diesel Lider Logo'
            />
        </div>
        
    </div>
  )
}

export default LoginLogo