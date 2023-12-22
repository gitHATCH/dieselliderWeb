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

export default function MyOrdersTable() {
  const {modalMyOrdersData,handleModalMyOrdersData} = useContext(ModalContext);
  const [myOrder, setMyOrder] = useState(null);


  const titles = ["N° Pedido","Fecha","Artículos","Moneda", "Subtotal Neto", "Importe Total", "Fecha Factura", "Domicilio de Envío", "Estado", ""]

  const handleDetailOrder = (myOrder) => {
    setMyOrder(myOrder)
    handleModalMyOrdersData()
  }


  return (
    <>
    <div className='mt-5 w-full shadow-md shadow-black rounded-xl' style={{ maxHeight: '350px', overflowY: 'auto' }}>
      <table aria-label="w-full" className='bg-slate-300 rounded-xl'>
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
              <td className='tableContent max-w-xs'>{row.number}</td>
              <td className='tableContent max-w-sm'>{row.date}</td>
              <td className='tableContent max-w-xs'>{row.articles}</td>
              <td className='tableContent max-w-xs'>{row.money}</td>
              <td className='tableContent max-w-xs'>{row.subtotal}</td>
              <td className='tableContent max-w-xs'>{row.total}</td>
              <td className='tableContent max-w-xs'>{row.invoiceDate}</td>
              <td className='tableContent max-w-xs'>{row.address}</td>
              <td className='tableContent max-w-xs'>{row.state}</td>
              <td className='tableContent max-w-xs flex justify-center'>
                <button className='bg-blue-700 hover:bg-blue-600 rounded-full p-2 shadow-black shadow-sm flex items-center justify-center'
                  onClick={() => handleDetailOrder(row)}
                >
                  <ArticleOutlinedIcon style={{fontSize:24}}/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
     
      </table>
      {modalMyOrdersData && <ModalMyOrdersData myOrder = {myOrder}/>}
    </div>
    </>
  );
}

const createData = (number, date, articles, money, subtotal, total, invoiceDate, address, state, hour, transport, payment, taxes) => {
    return {
      number,
      date,
      articles,
      money,
      subtotal,
      total,
      invoiceDate,
      address,
      state, 
      hour,
      transport,
      payment,
      taxes
    };
  }
  
  const rows = [
    createData('001', '2023-01-01', '1', 'USD', 100.00, 120.00, '2023-01-02', 'Calle 123, Ciudad', 'En proceso', "Por la tarde", "SENDBOX", "Destino", 8.00),
    createData('002', '2023-01-01', '2', 'ARS', 100.00, 120.00, '2023-01-02', 'Calle 123, Ciudad', 'Cancelado', "Por la tarde", "SENDBOX", "Destino", 8.00),
    createData('003', '2023-01-01', '1', 'USD', 100.00, 120.00, '2023-01-02', 'Calle 123, Ciudad', 'En proceso', "Por la tarde", "SENDBOX", "Destino", 8.00),
  ];