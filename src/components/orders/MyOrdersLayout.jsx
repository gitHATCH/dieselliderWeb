import React, { useState } from 'react'
import { toast } from 'react-toastify'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MyOrdersSimpleForm from '../forms/myOrders/MyOrdersSimpleForm';
import MyOrdersExtendedForm from '../forms/myOrders/MyOrdersExtendedForm';
import MyOrdersTable from '../tables/MyOrdersTable';
import SpinnerProducts from '../spinners/SpinnerProducts';
import ProductPartNumberForm from '../forms/product/ProductPartNumberForm';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';

const MyOrdersLayout = () => {
    const [orderState, setOrderState] = useState("")
    const [period, setPeriod] = useState("")
    const [showMore, setShowMore] = useState(false)
    const [fromOrder, setFromOrder] = useState("")
    const [toOrder, setToOrder] = useState("")
    const [fromDate, setFromDate] = useState("")
    const [toDate, setToDate] = useState("")
    const [toDebit, setToDebit] = useState("")
    const [fromBalance, setFromBalance] = useState("")
    const [showTable, setShowTable] = useState(false)
    const [loading, setLoading] = useState(false)

    const ordersState = ["Pedidos en todos los estados",, "Pedidos para autorizar", "Pedidos autorizados", "Pedidos en proceso", "Pedidos facturados", "Pedidos cancelados"]
    const periods = ["Todo el periodo", "Movimientos del día", "Últimos 7 días", "Últimos 15 días", "Últimos 30 días", "Últimos 60 días", "Últimos 90 días"]

    const handleChangeOrderState = (event) => {
        setOrderState(event.target.value);
    }
    const handleChangePeriod = (event) => {
        setPeriod(event.target.value);
    }
    const handleChangeShowMore = () => {
        setShowMore(!showMore)
    }
    const handleChangeFromOrder = (event) => {
        setFromOrder(event.target.value);
    }
    const handleChangeToOrder = (event) => {
        setToOrder(event.target.value);
    }
    const handleChangeFromDate = (event) => {
        setFromDate(event.target?.value)
    }
    const handleChangeToDate = (event) => {
        setToDate(event.target?.value)
    }
    const handleChangeToDebit = (event) => {
        setToDebit(event.target.value)
    }
    const handleChangeFromBalance = (event) => {
        setFromBalance(event.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(orderState === "" || period === ""){
            toast.error("Todos los campos son obligatorios!")
        }
        else{
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
            <div className='p-5 w-4/5 mt-10 bg-slate-200 rounded-xl shadow-md shadow-black'>            
                <div className={`${!showMore ? "flex justify-between" : "flex-col"} items-center `}>
                    {!showMore ? (
                        <div className='w-full'>
                            <MyOrdersSimpleForm orderState={orderState} period={period} handleChangeOrderState={handleChangeOrderState} handleChangePeriod={handleChangePeriod} ordersState={ordersState} periods={periods}/>
                        </div>
                    ) : (
                        <MyOrdersExtendedForm
                            fromOrder={fromOrder}
                            toOrder={toOrder}
                            handleChangeFromOrder={handleChangeFromOrder}
                            handleChangeToOrder={handleChangeToOrder}
                            fromDate={fromDate}
                            toDate={toDate}
                            handleChangeFromDate={handleChangeFromDate}
                            handleChangeToDate={handleChangeToDate}
                            toDebit={toDebit}
                            handleChangeToDebit={handleChangeToDebit}
                            fromBalance={fromBalance}
                            handleChangeFromBalance={handleChangeFromBalance}
                            ordersState={ordersState}
                            orderState={orderState}
                            handleChangeOrderState={handleChangeOrderState}
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
            <div>
                <div className='flex justify-center w-full'>
                    {loading && (
                        <div className='mt-5 flex items-center justify-center'>
                            <SpinnerProducts/>
                        </div>
                    )}
                    {showTable && (
                        <div className='flex flex-col mb-10'>
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
                                <MyOrdersTable/>
                            </div>
                            
                        </div>
                    )}
                </div>
            </div>
            
    </div>
  )
}

export default MyOrdersLayout