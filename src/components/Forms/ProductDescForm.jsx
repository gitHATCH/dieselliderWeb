
import { FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import { useState } from 'react';

const ProductDescForm = () => {
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");

    const handleChangeType = (event) => {
        setType(event.target.value);
    };
    const handleChangeDesc = (event) => {
      setDesc(event.target.value);
    };
    
    const types = ["safa","afasfa","afasfa","afa afa","afa"]

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full'>
        <div className='formInput'>
          <FormControl fullWidth>
            <InputLabel id="type">Tipo de Artículo</InputLabel>
            <Select
                labelId="type"
                label="Tipo de Artículo"
                value={type}
                onChange={handleChangeType} 
            >
              {types.map((type,index) => (
                <MenuItem value={index}>{type}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
     
        <div className='formInput mt-5'>
          <TextField 
            fullWidth 
            id="desc" 
            label="Descripción" 
            variant="outlined" 
            onChange={handleChangeDesc}
          />
        </div>
          
                
      
      </div>
      
        
        
        
  </div>
  )
}

export default ProductDescForm