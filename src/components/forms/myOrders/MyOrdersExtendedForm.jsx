import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, Hidden, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'


const MyOrdersExtendedForm = ({ fromOrder, toOrder, handleChangeFromOrder, handleChangeToOrder, fromDate, toDate, handleChangeFromDate, handleChangeToDate, toDebit, handleChangeToDebit, fromBalance, handleChangeFromBalance, ordersState, orderState, handleChangeOrderState}) => {
  return (
    <div className='mt-5 w-full'>
        <div className='flex flex-wrap w-full gap-4 items-center justify-center'>
            <div className='min-w-[190px] w-[235px] max-2-[400px]'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        className='w-full'
                        label="Fecha Desde"
                        onChange={handleChangeFromDate}
                        required
                    />
                </LocalizationProvider>
            </div>
            <div className='min-w-[190px] w-[235px] max-2-[400px]'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                        className='w-full'
                        label="Fecha Hasta"
                        onChange={handleChangeToDate}
                        required
                    />
                </LocalizationProvider>
            </div>
            <div className='min-w-[190px] w-[235px] max-2-[400px]'>
                <FormControl fullWidth>
                    <InputLabel id="orderState">Estado del Pedido</InputLabel>
                    <Select
                        label="Estado del Pedido"
                        value={orderState}
                        onChange={handleChangeOrderState} 
                        name='orderState'
                        required
                    >
                        {ordersState.map((type,index) => (
                        <MenuItem value={type} key={index}>{type}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            <div className='min-w-[190px] w-[235px] max-2-[400px]'>
                <FormControl>
                    <InputLabel id="fromOrder">Número de Pedido Desde</InputLabel>
                    <OutlinedInput
                        className='w-[235px]'
                        label="Número de Pedido Desde"
                        value={fromOrder}
                        onChange={handleChangeFromOrder}
                        name='fromOrder'
                        required
                    />
                </FormControl>
            </div>
            <div className='min-w-[190px] w-[235px] max-2-[400px]'>
                <FormControl>
                    <InputLabel id="toOrder">Número de Pedido Hasta</InputLabel>
                    <OutlinedInput
                        className='w-[235px]'
                        label="Número de Pedido Hasta"
                        value={toOrder}
                        onChange={handleChangeToOrder}
                        name='toOrder'
                        required
                    />
                </FormControl>
            </div>

            <div className='min-w-[190px] max-w-[400px]'>
                <FormControl>
                    <InputLabel id="fromBalance">Importe Total Desde</InputLabel>
                    <OutlinedInput
                        className='w-[235px]'
                        label="Importe Total Desde"
                        value={fromBalance}
                        onChange={handleChangeFromBalance}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        name='fromBalance'
                        required
                    />
                </FormControl>
            </div>
            <div className='min-w-[190px] w-[235px] max-2-[400px]'>
                <FormControl>
                    <InputLabel id="toDebit">Debe/Haber Hasta</InputLabel>
                    <OutlinedInput
                        className='w-[235px]'
                        label="Debe/Haber Hasta"
                        value={toDebit}
                        onChange={handleChangeToDebit}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        name='toDebit'
                        required
                    />
                </FormControl>
            </div>
        </div>

        
    </div>  
    )
}

export default MyOrdersExtendedForm