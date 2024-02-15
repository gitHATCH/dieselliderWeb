
import { FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, TextareaAutosize } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import { useState } from 'react';

const ProductDescForm = ({type, setType, desc, setDesc}) => {
    const [actualType, setActualType] = useState("")
    const types = ["safa","afasfa","afasfa","afa afa","afa"]

    const onChangeType = (value) => {
      setActualType(value)
      setType(types[value])
    }

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full'>
        <div className='formInput'>
          <FormControl fullWidth>
            <InputLabel id="type">Tipo de Artículo</InputLabel>
            <Select
                labelId="type"
                label="Tipo de Artículo"
                value={actualType}
                onChange={e => onChangeType(e.target.value)} 
            >
              {types.map((type,index) => (
                <MenuItem value={index} key={index}>{type}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className='formInput mt-5'>
            <TextareaAutosize
                className='w-full text-md font-medium p-4 rounded-md bg-slate-200 shadow-sm shadow-black hover:border-2 hover:border-slate-700 focus:border-0 placeholder:text-slate-600 placeholder:font-normal placeholder:text-md'
                minRows={3}
                maxRows={10}
                aria-label="maximum height"
                placeholder="Descripción..."
                defaultValue={desc}
                onChange={e => setDesc(e.target.value)}
            />
        </div>
        {/* <div className='formInput mt-5'>
          <TextField 
            fullWidth 
            id="desc" 
            label="Descripción" 
            variant="outlined" 
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
        </div> */}

      </div>

  </div>
  )
}

export default ProductDescForm