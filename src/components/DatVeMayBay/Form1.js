import React, { Component } from 'react'
import 'antd/dist/antd.css';
import './Form1.scss'
import { Layout, Menu, Button  } from 'antd';
import {Link} from 'react-router-dom';
import Khachsan1 from './KhachSan';

  
import { FaPlane, FaCarAlt, FaLocationArrow, FaTrain } from 'react-icons/fa'
import { BiBuildingHouse, BiCar } from 'react-icons/bi';
import { FcComboChart } from 'react-icons/fc';
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
                case '5':
                    return this.setState({
                        layoutRight: <Khachsan1 />
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
                        <Menu theme="light" defaultSelectedKeys={['2']} mode="inline" onClick={this.clickMenu}>
                            <Menu.Item key="1" icon={<FaPlane />}>
                               Vé Máy Bay                   
                            </Menu.Item>
                            <Menu.Item key="2" icon={<BiBuildingHouse />}>
                                Khách Sạn
                            </Menu.Item>
                            <Menu.Item key="3" icon={<FcComboChart />}>
                                Combo Tiết Kiệm
                            </Menu.Item>
                            <Menu.Item key="4" icon={<FaCarAlt />}>
                                Đưa đón sân bay
                            </Menu.Item>
                            <Menu.Item key="5" icon={<FaLocationArrow />}>
                                Experience
                            </Menu.Item>
                            <Menu.Item key="6" icon={<BiCar />}>
                                Cho thuê xe
                            </Menu.Item>
                            <Menu.Item key="7" icon={<FaTrain />}>
                                JR Pass
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
                            </div>
                            </Content>
                        </Layout>
                        
                    </Layout>
                   
                    </div>
                
            
         );

    }
}
 
export default Form1;
