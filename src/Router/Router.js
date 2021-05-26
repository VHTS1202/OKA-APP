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

const Routerapp = () => {
        return ( 
                <div>
                        <BrowserRouter>                  
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
                </div>
         );
    }

 
export default Routerapp;