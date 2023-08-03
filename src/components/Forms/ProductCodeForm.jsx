import { FormControlLabel, TextField } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import { useState } from 'react';

const ProductCodeForm = () => {

  const [code, setCode] = useState("");
  const [checkedDL, setCheckedDL] = useState(false);
  const [checkedCoincidences, setCheckedCoincidences] = useState(false);
    const handleChangeCode = (event) => {
        setCode(event.target.value);
    };
    const handleChangeCheckedCoincidences = (event) => {
      setCheckedCoincidences(!checkedCoincidences);
    };
    const handleChangeCheckedDL = (event) => {
      setCheckedDL(!checkedDL);
    };

  return (
    <div className='w-full flex justify-center'>
      <div className='w-1/2'>
        <div className='formInput'>
          <TextField 
            fullWidth 
            id="code" 
            label="Código DL o Número de Parte" 
            variant="outlined" 
            onChange={handleChangeCode}
          />
        </div>
        
        <div className='flex flex-row justify-between'>
          <FormControlLabel 
            control={
              <Checkbox 
                checked={checkedDL}
                onChange={handleChangeCheckedDL}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            } 
            label="Solo Códigos DL" 
          />
          <FormControlLabel 
            control={
              <Checkbox 
                checked={checkedCoincidences}
                onChange={handleChangeCheckedCoincidences}
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