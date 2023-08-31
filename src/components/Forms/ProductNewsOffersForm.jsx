import { FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import { useState } from 'react';

const ProductNewsOffersForm = () => {
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    const [desc, setDesc] = useState("");
  
      const handleChangeType = (event) => {
          setType(event.target.value);
      };
      const handleChangeBrand = (event) => {
        setBrand(event.target.value);
      };
      const handleChangeDesc = (event) => {
        setDesc(event.target.value);
      };
      
      const types = ["safa","afasfa","afasfa","afa afa","afa"]
  
    return (
      <div className='w-full flex justify-center'>
        <div className='w-full'>
          
          <div className='flex justify-between w-full'>
            <div className='formInput mr-5 w-full'>
                <FormControl fullWidth>
                <InputLabel id="type">Tipo de Producto</InputLabel>
                <Select
                    labelId="type"
                    label="Tipo de Producto"
                    value={type}
                    onChange={handleChangeType} 
                >
                    {types.map((type,index) => (
                    <MenuItem value={index}>{type}</MenuItem>
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
                    value={brand}
                    onChange={handleChangeBrand} 
                >
                    {types.map((type,index) => (
                    <MenuItem value={index}>{type}</MenuItem>
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
              onChange={handleChangeDesc}
            />
          </div>
            
                  
        
        </div>
        
          
          
          
    </div>
    )
  }

export default ProductNewsOffersForm