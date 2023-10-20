import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Menu } from 'semantic-ui-react';

export default function ProductMenuHeader() {
  const router = useRouter();

  let page = router.pathname.split('/')[1];
  useEffect(() => {
    if (!page) page = '';
  }, []);

  const handleItemClick = (e, { name, path }) => {
    router.push('/' + path);
  };
  const menuItems = [
    { name: 'Catálogo', path: '' },
    { name: 'Novedades', path: 'novedades' },
    { name: 'Ofertas', path: 'ofertas' },
    { name: 'Lista de Precios', path: 'precios' },
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
                active={page === item.path}
                onClick={(e) => handleItemClick(e, item)}
                style={{
                  color: page === item.path ? '#001f36' : 'white',
                  borderBottom: page === item.path ? '4px solid #001f36' : '2px solid transparent',
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
