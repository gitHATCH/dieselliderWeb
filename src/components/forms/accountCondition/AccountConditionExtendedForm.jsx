import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, Hidden, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'


const AccountConditionExtendedForm = ({ fromBalance, handleChangeFromBalance, toBalance, handleChangeToBalance, typeMov, typeBal, handleChangeFromDate, handleChangeToDate, handleChangeTypeMov, handleChangeTypeBal, movTypes, balTypes, fromDebit, handleChangeFromDebit, toDebit, handleChangeToDebit }) => {
  return (
    <div className='mt-5 w-full'>
        <div className='flex flex-wrap w-full gap-4 items-center justify-center'>
            <div className='min-w-[190px] w-[235px] max-2-[400px]'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Fecha Desde"
                        className='w-full'
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
                    <InputLabel id="typeMov">Tipo de Movimiento</InputLabel>
                    <Select
                        label="Tipo de Movimiento"
                        value={typeMov}
                        onChange={handleChangeTypeMov} 
                        required
                        name='typeMov'
                    >
                        {movTypes.map((type,index) => (
                        <MenuItem value={type} key={index}>{type}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className='min-w-[190px] w-[235px] max-2-[400px]'>
                    <FormControl>
                        <InputLabel id="fromDebit">Debe/Haber Desde</InputLabel>
                        <OutlinedInput
                            className='w-[235px]'
                            label="Debe/Haber Desde"
                            value={fromDebit}
                            onChange={handleChangeFromDebit}
                            required
                            name='fromDebit'
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
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
                            name='toDebit'
                            required
                            onChange={handleChangeToDebit}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                </div>
                <div className='min-w-[190px] w-[235px] max-2-[400px]'>
                    <FormControl fullWidth>
                        <InputLabel id="typeBal">Tipo de Saldo</InputLabel>
                        <Select
                            label="Tipo de Movimiento"
                            value={typeBal}
                            onChange={handleChangeTypeBal}
                            className='w-[235px]'
                            required
                            name='typeBal'
 
                        >
                            {balTypes.map((type,index) => (
                            <MenuItem value={index} key={index}>{type}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            
            
                <div className='min-w-[190px] w-[235px] max-2-[400px]'>
                    <FormControl>
                        <InputLabel id="fromBal">Saldo Desde</InputLabel>
                        <OutlinedInput
                            className='w-[235px]'
                            label="Saldo Desde"
                            required
                            name='fromBal'
                            value={fromBalance}
                            onChange={handleChangeFromBalance}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                </div>
                <div className='min-w-[190px] w-[235px] max-2-[400px]'>
                    <FormControl>
                        <InputLabel id="toBal">Saldo Hasta</InputLabel>
                        <OutlinedInput
                            className='w-[235px]'
                            required
                            name='toBal'
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