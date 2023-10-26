import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Menu } from 'semantic-ui-react';

export default function DataMenuHeader({option,change}) {
  
  const handleItemClick = (e, { name, path }) => {
    change(path)
  };
  const menuItems = [
    { name: 'Datos Generales', path: 0 },
    { name: 'Datos de Envío', path: 1 },
    { name: 'Datos Impositivos', path: 2 },
  ];

  return (
    <div className='2xl:flex 2xl:mt-0'>
      <div className='menuHeader 2xl:rounded-b-3xl 2xl:px-20 2xl:shadow-lg 2xl:shadow-black 2xl:border-t-8 2xl:border-black flex-grow flex items-center'>
        <div style={{ flex: '5' }}>
          <Menu pointing secondary>
            {menuItems.map((item) => (
              <Menu.Item
                key={item.name}
                name={item.name}
                active={option === item.path}
                onClick={(e) => handleItemClick(e, item)}
                style={{
                  color: option === item.path ? '#79ae92' : 'white',
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
