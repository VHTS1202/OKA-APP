import React, { Component } from 'react';
import { Menu, Button , Dropdown} from 'antd';
import 'antd/dist/antd.css';
import { DownOutlined } from '@ant-design/icons';
import Hamburger from './hamburger'
import './navbar-top.css';
import traveloka_logo  from '../../Images/traveloka_logo.png';
import percent  from '../../Images/percent.png';
import handshake  from '../../Images/handshake.png';
import save  from '../../Images/save.png';
import datcho  from '../../Images/datcho.png';
import Demo from './DangNhap';
import { GiThunderSkull } from 'react-icons/gi';

const menu = (
    <Menu>
      <Menu.Item key="0">
        <Demo />
      </Menu.Item>
      
    </Menu>
  );

class NavbarMenu extends Component{
    state = {
        current: 'mail',
      };
    
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };

    render(){
        const { current } = this.state;

        function btnDangKy(){
          window.location.href = '/DangKy';
        }
      
        return(
            
            <Menu  className="menu-1" onClick={this.onClick} selectedKeys={[current]}  mode="horizontal" >
                <Hamburger /> 
                <img className="logo" src={traveloka_logo} alt="traveloka" />
                
                <Menu.Item className="item-1" id="menu-items " >
                <img className="logo-items" src={percent} alt="percent" />
                    Khuyến mãi
                </Menu.Item>
                <Menu.Item id="menu-items">
                <img className="logo-items" src={handshake} alt="handshake" />
                   Hợp tác với chúng tôi
                </Menu.Item>
                <Menu.Item id="menu-items">
                <img className="logo-items" src={save} alt="save" />
                   Đã lưu
                </Menu.Item>
                <Menu.Item id="menu-items">
                <img className="logo-items" src={datcho} alt="datcho" />
                   Đặt chỗ của tôi
                </Menu.Item>
                <Menu.Item>
                <Dropdown overlay={menu} trigger={['click']}>
                    <Button className="log-in" onClick={e => e.preventDefault()}>
                        Đăng nhập <DownOutlined />
                    </Button>
                </Dropdown>
                </Menu.Item>
            
                <Button classname="sign-in" type="primary" onClick={btnDangKy}>Đăng ký</Button>
               
            </Menu>
            
        );
    }
}

export default NavbarMenu;

