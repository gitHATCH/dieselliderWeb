import React from 'react'
import { FormControl, Hidden, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'


const AccountConditionSimpleForm = ({ voucher, period, handleChangeVoucher, handleChangePeriod, vouchers, periods }) => {
  return (
    <div className='flex flex-col sm:flex-row gap-y-5 w-full justify-center items-center lg:justify-start'>
        <div className={`formInput w-[250px] sm:w-[300px]`}>
            <FormControl fullWidth>
            <InputLabel id="vouchers">Comprobantes</InputLabel>
            <Select
                labelId="vouchers"
                label="Comprobantes"
                value={voucher}
                onChange={handleChangeVoucher}
                required
                name='vouchers'
                className='h-14'
            >
                {vouchers.map((voucher,index) => (
                <MenuItem value={voucher} key={index}>{voucher}</MenuItem>
                ))}
            </Select>
            </FormControl>
        </div>
        <div className='formInput w-[250px] sm:w-[300px] sm:ml-5'>
            <FormControl fullWidth>
            <InputLabel id="periods">Períodos</InputLabel>
            <Select
                labelId="periods"
                label="Períodos"
                className='h-14'
                value={period}
                onChange={handleChangePeriod} 
                name='periods'
                required
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

export default AccountConditionSimpleForm