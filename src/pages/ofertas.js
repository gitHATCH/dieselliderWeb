import * as React from 'react';
import { Box, Button, FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { useState } from 'react';
import ProductNewsOffersForm from '../components/forms/product/ProductNewsOffersForm';

const Ofertas = () => {

  const [typeSearch, setTypeSearch] = useState(0);
    
  const handleChangeType = (event) => {
      setTypeSearch(event.target.value);
  };
 
  const handleSubmit = (e) => {
      e.preventDefault();
  };

return (
    <div className='w-full flex justify-center flex-col'>
        <div className='flex justify-center mt-10'>
            <div className='flex justify-center w-4/5 mt-10 bg-slate-200 rounded-xl shadow-md shadow-black'>
                <form className='md:mt-0 2xl:mt-20 w-full p-5' onSubmit={handleSubmit}>
                    <div className='flex justify-center flex-col'>
                        <div className='flex w-full'>
                            <div className='w-full'>
                                <ProductNewsOffersForm/>
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
                </form>
            </div>
    </div>
  </div>


);
}

export default Ofertas