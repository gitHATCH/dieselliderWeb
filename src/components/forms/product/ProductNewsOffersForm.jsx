import { FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import { useState } from 'react';

const ProductNewsOffersForm = ({type,setType,brand,setBrand,desc,setDesc}) => {

    const [actualType, setActualType] = useState("");
    const [actualBrand, setActualBrand] = useState("");
    const types = ["safa","afasfa","afasfa","afa afa","afa"]
    const brands = ["safa","afasfa"]

    const handleChangeType = (value) => {
        setActualType(value);
        setType(types[value]);
    };
    const handleChangeBrand = (value) => {
      setActualBrand(value);
      setBrand(brands[value]);
    };
  
    return (
      <div className='w-full flex justify-center'>
        <div className='w-full'>
          
          <div className='flex flex-col gap-5 sm:gap-0 sm:flex-row sm:justify-between w-full'>
            <div className='formInput mr-5 w-full'>
                <FormControl fullWidth>
                <InputLabel id="type">Tipo de Producto</InputLabel>
                <Select
                    labelId="type"
                    label="Tipo de Producto"
                    value={actualType}
                    onChange={e => handleChangeType(e.target.value)} 
                >
                    {types.map((type,index) => (
                    <MenuItem key={index} value={index}>{type}</MenuItem>
                    ))}
                </Select>
                </FormControl>
            </div>
            <div className='formInput w-full'>
                <FormControl fullWidth>
                <InputLabel id="type">Marca</InputLabel>
                <Select
                    labelId="type"
                    label="Marca"
                    value={actualBrand}
                    onChange={e => handleChangeBrand(e.target.value)} 
                >
                    {brands.map((brand,index) => (
                    <MenuItem key={index} value={index}>{brand}</MenuItem>
                    ))}
                </Select>
                </FormControl>
            </div>

          </div>
          
       
          <div className='formInput mt-5'>
            <TextField 
              fullWidth 
              id="desc" 
              label="Descripción" 
              variant="outlined" 
              value={desc}
              onChange={e => setDesc(e.target.value)}
            />
          </div>
            
                  
        
        </div>
        
          
          
          
    </div>
    )
  }

export default ProductNewsOffersForm