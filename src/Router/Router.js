import React, { Component } from 'react'
import { BrowserRouter, Route, Link, NavLink, Switch, Router } from "react-router-dom";
import trangchu from '../Page/TrangChu';
import Muavebay1 from '../components/DatVeMayBay/Muavemaybay'
import Form1 from '../components/DatVeMayBay/Form1'

const Routerapp = () => {
        return ( 
                <div>
                        <BrowserRouter>                  
                                <Route path="/Home" component={trangchu} />
                                <Route path="/" component={trangchu} />
                                
                                <Route path="/Muavebay1" component={Muavebay1} />    
                                

                        </BrowserRouter>
                        
                </div>
         );
    }

 
export default Routerapp;