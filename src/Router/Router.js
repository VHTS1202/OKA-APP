import React, { Component } from 'react'
import { BrowserRouter, Route, Link, NavLink, Switch, Router } from "react-router-dom";
import trangchu from '../Page/TrangChu';
import Muavebay1 from '../components/DatVeMayBay/Muavemaybay'
import Form1 from '../components/DatVeMayBay/Form1'
import DangNhap5 from '../components/Navbar/Admin'
import AdminLogin from '../components/Navbar/AdminLogin';
import Admin from '../components/Navbar/Admin';





const Routerapp = () => {
        return ( 
                
                <div>
                        <BrowserRouter>                  
                                <Route path="/Home" exact component={trangchu} />
                                <Route path="/" exact component={trangchu} />
                                <Route path="/Admin" exact component={Admin} />
                                
                                <Route path="/Muavebay1" exact component={Muavebay1} />  
                                
                                
                                

                        </BrowserRouter>
                        
                </div>
         );
    }

 
export default Routerapp;