import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, Hidden, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'


const AccountConditionExtendedForm = ({ fromBalance, handleChangeFromBalance, toBalance, handleChangeToBalance, typeMov, typeBal, handleChangeFromDate, handleChangeToDate, handleChangeTypeMov, handleChangeTypeBal, movTypes, balTypes, fromDebit, handleChangeFromDebit, toDebit, handleChangeToDebit }) => {
  return (
    <div className='mt-5'>
        <div className='flex w-full'>
            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Fecha Desde"
                        onChange={handleChangeFromDate}
                    />
                </LocalizationProvider>
            </div>
            <div className='ml-5'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                        label="Fecha Hasta"
                        onChange={handleChangeToDate}
                    />
                </LocalizationProvider>
            </div>
            <div className='ml-5 w-1/4'>
                <FormControl fullWidth>
                    <InputLabel id="typeMov">Tipo de Movimiento</InputLabel>
                    <Select
                        labelId="typeMov"
                        label="Tipo de Movimiento"
                        value={typeMov}
                        onChange={handleChangeTypeMov} 
                    >
                        {movTypes.map((type,index) => (
                        <MenuItem value={index} key={index}>{type}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className='ml-5 w-1/4'>
                <FormControl fullWidth>
                    <InputLabel id="typeBal">Tipo de Saldo</InputLabel>
                    <Select
                        labelId="typeBal"
                        label="Tipo de Movimiento"
                        value={typeBal}
                        onChange={handleChangeTypeBal} 
                    >
                        {balTypes.map((type,index) => (
                        <MenuItem value={index} key={index}>{type}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>
        <div className='flex mt-5 w-full'>
            <div className='mr-5'>
                <FormControl>
                    <InputLabel id="fromDebit">Debe/Haber Desde</InputLabel>
                    <OutlinedInput
                        labelId="fromDebit"
                        label="Debe/Haber Desde"
                        value={fromDebit}
                        onChange={handleChangeFromDebit}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </FormControl>
            </div>
            <div className=''>
                <FormControl>
                    <InputLabel id="toDebit">Debe/Haber Hasta</InputLabel>
                    <OutlinedInput
                        labelId="toDebit"
                        label="Debe/Haber Hasta"
                        value={toDebit}
                        onChange={handleChangeToDebit}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </FormControl>
            </div>
            
        </div>
        <div className='flex w-full mt-5'>
            <div className='mr-5'>
                    <FormControl>
                        <InputLabel id="fromBal">Saldo Desde</InputLabel>
                        <OutlinedInput
                            labelId="fromBal"
                            label="Saldo Desde"
                            value={fromBalance}
                            onChange={handleChangeFromBalance}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                </div>
                <div className=''>
                    <FormControl>
                        <InputLabel id="toBal">Saldo Hasta</InputLabel>
                        <OutlinedInput
                            labelId="toBal"
                            label="Saldo Hasta"
                            value={toBalance}
                            onChange={handleChangeToBalance}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                </div>
        </div>
    </div>  )
}

export default AccountConditionExtendedForm