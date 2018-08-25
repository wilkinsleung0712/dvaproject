import { Icon, Menu } from 'antd';

import Link from 'umi/link';

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />Home</Link>
      </Menu.Item>
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="team" />Users</Link>
      </Menu.Item>
      <Menu.Item key="/count">
        <Link to="/count"><Icon type="calculator" />Count</Link>
      </Menu.Item>
      <Menu.Item key="/products">
       <Link to="/products"><Icon type="bars" />Products</Link>
      </Menu.Item>
      <Menu.Item key="/dva">
        <a href="https://github.com/dvajs/dva" target="_blank">dva</a>
      </Menu.Item>
      <Menu.Item key="/404">
        <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header;