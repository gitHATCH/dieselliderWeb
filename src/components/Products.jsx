import * as React from 'react';
import { Box, Button, FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Logo from "../assets/images/DLCircle.png"
import { useState } from 'react';
import ProductCodeForm from './Forms/ProductCodeForm';
import ProductDescForm from './Forms/ProductDescForm';
import ProductPartNumberForm from './Forms/ProductPartNumberForm';
import ProductTable from './ProductTable';
import SpinnerProducts from './Spinners/SpinnerProducts';

export default function Products() {

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
        <div className='flex justify-center w-2/3 mt-10 bg-slate-200 rounded-xl shadow-xl shadow-black'>
        <div className='md:mt-0 2xl:mt-20 w-full p-10'>
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
                        <div className='btnSearch mt-5 hover:opacity-90 w-1/2'>
                            <Button
                                fullWidth 
                                variant="contained"
                                style={{backgroundColor:"transparent", fontSize:15, fontWeight:"bold"}}
                                onClick={handleSubmit}
                            >
                                <div className='2xl:h-12 flex items-center'>
                                <p className='text-lg 2xl:text-3xl font-semibold'>Buscar</p>
                                </div>
                            </Button>
                        </div>
                    </div>
                    
                    
                </div>
                
                
                <div className='flex justify-center mt-10'>
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
                    <div className='mt-10 w-6/7'>
                        <ProductTable/>
                    </div>
                )}
        </div>
    </div>

  );
}
