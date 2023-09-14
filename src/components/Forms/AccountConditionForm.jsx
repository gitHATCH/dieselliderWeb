import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const AccountConditionForm = () => {
    const [voucher, setVoucher] = useState("")
    const [period, setPeriod] = useState("")
    const [showMore, setShowMore] = useState(false)
    const [fromDate, setFromDate] = useState("")
    const [toDate, setToDate] = useState("")
    const [typeMov, setTypeMov] = useState("")
    const [fromDebit, setFromDebit] = useState("")
    const [toDebit, setToDebit] = useState("")
    const [fromBalance, setFromBalance] = useState("")
    const [toBalance, setToBalance] = useState("")

    const movTypes = ["Todos", "Facturas", "Notas de Débito", "Notas de Crédito", "Recibos"]
    const balTypes = ["Todos", "Débitos", "Créditos"]

    const vouchers = ["Comprobantes con Saldo", "Comprobantes con y sin Saldo"]
    const periods = ["Todo el periodo"]

    const handleChangeVoucher = (event) => {
        setVoucher(event.target.value);
    }
    const handleChangePeriod = (event) => {
        setPeriod(event.target.value);
    }
    const handleChangeShowMore = () => {
        setShowMore(!showMore)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(voucher === "" || period === ""){
            toast.error("Todos los campos son obligatorios!")
        }
    }

  return (
    <div className='w-full bg-slate-300 p-10 rounded-xl shadow-xl shadow-black'>
        {!showMore && (
            <div className='flex'>
                <div className='formInput w-1/4'>
                    <FormControl fullWidth>
                    <InputLabel id="vouchers">Comprobantes</InputLabel>
                    <Select
                        labelId="vouchers"
                        label="Comprobantes"
                        value={voucher}
                        onChange={handleChangeVoucher} 
                    >
                        {vouchers.map((voucher,index) => (
                        <MenuItem value={index}>{voucher}</MenuItem>
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
                        <MenuItem value={index}>{period}</MenuItem>
                        ))}
                    </Select>
                    </FormControl>
                </div>
                <div className='flex items-center w-1/6 ml-5'>
                    <button type="button" className="bg-blue-700 hover:bg-blue-800 rounded-md rounded-r-none w-full h-10 text-white font-mono text-lg cursor-pointer uppercase py-2" onClick={handleSubmit}>
                        BUSCAR
                    </button>
                </div>
                <div className='flex items-center ml-0'>
                    <button type="button" className="bg-blue-900 hover:bg-blue-800 rounded-md rounded-l-none w-full h-10 text-white font-mono text-lg cursor-pointer uppercase" onClick={handleChangeShowMore}>
                        <ExpandMoreIcon style={{fontSize:30}}/>
                    </button>
                </div>
            </div>
        )}
        
        {showMore && (
            <>
                <div className='flex'>
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker 
                                label="Fecha Desde"
                                value={fromDate}
                            />
                        </LocalizationProvider>
                    </div>
                    <div>
                        <div className='ml-2 w-1/3 formInput'>
                            <TextField
                                fullWidth 
                                id="fax" 
                                label="Fax" 
                                variant="outlined" 
                                onChange={""}
                            />
                        </div>
                    </div>

                </div>

            </>
        )}
        
    </div>
  )
}

export default AccountConditionForm