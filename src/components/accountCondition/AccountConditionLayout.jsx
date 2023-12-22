import React, { useState } from 'react'
import { toast } from 'react-toastify'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AccountConditionSimpleForm from '../forms/accountCondition/AccountConditionSimpleForm';
import AccountConditionExtendedForm from '../forms/accountCondition/AccountConditionExtendedForm';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import MyVouchersTable from '../tables/MyVouchersTable';
import SpinnerProducts from '../spinners/SpinnerProducts';


const AccountConditionLayout = () => {
    const [showTable, setShowTable] = useState(false)
    const [loading, setLoading] = useState(false)
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
        setToDate(event.target?.value)
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
        else {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                setShowTable(true)
            }, 3000);
        
        }
        
    }

  return (
    <div className='w-full flex justify-center flex-col'>
        <div className='flex justify-center mt-10'>
            <div className='w-4/5 bg-slate-300 p-5 rounded-xl shadow-md shadow-black'>
                    <div className={`${!showMore ? "flex justify-between" : "flex-col"} items-center `}>
                        {!showMore ? (
                            <div className='w-full'>
                                <AccountConditionSimpleForm  voucher={voucher} period={period} handleChangeVoucher={handleChangeVoucher} handleChangePeriod={handleChangePeriod} vouchers={vouchers} periods={periods}/>
                            </div>
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

                        <div className={`flex h-16 ${showMore && "justify-end"}`}>
                            <div className='flex items-center w-72'>
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
        </div>
        <div className='flex justify-center w-full'>
            <div className='w-5/6'>

            {loading && (
                <div className='mt-5 flex items-center justify-center'>
                    <SpinnerProducts/>
                </div>
            )}
            {showTable && (
                <div className='flex flex-col mb-10 w-full'>
                    <div className='w-full mt-10 flex justify-end gap-5'>
                        <button className='w-auto p-2 px-4 bg-blue-900 hover:bg-blue-700 h-auto rounded-xl'>
                            <PrintOutlinedIcon style={{color:"white", fontSize:20}}/>
                        </button>
                        <button className='w-auto p-2 px-4 bg-blue-900 hover:bg-blue-700 h-auto rounded-md text-white'>
                            Exportar
                        </button>
                        <button className='w-auto p-2 px-4 bg-blue-900 hover:bg-blue-700 h-auto rounded-xl'>
                            <ReplayOutlinedIcon style={{color:"white", fontSize:20}}/>
                        </button>
                    </div>
                    <div className='mt-0 w-6/7'>
                        <MyVouchersTable/>
                    </div>
                    
                </div>
            )}
            </div>
        </div>
    </div>
  )
}

export default AccountConditionLayout