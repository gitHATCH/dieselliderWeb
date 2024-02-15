import React from 'react'

const CustomerAddressCard = ({item}) => {
  return (
    <div>
        <p className='text-sm truncate font-mono font-semibold mb-2'>{item.address},{item.district}</p>
        <p className='text-sm truncate font-mono font-semibold mb-3'>{item.code},{item.location},{item.province},{item.country}</p>
        <p className='font-semibold'>Transporte: <span className='ml-2 font-normal'>{item.transport}</span></p>
        <p className='font-semibold'>Flete: <span className='ml-2 font-normal'>{item.payment}</span></p>
    </div>
  )
}

export default CustomerAddressCard