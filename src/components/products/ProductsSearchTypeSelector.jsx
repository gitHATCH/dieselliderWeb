import * as React from 'react';
import { Box, Button, FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Logo from "../../assets/images/DLCircle.png"
import { useState } from 'react';
import ProductCodeForm from '../forms/product/ProductCodeForm';
import ProductDescForm from '../forms/product/ProductDescForm';
import ProductPartNumberForm from '../forms/product/ProductPartNumberForm';
import ProductTable from './ProductTable';
import SpinnerProducts from '../spinners/SpinnerProducts';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
//TODO: Modularizar
//TODO: Agregar Tabla partes
//TODO: Agregar Relaciones

export default function ProductsSearchTypeSelector() {

    const [typeSearch, setTypeSearch] = useState(0);
    const [showTable, setShowTable] = useState(false)
    const [loading, setLoading] = useState(false)
      
    const handleChangeType = (event) => {
        setTypeSearch(event.target.value);
    };
   
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setShowTable(true)
        }, 2000);
    };

  return (
    <div className='flex-col justify-center w-full'>
        <div className='flex justify-center'>
        <div className='flex justify-center w-4/5 mt-20 bg-slate-200 rounded-xl shadow-md shadow-black'>
        <div className='md:mt-0 2xl:mt-20 w-full p-5'>
            <Box sx={{ minWidth: 120}}>
                <div className='flex justify-center flex-col'>
                    <div className='flex flex-row w-full'>
                        <div className='formInput mb-10 w-2/3'>
                            <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">Tipo de Búsqueda</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={typeSearch}
                                onChange={handleChangeType}
                            >
                                <FormControlLabel value={0} control={<Radio />} label="Código DL o Número de Parte" />
                                <FormControlLabel value={1} control={<Radio />} label="Número de Parte con Formato" />
                                <FormControlLabel value={2} control={<Radio />} label="Descripción del Artículo" />
                            </RadioGroup>
                            </FormControl>
                        </div>
                        <div className='w-full mt-5'>
                            {typeSearch == 0 && <ProductCodeForm/>}
                            {typeSearch == 1 && <ProductPartNumberForm/>}
                            {typeSearch == 2 && <ProductDescForm/>}
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='flex items-center w-1/2 h-14 mt-5'>
                            <button type="button" className="bg-blue-700 hover:bg-blue-800 rounded-md h-4/5 w-full text-white font-mono text-lg cursor-pointer uppercase py-2" onClick={handleSubmit}>
                                BUSCAR
                            </button>
                        </div>
                    </div>
        
                </div>
                <div className='flex justify-center mt-5'>
                    <hr className='border-1 border-black opacity-40 w-1/2' />
                </div>
                
                

            </Box>
           
    
          
            
          </div>
          </div>

        </div>
        <div className='flex justify-center w-full'>
        {loading && (
                    <div className='flex items-center justify-center mt-5'>
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
                            <button className='w-auto p-2 px-4 bg-blue-900 hover:bg-blue-700 h-auto rounded-md text-white'>
                                Ocultar Inhabilitados
                            </button>
                        </div>
                        <div className='mt-0 w-6/7'>
                            <ProductTable/>
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-orange-700'>
                                * Los precios están sujetos a la aplicación de percepciones, retenciones y otros impuestos que se verán reflejados en el pedido
                            </h3>
                        </div>
                    </div>
                )}
        </div>
    </div>

  );
}
