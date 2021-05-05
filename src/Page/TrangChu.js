import React, { Component } from 'react';
import Form1 from '../components/DatVeMayBay/Form1';
import NavbarMenu from '../components/Navbar/navbar-top';
import NavbarMenu2 from '../components/Navbar/navbar-bot';
import Body from '../components/Body/Body';
import LowerBody from '../components/Body/Body2';
import Footer from '../components/footer/footer';


import 'antd/dist/antd.css';


class trangchu extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div id="header-topbar">
                <div className="header-menu">
                <div className="header-menu-1">
            <div><NavbarMenu className="navbar-top navbar-fix navbar-style" /></div>
                </div>
            <div className="header-menu-2">
            <div ><NavbarMenu2 className="navbar-bot navbar-fix" /></div>
            </div>
            </div>
            <div>
        {/* <Demo /> */}
        </div>
        </div> 
                
                <div>
                    <Form1/>
                
                </div>
                <div>
                    <Body />
                    <LowerBody />
                </div>
                <Footer></Footer>
            </div>
         );
    }
}
 
export default trangchu;