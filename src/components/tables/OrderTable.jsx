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
//TODO: Modularizar
//TODO: Eliminar producto del pedido
//TODO: Agregar grupo checkbox, only 1
//TODO: Crear modal resumen pedido 

export default function OrderTable() {
  const {modalProductAddedData,handleModalProductAddedData} = useContext(ModalContext);
  const {addProduct,order,checkAlreadyExist,deleteProduct} = useContext(OrderContext)
  const [selected, setSelected] = useState([]);
  const [product, setProduct] = useState(null);


  const titles = ["Código DL","Descripción","Marca","Precio Neto", "Stock", "Cantidad", ""]
 
  const handleSelected = (index) => {
    if(selected.includes(index)){
      setSelected(selected.filter((item) => item !== index))
    }
    else{
      setSelected([...selected, index])
    }
  }

  const handleDetailProduct = (product) => {
    setProduct(product)
    handleModalProductAddedData()
  }

  const handleRemoveProduct = (code) => {
    deleteProduct(code)
  }

  console.log(order);

  return (
    <>
    <div className='w-full shadow-md shadow-black rounded-xl' style={{ maxHeight: '350px', overflowY: 'auto' }}>
      <table aria-label="w-full" className='bg-slate-300 rounded-xl'>
        <thead className='sticky top-0 z-1'>
          <tr>
            {titles.map((title,index) => (
              <th className='tableTitle text-left' key={index}><p className='text-lg'>{title}</p></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {order.map((row,index) => (
            <tr key={index} className={`p-2 ${index % 2 ? "bg-slate-300" : "bg-slate-400"} hover:bg-cyan-600 hover:bg-opacity-20 bg-green-800`}>
              <td className='tableContent max-w-xs'>{row.code}</td>
              <td className='tableContent max-w-sm'>{row.descr}</td>
              <td className='tableContent max-w-xs'>{row.brand}</td>
              <td className='tableContent max-w-xs'>{row.charge}</td>
              <td className='tableContent max-w-xs'>
                <div className='flex justify-center'>
                  <CircleIcon style={{fontSize:20, color:row.stock ? "green" : "red"}}/>
                </div>
             </td>
             <td className='tableContent max-w-xs'>{1}</td>

              <td className='tableContent max-w-xs flex justify-center'>
                <button className='bg-blue-700 hover:bg-blue-600 rounded-full p-2 shadow-black shadow-sm flex items-center justify-center'
                  onClick={() => handleDetailProduct(row)}
                >
                  <ArticleOutlinedIcon style={{fontSize:24}}/>
                </button>
                <button className={`ml-2 ${checkAlreadyExist(row.code) ? "bg-red-700 hover:bg-red-600 " : "bg-green-700 hover:bg-green-600"} rounded-full p-2 shadow-black shadow-sm flex items-center justify-center`}
                  onClick={() => handleRemoveProduct(row.code)}
                >
                    <RemoveShoppingCartOutlinedIcon style={{fontSize:24}}/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
    
      </table>
      {modalProductAddedData && <ModalProductAddedData product = {product}/>}
    </div>
    </>
  );
}

