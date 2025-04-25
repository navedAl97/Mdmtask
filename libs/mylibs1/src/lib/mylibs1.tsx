import React, { useState } from 'react';
import { BarsOutlined } from '@ant-design/icons';
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
          // ...more items if needed
        ],
      },
    ],
  },
];

const Mylibs1: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e.key);
    setSelectedKey(e.key);
  };

  return (
    <div className="container" style={{ display: 'flex' }}>
      <div className="sidebar" style={{ width: '300px' }}>
        <Menu
          onClick={onClick}
          style={{ width: 300 }}
          defaultSelectedKeys={['']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
      </div>
      <div style={{ flex: 1, padding: '10px' }}>
        {selectedKey === '1' && <Myform />}
        {selectedKey === '2' && <Mycard />}
      </div>
    </div>
  );
};

export default Mylibs1;
