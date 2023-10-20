import React, { useState } from 'react'
import CustomerAddressCard from '../../cards/CustomerAddressCard'
import { TextField } from '@mui/material'

const DataShippingForm = () => {
  const [actualCard, setActualCard] = useState(0)

  const handleChangeActualCard = (index) => {
    setActualCard(index)
  }

  const data = [{
    receiver:"CONSUMIDOR FINAL",
    address:"AV. JUAN B. JUSTO 2224 (CASO1)",
    district:"PUEYRREDON",
    location:"CORDOBA (CASO1)",
    code:"5001",
    province:"CORDOBA",
    country:"ARGENTINA",
    transport:"SENDBOX(1)",
    type:"ENVIO",
    payment:"DESTINO"
  },{
    receiver:"CONSUMIDOR FINAL",
    address:"AV. JUAN B. JUSTO 2224 (CASO2)",
    district:"PUEYRREDON",
    location:"CORDOBA (CASO2)",
    code:"5001",
    province:"CORDOBA",
    country:"ARGENTINA",
    transport:"BUSPACK (C/ ENVIO A DOMICILIO) (2)",
    type:"ENVIO",
    payment:"DESTINO"
  },{
    receiver:"CONSUMIDOR FINAL",
    address:"AV. JUAN B. JUSTO ENTRE SUIPACHA Y DE LA RETA(CASO3)",
    district:"PUEYRREDON",
    location:"SANTIAGO DEL ESTERO(CASO3)",
    code:"6500",
    province:"SANTIAGO DEL ESTERO",
    country:"ARGENTINA",
    transport:"TRANSPORTE PRUEBA3",
    type:"ENVIO",
    payment:"ORIGEN"
  }]

  return (
    <div className='w-full flex justify-between gap-10'>
      <div className='w-2/5'>
        {data.map((item,index) => (
          <div key={index} className={`${actualCard == index ? "bg-slate-300 border-4 border-orange-700" : "bg-slate-400 hover:bg-slate-300 border-4 border-transparent hover:border-orange-700"} w-full rounded-xl p-4 shadow-lg shadow-black mb-5 cursor-pointer`}
            onClick={()=>handleChangeActualCard(index)}
          >
            <CustomerAddressCard item={item}/>
          </div>
        ))}

      </div>
      <div className='w-3/5 rounded-xl shadow-black shadow-xl bg-slate-300 p-10'>
        <div className='w-1/2 formInput'>
          <TextField
              fullWidth 
              id="receiver" 
              label="Destinatario" 
              variant="outlined" 
              value={data[actualCard].receiver}
              disabled
          />
        </div>
        <div className='w-full formInput mt-5'>
          <TextField
              fullWidth 
              id="address" 
              label="Domicilio" 
              variant="outlined" 
              value={data[actualCard].address}
              disabled
          />
        </div>
        <div className='w-full flex flex-row mt-5'>
          <div className='w-2/5 formInput'>
            <TextField
                fullWidth 
                id="code" 
                label="Código Postal" 
                variant="outlined" 
                value={data[actualCard].code}
                disabled
            />
          </div>
          <div className='w-full formInput ml-2'>
            <TextField
                fullWidth 
                id="district" 
                label="Barrio" 
                variant="outlined" 
                value={data[actualCard].district}
                disabled
            />
          </div>
        </div>
        <div className='w-full formInput mt-5'>
            <TextField
                fullWidth 
                id="location" 
                label="Localidad" 
                variant="outlined" 
                value={data[actualCard].location}
                disabled
            />
        </div>
        <div className='w-full flex flex-row mt-5'>
          <div className='w-full formInput'>
            <TextField
                fullWidth 
                id="province" 
                label="Provincia" 
                variant="outlined" 
                value={data[actualCard].province}
                disabled
            />
          </div>
          <div className='w-full formInput ml-2'>
            <TextField
                fullWidth 
                id="country" 
                label="País" 
                variant="outlined" 
                value={data[actualCard].country}
                disabled
            />
          </div>
        </div>
        <div className='w-full formInput mt-5'>
            <TextField
                fullWidth 
                id="transport" 
                label="Transporte" 
                variant="outlined" 
                value={data[actualCard].transport}
                disabled
            />
        </div>
        <div className='w-full flex flex-row mt-5'>
          <div className='w-full formInput'>
            <TextField
                fullWidth 
                id="type" 
                label="Tipo" 
                variant="outlined" 
                value={data[actualCard].type}
                disabled
            />
          </div>
          <div className='w-full formInput ml-2'>
            <TextField
                fullWidth 
                id="payment" 
                label="Cobro" 
                variant="outlined" 
                value={data[actualCard].payment}
                disabled
            />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default DataShippingForm