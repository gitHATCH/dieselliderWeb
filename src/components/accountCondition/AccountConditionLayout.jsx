import React, { useState } from 'react'
import { toast } from 'react-toastify'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AccountConditionSimpleForm from '../forms/accountCondition/AccountConditionSimpleForm';
import AccountConditionExtendedForm from '../forms/accountCondition/AccountConditionExtendedForm';

const AccountConditionLayout = () => {
    const [voucher, setVoucher] = useState("")
    const [period, setPeriod] = useState("")
    const [showMore, setShowMore] = useState(false)
    const [fromDate, setFromDate] = useState("")
    const [toDate, setToDate] = useState("")
    const [typeMov, setTypeMov] = useState("")
    const [typeBal, setTypeBal] = useState("")
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
    const handleChangeFromDate = (event) => {
        setFromDate(event.target?.value)
    }
    const handleChangeToDate = (event) => {
        setToDate(event.target.value)
    }
    const handleChangeTypeMov = (event) => {
        setTypeMov(event.target.value)
    }
    const handleChangeTypeBal = (event) => {
        setTypeBal(event.target.value)
    }
    const handleChangeFromDebit = (event) => {
        const value = event.target.value.replace(/[^0-9]/g, '')
        setFromDebit(event.target.value)
    }
    const handleChangeToDebit = (event) => {
        setToDebit(event.target.value)
    }
    const handleChangeFromBalance = (event) => {
        setFromBalance(event.target.value)
    }
    const handleChangeToBalance = (event) => {
        setToBalance(event.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(voucher === "" || period === ""){
            toast.error("Todos los campos son obligatorios!")
        }
    }

  return (
    <div className='w-full bg-slate-300 p-10 rounded-xl shadow-md shadow-black mb-10'>
            <div className=''>
                {!showMore ? (
                    <AccountConditionSimpleForm  voucher={voucher} period={period} handleChangeVoucher={handleChangeVoucher} handleChangePeriod={handleChangePeriod} vouchers={vouchers} periods={periods}/>
                ) : (
                    <AccountConditionExtendedForm
                        fromDebit={fromDebit}
                        toDebit={toDebit}    
                        typeMov={typeMov}
                        typeBal={typeBal}
                        fromBalance={fromBalance}
                        toBalance={toBalance}
                        handleChangeToBalance={handleChangeToBalance}
                        handleChangeFromBalance={handleChangeFromBalance}
                        handleChangeToDebit={handleChangeToDebit}
                        handleChangeFromDebit = {handleChangeFromDebit}
                        handleChangeFromDate={handleChangeFromDate}
                        handleChangeToDate={handleChangeToDate}
                        handleChangeTypeMov={handleChangeTypeMov}
                        handleChangeTypeBal={handleChangeTypeBal}
                        movTypes={movTypes}
                        balTypes={balTypes}
                    />
                )}

                <div className='flex mt-5 h-16'>
                    <div className='flex items-center w-64'>
                        <button type="button" className="bg-blue-700 hover:bg-blue-800 rounded-md h-4/5 rounded-r-none w-full text-white font-mono text-lg cursor-pointer uppercase py-2" onClick={handleSubmit}>
                            BUSCAR
                        </button>
                    </div>
                    <div className='flex items-center ml-0'>
                        <button type="button" className="bg-blue-900 hover:bg-blue-800 rounded-md h-4/5 rounded-l-none w-full text-white font-mono text-lg cursor-pointer uppercase" onClick={handleChangeShowMore}>
                            {!showMore ? (
                                <ExpandMoreIcon style={{fontSize:30}}/>
                            ) : (
                                <ExpandLessIcon style={{fontSize:30}}/>
                            )}
                        </button>
                    </div>
                </div>
                
            </div>
        
    </div>
  )
}

export default AccountConditionLayout