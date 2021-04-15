import React, { Component } from 'react';
import Form1 from '../components/DatVeMayBay/Form1';
import Header1 from '../components/Header/Header';
import Muavebay1 from '../components/DatVeMayBay/Muavemaybay';
import 'antd/dist/antd.css';


class trangchu extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div>
                    <Header1 />
                    
                </div>
                
                <div>
                    <Form1/>
                
                </div>
            </div>
         );
    }
}
 
export default trangchu;