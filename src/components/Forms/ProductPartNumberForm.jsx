import { FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import { useState } from 'react';

const ProductPartNumberForm = () => {
  const [brand, setBrand] = useState("");
  const [format, setFormat] = useState("");
  const [code, setCode] = useState("");



    const handleChangeBrand = (event) => {
        setBrand(event.target.value);
    };
    const handleChangeFormat = (event) => {
      setFormat(event.target.value);
    };
    const handleChangeCode = (event) => {
      setCode(event.target.value);
  };
    
    const formats = ["fafa","afas"]
    const brands = ["safa","afasfa","afasfa","afa afa","afa"]

  return (
    <div className='w-full flex justify-center'>
      <div className='w-1/2'>
        <div className='formInput'>
          <FormControl fullWidth>
            <InputLabel id="brand">Marca</InputLabel>
            <Select
                labelId="brand"
                label="Marca"
                value={brand}
                onChange={handleChangeBrand} 
            >
              {brands.map((brand,index) => (
                <MenuItem value={index}>{brand}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className='flex justify-between mt-5'>
          <div className='w-1/3 formInput'>
            <FormControl fullWidth>
              <InputLabel id="format">Formato</InputLabel>
              <Select
                  labelId="format"
                  label="Formato"
                  value={format}
                  onChange={handleChangeFormat} 
              >
                {formats.map((format,index) => (
                  <MenuItem value={index}>{format}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className='w-2/3 formInput'>
            <TextField 
              fullWidth 
              id="code" 
              label="Número de Parte" 
              variant="outlined" 
              onChange={handleChangeCode}
            />
          </div>
          
                
        </div>
      </div>
      
        
        
        
  </div>
  )
}

export default ProductPartNumberForm