import { Icon, Menu } from 'antd';

import {Link} from 'dva/router';

export default ({ location }) => {
    return (
        <Menu mode='horizontal' theme='dark'>
            <Menu.Item key="/">
                    <Link to="/"><Icon type="home" />Home</Link>
            </Menu.Item>
            <Menu.Item key="/demo/counter">
                    <Link to="/demo/counter"><Icon type="code-o" />Count</Link>
            </Menu.Item>
            <Menu.Item key="/demo/users">
                    <Link to="/demo/users"><Icon type="user" />Users</Link>
            </Menu.Item>
        </Menu>
    )
}