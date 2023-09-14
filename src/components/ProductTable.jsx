import * as React from 'react';
import { styled } from '@mui/system';
import {
  TablePagination,
  tablePaginationClasses as classes,
} from '@mui/base/TablePagination';
import CircleIcon from '@mui/icons-material/Circle';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useEffect } from 'react';
import ModalProductData from './Modals/ModalProductData';
import { useContext } from 'react';
import { ModalContext } from '../hooks/ModalContext';

export default function ProductTable() {
  const {modalProductData,handleModalProductData} = useContext(ModalContext);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState([]);
  const [product, setProduct] = useState(null);

  //Fix pagination bttns titles
  useEffect(() => {
    const firstPageButton = document.querySelector('button[title="Go to first page"]');
    const prevPageButton = document.querySelector('button[title="Go to previous page"]');
    const nextPageButton = document.querySelector('button[title="Go to next page"]');
    const lastPageButton = document.querySelector('button[title="Go to last page"]');

    if (firstPageButton) {
      firstPageButton.title = "";
      prevPageButton.title = "";
      nextPageButton.title = "";
      lastPageButton.title = "";
    }
  }, []);

  const titles = ["","Código DL","Descripción","Marca","Precio","Descuento","Precio Neto", "Stock", "Detalles"]
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelected = (index) => {
    if(selected.includes(index)){
      setSelected(selected.filter((item) => item !== index))
    }
    else{
      setSelected([...selected, index])
    }
  }

  const handleSelectProduct = (product) => {
    setProduct(product)
    handleModalProductData()
  }

  return (
    <div className='w-full mt-10 mb-10'>
      <table aria-label="w-full" className='bg-slate-300 rounded-xl shadow-xl shadow-black'>
        <thead>
          <tr>
            {titles.map((title,index) => (
              <th className='tableTitle text-left' key={index}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody className=''>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row,index) => (
            <tr key={row.name} className={`p-2 ${index % 2 ? "bg-slate-300" : "bg-slate-400"} hover:bg-cyan-600 hover:bg-opacity-20 bg-green-800`}>
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
              <td className='tableContent max-w-xs'>{row.stock ? (
                <div className='flex justify-center'>
                  <CircleIcon style={{fontSize:20, color:"red"}}/>
                </div>
              ) : (
                <div className='flex justify-center'>
                  <CircleIcon style={{fontSize:20, color:"green"}}/>
                </div>
              )}</td>
              <td className='tableContent max-w-xs flex justify-center'>
                <button className='bg-blue-700 hover:bg-blue-600 rounded-full p-2 shadow-black shadow-sm flex items-center justify-center'
                  onClick={() => handleSelectProduct(row)}
                >
                  <ArticleOutlinedIcon style={{fontSize:24}}/>
                </button>
                <button className='ml-2 bg-orange-700 hover:bg-orange-600 rounded-full p-2 shadow-black shadow-sm flex items-center justify-center'>
                  <ImageOutlinedIcon style={{fontSize:24}}/>
                </button>
                <button className='ml-2 bg-green-700 hover:bg-green-600 rounded-full p-2 shadow-black shadow-sm flex items-center justify-center'>
                  <AddShoppingCartIcon style={{fontSize:24}}/>
                </button>
              </td>
            </tr>
          ))}
          {emptyRows > 0 && (
            <tr style={{ height: 0 * emptyRows }}>
              <td colSpan={8} />
            </tr>
          )}
        </tbody>
        <tfoot className='w-full'>
          <tr className='w-full'>
            <CustomTablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'Todos', value: -1 }]}
              colSpan={8}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              
              slotProps={{
                select: {
                  'aria-label': 'Productos por página',
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                  disabled: true,
                  
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="Productos por página"
            />
           

          </tr>
        </tfoot>
      </table>
      {modalProductData && <ModalProductData product = {product}/>}
    </div>
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

const CustomTablePagination = styled(TablePagination)`
  padding:0.3rem;
  
  & .${classes.root} {
    width: 100%;
    background-color:red;
  }
  & .${classes.select} {
    background-color: rgb(30 41 59 / 0.2);
    text-align: center; 
    margin-left: 4px; 
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
    border-radius: 0.8rem;
    padding: 0.5rem;    
    cursor:pointer;
  }
  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 5px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.displayedRows} {
    margin: 0;


    background-color: rgb(30 41 59 / 0.2);
    text-align: center; 
    margin-left: 4px; 
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
    border-radius: 0.8rem;
    padding: 0.5rem; 


    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.spacer} {
    display: none;
  }

  & .${classes.actions} {
    display: flex;
    gap: 0.55rem;
  }

  & .${classes.actions} {
    button {
      padding: 0.3rem; 
    },
    button:hover {
      background-color: rgb(30 41 59 / 0.1);
      border-radius: 0.8rem;
      padding: 0.4rem; 
    }
  }
  
`;
