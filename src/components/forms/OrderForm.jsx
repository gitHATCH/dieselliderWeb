import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import React, { useState } from 'react'

const OrderForm = () => {
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [sendTo, setSendTo] = useState(0);
    const [transport, setTransport] = useState("");
    const [payment, setPayment] = useState("");
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

      const handleChangeDate = (event) => {
        setDate(event.target?.value);
      };
      const handleChangeHour = (event) => {
        setHour(event.target?.value);
      };
      const handleChangeSendTo = (event) => {
        setSendTo(event.target?.value);
      };
      const handleChangeTransport = (event) => {
        setTransport(event.target?.value);
      };
      const handleChangePayment = (event) => {
        setPayment(event.target?.value);
      };

  return (
    <div className='w-full flex flex-col '>
        <div className='w-3/2'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    className='w-2/3'
                    label="Facturar el día"
                    onChange={handleChangeDate}
                />
            </LocalizationProvider>
        </div>
        <div className='mt-5 w-2/3'>
                <FormControl fullWidth>
                    <InputLabel id="sendTo">Enviar pedido a</InputLabel>
                    <Select
                        labelId="sendTo"
                        label="Enviar pedido a"
                        value={sendTo}
                        onChange={handleChangeSendTo} 
                    >
                        {data.map((loc,index) => (
                        <MenuItem className=' overflow-x-scroll' value={index} key={index}>{loc.address}, {loc.district} {loc.code}, {loc.location}, {loc.province}, {loc.country}, Transp.: {loc.transport} - $ Flete: {loc.payment}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className='mt-5 w-2/3'>
                <TextField
                    disabled
                    fullWidth 
                    id="transport" 
                    label="Transporta" 
                    variant="outlined" 
                    value={data[sendTo].transport}
                />
            </div>
            <div className='mt-5 w-2/3'>
                <TextField
                    disabled
                    fullWidth 
                    id="payment" 
                    label="Paga transporte" 
                    variant="outlined" 
                    value={data[sendTo].payment}
                />
            </div>
    </div>
  )
}

export default OrderForm