import * as React from 'react';
import { styled } from '@mui/system';
import CircleIcon from '@mui/icons-material/Circle';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useEffect } from 'react';
import ModalProductAddedData from '../modals/ModalProductAddedData';
import { useContext } from 'react';
import { ModalContext } from '../../hooks/ModalContext';
import { OrderContext } from '../../hooks/OrderContext';
import ModalMyOrdersData from '../modals/ModalMyOrdersData';
import { Tooltip } from '@mui/material';

export default function MyVouchersTable() {
  const {modalMyOrdersData,handleModalMyOrdersData} = useContext(ModalContext);
  const [voucher, setVoucher] = useState(null);


  const titles = ["Item","Fecha","Movimiento","Debe","Haber","Deuda","Días Vencidos","Plazo","Estado","Saldo",""]

  const handleDetailVoucher = (voucher) => {
    setVoucher(voucher)
    handleModalMyOrdersData()
  }


  return (
    <>
    <div className='mt-5 w-full shadow-md shadow-black rounded-xl' style={{ maxHeight: '350px', overflowY: 'auto' }}>
      <table aria-label="w-full" className='bg-slate-300 rounded-xl w-full'>
        <thead className='sticky top-0 z-1'>
          <tr>
            {titles.map((title,index) => (
              <th className='tableTitle text-left' key={index}><p className='text-lg'>{title}</p></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row,index) => (
            <tr key={index} className={`p-2 ${index % 2 ? "bg-slate-300" : "bg-slate-400"} hover:bg-cyan-600 hover:bg-opacity-20 bg-green-800`}>
              <td className='tableContent max-w-xs'>{row.item}</td>
              <td className='tableContent max-w-sm'>{row.date}</td>
              <td className='tableContent'>{row.mov}</td>
              <td className='tableContent max-w-xs'>{row.debe}</td>
              <td className='tableContent max-w-xs'>{row.haber}</td>
              <td className='tableContent max-w-xs'>{row.deuda}</td>
              <td className='tableContent max-w-xs'>{row.days}</td>
              <td className='tableContent max-w-xs'>{row.plazo}</td>
              <td className='tableContent max-w-xs'>
                <Tooltip title={row.state}>
                  <div className='flex justify-center'>
                    <CircleIcon style={{fontSize:20, color:row.state == "Cancelado" ? "gray" : row.state == "Aprobado" ? "green" : "red"}}/>
                  </div>
                </Tooltip>
              </td>
              <td className='tableContent max-w-xs'>{row.balance}</td>
              <td className='tableContent max-w-xs flex justify-center'>
                <button className='bg-blue-700 hover:bg-blue-600 rounded-full p-2 shadow-black shadow-sm flex items-center justify-center'
                  onClick={() => handleDetailVoucher(row)}
                >
                  <ArticleOutlinedIcon style={{fontSize:24}}/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {modalMyOrdersData && <ModalMyOrdersData myOrder = {myOrder}/>} */}
    </div>
    </>
  );
}

const createData = (item,date,mov,debe,haber,deuda,days,plazo,state,balance) => {
    return {
        item,
        date,
        mov,
        debe,
        haber,
        deuda,
        days,
        plazo,
        state,
        balance
    };
  }
  
  const rows = [
    createData('001', '2023-01-01', 'FACTURA "B" Nº 0001-000006331', 100.00, 120.00, 100.00, 100, 0, 'Cancelado', 0),
    createData('002', '2023-01-01', 'RECIBO Nº 0001-00006215', 100.00, 120.00, 100.00, 20, 2,'Aprobado', "Cancelado"),
    createData('003', '2023-01-01', 'RECIBO Nº 0001-00008140', 100.00, 120.00, 100.00, 1, 1,'Rechazado', 200),
    createData('004', '2023-01-01', 'RECIBO Nº 0001-00008140', 100.00, 120.00, 100.00, 1, 1,'Rechazado', 200),
    createData('005', '2023-01-01', 'RECIBO Nº 0001-00008140', 100.00, 120.00, 100.00, 1, 1,'Rechazado', 200),
    createData('006', '2023-01-01', 'RECIBO Nº 0001-00008140', 100.00, 120.00, 100.00, 1, 1,'Rechazado', 200),
    createData('007', '2023-01-01', 'RECIBO Nº 0001-00008140', 100.00, 120.00, 100.00, 1, 1,'Rechazado', 200),

  ];