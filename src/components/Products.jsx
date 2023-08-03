import * as React from 'react';
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Logo from "../assets/images/DLCircle.png"
import { useState } from 'react';
import ProductCodeForm from './Forms/ProductCodeForm';
import ProductDescForm from './Forms/ProductDescForm';
import ProductPartNumberForm from './Forms/ProductPartNumberForm';

export default function Products() {

    const [typeSearch, setTypeSearch] = useState(0);
      
    const handleChangeType = (event) => {
        setTypeSearch(event.target.value);
    };
   
    const handleSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <div className='flex justify-center px-80 mt-10'>
        <div className='flex justify-center w-full bg-slate-200 rounded-xl shadow-xl shadow-black'>
        <form className='md:mt-5 2xl:mt-20 w-full p-10' onSubmit={handleSubmit}>
            <Box sx={{ minWidth: 120}}>
                <div className='flex justify-center '>
                    <div className='formInput w-1/3'>
                        <FormControl fullWidth>
                        <InputLabel id="tipoBusqueda">Tipo de Búsqueda</InputLabel>
                        <Select
                            labelId="tipoBusqueda"
                            label="Tipo de Búsqueda"
                            value={typeSearch}
                            onChange={handleChangeType} 
                        >
                            <MenuItem value={0}>Código DL o Número de Parte</MenuItem>
                            <MenuItem value={1}>Marca y Número de Parte</MenuItem>
                            <MenuItem value={2}>Descripción</MenuItem>
                        </Select>
                        </FormControl>
                    </div>
                </div>
                <div className='flex justify-center mt-10'>
                    <hr className='border-1 border-black opacity-40 w-1/2' />
                </div>
                <div className='mt-10'>
                    {typeSearch == 0 && <ProductCodeForm/>}
                    {typeSearch == 1 && <ProductPartNumberForm/>}
                    {typeSearch == 2 && <ProductDescForm/>}
                </div>
            </Box>
           
    
          
            
          </form>
        </div>
    </div>

  );
}
