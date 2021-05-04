import React, { Component } from 'react'
import 'antd/dist/antd.css';
import './Form1.scss'
import { Layout, Menu, Button  } from 'antd';
import {Link} from 'react-router-dom';
import Khachsan1 from './KhachSan';
import DuaDonSanBay1 from'./DuaDonSanBay'
import plane from './img/plane.png'
import hotel from './img/hotel.png'
import tietkiem from './img/tietkiem.png'
import transport from './img/transport.png'
import experience from './img/experience.png'
import rentcar from './img/rentcar.png'
import jrpass from './img/jrpass.png'
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai';

import Muavebay1 from './Muavemaybay';

const {  Content,  Sider } = Layout;


  
  


class Form1 extends Component {
    state = { 
        collapsed: false,
        layoutRight: null
     }
     toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
      clickMenu = data => {
          console.log(data.key)
          switch(data.key){
              case '1':
                return this.setState({
                    layoutRight: <Muavebay1 />
                })
                case '2':
                    return this.setState({
                        layoutRight: <Khachsan1 />
                    })
                case '4':
                        return this.setState({
                            layoutRight: <DuaDonSanBay1 />
                        })
                default:
                    return null;
                
                    
                        
          }

      }
    render() { 
        const { collapsed } = this.state;
        console.log(this.state)
        return ( 
                <div className='menu1'>
                    <Layout className='layout' style={{ border: '1px solid',  marginLeft: '230px',marginRight: '230px',height: '390px' }}>
                        
                        <Sider style={{backgroundColor:'white'}} className='sider1' collapsed={collapsed} onCollapse={this.onCollapse}>
                        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                         {React.createElement(this.state.collapsed ? AiOutlineArrowRight : AiOutlineArrowLeft)}
                        </Button>
                        <Menu theme="gray" defaultSelectedKeys={['2']} mode="inline" onClick={this.clickMenu}>
                            <Menu.Item key="1" >
                            <img className="logo-items" src={plane} alt="plane" />  &emsp;&ensp;&ensp;Vé Máy Bay                   
                            </Menu.Item>
                            <Menu.Item key="2">
                            <img className="logo-items" src={hotel} alt="hotel" />  &emsp;&ensp;&ensp;  Khách Sạn
                            </Menu.Item>
                            <Menu.Item key="3" >
                            <img className="logo-items" src={tietkiem} alt="tietkiem" />  &emsp;&ensp;&ensp;  Combo Tiết Kiệm
                            </Menu.Item>
                            <Menu.Item key="4" >
                            <img className="logo-items" src={transport} alt="transport" />  &emsp;&ensp;&ensp;  Đưa đón sân bay
                            </Menu.Item>
                            <Menu.Item key="5" >
                            <img className="logo-items" src={experience} alt="experience" />   &emsp;&ensp;&ensp; Experience
                            </Menu.Item>
                            <Menu.Item key="6">
                            <img className="logo-items" src={rentcar} alt="rentcar" />    &emsp;&ensp;&ensp; Cho thuê xe
                            </Menu.Item>
                            <Menu.Item key="7" >
                            <img className="logo-items" src={jrpass} alt="jrpass" />   &emsp;&ensp;&ensp;   JR Pass
                            </Menu.Item>
                            
                        </Menu>
                        </Sider>
                        {/* <div>
                            {this.state.layoutRight}
                        </div> */}
                        <Layout className="site-layout">
                            <Content style={{ margin: '0 16px' }}>
                            <div>
                            {this.state.layoutRight}
                            {/* <Khachsan1 /> */}
                            </div>
                            </Content>
                        </Layout>
                        
                    </Layout>
                   
                    </div>
                
            
         );

    }
}
 
export default Form1;
