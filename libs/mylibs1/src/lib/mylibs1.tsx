import React, { useState } from 'react';
import {  BarsOutlined  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd'; 
import Myform from './components/myform';
import Mycard from './components/Mycard';



type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'Sidebar',
    icon: <BarsOutlined />,
    children: [
      {
        key: 'g1',
        type: 'group',
        children: [
          { key: '1', label: 'Form' },
          { key: '2', label: 'Card' },
          { key: '3', label: 'Sidebar 3' },
          { key: '4', label: 'Sidebar 4' },
          { key: '5', label: 'Sidebar 5' },
          { key: '6', label: 'Sidebar 6' },
          { key: '7', label: 'Sidebar 7' },
          { key: '8', label: 'Sidebar 8' },
          { key: '9', label: 'Sidebar 9' },
          { key: '10', label: 'Sidebar 10' },
          { key: '11', label: 'Sidebar 11' },
          { key: '12', label: 'Sidebar 12' },
        ],
      },
    
    ],
  },
  
];

const Mylibs1: React.FC = () => {
  const [selectedKey, setSelectedKey]= useState<string | null>(null);

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e.key);
    setSelectedKey(e.key);
  };

  return (

    < >
    <div className="container" style={{display:'flex'}}>
      <div className="sidebar"  style={{  width:'300px'}}>
    <Menu 
      onClick={onClick}
      style={{ width: 300 }}
      defaultSelectedKeys={['']}
      defaultOpenKeys={['']}
      mode="inline"
      items={items}
    />
    </div>
    <div style={{ flex: 1, padding: '10px' }}>
        {selectedKey === '1' && <Myform />}
      </div>
    <div style={{ flex: 1, padding: '10px' }}>
      
      </div>
      
    </div>


    </>

  );
};

export default Mylibs1;