import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className='flex justify-center w-full items-center'>
          <div className='relative w-full'>
            <input
              type='text'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Código DL o Número de parte'
              className='focus:outline-none p-3 text-lg 2xl:text-3xl rounded-xl shadow-md shadow-inner shadow-black pl-12 w-full bg-slate-200'
            />
            <div className='absolute left-2 top-1/2 transform -translate-y-1/2 hover:bg-gray-200 rounded-full'>
              <SearchIcon style={{ fontSize: 30 }} />
            </div>
          </div>
        </div>
      )
    
}

export default Search