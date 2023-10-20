import { FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import { useState } from 'react';

const ProductPirceForm = () => {
    const [section, setSection] = useState("");
    const [group, setGroup] = useState("");
    const [subgroup, setSubgroup] = useState("");
    const [desc, setDesc] = useState("");
    const [code, setCode] = useState("");

  
      const handleChangeSection = (event) => {
          setSection(event.target.value);
      };
      const handleChangeGroup = (event) => {
        setGroup(event.target.value);
      };
      const handleChangeSubgroup = (event) => {
        setSubgroup(event.target.value);
      };
      const handleChangeDesc = (event) => {
        setDesc(event.target.value);
      };
      const handleChangeCode = (event) => {
        setCode(event.target.value);
      };
      
      const types = ["safa","afasfa","afasfa","afa afa","afa"]
  
    return (
      <div className='w-full flex justify-center'>
        <div className='w-full'>
          
          <div className='flex justify-between w-full'>
            <div className='formInput mr-5 w-full'>
                <FormControl fullWidth>
                <InputLabel id="type">Sección</InputLabel>
                <Select
                    labelId="type"
                    label="Sección"
                    value={section}
                    onChange={handleChangeSection} 
                >
                    {types.map((type,index) => (
                    <MenuItem value={index}>{type}</MenuItem>
                    ))}
                </Select>
                </FormControl>
            </div>
            <div className='formInput mr-5 w-full'>
                <FormControl fullWidth>
                <InputLabel id="type">Grupo</InputLabel>
                <Select
                    labelId="type"
                    label="Grupo"
                    value={group}
                    onChange={handleChangeGroup} 
                >
                    {types.map((type,index) => (
                    <MenuItem value={index}>{type}</MenuItem>
                    ))}
                </Select>
                </FormControl>
            </div>
            <div className='formInput w-full'>
                <FormControl fullWidth>
                <InputLabel id="type">Subgrupo</InputLabel>
                <Select
                    labelId="type"
                    label="Subgrupo"
                    value={subgroup}
                    onChange={handleChangeSubgroup} 
                >
                    {types.map((type,index) => (
                    <MenuItem value={index}>{type}</MenuItem>
                    ))}
                </Select>
                </FormControl>
          </div>

          </div>
          <div className='flex justify-between w-full mt-5'>
            <div className='formInput mr-5 w-full'>
                <TextField 
                    fullWidth 
                    id="code" 
                    label="Código DL" 
                    variant="outlined" 
                    onChange={handleChangeCode}
                />
            </div>
            <div className='formInput w-full'>
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
        
          
          
          
    </div>
    )
  }

export default ProductPirceForm