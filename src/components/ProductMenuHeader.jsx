import { useRouter } from 'next/router';
import React, { Component, useContext} from 'react'
import { useEffect } from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import SearchIcon from '@mui/icons-material/Search';

export default function ProductMenuHeader() {
  const router = useRouter()

  let page = router.pathname.split("/")[1]
  useEffect(() => {
    if(!page) page = ""
  }, [])

  const handleItemClick = (e, { name, path }) => {
+    router.push("/"+path);
  };
  const menuItems = [
    { name: 'Catálogo', path: '' },
    { name: 'Novedades', path: 'novedades' },
    { name: 'Ofertas', path: 'ofertas' },
    { name: 'Lista de Precios', path: 'precios' },
  ];

  return (
    <div className='menuHeader'>
      <Menu pointing secondary>
        {menuItems.map((item) => (
          <Menu.Item
            key={item.name}
            name={item.name}
            active={page === item.path}
            onClick={(e) => handleItemClick(e, item)}
            style={{ color: 'white' }}
          />
        ))}
      </Menu>
    </div>
  );

}
