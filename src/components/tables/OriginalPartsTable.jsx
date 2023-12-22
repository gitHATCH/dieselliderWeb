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
import ModalProductData from '../modals/ModalProductData';
import { useContext } from 'react';
import { ModalContext } from '../../hooks/ModalContext';
import ModalProductView from '../modals/ModalProductView';
import { OrderContext } from '../../hooks/OrderContext';
import ModalProductAdd from '../modals/ModalProductAdd';
//TODO: Modularizar


export default function OriginalPartsTable({selectedRows,handleSelectedRows}) {
  const {modalProductData,handleModalProductData,modalProductView,handleModalProductView,modalProductAdd,handleModalProductAdd} = useContext(ModalContext);
  const {addProduct,order,checkAlreadyExist,deleteProduct} = useContext(OrderContext)
  const [product, setProduct] = useState(null);
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if(selectedRows && selectedRows != [1,selected]){
      setSelected(null)
    }
  }, [selectedRows])

  const titles = ["","P/N Original","Descripción","Marca"]
 
  const handleSelected = (code) => {
    setSelected((prevSelected) => (prevSelected === code ? null : code))
    handleSelectedRows([1,code])

  }

  return (
    <>
    <div className='w-full mt-2 shadow-md shadow-black rounded-xl' style={{ maxHeight: '350px', overflowY: 'auto' }}>
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
            <tr key={index} className={`p-2 ${selected == index ? "bg-orange-200" : index % 2 ? "bg-slate-300 hover:bg-cyan-600 hover:bg-opacity-20" : "bg-slate-400 hover:bg-cyan-600 hover:bg-opacity-20"} bg-green-800`}
              onClick={() => handleSelected(index)}
            >
              <td className='tableContent max-w-xs'>
              <input
                type='checkbox'
                key={index}
                id={`product-checkbox-${index}`}
                className='w-5 h-5'
                checked={selected === index}
                onChange={() => handleSelected(index)}
              />
                
              </td>
              <td className='tableContent max-w-xs'>{row.code}</td>
              <td className='tableContent max-w-sm'>{row.descr}</td>
              <td className='tableContent max-w-xs'>{row.brand}</td>
            </tr>
          ))}
        </tbody>
      
      </table>
      {modalProductData && <ModalProductData product = {product}/>}
      {modalProductView && <ModalProductView product = {product}/>}
      {modalProductAdd && <ModalProductAdd product = {product}/>}
    </div>
    </>
  );
}

const createData = (code, descr, brand) => {
  return {
    code,
    descr,
    brand
  };
}

const rows = [
  createData('6001-18[1]', "Biela forjada super A 144 mm Motor AP 1100 CV", "SPA TURBO"),
  createData('6001-18[2]', "Pistones de alto rendimiento 83mm para motor turbo", "TurboTech"),
  createData('6001-18[3]', "Kit de suspensión deportiva ajustable para VW Golf GTI", "SportLine"),
  createData('6001-18[4]', "Escape de acero inoxidable cat-back para Ford Mustang", "Exhaust Masters"),
  createData('6001-18[5]', "Filtro de aire de alto flujo para coches deportivos", "AirFlow"),
  createData('6001-18[6]', "Juego de llantas de aleación ligera 17' para sedán", "Alloy Wheels"),
  createData('6001-18[7]', "Juego de llantas de aleación ligera 17' para sedán", "Alloy Wheels"),
  createData('6001-18[8]', "Juego de llantas de aleación ligera 17' para sedán", "Alloy Wheels"),
];
