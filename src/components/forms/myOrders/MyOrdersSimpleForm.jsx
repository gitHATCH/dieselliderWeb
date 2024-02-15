import React from 'react'
import { FormControl, Hidden, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'


const MyOrdersSimpleForm = ({ handleSubmit, orderState, period, handleChangeOrderState, handleChangePeriod, ordersState, periods }) => {
  return (
    <div className='flex flex-col sm:flex-row gap-y-5 w-full justify-center items-center lg:justify-start'>
        <div className={`formInput w-[250px] sm:w-[300px]`}>
            <FormControl fullWidth>
                <InputLabel id="ordersState">Estado de los Pedidos</InputLabel>
                <Select
                    labelId="ordersState"
                    label="Estado de los Pedidos"
                    className='h-14'
                    name='ordersState'
                    required
                    value={orderState}
                    onChange={handleChangeOrderState}
                >
                    {ordersState.map((orderState,index) => (
                    <MenuItem value={orderState} key={index}>{orderState}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
        <div className='formInput w-[250px] sm:w-[300px] sm:ml-5'>
            <FormControl fullWidth>
                <InputLabel id="vouchers">Períodos</InputLabel>
                <Select
                    labelId="periods"
                    className='h-14'
                    label="Períodos"
                    name='periods'
                    required
                    value={period}
                    onChange={handleChangePeriod}
                >
                    {periods.map((period,index) => (
                    <MenuItem value={period} key={index}>{period}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    </div>
  )
}

export default MyOrdersSimpleForm