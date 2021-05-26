import React, { Component, useState, setState } from 'react';
import { Menu, Button , Dropdown} from 'antd';
import 'antd/dist/antd.css';
import { DownOutlined } from '@ant-design/icons';
import Hamburger from './hamburger'
import './navbar-top.css';
import traveloka_logo  from '../img/traveloka_logo.png';
import percent  from '../img/percent.png';
import handshake  from '../img/handshake.png';
import save  from '../img/save.png';
import datcho  from '../img/datcho.png';
import Demo from './DangNhap';
import {NavLink} from 'react-router-dom'
import {
  FaPercent,
  FaHandshake,
  FaSave,
  FaReceipt,
} from 'react-icons/fa';


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
        return(
            
            <Menu  className="menu-1" onClick={this.onClick} selectedKeys={[current]}  mode="horizontal" >
                <Hamburger /> 
                <img className="logo" src={traveloka_logo} alt="traveloka" />
                
                <Menu.Item className="item-1" id="menu-items " >
                <FaPercent className="percent logo-items" src={percent} alt="percent" />
                    Khuyến mãi
                </Menu.Item>
                <Menu.Item id="menu-items">
                <FaHandshake className="hand logo-items" src={handshake} alt="handshake" />
                   Hợp tác với chúng tôi
                </Menu.Item>
                <Menu.Item id="menu-items">
                <FaSave className="save logo-items" src={save} alt="save" />
                   Đã lưu
                </Menu.Item>
                <Menu.Item id="menu-items">
                <FaReceipt className="seat logo-items" src={datcho} alt="datcho" />
                   Đặt chỗ của tôi
                </Menu.Item>
                <Menu.Item>
                <Dropdown overlay={menu} trigger={['click']}>
                <Button className="log-in" onClick={e => e.preventDefault()}>
                        <>Đăng nhập <DownOutlined /></>
                </Button>
                </Dropdown>
                </Menu.Item>
            
                <Button className="sign-in" type="primary"><NavLink to='/DangKy'>Đăng <br/> Ký</NavLink></Button>
               
            </Menu>
            
        );
    }
}

export default NavbarMenu;

