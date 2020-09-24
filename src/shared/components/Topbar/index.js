import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import { useModuleMatch } from 'shared/hooks/useModuleMatch';
import { topbarConfig } from 'configs/menu';

const Topbar = () => {
  const { moduleName } = useModuleMatch();

  return (
    <Menu
      mode='horizontal'
      selectedKeys={[moduleName]}
      selectable={false}
      className='topbar__menu'
    >
      {topbarConfig
        .map(({ module, menus }) => ({
          module,
          menus
        }))
        .map(({ module, menus }) => {
          return menus.map((menu) => (
            <Menu.Item key={module}>
              <Link to={menu.to}>{menu.title}</Link>
            </Menu.Item>
          ));
        })}
    </Menu>
  );
};

export default Topbar;
