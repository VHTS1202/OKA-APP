import React from 'react'
import NavbarMenu2 from '../../Navbar/navbar-bot'
import TrangCaNhan from '../../TrangCaNhan/TrangCaNhan'
import NavbarLogin from '../navbarLogin'
import './TaiKhoan.css'
import UserProfile from './UserProfile'

export default function TaiKhoan() {
    return (
        <>
        <div className='form'>
            <NavbarLogin />
            <NavbarMenu2/>
            
            <div className="menubar">
            <TrangCaNhan />
            
            </div>
            <div>
            <UserProfile />
            </div>
            </div>
        </>
    )
}
