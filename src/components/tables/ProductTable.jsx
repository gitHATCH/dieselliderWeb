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
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
//TODO: Modularizar
//TODO: Select debe desaparecer si se selecciona un producto de otra tabla

export default function ProductTable({selectedRows,handleSelectedRows,relationship}) {
  const {modalProductData,handleModalProductData,modalProductView,handleModalProductView,modalProductAdd,handleModalProductAdd} = useContext(ModalContext);
  const {addProduct,order,checkAlreadyExist,deleteProduct} = useContext(OrderContext)
  const [product, setProduct] = useState(null);
  const [selected, setSelected] = useState(null)
  

  useEffect(() => {
    if(selectedRows && selectedRows[0] != 0){
      setSelected(null)
    }
  }, [selectedRows])
  
  const titles = relationship ? ["Código DL","Descripción","Marca","Precio","Descuento","Precio Neto", "Stock", "Detalles"] : ["","Código DL","Descripción","Marca","Precio","Descuento","Precio Neto", "Stock", "Detalles"]
 
  const handleSelected = (code) => {
    if(!relationship){
      setSelected((prevSelected) => (prevSelected === code ? null : code))
      selectedRows && selectedRows[0] === 0 && selectedRows[1] === code ? handleSelectedRows(null) : handleSelectedRows([0,code])
    }
  }
  const handleSelectProduct = (product) => {
    //TODO: Actualizar producto actual
    //TODO: Actualizar producto ProductTable
    //TODO: Actualizar producto OriginalPartsTable
    handleSelectedRows([3,null])
  }
  
  const handleDetailProduct = (product) => {
    setProduct(product)
    handleModalProductData()
  }

  const handleViewProduct = (product) => {
    setProduct(product)
    handleModalProductView()
  }

  const handleAddProduct = (product) => {
    setProduct(product)
    handleModalProductAdd()
  }

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
          {rows.map((row,index) => (
            <tr key={index} className={`p-2 ${selected == index ? "bg-orange-200" : index % 2 ? "bg-slate-300 hover:bg-cyan-600 hover:bg-opacity-20" : "bg-slate-400 hover:bg-cyan-600 hover:bg-opacity-20"} bg-green-800`}
              onClick={() => handleSelected(index)}
            >
              {!relationship && (
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
              )}
             
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
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDetailProduct(row);
                  }}
                >
                  <ArticleOutlinedIcon style={{fontSize:24}}/>
                </button>
                <button className='ml-2 bg-orange-700 hover:bg-orange-600 rounded-full p-2 shadow-black shadow-sm flex items-center justify-center'
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewProduct(row);
                  }}
                >
                  <ImageOutlinedIcon style={{fontSize:24}}/>
                </button>
                {relationship ? (
                  <button className={`ml-2 ${checkAlreadyExist(row.code) ? "bg-red-700 hover:bg-red-600 " : "bg-green-700 hover:bg-green-600"} rounded-full p-2 shadow-black shadow-sm flex items-center justify-center`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectProduct(row);
                    }}
                  >
                    <LibraryAddCheckOutlinedIcon style={{fontSize:24}}/>
                  </button>
                ) : (
                  <button className={`ml-2 ${checkAlreadyExist(row.code) ? "bg-red-700 hover:bg-red-600 " : "bg-green-700 hover:bg-green-600"} rounded-full p-2 shadow-black shadow-sm flex items-center justify-center`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddProduct(row);
                    }}
                  >
                    {checkAlreadyExist(row.code) ? (
                      <RemoveShoppingCartOutlinedIcon style={{fontSize:24}}/>
                    ) : (
                      <AddShoppingCartIcon style={{fontSize:24}}/>
                    )}
                  </button>
                )}
               
              </td>
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
