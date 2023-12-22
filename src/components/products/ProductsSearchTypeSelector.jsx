import * as React from 'react';
import { Box, Button, FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Logo from "../../assets/images/DLCircle.png"
import { useState } from 'react';
import ProductCodeForm from '../forms/product/ProductCodeForm';
import ProductDescForm from '../forms/product/ProductDescForm';
import ProductPartNumberForm from '../forms/product/ProductPartNumberForm';
import ProductTable from '../tables/ProductTable';
import SpinnerProducts from '../spinners/SpinnerProducts';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import OriginalPartsTable from '../tables/OriginalPartsTable';
import RelationshipsMenu from '../subheaders/RealtionshipsMenu';
//TODO: Modularizar
//TODO: Agregar Relaciones
//TODO: Adaptar ProductTable para RelationsTable -> Si se slecciona un producto en este, automaticamente se reemplaza el form con el codigo DL de este y se reemplaza la tabla original para mostrar solo ese producto
//TODO: El boton relaciones, una vez clickeado deberia permanecer en donde estaba originalmente
//TODO: Al clickear en otro componente, ya sea de la tabla original o de partes originales, debe desaparecer la tabla relaciones.
//TODO: Preguntar Numero de partes originales despues de relaciones

export default function ProductsSearchTypeSelector() {

    const [typeSearch, setTypeSearch] = useState(0);
    const [showTable, setShowTable] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loadingRelations, setLoadingRelations] = useState(false)
    const [showRelations, setShowRelations] = useState(false)
    const [menuOption, setMenuOption] = useState(0)
    const [selectedRow, setSelectedRow] = useState(null)

    const [code, setCode] = useState("");
    const [checkedDL, setCheckedDL] = useState(false);
    const [checkedCoincidences, setCheckedCoincidences] = useState(false);
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [brand, setBrand] = useState("");
    const [format, setFormat] = useState("");
    const [number, setNumber] = useState("");

    useEffect(() => {
        setShowRelations(false)
    }, [selectedRow])
    
    useEffect(() => {
      if(typeSearch == 0){
        setCode("")
        setCheckedDL(false)
        setCheckedCoincidences(false)
      } 
      if(typeSearch == 1){
        setBrand("")
        setFormat("")
        setNumber("")
      } else {
        setType("")
        setDesc("")
      }
    }, [typeSearch])
    


    const handleChangeType = (event) => {
        setTypeSearch(event.target.value);
    };

    const handleRelationships = () => {
        setLoadingRelations(true)
        setTimeout(() => {
            setLoadingRelations(false)
            setShowRelations(true)
        }, 2000);
    }

    const handleSubmit = (e) => {
        if(typeSearch == 0 && code == ""){
            toast.error("Ingrese un Código DL o Número de parte")
            return
        } 
        
        if(typeSearch == 1 && (brand == "" || format == "" || number == "")) {
            toast.error("Todos los campos son necesarios")
            return
        }

        if(typeSearch == 2 && desc == ""){
            toast.error("Ingrese una descripción del producto")
            return
        }

        e.preventDefault();
        setShowRelations(false)
        setShowTable(false)
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

    const handleChangeMenuOption = (option) => {
        setMenuOption(option)
    }

  return (
    <div className='flex-col justify-center w-full'>
        <div className='flex justify-center'>
            <div className='flex justify-center w-4/5 mt-20 bg-slate-200 rounded-xl shadow-md shadow-black'>
                <div className='md:mt-0 2xl:mt-20 w-full p-5'>
                    <div className='flex justify-center flex-col'>
                        <div className='flex flex-row w-full'>
                            <div className='formInput mb-10 w-2/3'>
                                <FormControl>
                                <FormLabel id="demo-controlled-radio-buttons-group">Tipo de Búsqueda</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={typeSearch}
                                    onChange={handleChangeType}
                                >
                                    <FormControlLabel value={0} control={<Radio />} label="Código DL o Número de Parte" />
                                    <FormControlLabel value={1} control={<Radio />} label="Número de Parte con Formato" />
                                    <FormControlLabel value={2} control={<Radio />} label="Descripción del Artículo" />
                                </RadioGroup>
                                </FormControl>
                            </div>
                            <div className='w-full mt-5'>
                                {typeSearch == 0 && <ProductCodeForm code={code} setCode={setCode} checkedDL={checkedDL} setCheckedDL={setCheckedDL} checkedCoincidences={checkedCoincidences} setCheckedCoincidences={setCheckedCoincidences}/>}
                                {typeSearch == 1 && <ProductPartNumberForm brand={brand} setBrand={setBrand} format={format} setFormat={setFormat} number={number} setNumber={setNumber}/>}
                                {typeSearch == 2 && <ProductDescForm desc={desc} setDesc={setDesc} type={type} setType={setType}/>}
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex items-center w-1/2 h-14 mt-5'>
                                <button type="button" className="bg-blue-700 hover:bg-blue-800 rounded-md h-4/5 w-full text-white font-mono text-lg cursor-pointer uppercase py-2" onClick={handleSubmit}>
                                    BUSCAR
                                </button>
                            </div>
                        </div>
            
                    </div>
                        <div className='flex justify-center mt-5'>
                            <hr className='border-1 border-black opacity-40 w-1/2' />
                        </div>
                </div>
            </div>

        </div>
        <div className='flex flex-col justify-center w-full p-8'>
        {loading && (
                    <div className='flex items-center justify-center mt-5'>
                        <SpinnerProducts/>
                    </div>
                )}
        {showTable && (
            <div className='flex flex-col mb-10'>
                <div className='w-full pr-28 mt-10 flex justify-end gap-5'>
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
                <div className='mt-4 w-fit'>
                    <ProductTable selectedRows={selectedRow} handleSelectedRows={setSelectedRow}/>
                </div>
                <div className='mt-2'>
                    <h3 className='text-orange-700'>
                        * Los precios están sujetos a la aplicación de percepciones, retenciones y otros impuestos que se verán reflejados en el pedido
                    </h3>
                </div>
                <h2 className='mt-14'>Números de parte originales</h2>
                <div className='mt-0 w-fit'>
                    <OriginalPartsTable selectedRows={selectedRow} handleSelectedRows={setSelectedRow}/>
                </div>
                    <div className='mt-10'>
                        <button 
                            className='bg-orange-500 hover:bg-orange-700 w-40 h-14 rounded text-white uppercase text-lg p-4 font-light'
                            onClick={handleRelationships}
                        >Relaciones</button> 
                    </div>
                
                { showRelations && (
                    <div className='flex flex-col mb-10 mt-10'>
                        <div className='w-full flex justify-end mb-2 px-28'>
                            <RelationshipsMenu option={menuOption} change={handleChangeMenuOption} selectedRows={selectedRow} handleSelectedRows={setSelectedRow}/>
                        </div>
                        <div className='mt-0 w-fit'>
                            <ProductTable/>
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-orange-700'>
                                * Los precios están sujetos a la aplicación de percepciones, retenciones y otros impuestos que se verán reflejados en el pedido
                            </h3>
                        </div>
                        <h2 className='mt-14'>Números de parte originales</h2>
                        <div className='mt-0 w-fit'>
                            <OriginalPartsTable/>
                        </div>
                        
                      
                    </div>
                )}
                {loadingRelations && (
                    <div className='flex items-center justify-center mt-5'>
                        <SpinnerProducts/>
                    </div>
                )}
                
            </div>
        )}
        </div>
    </div>

  );
}
