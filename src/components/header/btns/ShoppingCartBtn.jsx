import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';

const ShoppingCartBtn = () => {
  return (
    <button className='uppercase md:mr-5 2xl:mr-20 font-semibold btnMenu'>
        <div className='sm:hidden'>
            <Link href={"/pedido"}>
                <ShoppingCartIcon style={{fontSize:25}}/>
            </Link>
        </div>
        <div className='hidden sm:block 2xl:hidden'>
            <Link href={"/pedido"}>
                <ShoppingCartIcon style={{fontSize:30}}/>
            </Link>
        </div>
        <div className='hidden 2xl:block'>
            <Link href={"/pedido"}>
                <ShoppingCartIcon style={{fontSize:40}}/>
            </Link>
        </div>
    </button>
  )
}

export default ShoppingCartBtn