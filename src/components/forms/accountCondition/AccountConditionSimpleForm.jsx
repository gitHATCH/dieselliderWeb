import React from 'react'
import { FormControl, Hidden, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'


const AccountConditionSimpleForm = ({ voucher, period, handleChangeVoucher, handleChangePeriod, vouchers, periods }) => {
  return (
    <div className='flex'>
        <div className={`formInput w-1/3`}>
            <FormControl fullWidth>
            <InputLabel id="vouchers">Comprobantes</InputLabel>
            <Select
                labelId="vouchers"
                label="Comprobantes"
                value={voucher}
                onChange={handleChangeVoucher}
            >
                {vouchers.map((voucher,index) => (
                <MenuItem value={index} key={index}>{voucher}</MenuItem>
                ))}
            </Select>
            </FormControl>
        </div>
        <div className='formInput w-1/3 ml-5'>
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

export default AccountConditionSimpleForm