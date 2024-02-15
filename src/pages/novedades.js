import * as React from 'react';
import { Box, Button, FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { useState } from 'react';
import ProductNewsOffersForm from '../components/forms/product/ProductNewsOffersForm';
import { toast } from 'react-toastify';
import ProductTable from '../components/tables/ProductTable';
import SpinnerProducts from '../components/spinners/SpinnerProducts';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';


const Novedades = () => {
    const [showTable, setShowTable] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    const [desc, setDesc] = useState("");
 
  const handleSubmit = (e) => {
    if(type === "" || desc === "") {
      toast.error("Se debe ingresar tipo y descripción del producto")
      return
    }
    e.preventDefault();
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
        setShowTable(true)
    }, 2000);
  };

    const handlePrint = () => {
        console.log("Imprimiendo")
    }
    const handleExport = () => {
        console.log("Exportando")
    }
    const handleReload = () => {
        console.log("Recargando")
    }   
    const handleHideDisabled = () => {
        console.log("Ocultando")
    }

return (
    <div className='w-full flex justify-center flex-col '>
        <div className='flex justify-center mt-10'>
            <div className='flex justify-center w-4/5 mt-10 bg-slate-200 rounded-xl shadow-md shadow-black'>
                <form className='md:mt-0 2xl:mt-20 w-full p-5' onSubmit={handleSubmit}>
                    <div className='flex justify-center flex-col'>
                        <div className='flex w-full'>
                            <div className='w-full'>
                                <ProductNewsOffersForm type={type} setType={setType} brand={brand} setBrand={setBrand} desc={desc} setDesc={setDesc}/>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex items-center w-1/2 min-w-[180px] h-14 mt-5'>
                                <button type="button" className="bg-blue-700 hover:bg-blue-800 rounded-md h-4/5 w-full text-white font-mono text-lg cursor-pointer uppercase py-2" onClick={handleSubmit}>
                                    BUSCAR
                                </button>
                            </div>
                        </div>
                        
                    </div>
                    <div className='flex justify-center mt-5'>
                        <hr className='border-1 border-black opacity-40 w-1/2' />
                    </div>
                </form>
            </div>
    </div>
    <div className='flex justify-center w-full'>
        {loading && (
                    <div className='flex items-center justify-center mt-5'>
                        <SpinnerProducts/>
                    </div>
        )}
        {!loading && showTable && (
            <div className='flex flex-col mb-10'>
                <div className='w-full mt-10 flex justify-end gap-5'>
                    <button className='w-auto p-2 px-4 bg-blue-900 hover:bg-blue-700 h-auto rounded-xl' onClick={handlePrint}>
                        <PrintOutlinedIcon style={{color:"white", fontSize:20}}/>
                    </button>
                    <button className='w-auto p-2 px-4 bg-blue-900 hover:bg-blue-700 h-auto rounded-md text-white' onClick={handleExport}>
                        Exportar
                    </button>
                    <button className='w-auto p-2 px-4 bg-blue-900 hover:bg-blue-700 h-auto rounded-xl' onClick={handleReload}>
                        <ReplayOutlinedIcon style={{color:"white", fontSize:20}}/>
                    </button>
                    <button className='w-auto p-2 px-4 bg-blue-900 hover:bg-blue-700 h-auto rounded-md text-white' onClick={handleHideDisabled}>
                        Ocultar Inhabilitados
                    </button>
                </div>
                <div className='mt-0 w-6/7'>
                    <ProductTable/>
                </div>
                <div className='mt-2'>
                    <h3 className='text-orange-700'>
                        * Los precios están sujetos a la aplicación de percepciones, retenciones y otros impuestos que se verán reflejados en el pedido
                    </h3>
                </div>
            </div>
        )}
        </div>
  </div>


);
}

export default Novedades