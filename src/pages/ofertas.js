import * as React from 'react';
import { Box, Button, FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { useState } from 'react';
import ProductNewsOffersForm from '../components/Forms/ProductNewsOffersForm';

const Ofertas = () => {

  const [typeSearch, setTypeSearch] = useState(0);
    
  const handleChangeType = (event) => {
      setTypeSearch(event.target.value);
  };
 
  const handleSubmit = (e) => {
      e.preventDefault();
  };

return (
  <div className='flex justify-center px-80 mt-10'>
      <div className='flex justify-center w-full bg-slate-200 rounded-xl shadow-xl shadow-black'>
      <form className='md:mt-0 2xl:mt-20 w-full p-10' onSubmit={handleSubmit}>
          <Box sx={{ minWidth: 120}}>
              <div className='flex justify-center flex-col'>
                  <div className='flex w-full'>
                      <div className='w-full'>
                          <ProductNewsOffersForm/>
                      </div>
                  </div>
                  <div className='flex justify-center'>
                      <div className='btnSearch mt-5 hover:opacity-90 w-1/2'>
                          <Button
                              fullWidth 
                              variant="contained"
                              style={{backgroundColor:"transparent", fontSize:15, fontWeight:"bold"}}
                              onClick={handleSubmit}
                          >
                              <div className='2xl:h-12 flex items-center'>
                              <p className='text-lg 2xl:text-3xl font-semibold'>Buscar</p>
                              </div>
                          </Button>
                      </div>
                  </div>
                  
                  
              </div>
              
              
              <div className='flex justify-center mt-10'>
                  <hr className='border-1 border-black opacity-40 w-1/2' />
              </div>
          </Box>
         
  
        
          
        </form>
      </div>
  </div>

);
}

export default Ofertas