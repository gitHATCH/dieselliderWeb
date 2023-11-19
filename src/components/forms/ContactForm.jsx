import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import { toast } from 'react-toastify';

const ContactForm = () => {
    const [name, setName] = useState("")
    const [area, setArea] = useState(null)
    const [cause, setCause] = useState(null)
    const [comment, setComment] = useState("")

    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeArea = (event) => {
        setArea(event.target.value);
    };
    const handleChangeCause = (event) => {
        setCause(event.target.value);
    };
    const handleChangeComment = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!name || area === null || cause === null || !comment){
            toast.error("Todos los campos son obligatorios")
        }
        

    }

    const areas = ["Ventas Cliente Nacional","Ventas Cliente Extranjero","Proveedor Nacional","Proveedor Extranjero","Recursos Humanos","Administración","Gerencia"]
    const causes = ["Consulta", "Sugerencia", "Reclamo"]

  return (
    <div>
        <form className='flex w-full justify-center items-center p-5 flex-col' onSubmit={handleSubmit}>
            <div className='formInput w-2/3'>
                <TextField 
                    fullWidth 
                    id="name" 
                    label="Nombre" 
                    variant="outlined" 
                    onChange={handleChangeName}
                />
          </div>
          <div className='formInput w-2/3 mt-5'>
                <FormControl fullWidth>
                <InputLabel id="to">Seleccione área</InputLabel>
                <Select
                    labelId="to"
                    label="Seleccione área"
                    value={area}
                    onChange={handleChangeArea} 
                >
                    {areas.map((area,index) => (
                    <MenuItem value={index}>{area}</MenuItem>
                    ))}
                </Select>
                </FormControl>
          </div>
          <div className='formInput w-2/3 mt-5'>
                <FormControl fullWidth>
                <InputLabel id="motive">Seleccione motivo</InputLabel>
                <Select
                    labelId="motive"
                    label="Seleccione motivo"
                    value={cause}
                    onChange={handleChangeCause} 
                >
                    {causes.map((cause,index) => (
                    <MenuItem value={index}>{cause}</MenuItem>
                    ))}
                </Select>
                </FormControl>
          </div>
          <div className='formInput w-2/3 mt-5'>
            <TextareaAutosize
                className='w-full text-md font-medium p-4 rounded-md bg-slate-300 shadow-sm shadow-black hover:border-2 hover:border-slate-700 focus:border-0 placeholder:text-slate-600 placeholder:font-normal placeholder:text-md'
                minRows={3}
                maxRows={10}
                aria-label="maximum height"
                placeholder="Escriba su comentario..."
                defaultValue={comment}
                onChange={handleChangeComment}
            />
          </div>
          <div className='flex justify-center'>
            <div className='flex items-center w-80 h-14 mt-5'>
                <button type="button" className="bg-blue-700 hover:bg-blue-800 rounded-md h-4/5 w-full text-white font-mono text-lg cursor-pointer uppercase py-2" onClick={handleSubmit}>
                    ENVIAR
                </button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default ContactForm