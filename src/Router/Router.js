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
import Trangchu from '../Page/TrangChu';
import LoginPage from '../components/Navbar/LoginPage';
import Home2 from '../components/HomeLogin/Home2';
import Profile from '../components/HomeLogin/Profile';
import AdminLogin from '../components/Navbar/AdminLogin'
import TaiKhoan from '../components/HomeLogin/ProfileUser/TaiKhoan';
import TrangKhachHang from '../components/HomeLogin/ProfileUser/UserProfile';
import ThongBaoVeMayBay from '../components/HomeLogin/ProfileUser/ThongBaoVeMayBay';
import PassengerQP from '../components/HomeLogin/ProfileUser/PassengerQP';
import LichSuGD from '../components/HomeLogin/ProfileUser/LichSuGD';
import DiemThuong from '../components/HomeLogin/ProfileUser/DiemThuong';





const Routerapp = () => {
        return ( 
                
                <div>
                        <BrowserRouter>                  
                                <Route path="/TrangChu" component={trangchu} />
                                <Route path="/" exact component={trangchu} />
                                <Route path="/DatChoCuaToi/TatCaSanPham" component={DCCTTatCaSanPham} />
                                <Route path="/DatChoCuaToi/VeMayBay" component={DCCTVeMayBay} />
                                <Route path="/DatChoCuaToi/KhachSan" component={DCCTKhachSan} />
                                <Route path="/Muavebay1" component={Muavebay1} />  
                                <Route path="/DangKy" component={DangKy} />  
                                <Route path="/TrangCaNhan" component={TrangCaNhan} />                        
                                <Route path='/Admin' exact component={AdminLogin} />
                                <Route path='/DangNhap' exact component={LoginPage} />
                                <Route path='/Home' exact component={Home2} />
                                
                                <Route path='/TaiKhoan' exact component={TaiKhoan} />
                                <Route path='/Profile' exact component={TrangKhachHang} />
                                <Route path='/ThongBaoMayBay' exact component={TaiKhoan} />
                                <Route path='/PassengerQuickPick' exact component={PassengerQP} />
                                <Route path='/LichSuGiaoDich' exact component={LichSuGD} />
                                <Route path='/DiemThuong' exact component={DiemThuong} />
                                

                                
                                
                                
                                

                                
                                
                                

                        </BrowserRouter>
                        
                </div>
         );
    }

 
export default Routerapp;