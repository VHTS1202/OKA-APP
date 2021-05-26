import React from 'react'
import { BrowserRouter, Route} from "react-router-dom";
import Trangchu from '../Page/TrangChu';
import Muavebay1 from '../components/DatVeMayBay/Muavemaybay'
import DangKy from '../components/Navbar/DangKy';
import LoginPage from '../components/Navbar/LoginPage';
import Home2 from '../components/HomeLogin/Home2';
import Profile from '../components/HomeLogin/Profile';





const Routerapp = () => {
        return ( 
                
                <div>
                        <BrowserRouter>                  
                                <Route path="/TrangChu" exact component={Trangchu} />
                                <Route path="/" exact component={Trangchu} />
                                
                                
                                <Route path="/Muavebay1" exact component={Muavebay1} />  
                                <Route path='/DangKy' exact component={DangKy} />
                                <Route path='/DangNhap' exact component={LoginPage} />
                                <Route path='/Home' exact component={Home2} />
                                <Route path='/Profile' exact component={Profile} />

                                
                                
                                

                        </BrowserRouter>
                        
                </div>
         );
    }

 
export default Routerapp;