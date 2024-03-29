import React, { useState } from 'react'
import CustomerAddressCard from '../../cards/CustomerAddressCard'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'

const DataShippingForm = () => {
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

  const [actualCard, setActualCard] = useState(0)
  const [actualAddress, setActualAddress] = useState("")

  const handleChangeActualCard = (index) => {
    setActualCard(index)
    setActualAddress(data[index].address)
  }

  // console.log(actualCard.address);
  console.log(actualAddress);

  return (
    <div className='w-full flex flex-col md:flex-row md:justify-between gap-5'>
      <div className='w-2/5 hidden md:block'>
        {data.map((item,index) => (
          <div key={index} className={`${actualCard == index ? "bg-slate-300 border-4 border-orange-700" : "bg-slate-400 hover:bg-slate-300 border-4 border-transparent hover:border-orange-700"} w-full rounded-xl p-4 shadow-md shadow-black mb-5 cursor-pointer`}
            onClick={()=>handleChangeActualCard(index)}
          >
            <CustomerAddressCard item={item}/>
          </div>
        ))}
      </div>
      <div className='w-full md:hidden flex justify-center'>
        <div className={`formInput w-full`}>
              <FormControl fullWidth>
              <InputLabel id="addressess">Direcciones</InputLabel>
              <Select
                  labelId="addressess"
                  label="Direcciones"
                  fullWidth
                  required
                  value={actualAddress}
                  onChange={(e) => handleChangeActualCard(e.target.value)}
                  name='addressess'
                  className='h-14'
              >
                  {data.map((item,index) => (
                    <MenuItem value={index} key={index}>
                       {item.address.length > 30 ? item.address.substring(0, 30) + "..." : item.address}
                    </MenuItem>
                  ))}
              </Select>
              </FormControl>
          </div>
      </div>

      <div className='w-full'>
        <div className='w-full'>
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