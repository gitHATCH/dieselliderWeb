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

export default function ProductTable() {
  const {modalProductData,handleModalProductData,modalProductView,handleModalProductView,modalProductAdd,handleModalProductAdd} = useContext(ModalContext);
  const {addProduct,order,checkAlreadyExist,deleteProduct} = useContext(OrderContext)
  const [selected, setSelected] = useState([]);
  const [product, setProduct] = useState(null);


  const titles = ["","Código DL","Descripción","Marca","Precio","Descuento","Precio Neto", "Stock", "Detalles"]
 
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
    handleModalProductData()
  }

  const handleViewProduct = (product) => {
    setProduct(product)
    handleModalProductView()
  }

  console.log(order);

  return (
    <>
    <div className='w-full mt-10 mb-10 shadow-md shadow-black rounded-xl' style={{ maxHeight: '350px', overflowY: 'auto' }}>
      <table aria-label="w-full" className='bg-slate-300 rounded-xl'>
        <thead className='sticky top-0 z-1'>
          <tr>
            {titles.map((title,index) => (
              <th className='tableTitle text-left' key={index}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row,index) => (
            <tr key={index} className={`p-2 ${index % 2 ? "bg-slate-300" : "bg-slate-400"} hover:bg-cyan-600 hover:bg-opacity-20 bg-green-800`}>
              <td className='tableContent max-w-xs'>
                <Checkbox
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 24, color:"blue" } }}
                  value={selected.includes(index)}
                  onChange={() => handleSelected(index)}
                />
              </td>
              <td className='tableContent max-w-xs'>{row.code}</td>
              <td className='tableContent max-w-sm'>{row.descr}</td>
              <td className='tableContent max-w-xs'>{row.brand}</td>
              <td className='tableContent max-w-xs'>{row.price}</td>
              <td className='tableContent max-w-xs'>{row.disc}%</td>
              <td className='tableContent max-w-xs'>{row.charge}</td>
              <td className='tableContent max-w-xs'>
                <div className='flex justify-center'>
                  <CircleIcon style={{fontSize:20, color:row.stock ? "green" : "red"}}/>
                </div>
             </td>
              <td className='tableContent max-w-xs flex justify-center'>
                <button className='bg-blue-700 hover:bg-blue-600 rounded-full p-2 shadow-black shadow-sm flex items-center justify-center'
                  onClick={() => handleDetailProduct(row)}
                >
                  <ArticleOutlinedIcon style={{fontSize:24}}/>
                </button>
                <button className='ml-2 bg-orange-700 hover:bg-orange-600 rounded-full p-2 shadow-black shadow-sm flex items-center justify-center'
                  onClick={() => handleViewProduct(row)}
                >
                  <ImageOutlinedIcon style={{fontSize:24}}/>
                </button>
                <button className={`ml-2 ${checkAlreadyExist(row.code) ? "bg-red-700 hover:bg-red-600 " : "bg-green-700 hover:bg-green-600"} rounded-full p-2 shadow-black shadow-sm flex items-center justify-center`}
                  onClick={checkAlreadyExist(row.code) ? () => deleteProduct(row.code) : () => addProduct(row)}
                >
                  {checkAlreadyExist(row.code) ? (
                    <RemoveShoppingCartOutlinedIcon style={{fontSize:24}}/>
                  ) : (
                    <AddShoppingCartIcon style={{fontSize:24}}/>
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className='w-full h-2'>
          <tr></tr>
        </tfoot>
      </table>
      {modalProductData && <ModalProductData product = {product}/>}
      {modalProductView && <ModalProductView product = {product}/>}
    </div>
    </>
  );
}

const createData = (code, descr, brand, price, disc, charge, stock, type, section, group, subgroup, partNumb, unity, obs) => {
  return {
    code,
    descr,
    brand,
    price,
    disc,
    charge,
    stock,
    type,
    section, 
    group, 
    subgroup, 
    partNumb, 
    unity, 
    obs,
  };
}

const rows = [
  createData('6001-18[1]', "Biela forjada super A 144 mm Motor AP 1100 CV", "SPA TURBO", "$ 0.00", "20", "$ 0.00", false, "CHRA", "C", "CONJ. CENT. NUEVOS ALTERNATIVOS SJT", "", "	1-00-0001; 433289-0065", "unidades", "Los turbos donde va aplicado este CCR no son intercambiables entre si (101-43 / 101-46 / 101-50)"),
  createData('6001-18[2]', "Pistones de alto rendimiento 83mm para motor turbo", "TurboTech", "$ 79.99", "15", "$ 1,199.85", true, "CHRA", "C", "CONJ. CENT. NUEVOS ALTERNATIVOS SJT", "", "	1-00-0001; 433289-0065", "unidades", "Los turbos donde va aplicado este CCR no son intercambiables entre si (101-43 / 101-46 / 101-50)"),
  createData('6001-18[3]', "Kit de suspensión deportiva ajustable para VW Golf GTI", "SportLine", "$ 299.99", "10", "$ 2,999.90", false, "CHRA", "C", "CONJ. CENT. NUEVOS ALTERNATIVOS SJT", "", "	1-00-0001; 433289-0065", "unidades", "Los turbos donde va aplicado este CCR no son intercambiables entre si (101-43 / 101-46 / 101-50)"),
  createData('6001-18[4]', "Escape de acero inoxidable cat-back para Ford Mustang", "Exhaust Masters", "$ 449.99", "8", "$ 3,599.92", true, "CHRA", "C", "CONJ. CENT. NUEVOS ALTERNATIVOS SJT", "", "	1-00-0001; 433289-0065", "unidades", "Los turbos donde va aplicado este CCR no son intercambiables entre si (101-43 / 101-46 / 101-50)"),
  createData('6001-18[5]', "Filtro de aire de alto flujo para coches deportivos", "AirFlow", "$ 29.99", "50", "$ 1,499.50", true, "CHRA", "C", "CONJ. CENT. NUEVOS ALTERNATIVOS SJT", "", "	1-00-0001; 433289-0065", "unidades", "Los turbos donde va aplicado este CCR no son intercambiables entre si (101-43 / 101-46 / 101-50)"),
  createData('6001-18[6]', "Juego de llantas de aleación ligera 17' para sedán", "Alloy Wheels", "$ 199.99", "12", "$ 2,399.88", true, "CHRA", "C", "CONJ. CENT. NUEVOS ALTERNATIVOS SJT", "", "	1-00-0001; 433289-0065", "unidades", "Los turbos donde va aplicado este CCR no son intercambiables entre si (101-43 / 101-46 / 101-50)"),
];
