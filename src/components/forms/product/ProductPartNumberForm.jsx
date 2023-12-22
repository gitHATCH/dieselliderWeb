import { FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import { useState } from 'react';

const ProductPartNumberForm = ({brand, setBrand, format, setFormat, number, setNumber}) => {
    const formats = ["fafa","afas"]
    const brands = ["safa","afasfa","afasfa","afa afa","afa"]
    const [actualFormat, setActualFormat] = useState("")
    const [actualBrand, setActualBrand] = useState("")
    
    const onChangeFormat = (value) => {
      setActualFormat(value)
      setFormat(formats[value])
    }

    const onChangeBrand = (value) => {
      setActualBrand(value)
      setBrand(brands[value])
    }

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full'>
        <div className='formInput'>
          <FormControl fullWidth>
            <InputLabel id="brand">Marca</InputLabel>
            <Select
                labelId="brand"
                label="Marca"
                value={actualBrand}
                onChange={e => onChangeBrand(e.target.value)} 
            >
              {brands.map((brand,index) => (
                <MenuItem value={index} key={index}>{brand}</MenuItem>
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
                  value={actualFormat}
                  onChange={e => onChangeFormat(e.target.value)} 
              >
                {formats.map((format,index) => (
                  <MenuItem value={index} key={index}>{format}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className='w-2/3 formInput'>
            <TextField 
              fullWidth 
              id="number" 
              label="Número de Parte" 
              variant="outlined" 
              value={number}
              onChange={e => setNumber(e.target.value)}
            />
          </div>
          
                
        </div>
      </div>
      
        
        
        
  </div>
  )
}

export default ProductPartNumberForm