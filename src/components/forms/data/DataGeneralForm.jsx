import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const DataGeneralForm = () => {
    const [businessName, setBusinessName] = useState("")
    const [address, setAddress] = useState("")
    const [location, setLocation] = useState("")
    const [code, setCode] = useState("")
    const [province, setProvince] = useState("")
    const [country, setCountry] = useState("")
    const [tel1, setTel1] = useState("")
    const [tel2, setTel2] = useState("")
    const [tel3, setTel3] = useState("")
    const [fax, setFax] = useState("")
    const [cel, setCel] = useState("")
    const [contact, setContact] = useState("")


    const handleChangeBusinessName = (event) => {
        setBusinessName(event.target.value);
    }
    const handleChangeAddress = (event) => {
        setAddress(event.target.value);
    }
    const handleChangeLocation = (event) => {
        setLocation(event.target.value);
    }
    const handleChangeCode = (event) => {
        setCode(event.target.value);
    }
    const handleChangeProvince = (event) => {
        setProvince(event.target.value);
    }
    const handleChangeCountry = (event) => {
        setCountry(event.target.value);
    }
    const handleChangeTel1 = (event) => {
        setTel1(event.target.value);
    }
    const handleChangeTel2 = (event) => {
        setTel2(event.target.value);
    }
    const handleChangeTel3 = (event) => {
        setTel3(event.target.value);
    }
    const handleChangeFax = (event) => {
        setFax(event.target.value);
    }
    const handleChangeCel = (event) => {
        setCel(event.target.value);
    }
    const handleChangeContact = (event) => {
        setContact(event.target.value);
    }

    const handleSubmitSave = (e) => {
        e.preventDefault()
        toast.success("Cambios guardados exitosamente!")
    }

  return (
    <form className='w-5/6 rounded-xl shadow-black shadow-xl bg-slate-300 p-10'>
        <div className='flex justify-center'>
            <div className='formInput w-1/2'>
                <TextField
                    fullWidth 
                    id="business" 
                    label="Razón Social" 
                    variant="outlined" 
                    onChange={handleChangeBusinessName}
                />
            </div>
        </div>
       
        <div className='w-full flex flex-row mt-5'>
            <div className='w-1/10 formInput'>
                <TextField
                    fullWidth 
                    id="code" 
                    label="Código Postal" 
                    variant="outlined" 
                    onChange={handleChangeCode}
                />
            </div>
            <div className='ml-2 w-3/10 formInput'>
                <TextField
                    fullWidth 
                    id="country" 
                    label="País" 
                    variant="outlined" 
                    onChange={handleChangeCountry}
                />
            </div>
            <div className='ml-2 w-3/10 formInput'>
                <TextField
                    fullWidth 
                    id="province" 
                    label="Provincia" 
                    variant="outlined" 
                    onChange={handleChangeProvince}
                />
            </div>
            <div className='ml-2 w-3/10 formInput'>
                <TextField
                    fullWidth 
                    id="location" 
                    label="Localidad" 
                    variant="outlined" 
                    onChange={handleChangeLocation}
                />
            </div>
        </div>
        <div className='w-full flex flex-row mt-5'>
            <div className='w-1/4 formInput'>
                <TextField
                    fullWidth 
                    id="tel1" 
                    label="Telefono 1" 
                    variant="outlined" 
                    onChange={handleChangeTel1}
                />
            </div>
            <div className='ml-2 w-1/4 formInput'>
                <TextField
                    fullWidth 
                    id="tel2" 
                    label="Telefono 2" 
                    variant="outlined" 
                    onChange={handleChangeTel2}
                />
            </div>
            <div className='ml-2 w-1/4 formInput'>
                <TextField
                    fullWidth 
                    id="tel3" 
                    label="Telefono 3" 
                    variant="outlined" 
                    onChange={handleChangeTel3}
                />
            </div>
            <div className='ml-2 w-1/4 formInput'>
                <TextField
                    fullWidth 
                    id="tel3" 
                    label="Telefono 3" 
                    variant="outlined" 
                    onChange={handleChangeTel3}
                />
            </div>
        </div>

        <div className='w-full flex flex-row mt-5'>
            <div className='w-1/3 formInput'>
                <TextField
                    fullWidth 
                    id="cel" 
                    label="Celular" 
                    variant="outlined" 
                    onChange={handleChangeCel}
                />
            </div>
            <div className='ml-2 w-1/3 formInput'>
                <TextField
                    fullWidth 
                    id="fax" 
                    label="Fax" 
                    variant="outlined" 
                    onChange={handleChangeFax}
                />
            </div>
            <div className='ml-2 w-1/3 formInput'>
                <TextField
                    fullWidth 
                    id="contact" 
                    label="Contacto" 
                    variant="outlined" 
                    onChange={handleChangeContact}
                />
            </div>
        </div>
        <div className='w-full flex justify-center mt-10'>
            <button type="button" className="bg-green-800 hover:bg-green-700 rounded-md w-1/2 h-10 text-white font-mono text-lg cursor-pointer" onClick={handleSubmitSave}>
                GUARDAR
            </button>
           
        </div>
    </form>
  )
}

export default DataGeneralForm