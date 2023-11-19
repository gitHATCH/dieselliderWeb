import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import Logo from "../../assets/images/log11.png"


const HeaderLogo = () => {
    const router = useRouter()

  return (
    <div className='hover:cursor-pointer' onClick={() => router.push("/")}>
        {/* 2xl Resolution */}
        <div className='hidden 2xl:block'>
            <Image
                src={Logo}
                width={300}
                height={170}
                alt='Diesel Lider Logo'
            />
        </div>
        {/* Other Resolution */}
        <div className='2xl:hidden'>
            <Image
                src={Logo}
                width={120}
                height={60}
                alt='Diesel Lider Logo'
            />
        </div>
    </div>
  )
}

export default HeaderLogo