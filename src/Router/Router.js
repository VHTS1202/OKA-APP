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
import TroGiup from '../Page/TroGiup/TroGiup';
import LienHe from '../Page/LienHe/LienHe';





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
                                
                                {/* <Route path='/TaiKhoan' exact component={TaiKhoan} /> */}
                                <Route path='/TaiKhoan'  component={TrangKhachHang} />
                                <Switch path='/TaiKhoan/ThongBaoMayBay'  component={ThongBaoVeMayBay} />
                                <Switch path='/TaiKhoan/PassengerQuickPick'  component={PassengerQP} />
                                <Switch path='/TaiKhoan/LichSuGiaoDich'  component={LichSuGD} />
                                <Switch path='/TaiKhoan/DiemThuong'  component={DiemThuong} />
                                
                                <Route path='/TroGiup' exact component={TroGiup} />
                                <Route path='/LienHe' exact component={LienHe} />
                                
                                
                                

                                
                                
                                
                                

                                
                                
                                

                        </BrowserRouter>
                        
                </div>
         );
    }

 
export default Routerapp;