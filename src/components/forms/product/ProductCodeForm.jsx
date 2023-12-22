import { Button, FormControlLabel, TextField, Tooltip } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

const ProductCodeForm = ({code, setCode, checkedDL, setCheckedDL, checkedCoincidences, setCheckedCoincidences}) => {

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full'>
        <div className='formInput'>
          <TextField 
            fullWidth 
            id="code" 
            label="Código DL o Número de Parte" 
            variant="outlined"
            value={code} 
            onChange={e => setCode(e.target.value)}
          />
        </div>
        
        <div className='flex flex-row justify-between'>
          <FormControlLabel 
            control={
              <Checkbox 
                checked={checkedDL}
                onChange={() => setCheckedDL(!checkedDL)}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            } 
            label="Solo Códigos DL" 
          />
          
          <FormControlLabel 
            control={
              <Checkbox 
                checked={checkedCoincidences}
                onChange={() => setCheckedCoincidences(!checkedCoincidences)}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            } 
            label="Buscar coincidencias" 
          />
        </div>
            
      </div>  
  </div>
  )
}

export default ProductCodeForm