import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Menu } from 'semantic-ui-react';

export default function RelationshipsMenu({option,change,selectedRows,handleSelectedRows}) {
  
  const handleItemClick = (e, { name, path }) => {
    change(path)
  };
  const menuItems = [
    { name: 'Reemplazos sin modificaciones', path: 0 },
    { name: 'Reemplazos con modificaciones', path: 1 },
    { name: 'Componentes básicos', path: 2 },
  ];

  return (
    <div className='2xl:flex 2xl:mt-0'>
      <div className='bg-slate-500 rounded-lg w-fit 2xl:rounded-b-3xl 2xl:px-20 2xl:shadow-lg 2xl:shadow-black 2xl:border-t-8 2xl:border-black flex-grow flex items-center'>
        <div style={{ flex: '5' }}>
          <Menu pointing secondary>
            {menuItems.map((item) => (
              <Menu.Item
                key={item.name}
                name={item.name}
                active={option === item.path}
                onClick={(e) => handleItemClick(e, item)}
                style={{
                  color: option === item.path ? 'black' : 'white',
                  borderBottom: option === item.path ? '2px solid #262626' : '2px solid transparent',
                }}
                className='2xl:text-3xl'
              />
            ))}
          </Menu>
        </div>
       
        
      </div>
    </div>
  );
}
