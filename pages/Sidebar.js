import { Layout, Menu, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
import { useState } from 'react'
import Link from 'next/link'

import { HomeOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = ({options}) => {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed);
      };
    
    return (  
        <Sider 
            collapsible 
            collapsed={collapsed} 
            onCollapse={onCollapse}  
            width={options !== undefined ? options.witdh : 200} 
            className="site-layout-background"
        >
            <Menu
                mode="inline"
                theme="dark"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
            <SubMenu 
                key="sub1" 
                icon={<HomeOutlined />} 
                title="Menu"
            >
                <Menu.Item key="1"> 
                    <Link  href="/posts">
                        Posts  
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link  href="/user">
                        User
                    </Link>
                </Menu.Item>
            </SubMenu>
            </Menu>
        </Sider>
    );
}

export default Sidebar;