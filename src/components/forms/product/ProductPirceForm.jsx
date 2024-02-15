import { FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import { useState } from 'react';

const ProductPirceForm = ({section, setSection, group, setGroup, subgroup, setSubgroup, desc, setDesc, code, setCode}) => {
    const [actualSection, setActualSection] = useState("");
    const [actualGroup, setActualGroup] = useState("");
    const [actualSubgroup, setActualSubgroup] = useState("");
    const sections = ["safa","afasfa","afasfa","afa afa","afa"]
    const groups = ["safa","afasfa","afasfa"]
    const subgroups = ["safa","afasfa"]

      const handleChangeSection = (value) => {
          setActualSection(value);
          setSection(sections[value])
      };
      const handleChangeGroup = (value) => {
        setActualGroup(value);
        setGroup(groups[value])
      };
      const handleChangeSubgroup = (value) => {
        setActualSubgroup(value);
        setSubgroup(subgroups[value])
      };      
  
    return (
      <div className='w-full flex justify-center'>
        <div className='w-full'>
          
          <div className='flex justify-center gap-y-5 flex-col sm:flex-row sm:justify-between w-full'>
            <div className='formInput mr-5 w-full'>
                <FormControl fullWidth>
                <InputLabel id="type">Sección</InputLabel>
                <Select
                    labelId="type"
                    label="Sección"
                    value={actualSection}
                    onChange={e => handleChangeSection(e.target.value)} 
                >
                    {sections.map((section,index) => (
                    <MenuItem value={index} key={index}>{section}</MenuItem>
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
                    value={actualGroup}
                    onChange={e => handleChangeGroup(e.target.value)} 
                >
                    {groups.map((group,index) => (
                    <MenuItem value={index} key={index}>{group}</MenuItem>
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
                    value={actualSubgroup}
                    onChange={e => handleChangeSubgroup(e.target.value)} 
                >
                    {subgroups.map((subgroup,index) => (
                    <MenuItem value={index} key={index}>{subgroup}</MenuItem>
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
                    value={code}
                    onChange={e => setCode(e.target.value)}
                />
            </div>
            <div className='formInput w-full'>
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
        
          
          
          
    </div>
    )
  }

export default ProductPirceForm