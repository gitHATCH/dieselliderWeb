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

export default function MyOrderTable() {
  const {modalMyOrdersData,handleModalMyOrdersData} = useContext(ModalContext);
  const [myOrder, setMyOrder] = useState(null);


  const titles = ["Código DL","Descripción","Marca","Precio Unitario", "Cantidad", "Subtotal"]

  const handleDetailOrder = (myOrder) => {
    setMyOrder(myOrder)
    handleModalMyOrdersData()
  }


  return (
    <>
    <div className='mt-4 w-full shadow-md shadow-black rounded-xl' style={{ maxHeight: '150px', overflowY: 'auto' }}>
      <table aria-label="w-full" className='bg-slate-300 rounded-xl'>
        <thead className='sticky top-0 z-1'>
          <tr>
            {titles.map((title,index) => (
              <th className='modalTableTitle text-left' key={index}><p className='text-base'>{title}</p></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row,index) => (
            <tr key={index} className={`p-1 ${index % 2 ? "bg-slate-300" : "bg-slate-400"} hover:bg-cyan-600 hover:bg-opacity-20 bg-green-800 text-sm`}>
              <td className='modalTableContent max-w-xs w-1/6'>{row.code}</td>
              <td className='modalTableContent max-w-sm w-2/5'>{row.description}</td>
              <td className='modalTableContent max-w-xs w-1/6'>{row.brand}</td>
              <td className='modalTableContent max-w-xs w-1/5'>{row.price}</td>
              <td className='modalTableContent max-w-xs w-1/6'>{row.quantity}</td>
              <td className='modalTableContent max-w-xs w-1/6'>{row.subtotal}</td>
            </tr>
          ))}
        </tbody>
      
      </table>
    </div>
    </>
  );
}

const createData = (code, description, brand, price, quantity, subtotal) => {
    return {
      code,
      description,
      brand,
      price,
      quantity,
      subtotal,
    };
  }
  
  const rows = [
    createData('001', 'Artículo 1', 'Marca 1', 100.00, 1, 100.00),
    createData('002', 'Artículo 2', 'Marca 2', 100.00, 1, 100.00),
    createData('003', 'Artículo 3', 'Marca 3', 100.00, 1, 100.00),
    createData('004', 'Artículo 3', 'Marca 3', 100.00, 1, 100.00),
    createData('005', 'Artículo 3', 'Marca 3', 100.00, 1, 100.00),
    createData('006', 'Artículo 3', 'Marca 3', 100.00, 1, 100.00),
    createData('007', 'Artículo 3', 'Marca 3', 100.00, 1, 100.00),
  ];