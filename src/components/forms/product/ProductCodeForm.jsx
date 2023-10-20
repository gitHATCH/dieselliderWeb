import { Button, FormControlLabel, TextField, Tooltip } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

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
    const handleSearchByCode = (e) => {
      e.preventDefault()
      if(!code){
        toast.error("El código DL o el número de parte es obligatorio")
      }
    }

  return (
    <div className='w-full flex justify-center'>
      <form className='w-full' onSubmit={handleSearchByCode}>
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
            
      </form>  
  </div>
  )
}

export default ProductCodeForm