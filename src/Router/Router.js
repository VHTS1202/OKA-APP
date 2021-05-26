<<<<<<< HEAD
import React, { Component } from 'react'
import { BrowserRouter, Route, Link, NavLink, Switch, Router } from "react-router-dom";
import trangchu from '../Page/TrangChu';
import Muavebay1 from '../components/DatVeMayBay/Muavemaybay';
import Form1 from '../components/DatVeMayBay/Form1';
import DCCTTatCaSanPham from '../Page/TruocDangNhap/DatChoCuaToi/TatCaSanPham/TatCaSanPham';
import DCCTVeMayBay from '../Page/TruocDangNhap/DatChoCuaToi/VeMayBay/VeMayBay';
import DCCTKhachSan from '../Page/TruocDangNhap/DatChoCuaToi/KhachSan/KhachSan';
import DangKy from '../components/Navbar/DangKy';
import TrangCaNhan from '../components/TrangCaNhan/TrangCaNhan';
=======
import React from 'react'
import { BrowserRouter, Route} from "react-router-dom";
import Trangchu from '../Page/TrangChu';
import Muavebay1 from '../components/DatVeMayBay/Muavemaybay'
import DangKy from '../components/Navbar/DangKy';
import LoginPage from '../components/Navbar/LoginPage';
import Home2 from '../components/HomeLogin/Home2';
import Profile from '../components/HomeLogin/Profile';




>>>>>>> 261d63a296f41239006b129f8f02c646605efa72

const Routerapp = () => {
        return ( 
                
                <div>
                        <BrowserRouter>                  
<<<<<<< HEAD
                                <Route path="/Home" component={trangchu} />
                                <Route path="/" exact component={trangchu} />
                                <Route path="/DatChoCuaToi" component={DCCTTatCaSanPham} />
                                <Route path="/DatChoCuaToi/TatCaSanPham" component={DCCTTatCaSanPham} />
                                <Route path="/DatChoCuaToi/VeMayBay" component={DCCTVeMayBay} />
                                <Route path="/DatChoCuaToi/KhachSan" component={DCCTKhachSan} />
                                <Route path="/Muavebay1" component={Muavebay1} />  
                                <Route path="/DangKy" component={DangKy} />  
                                <Route path="/TrangCaNhan" component={TrangCaNhan} />
                        </BrowserRouter>                        
=======
                                <Route path="/TrangChu" exact component={Trangchu} />
                                <Route path="/" exact component={Trangchu} />
                                
                                
                                <Route path="/Muavebay1" exact component={Muavebay1} />  
                                <Route path='/DangKy' exact component={DangKy} />
                                <Route path='/DangNhap' exact component={LoginPage} />
                                <Route path='/Home' exact component={Home2} />
                                <Route path='/Profile' exact component={Profile} />

                                
                                
                                

                        </BrowserRouter>
                        
>>>>>>> 261d63a296f41239006b129f8f02c646605efa72
                </div>
         );
    }

 
export default Routerapp;