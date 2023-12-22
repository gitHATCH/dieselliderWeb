import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, Hidden, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'


const MyOrdersExtendedForm = ({ fromOrder, toOrder, handleChangeFromOrder, handleChangeToOrder, fromDate, toDate, handleChangeFromDate, handleChangeToDate, toDebit, handleChangeToDebit, fromBalance, handleChangeFromBalance, ordersState, orderState, handleChangeOrderState}) => {
  return (
    <div className='mt-5'>
        <div className='flex w-full'>
            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        className='w-72'
                        label="Fecha Desde"
                        onChange={handleChangeFromDate}
                    />
                </LocalizationProvider>
            </div>
            <div className='ml-5'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                        className='w-72'
                        label="Fecha Hasta"
                        onChange={handleChangeToDate}
                    />
                </LocalizationProvider>
            </div>
            <div className='w-1/4'></div>
            <div className='ml-5 w-1/2'>
                <FormControl fullWidth>
                    <InputLabel id="orderState">Estado del Pedido</InputLabel>
                    <Select
                        label="Estado del Pedido"
                        value={orderState}
                        onChange={handleChangeOrderState} 
                    >
                        {ordersState.map((type,index) => (
                        <MenuItem value={index} key={index}>{type}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>

        <div className='flex mt-5 w-full'>
            <div className='mr-5'>
                <FormControl>
                    <InputLabel id="fromOrder">Número de Pedido Desde</InputLabel>
                    <OutlinedInput
                        className='w-72'
                        label="Número de Pedido Desde"
                        value={fromOrder}
                        onChange={handleChangeFromOrder}
                    />
                </FormControl>
            </div>
            <div className=''>
                <FormControl>
                    <InputLabel id="toOrder">Número de Pedido Hasta</InputLabel>
                    <OutlinedInput
                        className='w-72'
                        label="Número de Pedido Hasta"
                        value={toOrder}
                        onChange={handleChangeToOrder}
                    />
                </FormControl>
            </div>
            
        </div>
            

        <div className='flex mt-5 w-full'>
            <div className='mr-5'>
                <FormControl>
                    <InputLabel id="fromBalance">Importe Total Desde</InputLabel>
                    <OutlinedInput
                        className='w-72'
                        label="Importe Total Desde"
                        value={fromBalance}
                        onChange={handleChangeFromBalance}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </FormControl>
            </div>
            <div className=''>
                <FormControl>
                    <InputLabel id="toDebit">Debe/Haber Hasta</InputLabel>
                    <OutlinedInput
                        className='w-72'
                        label="Debe/Haber Hasta"
                        value={toDebit}
                        onChange={handleChangeToDebit}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </FormControl>
            </div>
            
        </div>
        
    </div>  
    )
}

export default MyOrdersExtendedForm