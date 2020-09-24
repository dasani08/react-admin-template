import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { sidebarConfig } from 'configs/menu';
import { useModuleMatch } from 'shared/hooks/useModuleMatch';

const Sidebar = ({ onCollapse }) => {
  const { moduleName } = useModuleMatch();
  const { location } = useSelector((state) => state.router);

  const onSidebarCollapsed = (collapsed) => {
    onCollapse(collapsed);
  };

  return (
    <Layout.Sider
      width={160}
      breakpoint='lg'
      collapsedWidth='70'
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        zIndex: 999
      }}
      onCollapse={onSidebarCollapsed}
    >
      <Menu
        mode='inline'
        theme='dark'
        selectable={false}
        inlineIndent={22}
        selectedKeys={[location.pathname]}
      >
        {sidebarConfig
          .filter((sidebar) => sidebar.module === moduleName)
          .map((menus) => {
            return menus.map((menu) =>
              menu.subMenus ? (
                <Menu.SubMenu
                  key={menu.to}
                  icon={menu.icon}
                  title={
                    menu.to ? (
                      <Link to={menu.to}>
                        <span>{menu.title}</span>
                      </Link>
                    ) : (
                      <span>{menu.title}</span>
                    )
                  }
                >
                  {menu.subMenus.map((subMenu) => (
                    <Menu.Item key={subMenu.title} icon={subMenu.icon}>
                      <Link to={`${subMenu.to}`}>{subMenu.title}</Link>
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              ) : (
                <Menu.Item key={menu.to} icon={menu.icon}>
                  <Link to={`${menu.to}`}>{menu.title}</Link>
                </Menu.Item>
              )
            );
          })}
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
