import React from 'react'
import { FormControl, Hidden, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'


const MyOrdersSimpleForm = ({ orderState, period, handleChangeOrderState, handleChangePeriod, ordersState, periods }) => {
  return (
    <div className='flex'>
        <div className={`formInput w-1/4`}>
            <FormControl fullWidth>
            <InputLabel id="ordersState">Estado de los Pedidos</InputLabel>
            <Select
                labelId="ordersState"
                label="Estado de los Pedidos"
                value={orderState}
                onChange={handleChangeOrderState}
            >
                {ordersState.map((orderState,index) => (
                <MenuItem value={index} key={index}>{orderState}</MenuItem>
                ))}
            </Select>
            </FormControl>
        </div>
        <div className='formInput w-1/4 ml-5'>
            <FormControl fullWidth>
            <InputLabel id="vouchers">Períodos</InputLabel>
            <Select
                labelId="periods"
                label="Períodos"
                value={period}
                onChange={handleChangePeriod} 
            >
                {periods.map((period,index) => (
                <MenuItem value={index} key={index}>{period}</MenuItem>
                ))}
            </Select>
            </FormControl>
        </div>
    </div>
  )
}

export default MyOrdersSimpleForm